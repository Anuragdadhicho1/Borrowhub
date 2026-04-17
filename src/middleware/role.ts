import { NextFunction, Response } from 'express';
import { UserRole } from '@prisma/client';
import { HttpError } from '../errors';
import { AuthenticatedRequest } from '../types';

export function requireRole(...roles: UserRole[]) {
  return (req: AuthenticatedRequest, _res: Response, next: NextFunction) => {
    if (!req.user) {
      throw new HttpError(401, 'Unauthorized');
    }

    if (!roles.includes(req.user.role)) {
      throw new HttpError(403, 'Forbidden');
    }

    next();
  };
}
