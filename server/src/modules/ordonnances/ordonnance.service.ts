import prisma from "../../utils/prisma";

export async function createOrdonnance(input: any) {
    const ordonnance = await prisma.ordonnance.create({
        data: { data: input.data, consultationId: input.consultationId },
    });

    return ordonnance;
}
