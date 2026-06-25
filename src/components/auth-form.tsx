"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useStore } from "@/components/store-provider";

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

/**
 * Форма входа/регистрации (имитация — без реальной проверки).
 * После отправки сохраняет имя в стор и ведёт в личный кабинет.
 */
export function AuthForm({ onSuccess }: { onSuccess?: () => void }) {
  const router = useRouter();
  const { login } = useStore();
  const [form, setForm] = React.useState({ name: "", email: "", password: "" });

  const update =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Имитация: никакой реальной проверки нет — сразу «входим».
    login(form.name);
    onSuccess?.();
    router.push("/account");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="auth-name" className="mb-1.5 block text-sm font-medium">
          Имя
        </label>
        <input
          id="auth-name"
          required
          value={form.name}
          onChange={update("name")}
          placeholder="Как вас зовут"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="auth-email" className="mb-1.5 block text-sm font-medium">
          E-mail
        </label>
        <input
          id="auth-email"
          type="email"
          required
          value={form.email}
          onChange={update("email")}
          placeholder="you@mail.ru"
          className={fieldClass}
        />
      </div>

      <div>
        <label
          htmlFor="auth-password"
          className="mb-1.5 block text-sm font-medium"
        >
          Пароль
        </label>
        <input
          id="auth-password"
          type="password"
          required
          value={form.password}
          onChange={update("password")}
          placeholder="••••••••"
          className={fieldClass}
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        <LogIn className="h-4 w-4" />
        Войти / Зарегистрироваться
      </Button>
    </form>
  );
}
