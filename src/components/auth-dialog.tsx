"use client";

import * as React from "react";
import { X } from "lucide-react";

import { Logo } from "@/components/logo";
import { AuthForm } from "@/components/auth-form";
import { useStore } from "@/components/store-provider";

/** Модальное окно входа/регистрации, управляется глобальным стором. */
export function AuthDialog() {
  const { authOpen, closeAuth } = useStore();

  React.useEffect(() => {
    if (!authOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeAuth();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [authOpen, closeAuth]);

  if (!authOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Вход и регистрация"
    >
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={closeAuth}
        aria-hidden
      />

      <div className="relative z-10 max-h-[92vh] w-full max-w-md overflow-y-auto rounded-t-3xl border bg-card p-6 shadow-xl sm:rounded-3xl sm:p-7">
        <button
          type="button"
          onClick={closeAuth}
          aria-label="Закрыть"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-5">
          <Logo showText={false} />
          <h2 className="mt-4 text-xl font-bold tracking-tight">
            Вход в «Истоки успеха»
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Войдите или зарегистрируйтесь, чтобы открыть личный кабинет.
          </p>
        </div>

        <AuthForm onSuccess={closeAuth} />
      </div>
    </div>
  );
}
