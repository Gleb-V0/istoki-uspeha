import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "О нас" };

export default function AboutPage() {
  return (
    <PagePlaceholder
      eyebrow="О проекте"
      title="О платформе «Истоки успеха»"
      description="Здесь появится подробный рассказ о миссии проекта, команде и подходе к поддержке школьников. Раздел в разработке."
    />
  );
}
