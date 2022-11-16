import { UpdateProfile } from "./profile.type";

export type CreateUser = {
  username: string;
  email: string;
  password: string;
};

export type UpdateUser = {
  username?: string;
  email?: string;
  password?: string;
  profile?: UpdateProfile;
};
