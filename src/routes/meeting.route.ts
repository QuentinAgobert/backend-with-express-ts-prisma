import express from "express";
import { MeetingController } from "../controllers/meeting.controller";
import { jwtAuth } from "../middlewares/jwtAuth";

export const router = express.Router();

const meetingController = new MeetingController();

// GET
router.get("/", jwtAuth, meetingController.getAllMeetings);
router.get("/:id", jwtAuth, meetingController.getMeetingById);

// POST
router.post("/", meetingController.createMeeting);

// PUT
router.put("/:id", jwtAuth, meetingController.updateMeeting);
router.put(
  "/:meetingId/add/:userId",
  jwtAuth,
  meetingController.addParticipantToMeeting
);
router.put(
  "/:meetingId/remove/:userId",
  jwtAuth,
  meetingController.removeParticipantToMeeting
);

// DELETE
router.delete("/:id", jwtAuth, meetingController.deleteMeeting);
