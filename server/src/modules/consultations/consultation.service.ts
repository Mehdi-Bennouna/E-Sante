import prisma from "../../utils/prisma";

export async function createConsultation(input: any) {
    const consultation = await prisma.consultation.create({
        data: { commentaire: input.commentaire, patientId: input.patientId },
    });

    return consultation;
}
