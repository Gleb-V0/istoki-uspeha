"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useStore } from "@/components/store-provider";

/** Кнопка тарифа, зависящая от состояния пользователя (вход + подписка). */
export function PlanCta({
  planKey,
  href,
  label,
}: {
  planKey: "free" | "premium";
  href: string;
  label: string;
}) {
  const { user, subscription, hydrated, openAuth } = useStore();
  const isPremium = subscription === "premium";

  if (planKey === "free") {
    // Премиум-подписчику кнопка бесплатного тарифа не нужна.
    if (hydrated && isPremium) return null;
    // Зарегистрированный пользователь на бесплатном тарифе — это его текущий тариф.
    if (hydrated && user) {
      return (
        <Button disabled variant="outline" size="lg" className="mt-7 w-full">
          Текущий тариф
        </Button>
      );
    }
    return (
      <Button
        variant="outline"
        size="lg"
        className="mt-7 w-full"
        onClick={openAuth}
      >
        {label}
      </Button>
    );
  }

  // Премиум-карточка: для подписчика — текущий тариф (некликабельно).
  if (hydrated && isPremium) {
    return (
      <Button disabled size="lg" className="mt-7 w-full">
        Текущий тариф
      </Button>
    );
  }
  return (
    <Button asChild size="lg" className="mt-7 w-full">
      <Link href={href}>
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  );
}
