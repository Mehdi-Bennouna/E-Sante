import prisma from "../../utils/prisma";

export function getRdvs() {
    return prisma.rendezVous.findMany({
        select: {
            id: true,
            patient: true,
            patientId: true,
            heure: true,
            motif: true,
        },
    });
}
