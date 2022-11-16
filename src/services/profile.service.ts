import { prisma } from "../prisma";
import { Profile } from "@prisma/client";
import { CreateProfile, UpdateProfile } from "../types/profile.type";

export class ProfileService {
  async fetchAllProfiles(): Promise<Profile[]> {
    return await prisma.profile.findMany();
  }

  async fetchProfileById(id: number): Promise<Profile | null> {
    return await prisma.profile.findFirst({
      where: {
        id,
      },
    });
  }

  async createProfile(data: CreateProfile): Promise<Profile> {
    return await prisma.profile.create({
      data: {
        ...data,
      },
    });
  }

  async updateProfile(
    id: number,
    data: UpdateProfile
  ): Promise<Profile | null> {
    return await prisma.profile.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteProfile(id: number): Promise<Profile | null> {
    return await prisma.profile.delete({
      where: {
        id,
      },
    });
  }
}
