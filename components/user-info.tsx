import { ExtendedUser } from "~/next-auth";

import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader } from "~/components/ui/card";

interface IProps {
  user?: ExtendedUser;
  label: string;
}

export function UserInfo({ user, label }: IProps) {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-center text-2xl font-semibold">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <DetailEntry>
          <Key>ID</Key>
          <Value>{user?.id}</Value>
        </DetailEntry>
        <DetailEntry>
          <Key>Name</Key>
          <Value>{user?.name}</Value>
        </DetailEntry>
        <DetailEntry>
          <Key>Email</Key>
          <Value>{user?.email}</Value>
        </DetailEntry>
        <DetailEntry>
          <Key>Role</Key>
          <Value>{user?.role}</Value>
        </DetailEntry>
        <DetailEntry>
          <Key>2-Factor Authentication</Key>
          <Badge variant={user?.is2FAEnabled ? "success" : "destructive"}>
            {user?.is2FAEnabled ? "ON" : "OFF"}
          </Badge>
        </DetailEntry>
      </CardContent>
    </Card>
  );
}

function DetailEntry({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
      {children}
    </div>
  );
}

function Key({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-medium">{children}</p>;
}

function Value({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-[180px] truncate rounded-md bg-slate-100 p-1 font-mono text-xs">
      {children}
    </p>
  );
}
