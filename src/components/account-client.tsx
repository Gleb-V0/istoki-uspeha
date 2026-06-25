"use client";

import Link from "next/link";
import {
  LogOut,
  Crown,
  LogIn,
  Stethoscope,
  CalendarCheck,
  ArrowRight,
  Sparkles,
  HeartHandshake,
  Users,
  CalendarDays,
  CreditCard,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useStore } from "@/components/store-provider";
import { formatEventDate } from "@/lib/format";

const quickLinks = [
  { href: "/stories", title: "Истории успеха", icon: Sparkles },
  { href: "/support", title: "Поддержка", icon: HeartHandshake },
  { href: "/communities", title: "Сообщества", icon: Users },
  { href: "/events", title: "Мероприятия", icon: CalendarDays },
  { href: "/pricing", title: "Тарифы", icon: CreditCard },
];

export function AccountClient() {
  const {
    user,
    hydrated,
    subscription,
    consultations,
    events,
    logout,
    openAuth,
    setSubscription,
  } = useStore();

  // До монтирования (гидратации) ничего не показываем, чтобы не было скачка.
  if (!hydrated) {
    return <div className="container py-24" />;
  }

  // Не вошёл — приглашаем войти.
  if (!user) {
    return (
      <section className="brand-gradient">
        <div className="container flex flex-col items-center py-24 text-center sm:py-32">
          <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm">
            <LogIn className="h-8 w-8" />
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Войдите в личный кабинет
          </h1>
          <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
            Здесь хранятся ваши записи на консультации и мероприятия, а также
            статус подписки.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => openAuth()}>
              <LogIn className="h-4 w-4" />
              Вход / Регистрация
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/">На главную</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const isPremium = subscription === "premium";

  return (
    <div className="container max-w-5xl py-12 sm:py-16">
      {/* Приветствие */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Привет, {user.name}! 👋
          </h1>
          <p className="mt-2 text-muted-foreground">
            Это ваш личный кабинет «Истоки успеха».
          </p>
        </div>
        <Button variant="outline" onClick={logout}>
          <LogOut className="h-4 w-4" />
          Выйти
        </Button>
      </div>

      {/* Статус подписки */}
      <Card className={isPremium ? "mt-8 border-primary/40 ring-1 ring-primary" : "mt-8"}>
        <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
              <Crown className="h-6 w-6" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Подписка</span>
                <Badge variant={isPremium ? "default" : "secondary"}>
                  {isPremium ? "Премиум" : "Бесплатный"}
                </Badge>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {isPremium
                  ? "Открыты все мероприятия, закрытые клубы и льготные консультации."
                  : "Базовый доступ. Откройте больше с Премиумом за 990 ₽/мес."}
              </p>
            </div>
          </div>
          {isPremium ? (
            <Button variant="outline" onClick={() => setSubscription("free")}>
              Отменить
            </Button>
          ) : (
            <Button asChild>
              <Link href="/pricing">
                Перейти на Премиум
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Записи */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Консультации */}
        <Card>
          <CardContent className="p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Stethoscope className="h-5 w-5 text-primary" />
              Консультации
            </h2>
            {consultations.length === 0 ? (
              <div className="mt-4 rounded-2xl border border-dashed p-5 text-center">
                <p className="text-sm text-muted-foreground">
                  Вы ещё не записывались на консультации.
                </p>
                <Button asChild variant="outline" size="sm" className="mt-3">
                  <Link href="/support">Найти специалиста</Link>
                </Button>
              </div>
            ) : (
              <ul className="mt-4 space-y-3">
                {consultations.map((c) => {
                  const dc = c.date ? formatEventDate(c.date) : null;
                  return (
                    <li
                      key={c.id}
                      className="rounded-2xl border bg-secondary/30 p-4"
                    >
                      <p className="font-medium">{c.specialist}</p>
                      <p className="text-sm text-muted-foreground">
                        {c.role} · {c.topic}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {dc ? `${dc.day} ${dc.monthGen}` : "Дата уточняется"}
                        {c.time ? `, ${c.time}` : ""}
                      </p>
                    </li>
                  );
                })}
              </ul>
            )}
          </CardContent>
        </Card>

        {/* Мероприятия */}
        <Card>
          <CardContent className="p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <CalendarCheck className="h-5 w-5 text-primary" />
              Мероприятия
            </h2>
            {events.length === 0 ? (
              <div className="mt-4 rounded-2xl border border-dashed p-5 text-center">
                <p className="text-sm text-muted-foreground">
                  Вы ещё не записывались на мероприятия.
                </p>
                <Button asChild variant="outline" size="sm" className="mt-3">
                  <Link href="/events">Выбрать встречу</Link>
                </Button>
              </div>
            ) : (
              <ul className="mt-4 space-y-3">
                {events.map((e) => {
                  const d = formatEventDate(e.date);
                  return (
                    <li
                      key={e.id}
                      className="rounded-2xl border bg-secondary/30 p-4"
                    >
                      <p className="font-medium">{e.title}</p>
                      <p className="text-sm text-muted-foreground">
                        Спикер: {e.speaker}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {d.day} {d.monthGen}, {e.time}
                      </p>
                    </li>
                  );
                })}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Быстрые ссылки */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold">Быстрые ссылки</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col items-center gap-2 rounded-2xl border bg-card p-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent/40 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                <link.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium">{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
