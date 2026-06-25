import Link from "next/link";
import { Sprout } from "lucide-react";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Скрыть текстовую часть (например, на узких экранах). */
  showText?: boolean;
};

/** Логотип-название платформы: знак + «Истоки успеха». */
export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      aria-label="Истоки успеха — на главную"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm transition-transform group-hover:scale-105">
        <Sprout className="h-5 w-5" aria-hidden />
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="text-base font-bold tracking-tight text-foreground">
            Истоки успеха
          </span>
          <span className="text-[11px] font-medium text-muted-foreground">
            платформа поддержки школьников
          </span>
        </span>
      )}
    </Link>
  );
}
