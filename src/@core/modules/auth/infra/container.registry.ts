import "reflect-metadata";
import { Container } from "inversify";

import { HTTP } from "@/@core/modules/common/infra/http";
import { AuthHttpGateway } from "./auth.gateway";
import { SignUpUseCase } from "../application/sign-up.use.case";

const registry = {
  HTTP: Symbol.for("HTTP"),
  AuthHttpGateway: Symbol.for("AuthHttpGateway"),
  SignUpUseCase: Symbol.for("SignUpUseCase"),
};

const container = new Container();

container.bind(registry.HTTP).toConstantValue(HTTP);
container
  .bind(registry.AuthHttpGateway)
  .toDynamicValue((context) => new AuthHttpGateway(context.get(registry.HTTP)));
container
  .bind(registry.SignUpUseCase)
  .toDynamicValue(
    (context) => new SignUpUseCase(context.get(registry.AuthHttpGateway))
  );

export const auth = {
  signUp: container.get<SignUpUseCase>(registry.SignUpUseCase),
};
