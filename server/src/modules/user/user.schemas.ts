import { UserType } from '@prisma/client';
import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

const createUserSchema = z.object({
    username: z.string({
        required_error: "'username' is required",
        invalid_type_error: 'username must be a string',
    }),

    password: z.string({
        required_error: "'password' is required",
        invalid_type_error: 'username must be a string',
    }),

    type: z.nativeEnum(UserType),
});

const createUserResponseSchema = z.object({
    id: z.string({
        required_error: "'id' is required",
        invalid_type_error: "'id' must be a string",
    }),

    username: z.string({
        required_error: "'username' is required",
        invalid_type_error: "'username' must be a string",
    }),

    type: z.nativeEnum(UserType),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;

export const { schemas: userSchemas, $ref } = buildJsonSchemas({
    createUserSchema,
    createUserResponseSchema,
});
