"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, LogIn } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/data/navigation";

/** Мобильное меню: кнопка-гамбургер раскрывает выпадающую панель навигации. */
export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  // Закрываем меню при переходе на новый маршрут.
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {open && (
        <div className="absolute inset-x-0 top-16 z-50 border-b bg-background/95 shadow-lg backdrop-blur">
          <nav
            className="container flex flex-col gap-1 py-4"
            aria-label="Мобильная навигация"
          >
            {mainNav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground hover:bg-secondary"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.title}
                </Link>
              );
            })}

            <Button asChild className="mt-2 w-full">
              <Link href="/login">
                <LogIn className="h-4 w-4" />
                Войти
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}
