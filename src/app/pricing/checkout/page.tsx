import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, ArrowLeft, Crown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PayButton } from "@/components/pay-button";

export const metadata: Metadata = { title: "Оформление подписки" };

const plan = { name: "Премиум", price: "990 ₽", period: "в месяц" };

export default function CheckoutPage() {
  return (
    <section className="brand-gradient">
      <div className="container flex flex-col items-center py-20 sm:py-28">
        <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm">
          <CreditCard className="h-8 w-8" />
        </span>

        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Оформление подписки
        </h1>

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
          <PayButton />
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
