import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Оплата прошла успешно" };

export default function PaymentSuccessPage() {
  return (
    <section className="brand-gradient">
      <div className="container flex flex-col items-center py-24 text-center sm:py-32">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-primary">
          <Check className="h-10 w-10" />
        </span>

        <h1 className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl">
          Оплата прошла успешно!
        </h1>
        <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
          Подписка «Премиум» активирована. Теперь вам доступны все мероприятия,
          закрытые клубы и льготные консультации.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/account">Перейти в личный кабинет</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">На главную</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
