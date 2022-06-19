import { FastifyInstance } from 'fastify';
import {
    deleteUserHandler,
    getUserHandler,
    getUsersHandler,
    loginUserHandler,
    registerUserHandler,
    updateUserHandler,
} from "./user.controller";
import { $ref } from "./user.schemas";

async function userRoutes(server: FastifyInstance) {
    server.post(
        "/",
        {
            schema: {
                description: "User creation route",
                body: $ref("createUserSchema"),
                response: {
                    201: $ref("createUserResponseSchema"),
                },
                tags: ["User"],
            },
        },
        registerUserHandler,
    );

    server.post(
        "/login",
        {
            schema: {
                description: "User login route",
                body: $ref("loginUserSchema"),
                response: {
                    200: $ref("loginUserResponseSchema"),
                },
                tags: ["User"],
            },
        },
        loginUserHandler,
    );

    server.get("/", {}, getUsersHandler);

    server.put("/", {}, updateUserHandler);

    server.get("/:id", {}, getUserHandler);

    server.delete("/:id", {}, deleteUserHandler);
}

export default userRoutes;
