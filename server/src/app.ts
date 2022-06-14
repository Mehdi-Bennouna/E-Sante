import Fastify, { FastifyReply, FastifyRequest } from 'fastify';
import fjwt from '@fastify/jwt';
import cors from "fastify-cors";
import swagger from "fastify-swagger";
import { withRefResolver } from "fastify-zod";
import logger from "./utils/logger";
import "dotenv/config";
import userRoutes from "./modules/user/user.routes";
import { userSchemas } from "./modules/user/user.schemas";

const port = parseInt(process.env.PORT!);
const jwtSecret = process.env.JWTSECRET!;

export const server = Fastify();

server.register(cors);
server.register(fjwt, {
    secret: jwtSecret,
});

server.decorate(
    "authenticate",
    async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            await request.jwtVerify();
        } catch (e) {
            return reply.send(e);
        }
    },
);

server.get("/healthcheck", async function () {
    return { status: "OK" };
});

async function main() {
    for (const schema of userSchemas) {
        server.addSchema(schema);
    }

    server.register(
        swagger,
        withRefResolver({
            routePrefix: "/docs",
            hideUntagged: true,
            exposeRoute: true,
            staticCSP: true,
            uiConfig: {
                docExpansion: "full",
                layout: "BaseLayout",
            },
            openapi: {
                info: {
                    title: "E!Sante",
                    description: "API pour la gestion de l'application E!Santé",
                    version: "1.0.0",
                },
            },
        }),
    );

    server.register(userRoutes, { prefix: "api/users" });

    try {
        await server.listen({ port: port });
        logger.info(`Server ready at http://localhost:${port}`);
    } catch (e) {
        logger.error(e);
    }
}

main();
