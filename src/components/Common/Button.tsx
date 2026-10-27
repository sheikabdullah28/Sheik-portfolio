import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
};

export default function Button({
  href,
  children,
  primary = true,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all duration-300 ${
        primary
          ? "bg-orange-500 text-white hover:bg-orange-600 hover:scale-105"
          : "border border-zinc-700 text-white hover:border-orange-500 hover:text-orange-400"
      }`}
    >
      {children}
      {primary && <ArrowRight size={18} />}
    </Link>
  );
}