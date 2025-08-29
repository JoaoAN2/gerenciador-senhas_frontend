import { AxiosInstance } from "axios";
import { IAuthGateway } from "../domain/auth.gateway";
import { TSignUpOutputSchema } from "../domain/sing-up.entity";

export class AuthHttpGateway implements IAuthGateway {
  constructor(private readonly http: AxiosInstance) {}

  async signUp(data: TSignUpOutputSchema): Promise<void> {
    return await this.http
      .post("/auth/sign-up", data)
      .then((response) => response.data);
  }
}
