"use client";

import * as React from "react";
import { Lock, Send } from "lucide-react";

import { useStore } from "@/components/store-provider";

/**
 * Поле ввода в чат сообщества.
 * До входа — «запертая» плашка; после входа — активный инпут.
 * Введённое сообщение по отправке просто очищается (никуда не сохраняется).
 */
export function ChatInput() {
  const { user, hydrated } = useStore();
  const [text, setText] = React.useState("");
  const active = hydrated && !!user;

  if (!active) {
    return (
      <div className="mt-1 flex items-center gap-2 rounded-full border bg-background px-3.5 py-2 text-sm text-muted-foreground">
        <Lock className="h-4 w-4 shrink-0" />
        <span className="flex-1 truncate">Войдите, чтобы писать в чат</span>
        <Send className="h-4 w-4 shrink-0 opacity-40" />
      </div>
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Сообщение нигде не сохраняется и не отображается — просто очищаем поле.
    setText("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-1 flex items-center gap-2 rounded-full border bg-background px-3.5 py-1.5 focus-within:ring-2 focus-within:ring-ring"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Напишите сообщение…"
        aria-label="Сообщение в чат"
        className="flex-1 bg-transparent py-1 text-sm placeholder:text-muted-foreground focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Отправить сообщение"
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-brand-700"
      >
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
