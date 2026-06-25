"use client";

import { useRouter } from "next/navigation";
import { Crown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useStore } from "@/components/store-provider";

/** Демо-оформление подписки: без оплаты включает Премиум и ведёт в кабинет. */
export function DemoSubscribeButton() {
  const router = useRouter();
  const { setSubscription } = useStore();

  return (
    <Button
      onClick={() => {
        setSubscription("premium");
        router.push("/account");
      }}
    >
      <Crown className="h-4 w-4" />
      Оформить в демо-режиме
    </Button>
  );
}
