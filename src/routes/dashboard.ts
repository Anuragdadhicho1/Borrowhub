import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { requireAuth } from '../middleware/auth';
import { AuthenticatedRequest } from '../types';

export const dashboardRouter = Router();

dashboardRouter.get('/me', requireAuth, async (req: AuthenticatedRequest, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.id },
    include: {
      borrows: {
        include: {
          listing: true
        },
        orderBy: { borrowedAt: 'desc' }
      }
    }
  });

  return res.json(user);
});
