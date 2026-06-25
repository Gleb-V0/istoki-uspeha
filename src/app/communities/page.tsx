import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Сообщества" };

export default function CommunitiesPage() {
  return (
    <PagePlaceholder
      eyebrow="Сообщества"
      title="Тематические чаты, где можно найти своих"
      description="Здесь появятся сообщества по интересам, где можно обсудить волнующее и почувствовать, что ты не один. Раздел в разработке."
    />
  );
}
