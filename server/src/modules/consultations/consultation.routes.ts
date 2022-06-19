import { FastifyInstance } from "fastify";
import { createConsultationHandler } from "./consultation.controller";

async function consultationRoutes(server: FastifyInstance) {
    server.post("/", {}, createConsultationHandler);
}

export default consultationRoutes;
