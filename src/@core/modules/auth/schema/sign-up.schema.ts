import z from "zod";

export const signUpSchema = z
  .object({
    name: z
      .string("Nome inválido")
      .min(3, "Nome deve ter no mínimo 3 letras")
      .nonempty("Nome é obrigatório"),
    email: z.email("Email inválido").nonempty("Email é obrigatório"),
    password: z
      .string("Senha inválida")
      .min(6, "Senha deve ter no mínimo 6 caracteres")
      .nonempty("Senha é obrigatória"),
    confirmPassword: z
      .string("Confirmação de senha inválida")
      .min(6, "Confirmação de senha deve ter no mínimo 6 caracteres")
      .nonempty("Confirmação de senha é obrigatória"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  })
  .transform((data) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...rest } = data;

    return rest;
  });
