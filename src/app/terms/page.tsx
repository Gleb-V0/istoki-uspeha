import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Правила платформы" };

export default function TermsPage() {
  return (
    <PagePlaceholder
      eyebrow="Документы"
      title="Правила платформы"
      description="Здесь будут размещены правила пользования платформой и условия участия. Раздел в разработке."
    />
  );
}
