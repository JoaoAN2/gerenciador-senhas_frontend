import z from "zod";
import { signUpSchema } from "../schema/sign-up.schema";

export type TSignUpInputSchema = z.input<typeof signUpSchema>;
export type TSignUpOutputSchema = z.output<typeof signUpSchema>;
