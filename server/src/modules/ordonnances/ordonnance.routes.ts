import { FastifyInstance } from "fastify";
import { createOrdonnanceHandler } from "./ordonnance.controller";

async function ordonnanceRoutes(server: FastifyInstance) {
    server.post("/", {}, createOrdonnanceHandler);
}

export default ordonnanceRoutes;
