import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';
import { HttpError } from '../errors';
import { AuthenticatedRequest, AuthUser } from '../types';

export function requireAuth(req: AuthenticatedRequest, _res: Response, next: NextFunction) {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader?.startsWith('Bearer ')) {
    throw new HttpError(401, 'Authorization token is required');
  }

  const token = authorizationHeader.replace('Bearer ', '').trim();
  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as AuthUser;
    req.user = decoded;
    next();
  } catch {
    throw new HttpError(401, 'Invalid or expired token');
  }
}
