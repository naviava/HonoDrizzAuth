import { Poppins } from "next/font/google";
import { memo } from "react";
import { cn } from "~/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface IProps {
  label: string;
}

export const Header = memo(_Header);
function _Header({ label }: IProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4">
      <h1 className={cn("text-3xl font-semibold", font.className)}>🔐Auth</h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
