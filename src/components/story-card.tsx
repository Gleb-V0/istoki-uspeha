import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { asset } from "@/lib/utils";
import type { Story } from "@/data/stories";

/** Карточка истории успеха в ленте. Вся карточка — ссылка на полную историю. */
export function StoryCard({ story }: { story: Story }) {
  return (
    <Card className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-ring">
      <CardContent className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <Image
            src={asset(story.photo)}
            alt={`Фото: ${story.name}`}
            width={56}
            height={56}
            className="h-14 w-14 shrink-0 rounded-2xl object-cover shadow-sm ring-1 ring-border"
          />
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
