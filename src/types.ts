import { UserRole } from '@prisma/client';

export type AuthUser = {
  id: number;
  email: string;
  role: UserRole;
};

export type AuthenticatedRequest = Express.Request & {
  user?: AuthUser;
};
