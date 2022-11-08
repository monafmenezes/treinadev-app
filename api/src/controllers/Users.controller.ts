import { Request, Response } from "express";
import createUserService from "../services/users/userCreate.service";
import deleteUserService from "../services/users/userDelete.service";
import listUserService from "../services/users/userList.service";
import listUsersService from "../services/users/usersList.service";
import updateUserService from "../services/users/userUpdate.service";

export default class UserController {
  static async store(req: Request, res: Response)  {
    
  }
}
