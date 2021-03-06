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

export async function getPatient(id: string) {
    const patient = await prisma.patient.findUnique({
        where: { id },
        select: {
            nom: true,
            prenom: true,
            ddn: true,
            sexe: true,
            tel: true,
            email: true,
            addresse: true,
        },
    });
    return patient;
}

export async function getPatientByInfo(nom: string, prenom: string) {
    return await prisma.patient.findFirst({ where: { nom, prenom } });
}

export async function deletePatient(id: string) {
    return await prisma.patient.delete({ where: { id } });
}

export async function createPatient(data: any) {
    const patient = await prisma.patient.create({ data: data });
    await prisma.antecedents.create({
        data: {
            alergies: [],
            chroniques: [],
            familiaux: [],
            intolerences: [],
            patientId: patient.id,
        },
    });

    await prisma.mesures.create({
        data: {
            patientId: patient.id,
            fc: 0,
            imc: 0,
            pad: 0,
            pas: 0,
            poids: 0,
            taille: 0,
            tension: 0,
        },
    });

    return patient;
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
