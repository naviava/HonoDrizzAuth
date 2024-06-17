"use client";

import { useCallback, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { FormError } from "~/components/form-error";
import { FormSuccess } from "~/components/form-success";
import { CardWrapper } from "~/components/auth/card-wrapper";

import { loginSchema } from "~/schema";
// import { login } from "~/utils/actions/login";

export function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "This email is linked to a different provider."
      : "";

  const [show2FA, setShow2FA] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      code: "",
    },
  });

  const onSubmit = useCallback((values: z.infer<typeof loginSchema>) => {
    console.log(values);
    // setError("");
    // setSuccess("");
    // startTransition(() => {
    //   login(values, callbackUrl)
    //     .then((data) => {
    //       if (!!data?.error) {
    //         form.reset();
    //         setError(data?.error);
    //       }
    //       if (!!data?.error) {
    //         form.reset();
    //         setSuccess(data?.success);
    //       }
    //       if (!!data?.twoFactor) {
    //         setShow2FA(true);
    //       }
    //     })
    //     .catch(() => setError("Something went wrong."));
    // });
  }, []);

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial={!show2FA}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {show2FA ? (
              // 2FA code input
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>2-Factor Authentication</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="123456"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : (
              <>
                {/* Email input */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="yourname@example.com"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password input */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="******"
                          disabled={isPending}
                        />
                      </FormControl>
                      <Button
                        asChild
                        type="button"
                        variant="link"
                        size="sm"
                        className="px-0 font-normal"
                      >
                        <Link href="/auth/reset">Forgot password?</Link>
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>

          {/* Error and success notifiers */}
          <FormError message={error || urlError} />
          <FormSuccess message={success} />

          {/* Submit button */}
          <Button type="submit" disabled={isPending} className="w-full">
            {show2FA ? "Confirm" : "Login"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
