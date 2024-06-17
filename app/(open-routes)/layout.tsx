interface IProps {
  children: React.ReactNode;
}

export default function OpenRoutesLayout({ children }: IProps) {
  return (
    <div className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      {children}
    </div>
  );
}
