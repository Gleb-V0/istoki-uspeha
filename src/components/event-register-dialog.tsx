"use client";

import * as React from "react";
import { X, Check, Loader2, CalendarCheck, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { PlatformEvent } from "@/data/events";
import { formatEventDate } from "@/lib/format";

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

type FormState = { name: string; contact: string };
const emptyForm: FormState = { name: "", contact: "" };

/**
 * Модальное окно записи на мероприятие.
 * Открыто, когда передан `event`. Отправка имитируется — без реального запроса.
 */
export function EventRegisterDialog({
  event,
  onClose,
}: {
  event: PlatformEvent | null;
  onClose: () => void;
}) {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [form, setForm] = React.useState<FormState>(emptyForm);

  React.useEffect(() => {
    if (event) {
      setStatus("idle");
      setForm(emptyForm);
    }
  }, [event]);

  React.useEffect(() => {
    if (!event) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [event, onClose]);

  if (!event) return null;

  const d = formatEventDate(event.date);

  const update =
    (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    // Имитация записи без реального обращения к серверу.
    setTimeout(() => setStatus("success"), 700);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-title"
    >
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl border bg-card p-6 shadow-xl sm:rounded-3xl sm:p-7">
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        {status === "success" ? (
          /* ─── Подтверждение ─── */
          <div className="flex flex-col items-center py-6 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-primary">
              <Check className="h-8 w-8" />
            </span>
            <h2
              id="event-title"
              className="mt-5 text-2xl font-bold tracking-tight"
            >
              Вы записаны!
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Спасибо, {form.name || "друг"}! Ждём вас на встрече{" "}
              <span className="font-medium text-foreground">
                «{event.title}»
              </span>{" "}
              — {d.day} {d.monthGen}, {event.time}. Ссылку на подключение
              пришлём на указанный контакт.
            </p>
            <Button onClick={onClose} className="mt-6 sm:px-8">
              Готово
            </Button>
          </div>
        ) : (
          /* ─── Форма записи ─── */
          <>
            <div className="pr-8">
              <Badge variant="soft">{event.category}</Badge>
              <h2
                id="event-title"
                className="mt-3 text-lg font-bold tracking-tight"
              >
                Запись на мероприятие
              </h2>
              <p className="mt-1 text-sm font-medium">{event.title}</p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {d.weekday}, {d.day} {d.monthGen}, {event.time} · {event.speaker}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="ev-name"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Имя
                </label>
                <input
                  id="ev-name"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Как к вам обращаться"
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="ev-contact"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Контакт (телефон или e-mail)
                </label>
                <input
                  id="ev-contact"
                  required
                  value={form.contact}
                  onChange={update("contact")}
                  placeholder="+7 999 000-00-00 или you@mail.ru"
                  className={fieldClass}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Записываем…
                  </>
                ) : (
                  <>
                    <CalendarCheck className="h-4 w-4" />
                    Записаться
                  </>
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
