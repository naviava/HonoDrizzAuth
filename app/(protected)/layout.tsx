import { Navbar } from "~/components/navbar";

interface IProps {
  children: React.ReactNode;
}

export default function ProtectedLayout({ children }: IProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <Navbar />
      {children}
    </div>
  );
}
