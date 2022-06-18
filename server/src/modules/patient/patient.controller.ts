import { FastifyReply, FastifyRequest } from "fastify";
import {
    createPatient,
    deletePatient,
    getPatient,
    getPatientByInfo,
    getPatients,
    updatePatient,
} from "./patient.service";

export async function getPatientsHandler(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    const patients = await getPatients();
    return patients;
}

export async function getPatientHandler(
    request: FastifyRequest<{ Params: any }>,
    reply: FastifyReply,
) {
    const patient = await getPatient(request.params.id);

    return patient;
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

export async function createPatientHandler(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    return createPatient(request.body);
}

export async function updatePatientHandler(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    return updatePatient(request.body);
}