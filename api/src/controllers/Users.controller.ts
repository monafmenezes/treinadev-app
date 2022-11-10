import { Request, Response } from "express";
import createUserService from "../services/users/userCreate.service";
import deleteUserService from "../services/users/userDelete.service";
import listUserService from "../services/users/userList.service";
import listUsersService from "../services/users/usersList.service";
import updateUserService from "../services/users/userUpdate.service";

export default class UserController {
  static async store(req: Request, res: Response) {
    const { name, username, password, isAdmin } = req.validUser;
    const user = await createUserService({ name, password, isAdmin, username });

    return res.status(201).json(user);
  }

  static async index(req: Request, res: Response) {
    const users = await listUsersService();

    return res.json(users);
  }

  static async list(req: Request, res: Response) {
    const { id } = req.params;

    const user = await listUserService({ id });

    return res.json(user);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, password } = req.body;

    const user = await updateUserService({ id, name, password });

    return res.status(200).json(user);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteUserService({ id });

    return res.status(204).json();
  }
}
