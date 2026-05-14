import card from "./icons/card.png"
import percent from "./icons/percent.png"
import investments from "./icons/investments.png"

export const PERSONAL_DATA = [
    { 
        id: 'personal_credit', 
        title: 'Кредитная карта', 
        icon: card, 
        content: <><span><b>0 ₽</b> обслуживание навсегда</span><span><b>до 120 дней</b> без процентов</span></>
    },
    { 
        id: 'personal_debit', 
        title: 'Дебетовая карта', 
        icon: card, 
        content: <><span><b>до 30 %</b> кэшбэк у партнеров</span><span><b>0 ₽</b> за снятие в любых банкоматах</span></>
    },
    { 
        id: 'personal_loan', 
        title: 'Кредит на любые цели', 
        icon: percent, 
        content: <><span><b>от 4.9 %</b> выгодная ставка</span><span><b>до 5 млн ₽</b> без справок и поручителей</span></>
    },
    { 
        id: 'personal_invest', 
        title: 'Инвестиции', 
        icon: investments, 
        content: <><span><b>0 ₽</b> открытие и обслуживание</span><span><b>акция в подарок</b> за открытие счета</span></>
    }
]

export const YOUTH_DATA = [
    { 
        id: 'youth_card', 
        title: 'Молодежная карта', 
        icon: card, 
        content: <><span><b>10 %</b> кэшбэк на фастфуд и кафе</span><span><b>в подарок</b> стикерпак на телефон</span></>
    },
    { 
        id: 'youth_sub', 
        title: 'Подписка со скидкой', 
        icon: card, 
        content: <><span><b>0 ₽</b> первый месяц за музыку и кино</span><span><b>5 %</b> кэшбэк на шеринг самокатов</span></>
    },
    { 
        id: 'youth_travel', 
        title: 'Путешествия', 
        icon: card, 
        content: <><span><b>до 7 %</b> авиабилеты с кэшбэком</span><span><b>0 ₽</b> за переводы по СБП без лимитов</span></>
    },
    { 
        id: 'youth_education', 
        title: 'Кредит на образование', 
        icon: card, 
        content: <><span><b>от 3 %</b> с господдержкой</span><span><b>оплата основного долга</b> после учебы</span></>
    }
]

export const FAMILY_DATA = [
    { 
        id: 'family_kids', 
        title: 'Детская карта', 
        icon: card, 
        content: <><span><b>0 ₽</b> бесплатное SMS-информирование</span><span><b>родительский контроль</b> лимитов в приложении</span></>
    },
    { 
        id: 'family_deposit', 
        title: 'Семейный счет', 
        icon: card, 
        content: <><span><b>до 16 %</b> годовых на накопительный счет</span><span><b>общий доступ</b> для супругов</span></>
    },
    { 
        id: 'family_mortgage', 
        title: 'Семейная ипотека', 
        icon: card, 
        content: <><span><b>от 6 %</b> ставка по программе РФ</span><span><b>первоначальный взнос</b> маткапиталом</span></>
    },
    { 
        id: 'family_cashback', 
        title: 'Супермаркеты', 
        icon: card, 
        content: <><span><b>5 %</b> повышенный кэшбэк на продукты</span><span><b>до 5 000 ₽</b> лимит возврата в месяц</span></>
    }
]

export const ENTERTAINMENT_DATA = [
    { 
        id: 'ent_cinema', 
        title: 'Кино и театры', 
        icon: card, 
        content: <><span><b>15 %</b> кэшбэк на покупку билетов</span><span><b>2 по цене 1</b> в кино по средам</span></>
    },
    { 
        id: 'ent_games', 
        title: 'Гейминг', 
        icon: card, 
        content: <><span><b>до 10 %</b> возврат за донаты и игры</span><span><b>розыгрыши</b> девайсов каждый месяц</span></>
    },
    { 
        id: 'ent_restaurants', 
        title: 'Рестораны', 
        icon: card, 
        content: <><span><b>до 20 %</b> скидка на бронь столов</span><span><b>бесплатный комплимент</b> от шефа</span></>
    },
    { 
        id: 'ent_events', 
        title: 'Концерты и фесты', 
        icon: card, 
        content: <><span><b>ранний доступ</b> к предзаказу билетов</span><span><b>проход без очереди</b> по QR-коду банка</span></>
    }
]

export const PREMIUM_DATA = [
    { 
        id: 'prem_card', 
        title: 'Премиальная металлическая', 
        icon: card, 
        content: <><span><b>безлимитный</b> доступ в бизнес-залы</span><span><b>выделенная линия</b> поддержки 24/7</span></>
    },
    { 
        id: 'prem_concierge', 
        title: 'Консьерж-сервис', 
        icon: card, 
        content: <><span><b>любые поручения:</b> от билетов до аренды авто</span><span><b>страхование</b> в поездках до $100 000</span></>
    },
    { 
        id: 'prem_cashback', 
        title: 'Премиум Кэшбэк', 
        icon: card, 
        content: <><span><b>3 %</b> на абсолютно все покупки</span><span><b>без ограничений</b> по максимальной сумме</span></>
    },
    { 
        id: 'prem_wealth', 
        title: 'Управление капиталом', 
        icon: card, 
        content: <><span><b>персональный</b> финансовый советник</span><span><b>доступ</b> к закрытым фондам и IPO</span></>
    }
]