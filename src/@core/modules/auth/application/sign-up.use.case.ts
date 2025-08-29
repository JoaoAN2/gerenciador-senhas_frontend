import { IAuthGateway } from "../domain/auth.gateway";
import {
  TSignUpInputSchema,
  TSignUpOutputSchema,
} from "../domain/sing-up.entity";
import { signUpSchema } from "../schema/sign-up.schema";

export class SignUpUseCase {
  constructor(private readonly gateway: IAuthGateway) {}

  execute(data: TSignUpInputSchema): Promise<void> {
    const parsed: TSignUpOutputSchema = signUpSchema.parse(data);

    return this.gateway.signUp(parsed);
  }
}
