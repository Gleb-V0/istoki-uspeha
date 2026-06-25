export type EventCategory =
  | "Профориентация"
  | "Психология"
  | "Истории успеха"
  | "Мастер-класс";

export type PlatformEvent = {
  id: string;
  slug: string;
  title: string;
  category: EventCategory;
  /** Дата проведения в формате ISO (YYYY-MM-DD). */
  date: string;
  /** Время начала по МСК. */
  time: string;
  /** Длительность в минутах. */
  durationMin: number;
  /** Приглашённый спикер. */
  speaker: string;
  /** Роль/регалии спикера. */
  speakerRole: string;
  /** Короткое описание встречи. */
  description: string;
  format: "Онлайн";
  /** Сколько мест осталось (для мок-записи). */
  seatsLeft: number;
  /** Доступно бесплатно или по подписке. */
  access: "Бесплатно" | "По подписке";
};

/** Мок-данные еженедельных мероприятий платформы. */
export const events: PlatformEvent[] = [
  {
    id: "1",
    slug: "kak-vybrat-professiyu",
    title: "Как выбрать профессию и не пожалеть",
    category: "Профориентация",
    date: "2026-12-18",
    time: "18:00",
    durationMin: 60,
    speaker: "Марина Фомина",
    speakerRole: "Профориентолог, 11 лет практики",
    description:
      "Разбираем, как соотнести интересы и способности с реальными профессиями, и собираем личный план первых шагов.",
    format: "Онлайн",
    seatsLeft: 42,
    access: "Бесплатно",
  },
  {
    id: "2",
    slug: "spokoystvie-pered-ege",
    title: "Спокойствие перед ЕГЭ: техники саморегуляции",
    category: "Психология",
    date: "2026-12-25",
    time: "18:00",
    durationMin: 75,
    speaker: "Елена Кравцова",
    speakerRole: "Психолог, специалист по тревожности",
    description:
      "Практический тренинг: дыхание, работа с мыслями и план подготовки, который снижает стресс, а не усиливает его.",
    format: "Онлайн",
    seatsLeft: 18,
    access: "Бесплатно",
  },
  {
    id: "3",
    slug: "put-v-it-bez-vygoraniya",
    title: "Путь в ИТ без выгорания: честный разговор",
    category: "Истории успеха",
    date: "2027-01-15",
    time: "19:00",
    durationMin: 90,
    speaker: "Тимур Ахметов",
    speakerRole: "Разработчик, ментор студенческих команд",
    description:
      "Спикер рассказывает о своём пути через отказы и синдром самозванца и отвечает на вопросы участников.",
    format: "Онлайн",
    seatsLeft: 7,
    access: "Бесплатно",
  },
  {
    id: "4",
    slug: "uverennost-i-vystupleniya",
    title: "Уверенность в себе и выступления без страха",
    category: "Мастер-класс",
    date: "2027-01-22",
    time: "18:30",
    durationMin: 60,
    speaker: "Юлия Зайцева",
    speakerRole: "Коуч по уверенности",
    description:
      "Учимся справляться со страхом оценки и спокойно говорить перед людьми — с упражнениями, которые можно повторить дома.",
    format: "Онлайн",
    seatsLeft: 30,
    access: "По подписке",
  },
  {
    id: "5",
    slug: "kak-nayti-svoih-lyudey",
    title: "Как найти своих людей и перестать чувствовать одиночество",
    category: "Психология",
    date: "2027-01-29",
    time: "18:00",
    durationMin: 60,
    speaker: "Сергей Доронин",
    speakerRole: "Психолог, тема общения и границ",
    description:
      "Говорим про дружбу, границы и поиск близких по духу людей — офлайн и в онлайн-сообществах.",
    format: "Онлайн",
    seatsLeft: 25,
    access: "Бесплатно",
  },
  {
    id: "6",
    slug: "professii-budushchego",
    title: "Профессии будущего: что попробовать уже сейчас",
    category: "Профориентация",
    date: "2027-02-05",
    time: "19:00",
    durationMin: 75,
    speaker: "Игорь Беляев",
    speakerRole: "Профориентолог в сфере технологий",
    description:
      "Обзор востребованных направлений и идеи профпроб, которые помогут проверить интерес на практике.",
    format: "Онлайн",
    seatsLeft: 50,
    access: "По подписке",
  },
];
