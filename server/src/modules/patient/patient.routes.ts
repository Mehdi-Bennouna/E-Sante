import { FastifyInstance } from "fastify";
import { deletePatientHandler, getPatientsHandler } from "./patient.controller";

async function patientRoutes(server: FastifyInstance) {
    server.get("/", {}, getPatientsHandler);

    server.delete("/", {}, deletePatientHandler);
}

export default patientRoutes;
