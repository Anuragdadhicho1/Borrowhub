import { Request } from 'express';
import { UserRole } from '@prisma/client';

export type AuthUser = {
  id: number;
  email: string;
  role: UserRole;
};

export type AuthenticatedRequest = Request & {
  user?: AuthUser;
};
