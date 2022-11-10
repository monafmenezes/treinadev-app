export interface IUserSession {
  username: string;
  password: string;
}

export interface IUserCreate extends IUserSession {
  name: string;
  isAdmin: boolean;
}

export interface IUser extends IUserCreate {
  id: string;
}

export interface IUserUpdate {
  id: string;
  name: string;
  password: string;
}

export interface IUserId {
  id: string;
}
