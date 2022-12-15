// eslint-disable node/prefer-global/process
import { init } from './init';
import { logger } from './logger';

process.on('SIGTERM', () => {
  logger.info('Got a SIGTERM, exiting');
  process.exit(1);
});

init().catch((error) => {
  logger.error('There was an unexpected error executing the program', error);
});