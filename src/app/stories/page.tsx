import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Истории успеха" };

export default function StoriesPage() {
  return (
    <PagePlaceholder
      eyebrow="Истории успеха"
      title="Реальные истории как опора и ориентир"
      description="Здесь появятся истории людей, которые прошли через стресс и трудности и нашли свой путь — не как недостижимый идеал, а как поддержка. Раздел в разработке."
    />
  );
}
