"use client";

import { UserRole } from "@prisma/client";
import { useCurrentRole } from "~/hooks/use-current-role";
import { FormError } from "~/components/form-error";

interface IProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export function RoleGate({ children, allowedRole }: IProps) {
  const role = useCurrentRole();
  if (role !== allowedRole)
    return (
      <FormError message="You do not have permission to view this content!" />
    );

  return <>{children}</>;
}
