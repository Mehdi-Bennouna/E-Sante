import { FastifyReply, FastifyRequest } from "fastify";
import { getAntecedent, updateAntecedent } from "./antecedent.service";

export async function getAntecedentHandler(
    request: FastifyRequest<{ Params: any }>,
    reply: FastifyReply,
) {
    const antecedent = await getAntecedent(request.params.id);
    return antecedent;
}

export async function updateAntecedentHandler(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    const antecedent = await updateAntecedent(request.body);
}
