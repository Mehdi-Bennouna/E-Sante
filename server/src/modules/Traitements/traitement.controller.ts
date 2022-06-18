import { FastifyReply, FastifyRequest } from "fastify";
import { getTraitements } from "./traitement.service";

export async function getTraitementsHandler(
    request: FastifyRequest<{ Params: any }>,
    reply: FastifyReply,
) {
    const traitements = await getTraitements(request.params.id);
    return traitements;
}
