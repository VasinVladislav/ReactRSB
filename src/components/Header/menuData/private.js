import * as Icons from "./icons";

export const privateMenu = {
  banking: {
    id: "banking",
    text: "Банковские услуги",
    icon: Icons.premiumBankIcon,
    items: [
      { id: "premium_cashback_cards", text: "Премиальные карты с кэшбэком", href: "#" },
      { id: "high_rate_deposits", text: "Вклады с повышенной ставкой", href: "#" },
      { id: "borderless_currency_transfers", text: "Валютные переводы без границ", href: "#" },
      { id: "safe_deposit_boxes", text: "Сейфовые ячейки", href: "#" },
      { id: "individual_lending_terms", text: "Индивидуальные условия кредитования", href: "#" },
    ],
  },
  wealth: {
    id: "wealth",
    text: "Инвестиции",
    icon: Icons.diamondIcon,
    items: [
      { id: "trust_management", text: "Доверительное управление", href: "#" },
      { id: "structured_products", text: "Структурные продукты", href: "#" },
      { id: "international_markets_access", text: "Доступ к международным рынкам", href: "#" },
      { id: "alternative_investments", text: "Альтернативные инвестиции (арт, вино)", href: "#" },
      { id: "unit_linked_insurance", text: "Инвестиционное страхование жизни", href: "#" },
    ],
  },
  consulting: {
    id: "consulting",
    text: "Консалтинг",
    icon: Icons.strategyIcon,
    items: [
      { id: "tax_consulting", text: "Налоговое консультирование", href: "#" },
      { id: "family_office_legal", text: "Юридическая поддержка (Family Office)", href: "#" },
      { id: "asset_inheritance", text: "Наследование активов", href: "#" },
      { id: "currency_control", text: "Валютный контроль", href: "#" },
      { id: "cfc_reporting", text: "Подготовка отчетности для КИК", href: "#" },
    ],
  },
  lifestyle: {
    id: "lifestyle",
    text: "Лайфстайл",
    icon: Icons.conciergeIcon,
    items: [
      { id: "concierge_24_7", text: "Персональный консьерж 24/7", href: "#" },
      { id: "airport_lounge_access", text: "Доступ в бизнес-залы аэропортов", href: "#" },
      { id: "hotel_restaurant_privileges", text: "Привилегии в отелях и ресторанах", href: "#" },
      { id: "jet_yacht_charter", text: "Аренда бизнес-джетов и яхт", href: "#" },
      { id: "private_events_invitations", text: "Приглашения на закрытые мероприятия", href: "#" },
    ],
  },
};
