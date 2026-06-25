"use client";

import * as React from "react";
import { X, Check, Loader2, CalendarCheck, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useStore } from "@/components/store-provider";
import type { PlatformEvent } from "@/data/events";
import { formatEventDate } from "@/lib/format";

/**
 * Модальное окно записи на мероприятие.
 * Открыто, когда передан `event`. Запись — в один клик, без полей ввода.
 */
export function EventRegisterDialog({
  event,
  onClose,
}: {
  event: PlatformEvent | null;
  onClose: () => void;
}) {
  const { user, addEvent } = useStore();
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">(
    "idle"
  );

  React.useEffect(() => {
    if (event) setStatus("idle");
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

  function handleRegister() {
    if (!event) return;
    setStatus("submitting");
    // Имитация записи без реального обращения к серверу.
    setTimeout(() => {
      addEvent({
        title: event.title,
        date: event.date,
        time: event.time,
        speaker: event.speaker,
      });
      setStatus("success");
    }, 700);
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
              Спасибо, {user?.name || "друг"}! Ждём вас на встрече{" "}
              <span className="font-medium text-foreground">
                «{event.title}»
              </span>{" "}
              — {d.day} {d.monthGen}, {event.time}. Ссылку на подключение пришлём
              на ваш e-mail.
            </p>
            <Button onClick={onClose} className="mt-6 sm:px-8">
              Готово
            </Button>
          </div>
        ) : (
          /* ─── Запись на мероприятие ─── */
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

            <Button
              size="lg"
              className="mt-6 w-full"
              onClick={handleRegister}
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
          </>
        )}
      </div>
    </div>
  );
}
