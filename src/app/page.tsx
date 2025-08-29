import React from "react";

import Link from "next/link";
import { InputPassword } from "@/components/ui/input";

export default function Home() {
  return (
    <main>
      <div className="bg-red-500">
        Hello world!
        <Link href={"/auth/sign-up"}>Ir para Sign Up</Link>
        <InputPassword />
      </div>
    </main>
  );
}
