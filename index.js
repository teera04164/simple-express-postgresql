const logger = require('./src/utils/logger');
const server = require('./src/server');

const startup = async () => {
    logger.info('Starting application');
    try {

        await server.initialize();
        logger.info('Initializing web server all module');

    } catch (err) {
        logger.error('startup exception', err);
        process.exit(1); // Non-zero failure code
    }
}

const shutdown = async (e) => {
    let err = e;
    logger.info('Shutting down');
    try {
        if (server) {
            await server.close();
            logger.info('Closing web server module');
        }

    } catch (e) {
        logger.info('Encountered error', e);
        err = err || e;
    }

    if (err) {
        logger.info('Exiting process with exception : ' + err.message);
        process.exit(1); // Non-zero failure code
    } else {
        logger.info('Exiting process without exception');
        process.exit(0);
    }
}

process.on('SIGTERM', () => {
    logger.info('Received SIGTERM');
    shutdown();
});

process.on('SIGINT', () => {
    logger.info('Received SIGINT');
    shutdown();
});

process.on('uncaughtException', err => {
    logger.error('Uncaught exception', err);
    shutdown(err);
});

startup();
