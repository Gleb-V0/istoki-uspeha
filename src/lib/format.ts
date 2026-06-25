const monthsNom = [
  "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
];

const monthsGen = [
  "января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря",
];

const monthsShort = [
  "янв", "фев", "мар", "апр", "май", "июн",
  "июл", "авг", "сен", "окт", "ноя", "дек",
];

const weekdaysShort = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
const weekdaysFull = [
  "воскресенье", "понедельник", "вторник", "среда",
  "четверг", "пятница", "суббота",
];

/** Разбирает ISO-дату (YYYY-MM-DD) и возвращает части на русском (без зависимости от таймзоны). */
export function formatEventDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const weekdayIndex = new Date(y, m - 1, d).getDay();
  return {
    day: d,
    year: y,
    monthNom: monthsNom[m - 1],
    monthGen: monthsGen[m - 1],
    monthShort: monthsShort[m - 1],
    weekday: weekdaysFull[weekdayIndex],
    weekdayShort: weekdaysShort[weekdayIndex],
  };
}

/** Склонение слова «место» по числу свободных мест. */
export function seatsLabel(n: number) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "место";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return "места";
  return "мест";
}
