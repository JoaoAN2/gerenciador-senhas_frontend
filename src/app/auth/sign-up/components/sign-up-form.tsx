"use client";

import React from "react";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpSchema } from "@/@core/modules/auth/schema/sign-up.schema";
import { TSignUpInputSchema } from "@/@core/modules/auth/domain/sing-up.entity";
import { CardContent, CardFooter } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, InputPassword } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

const defaultValues: TSignUpInputSchema = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const form = useForm<TSignUpInputSchema>({
    resolver: zodResolver(signUpSchema.in),
    defaultValues,
  });

  const handleSubmit = (data: TSignUpInputSchema) => {
    const parsedData = signUpSchema.parse(data);

    console.log(parsedData);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <CardContent className="flex gap-3 flex-col">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="João" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="joao@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <InputPassword placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar Senha</FormLabel>
                <FormControl>
                  <InputPassword placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter>
          <Button>Cadastrar</Button>
          <Button type="button">
            <Link href="/auth/sign-in">Já possui uma conta? Faça login</Link>
          </Button>
        </CardFooter>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
