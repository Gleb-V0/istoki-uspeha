import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Тарифы" };

export default function PricingPage() {
  return (
    <PagePlaceholder
      eyebrow="Тарифы"
      title="Бесплатная база и расширенная подписка"
      description="Базовый доступ к платформе остаётся бесплатным, а расширенные консультации и закрытые клубы будут доступны по подписке. Раздел в разработке."
    />
  );
}
