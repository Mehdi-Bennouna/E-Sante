import prisma from "../../utils/prisma";

export async function getRdvs() {
    return await prisma.rendezVous.findMany({
        select: {
            id: true,
            patient: true,
            patientId: true,
            date: true,
            motif: true,
        },
    });
}

export async function createRdv(data: any) {
    return await prisma.rendezVous.create({ data: data });
}

export async function deleteRdv(id: any) {
    return await prisma.rendezVous.delete({ where: { id } });
}

export async function updateRdv(data: any) {
    const rdv = await prisma.rendezVous.findFirst({
        where: { id: data.old.id },
    });

    return prisma.rendezVous.update({
        where: { id: rdv!.id },
        data: data.new,
    });
}