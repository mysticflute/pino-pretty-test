const logger = require('pino')();

console.log('pino-pretty test:');
console.log();

console.log(`actual log level: ${logger.level}`);
console.log();

logger.trace('trace message');
logger.debug('debug message');
logger.info('info message');
logger.error('error message');

