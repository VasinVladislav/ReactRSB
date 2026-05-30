import bag from "./icons/bag.png";
import bar from "./icons/bar.png";
import calculator from "./icons/Calculator.png";
import card from "./icons/card.png";
import business_card from "./icons/Card_to_card.png";
import truck from "./icons/Delivery.png";
import strategyIcon from "./icons/Graph.png";
import house from "./icons/house.png";
import diamondIcon from "./icons/Icon_crystal.png";
import conciergeIcon from "./icons/Juice.png";
import money_box from "./icons/Money_box.png";
import percent from "./icons/percent.png";
import plane from "./icons/plane.png";
import premiumBankIcon from "./icons/Private_bank.png";
import qr_code from "./icons/Qr_code.png";
import startup from "./icons/Rocket.png";
import services from "./icons/services.png";
import shield from "./icons/shield.png";

export const INDIVIDUALS_NAV_ITEMS = [
    { id: 'credit', text: 'Кредиты', icon: percent },
    { id: 'house', text: 'Ипотека', icon: house },
    { id: 'card', text: 'Карты', icon: card },
    { id: 'deposits', text: 'Вклады', icon: bag },
    { id: 'investments', text: 'Инвестиции', icon: bar },
    { id: 'insurance', text: 'Страхование', icon: shield },
    { id: 'journey', text: 'Путешествия', icon: plane },
    { id: 'services', text: 'Сервисы', icon: services },
];

export const BUSINESS_NAV_ITEMS = [
    { id: 'current_account', text: 'Расчётный счёт', icon: money_box },
    { id: 'registration', text: 'Регистрация бизнеса', icon: startup },
    { id: 'accounting', text: 'Бухгалтерия', icon: calculator },
    { id: 'business_cards', text: 'Карты', icon: business_card },
    { id: 'payments', text: 'Приём платежей', icon: qr_code },
    { id: 'solutions', text: 'Отраслевые решения', icon: truck },
];
export const PRIVATE_NAV_ITEMS = [
    { id: 'banking', text: 'Банковские услуги', icon: premiumBankIcon },
    { id: 'wealth', text: 'Инвестиции', icon: diamondIcon },
    { id: 'consulting', text: 'Консалтинг', icon: strategyIcon },
    { id: 'lifestyle', text: 'Лайфстайл', icon: conciergeIcon },
];