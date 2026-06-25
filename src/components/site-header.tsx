import { Logo } from "@/components/logo";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { HeaderAuth } from "@/components/header-auth";

/** Адаптивная шапка сайта: логотип, навигация, вход и мобильное меню. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Logo />

        <MainNav />

        <div className="flex items-center gap-2">
          <HeaderAuth />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
