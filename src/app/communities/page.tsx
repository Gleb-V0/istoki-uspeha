import type { Metadata } from "next";
import { Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { CommunityCard } from "@/components/community-card";
import { communities } from "@/data/communities";

export const metadata: Metadata = {
  title: "Сообщества",
  description:
    "Тематические чаты платформы «Истоки успеха»: подготовка к ЕГЭ, профориентация, борьба с выгоранием, свободное общение и другие.",
};

export default function CommunitiesPage() {
  return (
    <>
      {/* Шапка раздела */}
      <section className="brand-gradient">
        <div className="container flex flex-col items-center py-16 text-center sm:py-20 animate-rise">
          <Badge variant="soft" className="gap-1.5">
            <Users className="h-3.5 w-3.5" />
            Сообщества
          </Badge>
          <h1 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Найди своих в тематических чатах
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Места, где можно обсудить волнующее, поделиться трудностями и
            почувствовать, что ты не один. Ниже — превью чатов; присоединиться
            можно после входа.
          </p>
        </div>
      </section>

      {/* Лента чатов */}
      <section className="container py-14 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {communities.map((community) => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>
      </section>
    </>
  );
}
