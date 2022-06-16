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
            RendezVous: { select: { heure: true }, orderBy: { heure: "desc" } },
        },
    });
}

export function getPatientByInfo(nom: string, prenom: string) {
    return prisma.patient.findFirst({ where: { nom, prenom } });
}

export function deletePatient(id: string) {
    return prisma.patient.delete({ where: { id } });
}
