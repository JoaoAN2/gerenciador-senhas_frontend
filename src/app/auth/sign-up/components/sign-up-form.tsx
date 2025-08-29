"use client";

import React from "react";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

import { auth } from "@/@core/modules/auth/infra/container.registry";
import { signUpSchema } from "@/@core/modules/auth/schema/sign-up.schema";
import { TSignUpInputSchema } from "@/@core/modules/auth/domain/sing-up.entity";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const defaultValues: TSignUpInputSchema = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const router = useRouter();

  const form = useForm<TSignUpInputSchema>({
    resolver: zodResolver(signUpSchema.in),
    defaultValues,
  });

  const handleSubmit = async (data: TSignUpInputSchema) => {
    try {
      await auth.signUp.execute(data);
      toast.success(
        "Cadastro realizado com sucesso! Redirecionando para o login"
      );
      setTimeout(() => {
        router.push("/auth/sign-in");
      }, 2000);
    } catch (error) {
      const errorMessage =
        typeof error === "object" &&
        error !== null &&
        "response" in error &&
        typeof (error as any).response?.data?.message === "string"
          ? (error as any).response.data.message
          : "Erro ao cadastrar";
      toast.error(errorMessage);
    }
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
        <CardFooter className="flex gap-4 mt-4">
          <Button>Cadastrar</Button>
          <Link href="/auth/sign-in">Já possui uma conta? Faça login</Link>
        </CardFooter>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
