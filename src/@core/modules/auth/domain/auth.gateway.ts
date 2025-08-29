import { TSignUpOutputSchema } from "./sing-up.entity";

export interface IAuthGateway {
  // Cadastrar novo usuário
  signUp(data: TSignUpOutputSchema): Promise<void>;
}
