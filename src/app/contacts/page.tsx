import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Контакты" };

export default function ContactsPage() {
  return (
    <PagePlaceholder
      eyebrow="Контакты"
      title="Связаться с командой"
      description="Здесь появятся контакты для вопросов, обратной связи и сотрудничества. Раздел в разработке."
    />
  );
}
