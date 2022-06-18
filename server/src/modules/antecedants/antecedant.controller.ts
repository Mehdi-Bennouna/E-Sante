import { FastifyReply, FastifyRequest } from "fastify";
import { getAntecedant } from "./antecedant.service";

export async function getAntecedantHandler(
    request: FastifyRequest<{ Params: any }>,
    reply: FastifyReply,
) {
    const antecedant = await getAntecedant(request.params.id);
    return antecedant;
}
