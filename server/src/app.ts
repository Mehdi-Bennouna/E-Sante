import Fastify, { FastifyReply, FastifyRequest } from 'fastify';
import fjwt from '@fastify/jwt';
import swagger from 'fastify-swagger';
import { withRefResolver } from 'fastify-zod';
import logger from './utils/logger';
import 'dotenv/config';
import userRoutes from './modules/user/user.routes';
import { userSchemas } from './modules/user/user.schemas';

const port = process.env.PORT!;
const jwtSecret = process.env.JWTSECRET!;

export const server = Fastify();

server.register(fjwt, {
    secret: jwtSecret,
});

server.decorate(
    'authenticate',
    async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            await request.jwtVerify();
        } catch (e) {
            return reply.send(e);
        }
    },
);

server.get('/healthcheck', async function () {
    return { status: 'OK' };
});

async function main() {
    for (const schema of userSchemas) {
        server.addSchema(schema);
    }

    server.register(userRoutes, { prefix: 'api/users' });

    try {
        await server.listen(port, '0.0.0.0');
        logger.info(`Server ready at http://localhost:${port}`);
    } catch (e) {
        logger.error(e);
    }
}

main();
