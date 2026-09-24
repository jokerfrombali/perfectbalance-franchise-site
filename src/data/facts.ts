// Факты компании. Всё, что помечено TODO, — не подтверждено заказчиком и выводится на сайте как «уточняется».
export const SITE = "https://perfectbalance.club";
export const FACTS = {
  since: 2018,
  cities: 24,
  closed: 3,
  netProfit2021: "117 550 032 ₽",
  margin: 26,
  paybackMonths: "10–14",
  feeSmall: 350000, // города 150–700 тыс.
  feeBig: 450000, // города 700 тыс.+
  minCity: 150000,
  dishesYear: 840,
  priceDay: "550–900 ₽",
  royalty: null as null | string, // TODO: уточнить у заказчика
  phone: "+7 (919) 404-33-23",
  whatsapp: "+7 (900) 066-33-23",
  telegram: "@ruslanius_g",
  founder: { name: null as null | string, role: "Основатель Perfect Balance" }, // TODO: имя и фото
};
// Смета запуска — по примеру с текущего сайта (город ~400 тыс.)
export const BUDGET = [
  { item: "Паушальный взнос", sum: 350000 },
  { item: "Ремонт помещения", sum: 150000 },
  { item: "Оборудование", sum: 200000 },
  { item: "Посуда и инвентарь", sum: 27000 },
  { item: "Аренда, первый месяц", sum: 20000 },
  { item: "Маркетинг на старт", sum: 150000 },
  { item: "Резерв на непредвиденное", sum: 200000 },
];
export const NAV = [
  { href: "/franshiza/", label: "Франшиза" },
  { href: "/stoimost/", label: "Стоимость" },
  { href: "/kalkulyator/", label: "Калькулятор" },
  { href: "/keysy/", label: "Кейсы" },
  { href: "/goroda/", label: "Города" },
  { href: "/osnovatel/", label: "Основатель" },
  { href: "/blog/", label: "Блог" },
];
export const rub = (n: number) => new Intl.NumberFormat("ru-RU").format(Math.round(n)) + " ₽";
