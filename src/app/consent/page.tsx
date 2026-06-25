import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Согласие на обработку данных" };

export default function ConsentPage() {
  return (
    <PagePlaceholder
      eyebrow="Документы"
      title="Согласие на обработку данных"
      description="Здесь будет размещён текст согласия на обработку персональных данных, в том числе для работы с несовершеннолетними. Раздел в разработке."
    />
  );
}
