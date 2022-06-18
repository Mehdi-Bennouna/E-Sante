import { FastifyInstance } from "fastify";
import {
    getAntecedentHandler,
    updateAntecedentHandler,
} from "./antecedent.controller";

async function antecedentRoutes(server: FastifyInstance) {
    server.get("/:id", {}, getAntecedentHandler);

    server.put("/", {}, updateAntecedentHandler);
}

export default antecedentRoutes;
