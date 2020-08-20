import { HttpClient } from "services/Http/HttpClient";
import { SignInRequest, SignInResponse } from "./Types";

export class AccountService extends HttpClient {
  public async signIn(credentials: SignInRequest): Promise<SignInResponse> {
    return await this.client
      .post<SignInResponse>("auth/sign-in/", credentials)
      .then(({ data }) => data);
  }
}

export const accountService = new AccountService();
