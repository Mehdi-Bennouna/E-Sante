import { FastifyReply, FastifyRequest } from "fastify";
import { createOrdonnance } from "./ordonnance.service";

export async function createOrdonnanceHandler(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    const ordonnance = await createOrdonnance(request.body);
    return ordonnance;
}
