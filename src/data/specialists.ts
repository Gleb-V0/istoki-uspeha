export type Specialist = {
  id: string;
  name: string;
  /** Портрет (фото-заглушка; заменяется на реальное лицензированное фото). */
  photo: string;
  /** Роль на платформе. */
  role: "Психолог" | "Коуч" | "Профориентолог";
  /** Краткая специализация. */
  specialization: string;
  /** Опыт работы в годах. */
  experienceYears: number;
  /** Короткое описание подхода. */
  bio: string;
  /** Форматы работы. */
  formats: ("Индивидуально" | "Группа" | "Чат")[];
  /** Темы, с которыми помогает. */
  topics: string[];
  /** Есть ли действующая лицензия/сертификат. */
  licensed: boolean;
};

/** Мок-данные специалистов платформы. */
export const specialists: Specialist[] = [
  {
    id: "1",
    name: "Елена Кравцова",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    role: "Психолог",
    specialization: "Подростковая тревожность и стресс",
    experienceYears: 9,
    bio: "Работает с тревогой, паническими состояниями и стрессом перед экзаменами. КПТ-подход, бережные техники саморегуляции.",
    formats: ["Индивидуально", "Группа"],
    topics: ["тревожность", "стресс", "ЕГЭ"],
    licensed: true,
  },
  {
    id: "2",
    name: "Артём Лебедев",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    role: "Коуч",
    specialization: "Мотивация и борьба с выгоранием",
    experienceYears: 7,
    bio: "Помогает восстановить интерес к учёбе, выстроить режим без перегрузок и вернуть энергию.",
    formats: ["Индивидуально", "Чат"],
    topics: ["выгорание", "мотивация", "тайм-менеджмент"],
    licensed: true,
  },
  {
    id: "3",
    name: "Марина Фомина",
    photo: "https://randomuser.me/api/portraits/women/50.jpg",
    role: "Профориентолог",
    specialization: "Выбор профессии и сильные стороны",
    experienceYears: 11,
    bio: "Помогает разобраться в интересах и способностях, подобрать направление обучения и составить план развития.",
    formats: ["Индивидуально", "Группа"],
    topics: ["профориентация", "сильные стороны", "цели"],
    licensed: true,
  },
  {
    id: "4",
    name: "Сергей Доронин",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    role: "Психолог",
    specialization: "Отношения со сверстниками и одиночество",
    experienceYears: 6,
    bio: "Поддерживает в темах общения, конфликтов и чувства одиночества, помогает выстраивать здоровые границы.",
    formats: ["Индивидуально", "Чат"],
    topics: ["общение", "одиночество", "границы"],
    licensed: true,
  },
  {
    id: "5",
    name: "Юлия Зайцева",
    photo: "https://randomuser.me/api/portraits/women/57.jpg",
    role: "Коуч",
    specialization: "Уверенность и публичные выступления",
    experienceYears: 8,
    bio: "Помогает справляться со страхом оценки, развивать уверенность и спокойно выступать перед аудиторией.",
    formats: ["Группа", "Чат"],
    topics: ["уверенность", "самооценка", "выступления"],
    licensed: true,
  },
  {
    id: "6",
    name: "Игорь Беляев",
    photo: "https://randomuser.me/api/portraits/men/36.jpg",
    role: "Профориентолог",
    specialization: "ИТ и инженерные направления",
    experienceYears: 10,
    bio: "Рассказывает о реальных профессиях в технологиях, помогает попробовать разные роли и не ошибиться с выбором.",
    formats: ["Группа"],
    topics: ["технологии", "карьера", "профпробы"],
    licensed: true,
  },
];
