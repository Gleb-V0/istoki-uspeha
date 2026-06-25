import Link from "next/link";
import { Hammer, ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

/** Универсальная заглушка раздела, пока он в разработке. */
export function PagePlaceholder({
  eyebrow,
  title,
  description,
}: PagePlaceholderProps) {
  return (
    <section className="brand-gradient">
      <div className="container flex flex-col items-center py-24 text-center sm:py-32">
        <Badge variant="soft" className="gap-1.5">
          <Hammer className="h-3.5 w-3.5" />
          Раздел в разработке
        </Badge>
        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            На главную
          </Link>
        </Button>
      </div>
    </section>
  );
}
