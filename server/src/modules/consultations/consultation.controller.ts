import { FastifyReply, FastifyRequest } from "fastify";
import { createConsultation } from "./consultation.service";

export async function createConsultationHandler(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    const consultation = await createConsultation(request.body);
    return consultation;
}
