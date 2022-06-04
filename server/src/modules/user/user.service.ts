import bcrypt from 'bcrypt';
import prisma from '../../utils/prisma';
import { CreateUserInput } from './user.schemas';

export async function createUser(input: CreateUserInput) {
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(input.password, salt);

    const user = await prisma.user.create({
        data: {
            username: input.username,
            type: input.type,
            password: password,
        },
    });

    return user;
}
