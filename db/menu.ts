export enum MENU_HASH {
  ABOUT = "about",
  PARTNER = "partner",
  HOW_CAN = "how_can",
  PLUS = "plus",
  INTERACTIVE = "interactive",
  PRICES = "prises",
}

export const menu = [
  {
    label: "О Продукте",
    hash: MENU_HASH.ABOUT,
  },
  // {
  //   label: "Партнеры",
  //   hash: MENU_HASH.PARTNER,
  // },
  {
    label: "Как это работает",
    hash: MENU_HASH.HOW_CAN,
  },
  {
    label: "Преимущества",
    hash: MENU_HASH.PLUS,
  },
  {
    label: "Индустрии",
    hash: MENU_HASH.INTERACTIVE,
  },
  {
    label: "Тарифы",
    hash: MENU_HASH.PRICES,
  },
];
