import { Request, Response } from "express";
import { MeetingService } from "../services/meeting.service";

const meetingService = new MeetingService();

export class MeetingController {
  async getAllMeetings(_req: Request, res: Response) {
    const meetings = await meetingService.fetchAllMeetings();
    res.json(meetings);
  }

  async getMeetingById(req: Request, res: Response) {
    const { id } = req.params;

    if (!parseInt(id)) {
      res.json({ message: "Id n'est pas un nombre..." });
    } else {
      const meeting = await meetingService.fetchMeetingById(parseInt(id));
      res.json(meeting);
    }
  }

  async createMeeting(req: Request, res: Response) {
    const body = req.body;
    const newMeeting = await meetingService.createMeeting(body);
    res.json(newMeeting);
  }

  async updateMeeting(req: Request, res: Response) {
    const { id } = req.params;
    const body = req.body;

    if (!parseInt(id)) {
      res.json({ message: "Id n'est pas un nombre..." });
    } else {
      const updatedMeeting = await meetingService.updateMeeting(
        parseInt(id),
        body
      );
      res.json(updatedMeeting);
    }
  }

  async addParticipantToMeeting(req: Request, res: Response) {
    const { meetingId, userId } = req.params;

    if (!parseInt(meetingId) && !parseInt(userId)) {
      res.json({ message: "Un des identifiants n'est pas un nombre..." });
    } else {
      const updatedMeeting = await meetingService.addParticipant(
        parseInt(meetingId),
        parseInt(userId)
      );
      res.json(updatedMeeting);
    }
  }

  async removeParticipantToMeeting(req: Request, res: Response) {
    const { meetingId, userId } = req.params;

    if (!parseInt(meetingId) && !parseInt(userId)) {
      res.json({ message: "Un des identifiants n'est pas un nombre..." });
    } else {
      const updatedMeeting = await meetingService.removeParticipant(
        parseInt(meetingId),
        parseInt(userId)
      );
      res.json(updatedMeeting);
    }
  }

  async deleteMeeting(req: Request, res: Response) {
    const { id } = req.params;

    if (!parseInt(id)) {
      res.json({ message: "Id n'est pas un nombre..." });
    } else {
      const deletedMeeting = await meetingService.deleteMeeting(parseInt(id));
      res.json(deletedMeeting);
    }
  }
}
