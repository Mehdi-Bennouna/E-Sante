import bcrypt from 'bcrypt';
import prisma from '../../utils/prisma';
import { CreateUserInput } from './user.schemas';

export async function createUser(input: CreateUserInput) {
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(input.password, salt);

    const user = await prisma.user.create({
        data: {
            username: input.username,
            password: password,
            nom: input.nom,
            prenom: input.prenom,
            type: input.type,
        },
    });

    return user;
}

export async function findUserByUsername(username: string) {
    return prisma.user.findUnique({ where: { username } });
}

export async function getUsers() {
    return prisma.user.findMany();
}

export async function updateUser(input: any) {
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(input.password, salt);

    return await prisma.user.update({
        where: { id: input.id },
        data: {
            nom: input.nom,
            password: password,
            prenom: input.prenom,
            type: input.type,
            username: input.username,
        },
    });
}

export async function getUser(id: string) {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
}

export async function deleteUser(id: string) {
    const user = await prisma.user.delete({ where: { id } });
    return user;
}