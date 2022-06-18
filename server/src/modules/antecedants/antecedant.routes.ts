import { FastifyInstance } from "fastify";
import { getAntecedantHandler } from "./antecedant.controller";

async function antecedantRoutes(server: FastifyInstance) {
    server.get("/:id", {}, getAntecedantHandler);
}

export default antecedantRoutes;
