import { FastifyReply, FastifyRequest } from "fastify";
import prisma from "../../utils/prisma";
import { createRdv, deleteRdv, getRdvs, updateRdv } from "./rdv.service";

export async function getRdvsHandler(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    const rdvs = await getRdvs();
    return rdvs;
}

export async function createRdvHandler(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    const rdv = await createRdv(request.body);
    return rdv;
}

export async function deleteRdvHandler(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
) {
    const rdv = await deleteRdv(request.body.id);
    return rdv;
}

export async function updateRdvHandler(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    const rdv = await updateRdv(request.body);
    return rdv;
}