import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Стать партнёром" };

export default function PartnersPage() {
  return (
    <PagePlaceholder
      eyebrow="Партнёрам"
      title="Сотрудничество и партнёрство"
      description="Здесь появится информация для школ, спонсоров и экспертов, которые хотят поддержать проект. Раздел в разработке."
    />
  );
}
