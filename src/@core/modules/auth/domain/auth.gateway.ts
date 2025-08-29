import { TSignUpOutputSchema } from "./sing-up.entity";

export interface IAuthGateway {
  signUp(data: TSignUpOutputSchema): Promise<void>;
}
