import React from "react";

import { Card, CardDescription, CardHeader } from "@/components/ui/card";

const SignUp = () => {
  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <Card className="w-full max-w-md ">
        <CardHeader>
          <span className="text-xl font-semibold">Tela de Cadastro</span>
        </CardHeader>
        <CardDescription>
          <p>Crie sua conta para começar a usar o aplicativo.</p>
        </CardDescription>
      </Card>
    </section>
  );
};

export default SignUp;
