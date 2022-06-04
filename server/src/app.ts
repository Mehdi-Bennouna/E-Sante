import Fastify from 'fastify';
import logger from './utils/logger';
import 'dotenv/config';
import userRoutes from './modules/user/user.routes';
import { userSchemas } from './modules/user/user.schemas';

const port = process.env.PORT;

export const server = Fastify();

server.get('/healthcheck', async function () {
    return { status: 'OK' };
});

server.register(userRoutes, { prefix: 'api/users' });

async function main() {
    for (const schema of userSchemas) {
        server.addSchema(schema);
    }

    try {
        await server.listen(port, '0.0.0.0');
        logger.info(`Server ready at http://localhost:${port}`);
    } catch (e) {
        logger.error(e);
    }
}

main();
