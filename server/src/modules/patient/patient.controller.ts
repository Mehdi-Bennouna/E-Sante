import { FastifyReply, FastifyRequest } from "fastify";
import {
    deletePatient,
    getPatientByInfo,
    getPatients,
} from "./patient.service";

export async function getPatientsHandler(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    const patients = await getPatients();
    return patients;
}

export async function deletePatientHandler(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
) {
    const patient = await getPatientByInfo(
        request.body.nom,
        request.body.prenom,
    );
    if (patient) {
        return deletePatient(patient.id);
    }
}
