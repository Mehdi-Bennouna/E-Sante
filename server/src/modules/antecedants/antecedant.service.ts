import prisma from "../../utils/prisma";

export async function getAntecedant(patientId: string) {
    const antecedant = await prisma.antecedants.findUnique({
        where: { patientId },
        select: {
            alergies: true,
            chroniques: true,
            familiaux: true,
            intolerences: true,
            patient: true,
            patientId: true,
        },
    });

    return antecedant;
}
