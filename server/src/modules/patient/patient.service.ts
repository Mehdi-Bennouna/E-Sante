import prisma from "../../utils/prisma";

export function getPatients() {
    return prisma.patient.findMany({
        select: {
            id: true,
            nom: true,
            prenom: true,
            ddn: true,
            sexe: true,
            tel: true,
            RendezVous: { select: { date: true }, orderBy: { date: "desc" } },
        },
    });
}

export async function getPatientByInfo(nom: string, prenom: string) {
    return await prisma.patient.findFirst({ where: { nom, prenom } });
}

export async function deletePatient(id: string) {
    return await prisma.patient.delete({ where: { id } });
}

export async function createPatient(data: any) {
    return await prisma.patient.create({ data: data });
}

export async function updatePatient(data: any) {
    const patient = await prisma.patient.findFirst({
        where: { nom: data.old.nom, prenom: data.old.prenom },
    });

    return prisma.patient.update({
        where: { id: patient!.id },
        data: data.new,
    });
}