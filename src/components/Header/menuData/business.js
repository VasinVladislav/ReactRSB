import * as Icons from "./icons";

export const businessMenu = {
  current_account: {
    id: "current_account",
    text: "Расчётный счёт",
    icon: Icons.money_box,
    items: [
      { id: "checking_account_ip", text: "Расчётный счёт ИП", href: "#" },
      { id: "checking_account_ooo", text: "Расчётный счёт ООО", href: "#" },
      { id: "tariffs", text: "Тарифы", href: "#" },
    ],
  },
  registration: {
    id: "registration",
    text: "Регистрация бизнеса",
    icon: Icons.startup,
    items: [
      { id: "registration_ip", text: "Регистрация ИП", href: "#" },
      { id: "registration_ooo", text: "Регистрация ООО", href: "#" },
      { id: "start_solutions", text: "Решения для старта", href: "#" },
      { id: "self_employed", text: "Самозанятые", href: "#" },
    ],
  },
  accounting: {
    id: "accounting",
    text: "Бухгалтерия",
    icon: Icons.calculator,
    items: [
      { id: "ens_balance", text: "Баланс ЕНС", href: "#" },
      { id: "tax_piggy_bank", text: "Налоговая копилка", href: "#" },
      { id: "accounting_usn_income", text: "Бухгалтерия УСН Доходы", href: "#" },
      { id: "ausn_service", text: "Сервис для АУСН", href: "#" },
    ],
  },
  business_cards: {
    id: "business_cards",
    text: "Карты",
    icon: Icons.business_card,
    items: [
      { id: "mir_in_pocket", text: "Мир в кармане", href: "#" },
      { id: "mir_card", text: "Мир", href: "#" },
      { id: "mir_supreme", text: "Mir Supreme", href: "#" },
    ],
  },
  payments: {
    id: "payments",
    text: "Приём платежей",
    icon: Icons.qr_code,
    items: [
      { id: "merchant_acquiring", text: "Торговый эквайринг", href: "#" },
      { id: "internet_acquiring", text: "Интернет эквайринг", href: "#" },
      { id: "sbp_payments", text: "Приём платежей по СБП", href: "#" },
      { id: "qr_payments", text: "Приём платежей по QR", href: "#" },
      { id: "smartphone_payments", text: "Приём платежей через смартфон", href: "#" },
      { id: "online_cash_registers", text: "Онлайн кассы", href: "#" },
    ],
  },
  solutions: {
    id: "solutions",
    text: "Отраслевые решения",
    icon: Icons.truck,
    items: [
      { id: "marketplaces", text: "Маркетплейсы", href: "#" },
      { id: "retail", text: "Розница", href: "#" },
      { id: "car_dealers", text: "Автодилеры", href: "#" },
      { id: "travel_agency", text: "Агенство путешествий", href: "#" },
    ],
  },
};
