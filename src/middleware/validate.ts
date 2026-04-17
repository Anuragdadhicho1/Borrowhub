import { NextFunction, Response } from 'express';
import { ZodError, ZodType } from 'zod';
import { HttpError } from '../errors';
import { AuthenticatedRequest } from '../types';

export function validateBody(schema: ZodType) {
  return (req: AuthenticatedRequest, _res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        throw new HttpError(400, error.issues.map((issue) => issue.message).join(', '));
      }
      throw error;
    }
  };
}
