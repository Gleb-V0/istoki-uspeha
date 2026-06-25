# Истоки успеха

Онлайн-платформа психологической поддержки и профориентации для школьников 9–11 классов.
Этот репозиторий — каркас сайта платформы.

## Стек

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** + дизайн-система на CSS-переменных (сине-голубая гамма)
- **shadcn/ui** (компоненты `button`, `card`, `badge`)
- **lucide-react** — иконки

## Что уже готово

- Адаптивная шапка: логотип-название, навигация (Главная, Истории успеха, Поддержка,
  Сообщества, Мероприятия, Тарифы), кнопка «Войти», мобильное меню.
- Подвал с краткой информацией о проекте и разделами.
- Единая дизайн-система (`src/app/globals.css`, `tailwind.config.ts`).
- Главная страница — заглушка с позиционированием.
- Заглушки для разделов навигации (чтобы переходы работали без 404).
- Мок-данные: истории успеха, специалисты, мероприятия (`src/data/`).

## Структура

```
src/
  app/                 # маршруты App Router (главная + заглушки разделов)
    globals.css        # дизайн-токены и базовые стили
    layout.tsx         # общий каркас (шапка + контент + подвал)
    page.tsx           # главная (заглушка)
  components/
    ui/                # примитивы shadcn/ui (button, card, badge)
    site-header.tsx    # шапка
    site-footer.tsx    # подвал
    main-nav.tsx       # десктоп-навигация
    mobile-nav.tsx     # мобильное меню
    logo.tsx           # логотип-название
    page-placeholder.tsx
  data/                # мок-данные
    navigation.ts
    stories.ts
    specialists.ts
    events.ts
  lib/
    utils.ts           # утилита cn()
```

## Запуск локально

Нужен Node.js 18.18+ (рекомендуется 20+).

```bash
npm install      # установить зависимости
npm run dev      # запустить дев-сервер
```

Открой <http://localhost:3000>.

Другие команды:

```bash
npm run build    # production-сборка
npm run start    # запуск production-сборки
npm run lint     # проверка ESLint
```

## Деплой на Vercel

Проект — стандартное Next.js-приложение, Vercel определяет его автоматически
(никакой особой настройки и переменных окружения не нужно).

**Вариант А — через сайт Vercel (рекомендуется):**

1. Залей репозиторий на GitHub (или GitLab/Bitbucket):
   ```bash
   git remote add origin https://github.com/<логин>/istoki-uspeha.git
   git push -u origin main
   ```
2. Зайди на <https://vercel.com>, войди через GitHub.
3. **Add New… → Project** → выбери репозиторий `istoki-uspeha` → **Import**.
4. Настройки определятся сами (Framework: Next.js, Build: `next build`,
   Output: `.next`). Ничего менять не нужно — нажми **Deploy**.
5. Через ~1–2 минуты получишь публичную ссылку вида
   `https://istoki-uspeha.vercel.app`.

После этого каждый `git push` в ветку `main` будет автоматически
пересобирать и обновлять сайт.

**Вариант Б — через Vercel CLI (без GitHub):**

```bash
npm i -g vercel   # установить CLI
vercel            # первый запуск: вопросы по проекту → preview-ссылка
vercel --prod     # выложить в продакшен и получить публичную ссылку
```

> Внешние фото-портреты подгружаются с `randomuser.me` — этот хост уже разрешён
> в `next.config.mjs` (`images.remotePatterns`), на Vercel картинки работают без
> дополнительной настройки.

## Деплой на GitHub Pages

Проект собирается в статический экспорт (`output: "export"` в `next.config.mjs`),
поэтому его можно бесплатно разместить на GitHub Pages. В репозитории уже есть
GitHub Actions workflow `.github/workflows/deploy.yml`, который сам собирает и
публикует сайт.

Что нужно сделать один раз:

1. На GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Запушить изменения в ветку `main` (workflow запустится автоматически; можно
   также запустить вручную во вкладке **Actions → Deploy to GitHub Pages → Run workflow**).
3. После зелёной галочки сайт будет доступен по адресу
   `https://<логин>.github.io/<имя-репозитория>/`.

Workflow сам подставляет `basePath = /<имя-репозитория>` (через переменную
`NEXT_PUBLIC_BASE_PATH`), поэтому ссылки и ассеты работают в подкаталоге Pages.
Локально и на Vercel переменная не задаётся → сайт работает в корне без правок.

## Добавление компонентов shadcn/ui

Проект настроен под shadcn/ui (`components.json`), поэтому новые компоненты можно ставить так:

```bash
npx shadcn@latest add dialog
```
