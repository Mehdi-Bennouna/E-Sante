import { FastifyReply, FastifyRequest } from 'fastify';
import bcrypt from 'bcrypt';
import logger from '../../utils/logger';
import { CreateUserInput, LoginUserInput } from './user.schemas';
import { createUser, findUserByUsername } from './user.service';
import { server } from '../../app';

export async function registerUserHandler(
    request: FastifyRequest<{ Body: CreateUserInput }>,
    reply: FastifyReply,
) {
    const body = request.body;

    try {
        const user = await createUser(body);
        return reply.code(201).send(user);
    } catch (e) {
        logger.error(e);
        return reply.code(500).send(e);
    }
}

export async function loginUserHandler(
    request: FastifyRequest<{ Body: LoginUserInput }>,
    reply: FastifyReply,
) {
    const body = request.body;

    const user = await findUserByUsername(body.username);

    if (!user) {
        return reply
            .code(401)
            .send({ message: "invalid username or passowrds" });
    }

    const correctPassword = await bcrypt.compare(body.password, user.password);

    if (correctPassword) {
        return {
            userId: user.id,
            username: user.username,
            type: user.type,
            accessToken: server.jwt.sign({
                id: user.id,
                username: user.username,
                type: user.type,
            }),
        };
    }

    return reply.code(401).send({
        message: 'invalid username or password',
    });
}
