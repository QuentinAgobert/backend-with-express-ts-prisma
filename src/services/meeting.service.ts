import { prisma } from "../prisma";
import { Meeting } from "@prisma/client";
import { CreateMeeting, UpdateMeeting } from "../types/meeting.type";

export class MeetingService {
  async fetchAllMeetings(): Promise<Meeting[]> {
    return await prisma.meeting.findMany();
  }

  async fetchMeetingById(id: number): Promise<Meeting | null> {
    return await prisma.meeting.findFirst({
      where: {
        id,
      },
    });
  }

  async createMeeting(data: CreateMeeting): Promise<Meeting> {
    return await prisma.meeting.create({
      data: {
        ...data,
        date: new Date(),
      },
    });
  }

  async updateMeeting(
    id: number,
    data: UpdateMeeting
  ): Promise<Meeting | null> {
    return await prisma.meeting.update({
      where: {
        id,
      },
      data,
    });
  }

  async addParticipant(
    meetingId: number,
    userId: number
  ): Promise<Meeting | null> {
    return await prisma.meeting.update({
      where: {
        id: meetingId,
      },
      data: {
        participants: {
          connect: {
            id: userId,
          },
        },
      },
      include: {
        participants: true,
      },
    });
  }

  async removeParticipant(
    meetingId: number,
    userId: number
  ): Promise<Meeting | null> {
    return await prisma.meeting.update({
      where: {
        id: meetingId,
      },
      data: {
        participants: {
          disconnect: {
            id: userId,
          },
        },
      },
      include: {
        participants: true,
      },
    });
  }

  async deleteMeeting(id: number): Promise<Meeting | null> {
    return await prisma.meeting.delete({
      where: {
        id,
      },
    });
  }
}
