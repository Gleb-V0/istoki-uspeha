import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Поддержка" };

export default function SupportPage() {
  return (
    <PagePlaceholder
      eyebrow="Поддержка"
      title="Помощь психологов и коучей"
      description="Здесь можно будет записаться на консультацию к специалисту с действующей лицензией, чтобы справляться с тревогой и развиваться, не выгорая. Раздел в разработке."
    />
  );
}
