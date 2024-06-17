import { memo } from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface IProps {
  message?: string;
}

export const FormError = memo(_FormError);
function _FormError({ message }: IProps) {
  if (!message) return null;
  return (
    <div className="flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
}
