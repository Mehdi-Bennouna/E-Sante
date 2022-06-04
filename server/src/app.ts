import Fastify from 'fastify';
import logger from './utils/logger';
import 'dotenv/config';

const port = process.env.PORT;

export const server = Fastify();

server.get('/healthcheck', async function () {
    return { status: 'OK' };
});

async function main() {
    try {
        await server.listen(port, '0.0.0.0');
        logger.info(`Server ready at http://localhost:${port}`);
    } catch (e) {
        logger.error(e);
    }
}

main();
