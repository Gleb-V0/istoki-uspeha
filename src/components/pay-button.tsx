"use client";

import { useRouter } from "next/navigation";
import { CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useStore } from "@/components/store-provider";

/** Кнопка оплаты: включает Премиум и ведёт на экран успешной оплаты. */
export function PayButton() {
  const router = useRouter();
  const { setSubscription } = useStore();

  return (
    <Button
      onClick={() => {
        setSubscription("premium");
        router.push("/pricing/success");
      }}
    >
      <CreditCard className="h-4 w-4" />
      Оплатить
    </Button>
  );
}
