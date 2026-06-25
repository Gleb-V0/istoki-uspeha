import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Мероприятия" };

export default function EventsPage() {
  return (
    <PagePlaceholder
      eyebrow="Мероприятия"
      title="Еженедельные встречи со спикерами"
      description="Здесь будет расписание профориентационных мероприятий и групповых тренингов с приглашёнными экспертами. Раздел в разработке."
    />
  );
}
