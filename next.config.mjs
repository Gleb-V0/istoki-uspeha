// basePath нужен для project-страниц GitHub Pages (https://<user>.github.io/<repo>/).
// На Vercel/локально переменная не задана → basePath пустой и сайт работает в корне.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Статический экспорт в папку out/ — для GitHub Pages (раздаёт только статику).
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // Оптимизация изображений требует сервера — для статики отключаем.
    unoptimized: true,
  },
};

export default nextConfig;
