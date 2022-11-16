import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export class UserController {
  async getAllUsers(_req: Request, res: Response) {
    const users = await userService.fetchAllUsers();
    res.json(users);
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;

    if (!parseInt(id)) {
      res.json({ message: "Id n'est pas un nombre..." });
    } else {
      const user = await userService.fetchUserById(parseInt(id));
      res.json(user);
    }
  }

  async createUser(req: Request, res: Response) {
    const body = req.body;
    const newUser = await userService.createUser(body);
    res.json(newUser);
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const body = req.body;

    if (!parseInt(id)) {
      res.json({ message: "Id n'est pas un nombre..." });
    } else {
      const updatedUser = await userService.updateUser(parseInt(id), body);
      res.json(updatedUser);
    }
  }

  async assignManager(req: Request, res: Response) {
    const { userId, managerId } = req.params;

    if (!parseInt(userId) && !parseInt(managerId)) {
      res.json({ message: "Id n'est pas un nombre..." });
    } else {
      const updatedUser = await userService.assignManager(
        parseInt(userId),
        parseInt(managerId)
      );
      res.json(updatedUser);
    }
  }

  async removeManager(req: Request, res: Response) {
    const { id } = req.params;

    if (!parseInt(id)) {
      res.json({ message: "Id n'est pas un nombre..." });
    } else {
      const updatedUser = await userService.removeManager(parseInt(id));
      res.json(updatedUser);
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    if (!parseInt(id)) {
      res.json({ message: "Id n'est pas un nombre..." });
    } else {
      const deletedUser = await userService.deleteUser(parseInt(id));
      res.json(deletedUser);
    }
  }
}
