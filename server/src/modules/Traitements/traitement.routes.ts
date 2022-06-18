import { FastifyInstance } from "fastify";
import { getTraitementsHandler } from "./traitement.controller";

async function traitementRoutes(server: FastifyInstance) {
    server.get("/:id", {}, getTraitementsHandler);
}

export default traitementRoutes;
