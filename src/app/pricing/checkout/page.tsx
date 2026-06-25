import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, ArrowLeft, Crown, Lock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DemoSubscribeButton } from "@/components/demo-subscribe-button";

export const metadata: Metadata = { title: "Оформление подписки" };

const planInfo: Record<string, { name: string; price: string; period: string }> = {
  premium: { name: "Премиум", price: "990 ₽", period: "в месяц" },
};

export default function CheckoutPage({
  searchParams,
}: {
  searchParams: { plan?: string };
}) {
  const plan = planInfo[searchParams.plan ?? "premium"] ?? planInfo.premium;

  return (
    <section className="brand-gradient">
      <div className="container flex flex-col items-center py-20 sm:py-28">
        <Badge variant="soft" className="gap-1.5">
          <Lock className="h-3.5 w-3.5" />
          Демо-режим
        </Badge>

        <span className="mt-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm">
          <CreditCard className="h-8 w-8" />
        </span>

        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Оформление подписки
        </h1>
        <p className="mt-3 max-w-xl text-center text-base leading-relaxed text-muted-foreground">
          Это демонстрационная версия — онлайн-оплата ещё не подключена. В
          рабочей версии здесь будет безопасная оплата подписки.
        </p>

        {/* Сводка по выбранному плану */}
        <Card className="mt-8 w-full max-w-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 font-semibold">
                <Crown className="h-5 w-5 text-primary" />
                Тариф «{plan.name}»
              </span>
              <Badge variant="soft">Выбрано</Badge>
            </div>
            <div className="mt-4 flex items-end gap-1 border-t pt-4">
              <span className="text-3xl font-bold tracking-tight text-primary">
                {plan.price}
              </span>
              <span className="pb-1 text-sm text-muted-foreground">
                {plan.period}
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Консультации психолога оплачиваются отдельно по льготной цене.
              Подписку можно отменить в любой момент.
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <DemoSubscribeButton />
          <Button asChild variant="outline">
            <Link href="/pricing">
              <ArrowLeft className="h-4 w-4" />
              Назад к тарифам
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
