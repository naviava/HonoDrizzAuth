"use client";

import { useCallback } from "react";
import { logout } from "~/utils/actions/logout";

interface IProps {
  children?: React.ReactNode;
}

export function LogoutButton({ children }: IProps) {
  const handleClick = useCallback(() => {
    logout();
  }, []);

  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
}
