import type { Metadata } from "next";

import { AccountClient } from "@/components/account-client";

export const metadata: Metadata = {
  title: "Личный кабинет",
  description: "Ваши записи на консультации и мероприятия, статус подписки и быстрые ссылки.",
};

export default function AccountPage() {
  return <AccountClient />;
}
