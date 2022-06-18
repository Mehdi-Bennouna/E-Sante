import prisma from "../../utils/prisma";

export async function getTraitements(id: string) {
    const traitements = await prisma.traitement.findMany({
        where: { patientId: id },
    });

    return traitements;
}
