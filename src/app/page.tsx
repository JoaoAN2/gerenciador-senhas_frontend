import React from "react";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="bg-red-500">
        Hello world!
        <Link href={"/auth/sign-up"}>Ir para Sign Up</Link>
      </div>
    </main>
  );
}
