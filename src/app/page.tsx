import Link from "next/link";
import { Sparkles, ArrowRight, HeartHandshake, Users, Compass } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Sparkles,
    title: "Истории успеха",
    text: "Реальные примеры людей, прошедших через трудности — как опора и ориентир.",
  },
  {
    icon: HeartHandshake,
    title: "Профессиональная поддержка",
    text: "Психологи и коучи помогают справляться с тревогой и не выгорать.",
  },
  {
    icon: Users,
    title: "Сообщества",
    text: "Тематические чаты, где можно найти своих и почувствовать, что ты не один.",
  },
  {
    icon: Compass,
    title: "Профориентация",
    text: "Еженедельные встречи со спикерами для раскрытия потенциала.",
  },
];

/** Главная страница — пока заглушка с кратким позиционированием платформы. */
export default function HomePage() {
  return (
    <div className="brand-gradient">
      <section className="container flex flex-col items-center py-24 text-center sm:py-32">
        <Badge variant="soft" className="gap-1.5">
          <Sparkles className="h-3.5 w-3.5" />
          Платформа скоро откроется
        </Badge>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Пространство, где школьник{" "}
          <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
            раскрывает потенциал
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          «Истоки успеха» — онлайн-платформа психологической поддержки и
          профориентации для школьников 9–11 классов. Главная страница в
          разработке, а каркас сайта уже готов.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/stories">
              Смотреть истории успеха
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/support">Найти поддержку</Link>
          </Button>
        </div>

        <div className="mt-16 grid w-full max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border bg-card p-5 text-left shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                <pillar.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-base font-semibold">{pillar.title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
