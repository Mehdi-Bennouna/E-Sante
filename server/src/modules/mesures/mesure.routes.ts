import { FastifyInstance } from "fastify";
import { getMesuresHandler } from "./mesure.controller";

async function mesureRoutes(server: FastifyInstance) {
    server.get("/:id", {}, getMesuresHandler);
}

export default mesureRoutes;
