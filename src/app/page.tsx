import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  HeartHandshake,
  Users,
  Compass,
  Quote,
  Gauge,
  CloudRain,
  BatteryLow,
  Frown,
  ShieldCheck,
  ThumbsUp,
  Check,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: Gauge,
    title: "Стресс и нагрузка",
    text: "ЕГЭ, проекты и олимпиады создают постоянное давление и не оставляют сил.",
  },
  {
    icon: CloudRain,
    title: "Тревожность",
    text: "Страх ошибки и неопределённость будущего держат в напряжении каждый день.",
  },
  {
    icon: BatteryLow,
    title: "Выгорание",
    text: "Учёба на пределе приводит к апатии и потере интереса ко всему.",
  },
  {
    icon: Frown,
    title: "Одиночество",
    text: "Трудности в общении со сверстниками и близкими усиливают чувство изоляции.",
  },
];

const pillars = [
  {
    icon: Sparkles,
    title: "Истории успеха",
    text: "Реальные примеры предпринимателей, учёных и спортсменов, которые прошли через стресс и трудности — не как недостижимый идеал, а как опора и ориентир.",
  },
  {
    icon: HeartHandshake,
    title: "Психологическая поддержка",
    text: "Помощь психологов и коучей с действующими лицензиями: справляться с тревогой, выстраивать здоровые отношения с учёбой и развиваться, не выгорая.",
  },
  {
    icon: Users,
    title: "Общение с единомышленниками",
    text: "Тематические чаты и сообщества, где можно найти своих, обсудить волнующее и почувствовать, что ты не один.",
  },
  {
    icon: Compass,
    title: "Профориентационные мероприятия",
    text: "Еженедельные встречи с приглашёнными спикерами помогают раскрыть сильные стороны и осознанно выбрать направление развития.",
  },
];

const stats = [
  {
    icon: Frown,
    value: "51,6%",
    label: "подростков иногда или часто чувствуют себя одинокими",
  },
  {
    icon: ShieldCheck,
    value: "12,9%",
    label: "— лишь стольким хватает поддержки, чтобы не выгорать",
  },
  {
    icon: ThumbsUp,
    value: "~90%",
    label: "готовы пользоваться платформой вроде «Истоки успеха»",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="brand-gradient">
        <div className="container flex flex-col items-center py-20 text-center sm:py-28 animate-rise">
          <Badge variant="soft" className="gap-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Для школьников 9–11 классов
          </Badge>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Поддержка, единомышленники и{" "}
            <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
              свой путь
            </span>{" "}
            — для каждого старшеклассника
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            «Истоки успеха» — онлайн-платформа, которая помогает справляться со
            стрессом, находить близких по духу людей и раскрывать свой потенциал.
            Здесь ты не один!
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/login">
                Зарегистрироваться бесплатно
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#solution">Как это работает</Link>
            </Button>
          </div>

          <p className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary" /> Базовый доступ — бесплатно
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary" /> Онлайн, из любой точки
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary" /> Лицензированные специалисты
            </span>
          </p>
        </div>
      </section>

      {/* ─── Проблема ─── */}
      <section className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="border-primary/30 text-primary">
            Проблема
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Старшеклассникам сегодня тяжелее, чем кажется
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Образовательная среда нацелена на оценки, а стресс, тревожность,
            выгорание и одиночество остаются один на один с подростком.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <Card key={p.title} className="border-border/70">
              <CardContent className="p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ─── Решение: четыре опоры ─── */}
      <section id="solution" className="scroll-mt-20 bg-secondary/40">
        <div className="container py-20">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="soft">Решение</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Платформа на четырёх опорах
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Всё, что помогает подростку справиться с трудностями, найти своих и
              раскрыть потенциал — в одном пространстве.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Card key={pillar.title} className="bg-card hover:shadow-md">
                <CardContent className="flex gap-5 p-6 sm:p-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm">
                    <pillar.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-primary">
                        0{i + 1}
                      </span>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pillar.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Социальное доказательство ─── */}
      <section className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="border-primary/30 text-primary">
            Почему это важно
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Цифры, которые нельзя игнорировать
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            По результатам нашего опроса старшеклассников.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.value}
              className="rounded-2xl border bg-card p-7 text-center shadow-sm"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
                <s.icon className="h-6 w-6" />
              </span>
              <p className="mt-5 text-4xl font-bold tracking-tight text-primary">
                {s.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <figure className="mx-auto mt-12 max-w-3xl rounded-2xl border bg-secondary/40 p-7 text-center">
          <Quote className="mx-auto h-7 w-7 text-primary/60" />
          <blockquote className="mt-3 text-lg font-medium leading-relaxed sm:text-xl">
            Подросткам нужно пространство, которое помогает справляться со
            стрессом, получать поддержку и находить единомышленников — а не ещё
            одна гонка за оценками.
          </blockquote>
        </figure>
      </section>

      {/* ─── Финальный призыв ─── */}
      <section className="container pb-24">
        <div className="brand-gradient overflow-hidden rounded-3xl border bg-card">
          <div className="flex flex-col items-center gap-6 px-6 py-16 text-center sm:px-12">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Начни свой путь к успеху уже сегодня
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Присоединяйся к «Истокам успеха» — бесплатно. Поддержка, сообщество
              и ориентиры, чтобы пройти старшую школу спокойнее и увереннее.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/login">
                  Зарегистрироваться
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/stories">Смотреть истории успеха</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
