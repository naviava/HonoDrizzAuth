"use client";

import { memo, useCallback } from "react";
import { useRouter } from "next/navigation";

import { LoginForm } from "~/components/auth/login-form";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";

interface IProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = memo(_LoginButton);
function _LoginButton({ children, asChild, mode = "redirect" }: IProps) {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="w-auto border-none bg-transparent p-0">
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
}
