import { FastifyReply, FastifyRequest } from "fastify";
import { getMesures } from "./mesure.service";

export async function getMesuresHandler(
    request: FastifyRequest<{ Params: any }>,
    reply: FastifyReply,
) {
    const mesures = await getMesures(request.params.id);
    return mesures;
}
