import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { EventsList } from "@/components/events-list";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Мероприятия",
  description:
    "Еженедельные профориентационные встречи с приглашёнными спикерами: дата, тема, спикер и запись на платформе «Истоки успеха».",
};

export default function EventsPage() {
  return (
    <>
      {/* Шапка раздела */}
      <section className="brand-gradient">
        <div className="container flex flex-col items-center py-16 text-center sm:py-20 animate-rise">
          <Badge variant="soft" className="gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            Мероприятия
          </Badge>
          <h1 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Профориентационные встречи каждую неделю
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Раз в неделю — онлайн-встречи с приглашёнными спикерами: профессии из
            первых рук, истории успеха и практические мастер-классы. Выбирайте
            тему и записывайтесь.
          </p>
        </div>
      </section>

      {/* Лента мероприятий */}
      <section className="container max-w-3xl py-14 sm:py-16">
        <EventsList events={events} />
      </section>
    </>
  );
}
