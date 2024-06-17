"use client";

import { useCallback } from "react";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "~/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "~/routes";
import { useSearchParams } from "next/navigation";

export function Social() {
  const callbackUrl = useSearchParams().get("callbackUrl");

  const handleClick = useCallback(
    (provider: "google" | "github") => {
      signIn(provider, { callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT });
    },
    [callbackUrl],
  );

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        type="button"
        size="lg"
        variant="outline"
        onClick={() => handleClick("google")}
        className="w-full"
      >
        <FcGoogle />
      </Button>
      <Button
        type="button"
        size="lg"
        variant="outline"
        onClick={() => handleClick("github")}
        className="w-full"
      >
        <FaGithub />
      </Button>
    </div>
  );
}
