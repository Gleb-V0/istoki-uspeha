import {
  GraduationCap,
  Compass,
  BatteryCharging,
  MessageCircle,
  HeartPulse,
  Palette,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ChatInput } from "@/components/chat-input";
import type { Community } from "@/data/communities";

const iconMap: Record<Community["icon"], LucideIcon> = {
  ege: GraduationCap,
  career: Compass,
  burnout: BatteryCharging,
  free: MessageCircle,
  calm: HeartPulse,
  creative: Palette,
};

/** Цвета аватаров участников — в синей гамме, чередуются по индексу. */
const avatarColors = ["bg-brand-600", "bg-brand-400", "bg-brand-700", "bg-brand-500"];

function initials(name: string) {
  return name.slice(0, 1).toUpperCase();
}

/** Карточка-превью тематического чата с имитацией интерфейса переписки. */
export function CommunityCard({ community }: { community: Community }) {
  const Icon = iconMap[community.icon];

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow duration-200 hover:shadow-md">
      {/* Заголовок чата */}
      <div className="flex items-start gap-3 p-5">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm">
          <Icon className="h-6 w-6" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="truncate text-base font-semibold tracking-tight">
              {community.name}
            </h3>
            <span className="inline-flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
              <Users className="h-3.5 w-3.5" />
              {community.members.toLocaleString("ru-RU")}
            </span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {community.description}
          </p>
        </div>
      </div>

      {/* Превью переписки */}
      <div className="flex flex-1 flex-col gap-3 border-t bg-secondary/40 p-4">
        {community.messages.map((m, i) => (
          <div key={i} className="flex gap-2.5">
            <span
              className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white ${
                avatarColors[i % avatarColors.length]
              }`}
              aria-hidden
            >
              {initials(m.author)}
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-foreground">
                  {m.author}
                </span>
                {m.role && (
                  <Badge variant="soft" className="px-1.5 py-0 text-[10px]">
                    {m.role}
                  </Badge>
                )}
                <span className="text-[10px] text-muted-foreground">
                  {m.time}
                </span>
              </div>
              <p className="mt-1 w-fit rounded-2xl rounded-tl-sm border bg-background px-3 py-2 text-sm leading-relaxed">
                {m.text}
              </p>
            </div>
          </div>
        ))}

        {/* Поле ввода: активно после входа, иначе «запертая» плашка */}
        <ChatInput />
      </div>
    </Card>
  );
}
