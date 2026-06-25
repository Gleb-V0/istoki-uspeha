import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Quote, Lightbulb, ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StoryCard } from "@/components/story-card";
import { stories, getStoryBySlug } from "@/data/stories";

type Params = { slug: string };

/** Заранее генерируем страницы для всех историй. */
export function generateStaticParams(): Params[] {
  return stories.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const story = getStoryBySlug(params.slug);
  if (!story) return { title: "История не найдена" };
  return {
    title: story.name,
    description: story.excerpt,
  };
}

export default function StoryPage({ params }: { params: Params }) {
  const story = getStoryBySlug(params.slug);
  if (!story) notFound();

  // Ещё 3 истории для блока «другие истории».
  const more = stories.filter((s) => s.id !== story.id).slice(0, 3);

  return (
    <>
      {/* Шапка истории */}
      <section className="brand-gradient">
        <div className="container max-w-3xl py-12 sm:py-16">
          <Button asChild variant="ghost" size="sm" className="-ml-2 mb-6">
            <Link href="/stories">
              <ArrowLeft className="h-4 w-4" />
              Все истории
            </Link>
          </Button>

          <div className="flex items-center gap-4">
            <Image
              src={story.photo}
              alt={`Фото: ${story.name}`}
              width={80}
              height={80}
              className="h-20 w-20 shrink-0 rounded-3xl object-cover shadow-sm ring-1 ring-border"
              priority
            />
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {story.name}
              </h1>
              <p className="mt-1 text-muted-foreground">{story.role}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Badge variant="soft">{story.field}</Badge>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {story.readingTime} мин чтения
            </span>
          </div>

          <p className="mt-5 rounded-2xl border bg-card/70 p-4 text-sm">
            <span className="font-semibold">Трудность на пути: </span>
            {story.challenge}
          </p>
        </div>
      </section>

      {/* Текст истории */}
      <article className="container max-w-3xl py-12">
        <figure className="rounded-2xl border bg-secondary/40 p-6 sm:p-7">
          <Quote className="h-7 w-7 text-primary/60" />
          <blockquote className="mt-3 text-xl font-medium leading-relaxed sm:text-2xl">
            «{story.quote}»
          </blockquote>
        </figure>

        <div className="mt-8 space-y-5">
          {story.content.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-foreground/90">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Выводы-ориентиры */}
        <div className="mt-10 rounded-2xl border bg-card p-6 sm:p-7">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Lightbulb className="h-5 w-5 text-primary" />
            Что взять для себя
          </h2>
          <ul className="mt-4 space-y-3">
            {story.takeaways.map((t, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Теги */}
        <div className="mt-8 flex flex-wrap gap-2">
          {story.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="font-normal">
              #{tag}
            </Badge>
          ))}
        </div>
      </article>

      {/* Другие истории */}
      <section className="border-t bg-secondary/40">
        <div className="container py-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              Другие истории
            </h2>
            <Button asChild variant="ghost" size="sm">
              <Link href="/stories">
                Все истории
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((s) => (
              <StoryCard key={s.id} story={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
