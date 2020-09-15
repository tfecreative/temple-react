import { IUserProfile } from "models";

export type SignInRequest = {
  username: string;
  password: string;
};

export type SignInResponse = {
  token: string;
};

export type ProfileResponse = {
  profile: IUserProfile;
};
