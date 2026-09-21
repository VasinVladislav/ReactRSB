import * as Icons from "./icons";

export const individualsMenu = {
  credit: {
    id: "credit",
    text: "Кредиты",
    icon: Icons.percent,
    items: [
      { id: "cash_credit", text: "Кредит наличными", href: "#" },
      { id: "car_credit", text: "Автокредит", href: "#" },
      { id: "refinancing_credit", text: "Рефинансирование кредитов", href: "#" },
      { id: "education_credit", text: "Образовательный кредит с господдержкой", href: "#" },
    ],
  },
  house: {
    id: "house",
    text: "Ипотека",
    icon: Icons.house,
    items: [
      { id: "mortgage_selection", text: "Подбор ипотеки", href: "#" },
      { id: "secondary_housing", text: "Вторичное жильё", href: "#" },
      { id: "house_mortgage", text: "Ипотека на дом", href: "#" },
      { id: "family_mortgage", text: "Семейная", href: "#" },
      { id: "new_buildings", text: "Новостройки", href: "#" },
      { id: "it_mortgage", text: "Для ИТ-специалистов", href: "#" },
      { id: "commercial_real_estate", text: "Коммерческая недвижимость", href: "#" },
    ],
  },
  card: {
    id: "card",
    text: "Карты",
    icon: Icons.card,
    items: [
      { id: "debit_cards", text: "Дебетовые", href: "#" },
      { id: "credit_cards", text: "Кредитные", href: "#" },
      { id: "mir_pay", text: "Mir Pay", href: "#" },
    ],
  },
  deposits: {
    id: "deposits",
    text: "Вклады",
    icon: Icons.bag,
    items: [
      { id: "new_money_deposit", text: "Вклад для новых денег", href: "#" },
      { id: "pension_deposit", text: "Пенсионный вклад", href: "#" },
      { id: "social_deposit", text: "Социальный вклад", href: "#" },
    ],
  },
  investments: {
    id: "investments",
    text: "Инвестиции",
    icon: Icons.bar,
    items: [
      { id: "brokerage_account", text: "Брокерский счёт", href: "#" },
      { id: "iis", text: "ИИС", href: "#" },
      { id: "securities_catalog", text: "Каталог бумаг", href: "#" },
      { id: "currency_exchange", text: "Обмен валюты на бирже", href: "#" },
      { id: "precious_securities", text: "Драгоценные бумаги", href: "#" },
      { id: "tariffs", text: "Тарифы", href: "#" },
    ],
  },
  insurance: {
    id: "insurance",
    text: "Страхование",
    icon: Icons.shield,
    items: [
      { id: "osago", text: "ОСАГО", href: "#" },
      { id: "kasko", text: "Каско", href: "#" },
      { id: "health_insurance", text: "Здоровье", href: "#" },
      { id: "roadside_assistance", text: "Помощь на дорогах", href: "#" },
      { id: "home_insurance", text: "Для дома и квартиры", href: "#" },
    ],
  },
  journey: {
    id: "journey",
    text: "Путешествия",
    icon: Icons.plane,
    items: [
      { id: "flight_tickets", text: "Авиабилеты", href: "#" },
      { id: "tours", text: "Туры", href: "#" },
      { id: "trips", text: "Поездки", href: "#" },
      { id: "hotels", text: "Отели", href: "#" },
    ],
  },
  services: {
    id: "services",
    text: "Сервисы",
    icon: Icons.services,
    items: [
      { id: "mobile_app", text: "Мобильное приложение", href: "#" },
      { id: "card_readiness_check", text: "Проверка готовности карты", href: "#" },
      { id: "certificates_statements", text: "Справки и выписки", href: "#" },
    ],
  },
};
