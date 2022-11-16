import { Request, Response } from "express";
import { ProfileService } from "../services/profile.service";

const profileService = new ProfileService();

export class ProfileController {
  async getAllProfiles(_req: Request, res: Response) {
    const profiles = await profileService.fetchAllProfiles();
    res.json(profiles);
  }

  async getProfileById(req: Request, res: Response) {
    const { id } = req.params;

    if (!parseInt(id)) {
      res.json({ message: "Id n'est pas un nombre..." });
    } else {
      const profile = await profileService.fetchProfileById(parseInt(id));
      res.json(profile);
    }
  }

  async createProfile(req: Request, res: Response) {
    const body = req.body;
    const newProfile = await profileService.createProfile(body);
    res.json(newProfile);
  }

  async updateProfile(req: Request, res: Response) {
    const { id } = req.params;
    const body = req.body;

    if (!parseInt(id)) {
      res.json({ message: "Id n'est pas un nombre..." });
    } else {
      const updatedProfile = await profileService.updateProfile(
        parseInt(id),
        body
      );
      res.json(updatedProfile);
    }
  }

  async deleteProfile(req: Request, res: Response) {
    const { id } = req.params;

    if (!parseInt(id)) {
      res.json({ message: "Id n'est pas un nombre..." });
    } else {
      const deletedProfile = await profileService.deleteProfile(parseInt(id));
      res.json(deletedProfile);
    }
  }
}
