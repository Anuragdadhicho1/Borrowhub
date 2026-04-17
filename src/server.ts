import { app } from './app';
import { env } from './config/env';
import { logger } from './lib/logger';

app.listen(env.PORT, () => {
  logger.info(`Borrowhub API running on port ${env.PORT}`);
});
