import { Router } from 'express';
import { adminRouter } from './admin';
import { authRouter } from './auth';
import { borrowsRouter } from './borrows';
import { dashboardRouter } from './dashboard';
import { listingsRouter } from './listings';

export const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/listings', listingsRouter);
apiRouter.use('/borrow', borrowsRouter);
apiRouter.use('/dashboard', dashboardRouter);
apiRouter.use('/admin', adminRouter);
