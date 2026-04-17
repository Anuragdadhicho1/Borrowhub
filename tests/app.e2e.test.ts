import 'dotenv/config';
import path from 'path';

process.env.DATABASE_URL = process.env.DATABASE_URL || `file:${path.resolve('prisma/dev.db')}`;
process.env.JWT_SECRET = process.env.JWT_SECRET || 'test-secret-value-12345';
process.env.PORT = process.env.PORT || '4001';
process.env.RATE_LIMIT_MAX_REQUESTS = process.env.RATE_LIMIT_MAX_REQUESTS || '1000';

import request from 'supertest';
import { beforeAll, describe, expect, it } from 'vitest';
import { app } from '../src/app';
import { prisma } from '../src/lib/prisma';

describe('Borrowhub e2e flows', () => {
  let userToken = '';
  let adminToken = '';

  beforeAll(async () => {
    await prisma.borrowRequest.deleteMany();
    await prisma.listing.deleteMany();
    await prisma.user.deleteMany({ where: { email: { in: ['admin@test.local', 'user@test.local'] } } });
  });

  it('registers users, creates listing, borrows and returns item, and fetches admin overview', async () => {
    const adminRegister = await request(app).post('/api/auth/register').send({
      name: 'Admin',
      email: 'admin@test.local',
      password: 'password123'
    });
    expect(adminRegister.status).toBe(201);

    await prisma.user.update({
      where: { email: 'admin@test.local' },
      data: { role: 'ADMIN' }
    });

    const userRegister = await request(app).post('/api/auth/register').send({
      name: 'User',
      email: 'user@test.local',
      password: 'password123'
    });
    expect(userRegister.status).toBe(201);

    const adminLogin = await request(app).post('/api/auth/login').send({
      email: 'admin@test.local',
      password: 'password123'
    });
    expect(adminLogin.status).toBe(200);
    adminToken = adminLogin.body.token;

    const userLogin = await request(app).post('/api/auth/login').send({
      email: 'user@test.local',
      password: 'password123'
    });
    expect(userLogin.status).toBe(200);
    userToken = userLogin.body.token;

    const listingCreate = await request(app)
      .post('/api/listings')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        title: 'Macbook Pro',
        description: 'Laptop for design projects',
        availableQuantity: 1
      });

    expect(listingCreate.status).toBe(201);

    const borrow = await request(app)
      .post(`/api/borrow/${listingCreate.body.id}`)
      .set('Authorization', `Bearer ${userToken}`)
      .send();

    expect(borrow.status).toBe(201);
    expect(borrow.body.status).toBe('ACTIVE');

    const dashboard = await request(app)
      .get('/api/dashboard/me')
      .set('Authorization', `Bearer ${userToken}`);

    expect(dashboard.status).toBe(200);
    expect(dashboard.body.borrows.length).toBe(1);

    const returned = await request(app)
      .post(`/api/borrow/${borrow.body.id}/return`)
      .set('Authorization', `Bearer ${userToken}`)
      .send();

    expect(returned.status).toBe(200);
    expect(returned.body.status).toBe('RETURNED');

    const overview = await request(app)
      .get('/api/admin/overview')
      .set('Authorization', `Bearer ${adminToken}`);

    expect(overview.status).toBe(200);
    expect(overview.body.users).toBeGreaterThanOrEqual(2);
  });
});
