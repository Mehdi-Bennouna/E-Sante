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