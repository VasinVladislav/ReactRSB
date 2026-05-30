import bag from "./icons/bag.png";
import bar from "./icons/bar.png";
import calculator from "./icons/Calculator.png"
import card from "./icons/card.png";
import business_card from "./icons/Card_to_card.png"
import truck from "./icons/Delivery.png"
import house from "./icons/house.png";
import money_box from "./icons/Money_box.png"
import percent from "./icons/percent.png";
import plane from "./icons/plane.png";
import qr_code from "./icons/Qr_code.png"
import startup from "./icons/Rocket.png"
import services from "./icons/services.png";
import shield from "./icons/shield.png";
import premiumBankIcon from "./icons/Private_bank.png"
import diamondIcon from "./icons/Icon_crystal.png"
import strategyIcon from "./icons/Graph.png"
import conciergeIcon from "./icons/Juice.png"
import TabMenu from "./TabMenu";

export function Individuals() {

    const INDIVIDUALS_NAV_ITEMS = [
        { id: 'credit', text: 'Кредиты', icon: percent },
        { id: 'house', text: 'Ипотека', icon: house },
        { id: 'card', text: 'Карты', icon: card },
        { id: 'deposits', text: 'Вклады', icon: bag },
        { id: 'investments', text: 'Инвестиции', icon: bar },
        { id: 'insurance', text: 'Страхование', icon: shield },
        { id: 'journey', text: 'Путешествия', icon: plane },
        { id: 'services', text: 'Сервисы', icon: services },
    ];

    const INDIVIDUALS_MENU_DATA = {
        credit: [
            "Кредит наличными",
            "Автокредит",
            "Рефинансирование кредитов",
            "Образовательный кредит с господдержкой"
        ],
        house: [
            "Подбор ипотеки",
            "Вторичное жильё",
            "Ипотека на дом",
            "Семейная",
            "Новостройки",
            "Для ИТ-специалистов",
            "Коммерческая недвижимость"
        ],
        card: [
            "Дебетовые",
            "Кредитные",
            "Mir Pay"
        ],
        deposits: [
            "Вклад для новых денег",
            "Пенсионный вклад",
            "Социальный вклад"
        ],
        investments: [
            "Брокерский счёт",
            "ИИС",
            "Каталог бумаг",
            "Обмен валюты на бирже",
            "Драгоценные бумаги",
            "Тарифы"
        ],
        insurance: [
            "ОСАГО",
            "Каско",
            "Здоровье",
            "Помощь на дорогах",
            "Для дома и квартиры"
        ],
        journey: [
            "Авиабилеты",
            "Туры",
            "Поездки",
            "Отели"
        ],
        services: [
            "Мобильное приложение",
            "Проверка готовности карты",
            "Справки и выписки"
        ]
    };

    return <TabMenu navItems={INDIVIDUALS_NAV_ITEMS} menuData={INDIVIDUALS_MENU_DATA} />;
}

export function Business() {

    const BUSINESS_NAV_ITEMS = [
        { id: 'current_account', text: 'Расчётный счёт', icon: money_box },
        { id: 'registration', text: 'Регистрация бизнеса', icon: startup },
        { id: 'accounting', text: 'Бухгалтерия', icon: calculator },
        { id: 'business_cards', text: 'Карты', icon: business_card },
        { id: 'payments', text: 'Приём платежей', icon: qr_code },
        { id: 'solutions', text: 'Отраслевые решения', icon: truck },
    ];

    const BUSINESS_MENU_DATA = {
        current_account: [
            "Расчётный счёт ИП",
            "Расчётный счёт ООО",
            "Тарифы"
        ],
        registration: [
            "Регистрация ИП",
            "Регистрация ООО",
            "Решения для старта",
            "Самозанятые"
        ],
        accounting: [
            "Баланс ЕНС",
            "Налоговая копилка",
            "Бухгалтерия УСН Доходы",
            "Сервис для АУСН"
        ],
        business_cards: [
            "Мир в кармане",
            "Мир",
            "Mir Supreme"
        ],
        payments: [
            "Торговый эквайринг",
            "Интернет эквайринг",
            "Приём платежей по СБП",
            "Приём платежей по QR",
            "Приём платежей через смартфон",
            "Онлайн кассы"
        ],
        solutions: [
            "Маркетплейсы",
            "Розница",
            "Автодилеры",
            "Агенство путешествий"
        ],
    };

    return <TabMenu navItems={BUSINESS_NAV_ITEMS} menuData={BUSINESS_MENU_DATA} />;
}

export function PrivateBanking() {

    const PRIVATE_NAV_ITEMS = [
        { id: 'banking', text: 'Банковские услуги', icon: premiumBankIcon },
        { id: 'wealth', text: 'Инвестиции', icon: diamondIcon },
        { id: 'consulting', text: 'Консалтинг', icon: strategyIcon },
        { id: 'lifestyle', text: 'Лайфстайл', icon: conciergeIcon },
    ];

    const PRIVATE_MENU_DATA = {
        banking: [
            "Премиальные карты с кэшбэком",
            "Вклады с повышенной ставкой",
            "Валютные переводы без границ",
            "Сейфовые ячейки",
            "Индивидуальные условия кредитования"
        ],
        wealth: [
            "Доверительное управление",
            "Структурные продукты",
            "Доступ к международным рынкам",
            "Альтернативные инвестиции (арт, вино)",
            "Инвестиционное страхование жизни"
        ],
        consulting: [
            "Налоговое консультирование",
            "Юридическая поддержка (Family Office)",
            "Наследование активов",
            "Валютный контроль",
            "Подготовка отчетности для КИК"
        ],
        lifestyle: [
            "Персональный консьерж 24/7",
            "Доступ в бизнес-залы аэропортов",
            "Привилегии в отелях и ресторанах",
            "Аренда бизнес-джетов и яхт",
            "Приглашения на закрытые мероприятия"
        ]
    };

    return <TabMenu navItems={PRIVATE_NAV_ITEMS} menuData={PRIVATE_MENU_DATA} />;
}