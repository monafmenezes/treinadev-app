export interface IUserSession {
  username: string;
  password: string;
}

export interface IUserCreate extends IUserSession {
  display_name: string;
  isAdmin: boolean;
  created: Date;
}

export interface IUser extends IUserCreate {
  id: string;
}

export interface IUserId {
  id: string;
}
