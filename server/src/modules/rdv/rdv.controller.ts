import { FastifyReply, FastifyRequest } from "fastify";
import prisma from "../../utils/prisma";
import { getRdvs } from "./rdv.service";

export async function getRdvsHandler(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    const rdvs = await getRdvs();
    return rdvs;
}
