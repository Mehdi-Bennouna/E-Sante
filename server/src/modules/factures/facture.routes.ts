import { FastifyInstance } from "fastify";

async function factureRoutes(server: FastifyInstance) {
    server.post("/", {}, createFactureHandler);
}
