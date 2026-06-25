import type { Metadata } from "next";
import { HeartHandshake, ShieldCheck, Clock, Lock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SupportDirectory } from "@/components/support-directory";
import { specialists } from "@/data/specialists";

export const metadata: Metadata = {
  title: "Психологическая поддержка",
  description:
    "Психологи и коучи с действующими лицензиями помогают справляться с тревогой, выгоранием и стрессом. Запишитесь на консультацию.",
};

const perks = [
  { icon: ShieldCheck, text: "Лицензированные специалисты" },
  { icon: Lock, text: "Конфиденциально и бережно" },
  { icon: Clock, text: "Удобное время онлайн" },
];

export default function SupportPage() {
  return (
    <>
      {/* Шапка раздела */}
      <section className="brand-gradient">
        <div className="container flex flex-col items-center py-16 text-center sm:py-20">
          <Badge variant="soft" className="gap-1.5">
            <HeartHandshake className="h-3.5 w-3.5" />
            Психологическая поддержка
          </Badge>
          <h1 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Поддержка, когда она нужна
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Психологи и коучи помогают справляться с тревогой, выгоранием и
            стрессом, выстраивать здоровые отношения с учёбой и развиваться, не
            теряя себя.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {perks.map((p) => (
              <span key={p.text} className="inline-flex items-center gap-1.5">
                <p.icon className="h-4 w-4 text-primary" />
                {p.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Каталог специалистов */}
      <section className="container py-14 sm:py-16">
        <SupportDirectory specialists={specialists} />
      </section>
    </>
  );
}
