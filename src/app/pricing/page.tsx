import type { Metadata } from "next";
import { Check, Minus, Sparkles, Crown, Stethoscope, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PlanCta } from "@/components/plan-cta";

export const metadata: Metadata = {
  title: "Тарифы",
  description:
    "Бесплатный базовый доступ и Премиум за 990 ₽/мес: закрытые клубы, все мероприятия, расширенный контент и льготные консультации.",
};

type Plan = {
  key: "free" | "premium";
  name: string;
  price: string;
  period?: string;
  tagline: string;
  features: string[];
  cta: string;
  href: string;
  highlighted: boolean;
};

const plans: Plan[] = [
  {
    key: "free",
    name: "Бесплатный",
    price: "0 ₽",
    tagline: "Базовый доступ ко всему главному — навсегда бесплатно.",
    features: [
      "Истории успеха",
      "Общие тематические чаты",
      "Инструменты самопомощи",
      "Часть мероприятий",
    ],
    cta: "Начать бесплатно",
    href: "/login",
    highlighted: false,
  },
  {
    key: "premium",
    name: "Премиум",
    price: "990 ₽",
    period: "/ мес",
    tagline: "Максимум поддержки, контента и закрытых возможностей.",
    features: [
      "Всё из бесплатного тарифа",
      "Закрытые клубы по интересам",
      "Все мероприятия и мастер-классы",
      "Расширенный контент и подборки",
      "Льготная цена на консультации психолога",
      "Приоритетная поддержка",
    ],
    cta: "Оформить Премиум",
    href: "/pricing/checkout?plan=premium",
    highlighted: true,
  },
];

type Row = { feature: string; free: boolean | string; premium: boolean | string };

const comparison: Row[] = [
  { feature: "Истории успеха", free: true, premium: true },
  { feature: "Общие тематические чаты", free: true, premium: true },
  { feature: "Инструменты самопомощи", free: true, premium: true },
  { feature: "Доступ к мероприятиям", free: "Часть", premium: "Все" },
  { feature: "Закрытые клубы по интересам", free: false, premium: true },
  { feature: "Расширенный контент и подборки", free: false, premium: true },
  { feature: "Льготная цена на консультации", free: false, premium: true },
  { feature: "Приоритетная поддержка", free: false, premium: true },
];

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium">{value}</span>;
  }
  return value ? (
    <Check className="mx-auto h-5 w-5 text-primary" aria-label="Включено" />
  ) : (
    <Minus className="mx-auto h-5 w-5 text-muted-foreground/50" aria-label="Недоступно" />
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Шапка раздела */}
      <section className="brand-gradient">
        <div className="container flex flex-col items-center py-16 text-center sm:py-20 animate-rise">
          <Badge variant="soft" className="gap-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Тарифы
          </Badge>
          <h1 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Базовый доступ — бесплатно. Больше — в Премиуме
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Начните бесплатно и переходите на Премиум, когда захотите больше
            поддержки, мероприятий и закрытых клубов.
          </p>
        </div>
      </section>

      {/* Карточки тарифов */}
      <section className="container py-14 sm:py-16">
        <div className="mx-auto grid max-w-4xl items-start gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.highlighted
                  ? "relative border-primary/40 shadow-lg ring-2 ring-primary"
                  : "relative"
              }
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                  <Crown className="h-3.5 w-3.5" />
                  Популярный
                </span>
              )}
              <CardContent className="p-7">
                <h2 className="text-lg font-semibold tracking-tight">
                  {plan.name}
                </h2>
                <div className="mt-3 flex items-end gap-1">
                  <span
                    className={
                      plan.highlighted
                        ? "text-4xl font-bold tracking-tight text-primary"
                        : "text-4xl font-bold tracking-tight"
                    }
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="pb-1 text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {plan.tagline}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <PlanCta
                  planKey={plan.key}
                  href={plan.href}
                  label={plan.cta}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Сравнение возможностей */}
        <div className="mx-auto mt-14 max-w-4xl">
          <h2 className="text-center text-2xl font-bold tracking-tight">
            Сравнение возможностей
          </h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border">
            <table className="w-full min-w-[420px] text-left">
              <thead>
                <tr className="border-b bg-secondary/50">
                  <th className="px-5 py-3.5 text-sm font-semibold">
                    Возможность
                  </th>
                  <th className="w-28 px-3 py-3.5 text-center text-sm font-semibold">
                    Бесплатный
                  </th>
                  <th className="w-28 px-3 py-3.5 text-center text-sm font-semibold text-primary">
                    Премиум
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 1 ? "bg-secondary/20" : undefined}
                  >
                    <td className="px-5 py-3.5 text-sm">{row.feature}</td>
                    <td className="px-3 py-3.5 text-center">
                      <Cell value={row.free} />
                    </td>
                    <td className="px-3 py-3.5 text-center">
                      <Cell value={row.premium} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Консультации оплачиваются отдельно */}
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="flex flex-col gap-4 rounded-2xl border bg-accent/40 p-6 sm:flex-row sm:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Stethoscope className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <h3 className="text-base font-semibold">
                Консультации психолога — оплачиваются отдельно
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Индивидуальные консультации с психологом или коучем не входят в
                стоимость подписки и оплачиваются отдельно. Подписчики Премиума
                получают на них льготную цену. Групповые тренинги и часть встреч
                остаются бесплатными.
              </p>
            </div>
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Подписку можно отменить в любой момент.
          </p>
        </div>
      </section>
    </>
  );
}
