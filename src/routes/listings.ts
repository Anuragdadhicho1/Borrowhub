import { Router } from 'express';
import { UserRole } from '@prisma/client';
import { z } from 'zod';
import { HttpError } from '../errors';
import { prisma } from '../lib/prisma';
import { requireAuth } from '../middleware/auth';
import { requireRole } from '../middleware/role';
import { validateBody } from '../middleware/validate';

const createListingSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(5),
  availableQuantity: z.number().int().min(1).max(100)
});

const updateListingSchema = z.object({
  title: z.string().min(2).optional(),
  description: z.string().min(5).optional(),
  availableQuantity: z.number().int().min(1).max(100).optional()
});

export const listingsRouter = Router();

listingsRouter.get('/', async (_req, res) => {
  const listings = await prisma.listing.findMany({ orderBy: { createdAt: 'desc' } });
  return res.json(listings);
});

listingsRouter.post(
  '/',
  requireAuth,
  requireRole(UserRole.ADMIN),
  validateBody(createListingSchema),
  async (req, res) => {
    const listing = await prisma.listing.create({ data: req.body });
    return res.status(201).json(listing);
  }
);

listingsRouter.patch(
  '/:id',
  requireAuth,
  requireRole(UserRole.ADMIN),
  validateBody(updateListingSchema),
  async (req, res) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      throw new HttpError(400, 'Listing id must be a number');
    }

    const listing = await prisma.listing.update({
      where: { id },
      data: req.body
    });

    return res.json(listing);
  }
);
