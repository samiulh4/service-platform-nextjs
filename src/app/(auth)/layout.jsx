import Link from "next/link";
import Logo from "@/components/ui/Image/Logo";

export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Logo />
      </div>
      {children}
    </div>
  );
}
