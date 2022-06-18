import { FastifyInstance } from "fastify";
import {
    createPatientHandler,
    deletePatientHandler,
    getPatientHandler,
    getPatientsHandler,
    updatePatientHandler,
} from "./patient.controller";

async function patientRoutes(server: FastifyInstance) {
    server.get("/", {}, getPatientsHandler);

    server.get("/:id", {}, getPatientHandler);

    server.post("/", {}, createPatientHandler);

    server.put("/", {}, updatePatientHandler);

    server.delete("/", {}, deletePatientHandler);
}

export default patientRoutes;
