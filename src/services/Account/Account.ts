import { HttpClient } from "services/Http/HttpClient";
import { SignInRequest, SignInResponse } from "./Types";
import { SignUpRequest, SignUpResponse } from "models/sign-up";

export class AccountService extends HttpClient {
  public async signIn(credentials: SignInRequest): Promise<SignInResponse> {
    return await this.client
      .post<SignInResponse>("auth/sign-in/", credentials)
      .then(({ data }) => data);
  }

  public async signUp(payload: SignUpRequest): Promise<SignUpResponse> {
    return await this.client
      .post<SignUpResponse>("auth/sign-up/", payload)
      .then(({ data }) => data);
  }
}

export const accountService = new AccountService();
