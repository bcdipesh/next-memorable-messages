"use client";

import { Button } from "@/components/ui/button";
import { ExitIcon } from "@radix-ui/react-icons";
import { signOut } from "next-auth/react";

export default function LogOutBtn() {
  return (
    <Button variant="ghost" onClick={() => signOut()}>
      <ExitIcon className="mr-7 w-4 h-4" /> Logout
    </Button>
  );
}
