"use client";

import Link from "next/link";
import { memo } from "react";
import { Button } from "~/components/ui/button";

interface IProps {
  href: string;
  label: string;
}

export const BackButton = memo(_BackButton);
function _BackButton({ href, label }: IProps) {
  return (
    <Button asChild variant="link" size="sm" className="w-full font-normal">
      <Link href={href}>{label}</Link>
    </Button>
  );
}
