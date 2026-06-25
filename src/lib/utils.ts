import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Префикс basePath для статических ассетов из public/.
 * Нужен для GitHub Pages, где сайт раздаётся из подкаталога /<repo>/.
 * Локально и на Vercel переменная пустая → путь не меняется.
 */
export function asset(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path}`;
}
