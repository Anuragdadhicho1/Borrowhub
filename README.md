# Borrowhub

Borrowhub is a production-ready borrowing platform API with authentication, listings, borrowing flows, user dashboards, and admin operations.

## Features

- JWT authentication with role-based authorization (`USER`, `ADMIN`)
- Listings management (public read, admin create/update)
- Borrow and return flows with inventory checks
- User dashboard for personal borrow history
- Admin overview and borrow reporting
- SQLite + Prisma data layer with migrations and seed data
- Security basics: Helmet headers, rate limiting, input validation, hashed passwords
- CI workflow with lint, build, and test checks
- End-to-end tests covering core user journeys

## Stack

- Node.js + TypeScript + Express
- Prisma ORM + SQLite
- Vitest + Supertest
- GitHub Actions CI

## Quick start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create environment file:

   ```bash
   cp .env.example .env
   ```

3. Apply migrations and generate client:

   ```bash
   npx prisma migrate dev --name init
   npm run prisma:generate
   ```

4. Seed default data:

   ```bash
   npm run prisma:seed
   ```

5. Start in development:

   ```bash
   npm run dev
   ```

API will run at `http://localhost:4000`.

## Default seeded accounts

- Admin: `admin@borrowhub.local` / `admin1234`
- User: `user@borrowhub.local` / `user12345`

## Quality checks

```bash
npm run lint
npm run build
npm run test
```

## Deploy and go live

1. Provision Node.js hosting (Render/Railway/AWS ECS/Fly.io).
2. Set environment variables from `.env.example` with a strong `JWT_SECRET`.
3. Run startup commands:
   - `npm ci`
   - `npx prisma migrate deploy`
   - `npm run build`
   - `npm run start`
4. Attach custom domain and enforce HTTPS/SSL at the platform level.
5. Use `/health` for uptime checks.

## Operations checklist

- Enable platform logs and alerting for error spikes.
- Back up the database regularly.
- Rotate JWT secrets and admin credentials.
- Keep dependencies updated and rerun CI on each change.
