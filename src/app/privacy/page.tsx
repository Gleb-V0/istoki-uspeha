import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Политика конфиденциальности" };

export default function PrivacyPage() {
  return (
    <PagePlaceholder
      eyebrow="Документы"
      title="Политика конфиденциальности"
      description="Здесь будет размещён полный текст политики обработки и защиты персональных данных. Раздел в разработке."
    />
  );
}
