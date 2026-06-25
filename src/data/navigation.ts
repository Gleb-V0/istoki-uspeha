export type NavItem = {
  title: string;
  href: string;
};

/** Основная навигация в шапке сайта. */
export const mainNav: NavItem[] = [
  { title: "Главная", href: "/" },
  { title: "Истории успеха", href: "/stories" },
  { title: "Поддержка", href: "/support" },
  { title: "Сообщества", href: "/communities" },
  { title: "Мероприятия", href: "/events" },
  { title: "Тарифы", href: "/pricing" },
];

/** Ссылки в подвале, сгруппированные по разделам. */
export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Платформа",
    items: [
      { title: "Истории успеха", href: "/stories" },
      { title: "Поддержка", href: "/support" },
      { title: "Сообщества", href: "/communities" },
      { title: "Мероприятия", href: "/events" },
    ],
  },
  {
    title: "Проект",
    items: [
      { title: "О нас", href: "/about" },
      { title: "Тарифы", href: "/pricing" },
      { title: "Стать партнёром", href: "/partners" },
      { title: "Контакты", href: "/contacts" },
    ],
  },
  {
    title: "Документы",
    items: [
      { title: "Политика конфиденциальности", href: "/privacy" },
      { title: "Согласие на обработку данных", href: "/consent" },
      { title: "Правила платформы", href: "/terms" },
    ],
  },
];
