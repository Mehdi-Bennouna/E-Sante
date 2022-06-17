import { FastifyInstance } from "fastify";
import {
    createPatientHandler,
    deletePatientHandler,
    getPatientsHandler,
    updatePatientHandler,
} from "./patient.controller";

async function patientRoutes(server: FastifyInstance) {
    server.get("/", {}, getPatientsHandler);

    server.post("/", {}, createPatientHandler);

    server.put("/", {}, updatePatientHandler);

    server.delete("/", {}, deletePatientHandler);
}

export default patientRoutes;
