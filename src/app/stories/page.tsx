import type { Metadata } from "next";
import { BookOpen } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { StoryCard } from "@/components/story-card";
import { stories } from "@/data/stories";

export const metadata: Metadata = {
  title: "Истории успеха",
  description:
    "Реальные истории людей, которые прошли через стресс и трудности и нашли свой путь — как поддержка и ориентир для школьников.",
};

export default function StoriesPage() {
  return (
    <>
      {/* Шапка раздела */}
      <section className="brand-gradient">
        <div className="container flex flex-col items-center py-16 text-center sm:py-20">
          <Badge variant="soft" className="gap-1.5">
            <BookOpen className="h-3.5 w-3.5" />
            Истории успеха
          </Badge>
          <h1 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Они прошли через трудности — и нашли свой путь
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Предприниматели, учёные, спортсмены и художники, которые справились
            со стрессом, тревогой и сомнениями. Не недостижимый идеал, а опора и
            ориентир.
          </p>
        </div>
      </section>

      {/* Лента карточек */}
      <section className="container py-14 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>
    </>
  );
}
