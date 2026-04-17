import { Router } from 'express';
import { BorrowStatus } from '@prisma/client';
import { HttpError } from '../errors';
import { prisma } from '../lib/prisma';
import { requireAuth } from '../middleware/auth';
import { AuthenticatedRequest } from '../types';

export const borrowsRouter = Router();

borrowsRouter.post('/:listingId', requireAuth, async (req: AuthenticatedRequest, res) => {
  const listingId = Number(req.params.listingId);
  if (Number.isNaN(listingId)) {
    throw new HttpError(400, 'Listing id must be a number');
  }

  const result = await prisma.$transaction(async (tx) => {
    const listing = await tx.listing.findUnique({ where: { id: listingId } });
    if (!listing) {
      throw new HttpError(404, 'Listing not found');
    }

    const activeBorrowCount = await tx.borrowRequest.count({
      where: {
        listingId,
        status: BorrowStatus.ACTIVE
      }
    });

    if (activeBorrowCount >= listing.availableQuantity) {
      throw new HttpError(409, 'No inventory available for this listing');
    }

    return tx.borrowRequest.create({
      data: {
        listingId,
        userId: req.user!.id,
        status: BorrowStatus.ACTIVE
      }
    });
  });

  return res.status(201).json(result);
});

borrowsRouter.post('/:borrowId/return', requireAuth, async (req: AuthenticatedRequest, res) => {
  const borrowId = Number(req.params.borrowId);
  if (Number.isNaN(borrowId)) {
    throw new HttpError(400, 'Borrow id must be a number');
  }

  const borrow = await prisma.borrowRequest.findUnique({ where: { id: borrowId } });
  if (!borrow) {
    throw new HttpError(404, 'Borrow record not found');
  }

  if (borrow.userId !== req.user!.id) {
    throw new HttpError(403, 'You can only return your own borrow records');
  }

  if (borrow.status === BorrowStatus.RETURNED) {
    throw new HttpError(409, 'Borrow already returned');
  }

  const updated = await prisma.borrowRequest.update({
    where: { id: borrowId },
    data: {
      status: BorrowStatus.RETURNED,
      returnedAt: new Date()
    }
  });

  return res.json(updated);
});
