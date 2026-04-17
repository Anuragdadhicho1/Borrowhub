import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../errors';
import { logger } from '../lib/logger';

export function errorHandler(error: Error, _req: Request, res: Response, _next: NextFunction) {
  if (error instanceof HttpError) {
    return res.status(error.statusCode).json({ error: error.message });
  }

  logger.error({ err: error }, 'Unhandled application error');
  return res.status(500).json({ error: 'Internal server error' });
}
