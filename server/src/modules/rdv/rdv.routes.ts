import { FastifyInstance } from "fastify";
import {
    createRdvHandler,
    deleteRdvHandler,
    getRdvsHandler,
    updateRdvHandler,
} from "./rdv.controller";

async function rdvRoutes(server: FastifyInstance) {
    server.get("/", {}, getRdvsHandler);

    server.post("/", {}, createRdvHandler);

    server.delete("/", {}, deleteRdvHandler);

    server.put("/", {}, updateRdvHandler);
}


export default rdvRoutes;
