import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface User {
    name: string;
    email: string;
}

async function createUser(user: User) {
    const createdUser = prisma.user.create({
        data: user,
    });

    return createdUser;
}

export const userController = {
    createUser,
}