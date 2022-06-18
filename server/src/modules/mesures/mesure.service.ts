import prisma from "../../utils/prisma";

export async function getMesures(patientId: string) {
    const mesures = await prisma.mesures.findMany({
        where: { patientId },
        select: {
            fc: true,
            id: true,
            imc: true,
            pad: true,
            pas: true,
            tension: true,
            taille: true,
            poids: true,
            patient: true,
            createdAt: true,
        },
        orderBy: { createdAt: "desc" },
    });

    return mesures;
}
