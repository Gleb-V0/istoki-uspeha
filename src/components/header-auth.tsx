"use client";

import Link from "next/link";
import { LogIn, LayoutDashboard } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useStore } from "@/components/store-provider";

/** Кнопка входа / ссылка на кабинет в шапке (десктоп). */
export function HeaderAuth() {
  const { user, hydrated, openAuth } = useStore();

  // До гидратации показываем нейтральную кнопку входа, чтобы не было скачка.
  if (hydrated && user) {
    return (
      <Button asChild size="sm" className="hidden sm:inline-flex">
        <Link href="/account">
          <LayoutDashboard className="h-4 w-4" />
          {user.name}
        </Link>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className="hidden sm:inline-flex"
      onClick={openAuth}
    >
      <LogIn className="h-4 w-4" />
      Вход / Регистрация
    </Button>
  );
}
