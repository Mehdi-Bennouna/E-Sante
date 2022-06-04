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
    id: z.string(),
    username: z.string(),
    type: z.nativeEnum(UserType),
});

const loginUserSchema = z.object({
    username: z.string({
        required_error: "'username' is required",
        invalid_type_error: 'username must be a string',
    }),

    password: z.string({
        required_error: "'password' is required",
        invalid_type_error: 'username must be a string',
    }),
});

const loginUserResponseSchema = z.object({
    accessToken: z.string(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type LoginUserInput = z.infer<typeof loginUserSchema>;

export const { schemas: userSchemas, $ref } = buildJsonSchemas({
    createUserSchema,
    createUserResponseSchema,
    loginUserSchema,
    loginUserResponseSchema,
});
