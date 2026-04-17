import { Router } from 'express';
import { BorrowStatus, UserRole } from '@prisma/client';
import { prisma } from '../lib/prisma';
import { requireAuth } from '../middleware/auth';
import { requireRole } from '../middleware/role';

export const adminRouter = Router();

adminRouter.use(requireAuth, requireRole(UserRole.ADMIN));

adminRouter.get('/overview', async (_req, res) => {
  const [users, listings, activeBorrows, completedBorrows] = await Promise.all([
    prisma.user.count(),
    prisma.listing.count(),
    prisma.borrowRequest.count({ where: { status: BorrowStatus.ACTIVE } }),
    prisma.borrowRequest.count({ where: { status: BorrowStatus.RETURNED } })
  ]);

  return res.json({ users, listings, activeBorrows, completedBorrows });
});

adminRouter.get('/borrows', async (_req, res) => {
  const borrows = await prisma.borrowRequest.findMany({
    include: {
      user: { select: { id: true, name: true, email: true } },
      listing: { select: { id: true, title: true } }
    },
    orderBy: { borrowedAt: 'desc' }
  });

  return res.json(borrows);
});
