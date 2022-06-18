import prisma from "../../utils/prisma";

export async function getAntecedent(patientId: string) {
    const antecedent = await prisma.antecedents.findUnique({
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

    return antecedent;
}

export async function updateAntecedent(data: any) {
    const antecedent = await prisma.antecedents.update({
        where: { patientId: data.patientId },
        data: data,
    });

    return antecedent;
}
