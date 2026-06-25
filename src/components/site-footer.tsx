import Link from "next/link";
import { Sprout } from "lucide-react";

import { footerNav } from "@/data/navigation";

/** Подвал сайта: краткая информация о проекте и навигация по разделам. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t bg-secondary/40">
      <div className="container py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                <Sprout className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-base font-bold tracking-tight">
                Истоки успеха
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Онлайн-платформа психологической поддержки и профориентации для
              школьников 9–11 классов. Помогаем справляться со стрессом,
              находить единомышленников и раскрывать свой потенциал.
            </p>
          </div>

          {footerNav.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t pt-6 text-sm text-muted-foreground">
          <p>© {year} «Истоки успеха». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
