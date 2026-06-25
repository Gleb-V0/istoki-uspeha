"use client";

import * as React from "react";
import { Clock, User, Users, CalendarPlus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EventRegisterDialog } from "@/components/event-register-dialog";
import { formatEventDate, seatsLabel } from "@/lib/format";
import type { PlatformEvent } from "@/data/events";

/** Группирует мероприятия по месяцам (данные уже отсортированы по дате). */
function groupByMonth(events: PlatformEvent[]) {
  const groups: { key: string; title: string; items: PlatformEvent[] }[] = [];
  for (const ev of events) {
    const f = formatEventDate(ev.date);
    const key = ev.date.slice(0, 7);
    const last = groups[groups.length - 1];
    if (last && last.key === key) last.items.push(ev);
    else groups.push({ key, title: `${f.monthNom} ${f.year}`, items: [ev] });
  }
  return groups;
}

/** Лента мероприятий с записью (имитация). */
export function EventsList({ events }: { events: PlatformEvent[] }) {
  const [selected, setSelected] = React.useState<PlatformEvent | null>(null);
  const groups = groupByMonth(events);

  return (
    <>
      <div className="space-y-12">
        {groups.map((group) => (
          <div key={group.key}>
            <h2 className="text-lg font-semibold tracking-tight text-muted-foreground">
              {group.title}
            </h2>
            <div className="mt-4 space-y-4">
              {group.items.map((ev) => (
                <EventRow key={ev.id} event={ev} onRegister={() => setSelected(ev)} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <EventRegisterDialog event={selected} onClose={() => setSelected(null)} />
    </>
  );
}

function EventRow({
  event,
  onRegister,
}: {
  event: PlatformEvent;
  onRegister: () => void;
}) {
  const d = formatEventDate(event.date);

  return (
    <Card className="flex flex-col gap-4 p-5 sm:flex-row sm:items-stretch sm:gap-5">
      {/* Календарная плитка */}
      <div className="flex shrink-0 items-center gap-3 sm:w-24 sm:flex-col sm:items-center sm:justify-center sm:gap-0 sm:rounded-2xl sm:bg-accent sm:py-3 sm:text-primary">
        <span className="text-3xl font-bold leading-none sm:text-primary">
          {d.day}
        </span>
        <div className="flex flex-col sm:items-center">
          <span className="text-sm font-medium uppercase sm:text-xs">
            {d.monthShort}
          </span>
          <span className="text-xs text-muted-foreground sm:text-primary/70">
            {d.weekdayShort}
          </span>
        </div>
      </div>

      {/* Контент */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="soft">{event.category}</Badge>
          <Badge
            variant={event.access === "Бесплатно" ? "secondary" : "outline"}
          >
            {event.access}
          </Badge>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {event.time} · {event.durationMin} мин · {event.format}
          </span>
        </div>

        <h3 className="mt-2.5 text-lg font-semibold tracking-tight">
          {event.title}
        </h3>

        <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <User className="h-4 w-4 shrink-0" />
          <span>
            <span className="font-medium text-foreground">{event.speaker}</span>{" "}
            — {event.speakerRole}
          </span>
        </p>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {event.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Users className="h-3.5 w-3.5" />
            Осталось {event.seatsLeft} {seatsLabel(event.seatsLeft)}
          </span>
          <Button onClick={onRegister}>
            <CalendarPlus className="h-4 w-4" />
            Записаться
          </Button>
        </div>
      </div>
    </Card>
  );
}
