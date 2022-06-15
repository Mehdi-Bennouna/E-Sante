import { FastifyInstance } from "fastify";
import { getRdvsHandler } from "./rdv.controller";

async function rdvRoutes(server: FastifyInstance) {
    server.get("/", {}, getRdvsHandler);
}

export default rdvRoutes;
