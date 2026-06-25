"use client";

import * as React from "react";
import Image from "next/image";
import { X, Check, Loader2, CalendarCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useStore } from "@/components/store-provider";
import { formatEventDate } from "@/lib/format";
import type { Specialist } from "@/data/specialists";

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

// Поля профиля — показываются заполненными, без возможности редактирования.
const readonlyFieldClass =
  "w-full cursor-not-allowed rounded-xl border border-input bg-secondary/50 px-3.5 py-2.5 text-sm text-muted-foreground";

const topicOptions = [
  "Тревожность и стресс",
  "Выгорание и мотивация",
  "Отношения и общение",
  "Профориентация",
  "Самооценка и уверенность",
  "Другое",
];

type FormState = {
  date: string;
  time: string;
  topic: string;
};

const emptyForm: FormState = {
  date: "",
  time: "",
  topic: topicOptions[0],
};

/**
 * Модальное окно записи на консультацию.
 * Открыто, когда передан `specialist`. Имя и e-mail берутся из профиля.
 */
export function BookingDialog({
  specialist,
  onClose,
}: {
  specialist: Specialist | null;
  onClose: () => void;
}) {
  const { user, addConsultation } = useStore();
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [form, setForm] = React.useState<FormState>(emptyForm);

  // Сброс состояния при открытии для нового специалиста.
  React.useEffect(() => {
    if (specialist) {
      setStatus("idle");
      setForm(emptyForm);
    }
  }, [specialist]);

  // Закрытие по Escape.
  React.useEffect(() => {
    if (!specialist) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [specialist, onClose]);

  if (!specialist) return null;

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!specialist) return;
    setStatus("submitting");
    // Имитация отправки заявки без реального обращения к серверу.
    setTimeout(() => {
      addConsultation({
        specialist: specialist.name,
        role: specialist.role,
        date: form.date,
        time: form.time,
        topic: form.topic,
      });
      setStatus("success");
    }, 700);
  }

  const successDate = form.date ? formatEventDate(form.date) : null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
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
              id="booking-title"
              className="mt-5 text-2xl font-bold tracking-tight"
            >
              Заявка принята
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Спасибо, {user?.name || "друг"}! {specialist.name} получит вашу
              заявку на{" "}
              <span className="font-medium text-foreground">
                {successDate
                  ? `${successDate.day} ${successDate.monthGen}`
                  : "выбранную дату"}
                {form.time ? `, ${form.time}` : ""}
              </span>
              .
            </p>
            <Button onClick={onClose} className="mt-6 sm:px-8">
              Готово
            </Button>
          </div>
        ) : (
          /* ─── Форма записи ─── */
          <>
            <div className="flex items-center gap-3 pr-8">
              <Image
                src={specialist.photo}
                alt={`Фото: ${specialist.name}`}
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 rounded-2xl object-cover ring-1 ring-border"
              />
              <div>
                <h2 id="booking-title" className="text-lg font-bold tracking-tight">
                  Запись на консультацию
                </h2>
                <p className="text-sm text-muted-foreground">
                  {specialist.name} · {specialist.role}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="bk-name" className="mb-1.5 block text-sm font-medium">
                    Имя
                  </label>
                  <input
                    id="bk-name"
                    readOnly
                    value={user?.name ?? ""}
                    className={readonlyFieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="bk-email"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    E-mail
                  </label>
                  <input
                    id="bk-email"
                    readOnly
                    value={user?.email ?? ""}
                    className={readonlyFieldClass}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="bk-date" className="mb-1.5 block text-sm font-medium">
                    Дата
                  </label>
                  <input
                    id="bk-date"
                    type="date"
                    required
                    value={form.date}
                    onChange={update("date")}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="bk-time" className="mb-1.5 block text-sm font-medium">
                    Время
                  </label>
                  <input
                    id="bk-time"
                    type="time"
                    required
                    value={form.time}
                    onChange={update("time")}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="bk-topic"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Тема консультации
                </label>
                <select
                  id="bk-topic"
                  value={form.topic}
                  onChange={update("topic")}
                  className={fieldClass}
                >
                  {topicOptions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
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
                    Отправляем…
                  </>
                ) : (
                  <>
                    <CalendarCheck className="h-4 w-4" />
                    Отправить заявку
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
