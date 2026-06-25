import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Войти" };

export default function LoginPage() {
  return (
    <PagePlaceholder
      eyebrow="Вход"
      title="Вход и регистрация"
      description="Здесь появится вход для школьников и родителей с доступом к сообществам, записи к специалистам и мероприятиям. Раздел в разработке."
    />
  );
}
