import { prisma } from "../prisma";
import { User } from "@prisma/client";
import { CreateUser, UpdateUser } from "../types/user.type";

export class UserService {
  async fetchAllUsers(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  async fetchUserById(id: number): Promise<User | null> {
    return await prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  async createUser(data: CreateUser): Promise<User> {
    return await prisma.user.create({
      data: {
        ...data,
        profile: {
          create: {
            description: "Un nouvel utilisateur vient de naître !",
          },
        },
      },
    });
  }

  async updateUser(id: number, data: UpdateUser): Promise<User | null> {
    const { profile, ...userData } = data;

    return await prisma.user.update({
      where: {
        id,
      },
      data: {
        ...userData,
        profile: {
          update: {
            ...profile,
          },
        },
      },
    });
  }

  async assignManager(userId: number, managerId: number): Promise<User | null> {
    return await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        managerId,
      },
      include: {
        manager: true,
      },
    });
  }

  async removeManager(id: number): Promise<User | null> {
    return await prisma.user.update({
      where: {
        id,
      },
      data: {
        managerId: null,
      },
    });
  }

  async deleteUser(id: number): Promise<User | null> {
    return await prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
