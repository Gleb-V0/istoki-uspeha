"use client";

import * as React from "react";
import Image from "next/image";
import { BadgeCheck, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookingDialog } from "@/components/booking-dialog";
import { useStore } from "@/components/store-provider";
import type { Specialist } from "@/data/specialists";

const AUTH_REQUIRED_MESSAGE =
  "Чтобы записаться, вам необходимо для начала создать или войти в аккаунт.";

/** Склонение слова «год» по числу лет опыта. */
function yearsLabel(n: number) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "год";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return "года";
  return "лет";
}

/** Каталог специалистов с записью на консультацию. */
export function SupportDirectory({ specialists }: { specialists: Specialist[] }) {
  const [selected, setSelected] = React.useState<Specialist | null>(null);
  const { user, hydrated, openAuth } = useStore();

  // Запись доступна только после входа в аккаунт.
  function handleBook(s: Specialist) {
    if (hydrated && user) setSelected(s);
    else openAuth(AUTH_REQUIRED_MESSAGE);
  }

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {specialists.map((s) => (
          <Card key={s.id} className="flex flex-col transition-shadow duration-200 hover:shadow-md">
            <CardContent className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3">
                <Image
                  src={s.photo}
                  alt={`Фото: ${s.name}`}
                  width={64}
                  height={64}
                  className="h-16 w-16 shrink-0 rounded-2xl object-cover shadow-sm ring-1 ring-border"
                />
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold tracking-tight">
                    {s.name}
                  </h3>
                  <Badge variant="soft" className="mt-1">
                    {s.role}
                  </Badge>
                </div>
              </div>

              <p className="mt-4 text-sm font-medium text-foreground">
                {s.specialization}
              </p>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {s.bio}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {s.experienceYears} {yearsLabel(s.experienceYears)} опыта
                </span>
                {s.licensed && (
                  <span className="inline-flex items-center gap-1 text-primary">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Лицензия
                  </span>
                )}
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.topics.map((t) => (
                  <Badge key={t} variant="outline" className="font-normal">
                    #{t}
                  </Badge>
                ))}
              </div>

              <Button className="mt-5 w-full" onClick={() => handleBook(s)}>
                Записаться на консультацию
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <BookingDialog specialist={selected} onClose={() => setSelected(null)} />
    </>
  );
}
