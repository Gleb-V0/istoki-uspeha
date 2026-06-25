import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Story } from "@/data/stories";

/** Инициалы для аватара по имени. */
function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** Карточка истории успеха в ленте. Вся карточка — ссылка на полную историю. */
export function StoryCard({ story }: { story: Story }) {
  return (
    <Card className="group relative flex flex-col overflow-hidden hover:shadow-md focus-within:ring-2 focus-within:ring-ring">
      <CardContent className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-semibold text-white shadow-sm"
            aria-hidden
          >
            {initials(story.name)}
          </span>
          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold tracking-tight">
              {story.name}
            </h3>
            <p className="truncate text-sm text-muted-foreground">
              {story.role}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Badge variant="soft">{story.field}</Badge>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {story.readingTime} мин
          </span>
        </div>

        <p className="mt-4 text-sm font-medium text-foreground/90">
          Трудность: <span className="font-normal">{story.challenge}</span>
        </p>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {story.excerpt}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          {/* Растягиваем ссылку на всю карточку через ::after */}
          <Link
            href={`/stories/${story.slug}`}
            className="after:absolute after:inset-0 after:content-[''] focus:outline-none"
          >
            Читать историю
          </Link>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </CardContent>
    </Card>
  );
}
