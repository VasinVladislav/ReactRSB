import cardIcon from "./icons/card.png"
import percentIcon from "./icons/percent.png"
import investmentsIcon from "./icons/investments.png"
import youthIcon from "./icons/youth.png"
import familyIcon from "./icons/family.png"
import gameIcon from "./icons/game.png"
import cinemaIcon from "./icons/cinema.png"
import premiumIcon from "./icons/premium.png"
import subscriptionIcon from "./icons/sub.png"
import travelIcon from "./icons/palm.png"
import educationIcon from "./icons/diploma.png"
import childIcon from "./icons/child.png"
import houseIcon from "./icons/house.png"
import marketIcon from "./icons/market.png"
import restaurantIcon from "./icons/restaurant.png"
import festIcon from "./icons/fest.png"
import creditIcon from "./icons/credit.png"
import metalIcon from "./icons/metal.png"
import conciergeIcon from "./icons/concierge.png"
import goldIcon from "./icons/gold.png"

export const PERSONAL_DATA = [
    {
        id: 'personal_credit',
        title: 'Кредитная карта',
        icon: creditIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="card-number-row">
                    <span className="digit">0</span>
                    <span className="sign">₽</span>
                </div>
                <span className="text">обслуживание навсегда </span>
            </div>
            <div className="cardColumn">
                <span><b>до 120 дней</b></span>
                <span className="text">без процентов</span>
            </div>
        </>
    },
    {
        id: 'personal_debit',
        title: 'Дебетовая карта',
        icon: cardIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="card-number-row">
                    <span>до</span>
                    <span className="digit">30</span>
                    <span className="sign">%</span>
                </div>
                <span className="text">кэшбэк у партнеров </span>
            </div>
            <div className="cardRow">
                <div className="card-number-row">
                    <span className="digit">0</span>
                    <span className="sign">₽</span>
                </div>
                <span className="text">за снятие в любых банкоматах</span>
            </div>
        </>
    },
    {
        id: 'personal_loan',
        title: 'Кредит на любые цели',
        icon: percentIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="card-number-row">
                    <span>от</span>
                    <span className="digit">4.9</span>
                    <span className="sign">%</span>
                </div>
                <span className="text">выгодная ставка</span>
            </div>
            <div className="cardColumn">
                <span><b>до 5 млн ₽</b></span>
                <span>без справок и поручителей</span>
            </div>
        </>
    },
    {
        id: 'personal_invest',
        title: 'Инвестиции',
        icon: investmentsIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="card-number-row">
                    <span className="digit">0</span>
                    <span className="sign">₽</span>
                </div>
                <span className="text">открытие и обслуживание</span>
            </div>
            <div className="cardColumn">
                <span><b>акция в подарок</b></span>
                <span>за открытие счета</span>
            </div>
        </>
    }
]

export const YOUTH_DATA = [
    {
        id: 'youth_card',
        title: 'Молодежная карта',
        icon: youthIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="card-number-row">
                    <span className="digit">10</span>
                    <span className="sign">%</span>
                </div>
                <span className="text">кэшбэк на фастфуд и кафе</span>
            </div>
            <div className="cardColumn">
                <span><b>в подарок</b></span>
                <span>стикерпак на телефон</span>
            </div>
        </>
    },
    {
        id: 'youth_sub',
        title: 'Подписка со скидкой',
        icon: subscriptionIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="card-number-row">
                    <span className="digit">0</span>
                    <span className="sign">₽</span>
                </div>
                <span className="text">первый месяц за музыку и кино </span>
            </div>
            <div className="cardRow">
                <div className="card-number-row">
                    <span className="digit">5</span>
                    <span className="sign">%</span>
                </div>
                <span className="text">кэшбэк на шеринг самокатов</span>
            </div>
        </>
    },
    {
        id: 'youth_travel',
        title: 'Путешествия',
        icon: travelIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="card-number-row">
                    <span>до</span>
                    <span className="digit">7</span>
                    <span className="sign">%</span>
                </div>
                <span className="text">авиабилеты с кэшбэком</span>
            </div>
            <div className="cardRow">
                <div className="card-number-row">
                    <span className="digit">0</span>
                    <span className="sign">₽</span>
                </div>
                <span className="text">за переводы по СБП без лимитов</span>
            </div>
        </>
    },
    {
        id: 'youth_education',
        title: 'Кредит на образование',
        icon: educationIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="card-number-row">
                    <span className="digit">3</span>
                    <span className="sign">%</span>
                </div>
                <span className="text">с господдержкой</span>
            </div>
            <div className="cardColumn">
                <span><b>оплата основного долга</b></span>
                <span>после учебы</span>
            </div>
        </>
    }
]

export const FAMILY_DATA = [
    {
        id: 'family_kids',
        title: 'Детская карта',
        icon: childIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="card-number-row">
                    <span className="digit">0</span>
                    <span className="sign">₽</span>
                </div>
                <span className="text">бесплатное SMS-информирование</span>
            </div>
            <div className="cardColumn">
                <span><b>родительский контроль</b></span>
                <span>лимитов в приложении</span>
            </div>
            {/* <span><b>0 ₽</b> бесплатное SMS-информирование</span><span><b>родительский контроль</b> лимитов в приложении</span> */}
        </>
    },
    {
        id: 'family_deposit',
        title: 'Семейный счет',
        icon: familyIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="card-number-row">
                    <span>до</span>
                    <span className="digit">16</span>
                    <span className="sign">%</span>
                </div>
                <span className="text">годовых на накопительный счет</span>
            </div>
            <div className="cardColumn">
                <span><b>общий доступ</b></span>
                <span>для супругов</span>
            </div>
            {/* <span><b>до 16 %</b> годовых на накопительный счет</span><span><b>общий доступ</b> для супругов</span> */}
        </>
    },
    {
        id: 'family_mortgage',
        title: 'Семейная ипотека',
        icon: houseIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="card-number-row">
                    <span>от</span>
                    <span className="digit">6</span>
                    <span className="sign">%</span>
                </div>
                <span className="text">ставка по программе РФ</span>
            </div>
            <div className="cardColumn">
                <span><b>первоначальный взнос</b></span>
                <span>маткапиталом</span>
            </div>
            {/* <span><b>от 6 %</b> ставка по программе РФ</span><span><b>первоначальный взнос</b> маткапиталом</span> */}
        </>
    },
    {
        id: 'family_cashback',
        title: 'Супермаркеты',
        icon: marketIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="card-number-row">
                    <span className="digit">5</span>
                    <span className="sign">%</span>
                </div>
                <span className="text">повышенный кэшбэк на продукты</span>
            </div>
            <div className="cardColumn">
                <span><b>до 5 000 ₽</b></span>
                <span>лимит возврата в месяц</span>
            </div>
            {/* <span><b>5 %</b> повышенный кэшбэк на продукты</span><span><b>до 5 000 ₽</b> лимит возврата в месяц</span> */}
        </>
    }
]

export const ENTERTAINMENT_DATA = [
    {
        id: 'ent_cinema',
        title: 'Кино и театры',
        icon: cinemaIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="card-number-row">
                    <span className="digit">15</span>
                    <span className="sign">%</span>
                </div>
                <span className="text">кэшбэк на покупку билетов</span>
            </div>
            <div className="cardColumn">
                <span><b>2 по цене 1</b></span>
                <span>в кино по средам</span>
            </div>
            {/* <span><b>15 %</b> кэшбэк на покупку билетов</span><span><b>2 по цене 1</b> в кино по средам</span> */}
        </>
    },
    {
        id: 'ent_games',
        title: 'Гейминг',
        icon: gameIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="card-number-row">
                    <span>до</span>
                    <span className="digit">10</span>
                    <span className="sign">%</span>
                </div>
                <span className="text">возврат за донаты и игры</span>
            </div>
            <div className="cardColumn">
                <span><b>розыгрыши</b></span>
                <span>девайсов каждый месяц</span>
            </div>
            {/* <span><b>до 10 %</b> возврат за донаты и игры</span><span><b>розыгрыши</b> девайсов каждый месяц</span> */}
        </>
    },
    {
        id: 'ent_restaurants',
        title: 'Рестораны',
        icon: restaurantIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="card-number-row">
                    <span>до</span>
                    <span className="digit">20</span>
                    <span className="sign">%</span>
                </div>
                <span className="text">скидка на бронь столов</span>
            </div>
            <div className="cardColumn">
                <span><b>бесплатный комплимент</b></span>
                <span>от шефа</span>
            </div>
            {/* <span><b>до 20 %</b> скидка на бронь столов</span><span><b>бесплатный комплимент</b> от шефа</span> */}
        </>
    },
    {
        id: 'ent_events',
        title: 'Концерты и фесты',
        icon: festIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="cardColumn">
                    <span><b>ранний доступ</b></span>
                    <span>к предзаказу билетов</span>
                </div>
            </div>
            <div className="cardColumn">
                <span><b>проход без очереди</b></span>
                <span>по QR-коду банка</span>
            </div>
            {/* <span><b>ранний доступ</b> к предзаказу билетов</span><span><b>проход без очереди</b> по QR-коду банка</span> */}
        </>
    }
]

export const PREMIUM_DATA = [
    {
        id: 'prem_card',
        title: 'Премиальная металлическая',
        icon: metalIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="cardColumn">
                    <span><b>безлимитный</b></span>
                    <span>доступ в бизнес-залы</span>
                </div>
            </div>
            <div className="cardColumn">
                <span><b>выделенная линия</b></span>
                <span>поддержки 24/7</span>
            </div>
            {/* <span><b>безлимитный</b> доступ в бизнес-залы</span><span><b>выделенная линия</b> поддержки 24/7</span> */}
        </>
    },
    {
        id: 'prem_concierge',
        title: 'Консьерж-сервис',
        icon: conciergeIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="cardColumn">
                    <span><b>любые поручения:</b></span>
                    <span>от билетов до аренды авто</span>
                </div>
            </div>
            <div className="cardColumn">
                <span><b>страхование</b></span>
                <span>в поездках до $100 000</span>
            </div>
            {/* <span><b>любые поручения:</b> от билетов до аренды авто</span><span><b>страхование</b> в поездках до $100 000</span> */}
        </>
    },
    {
        id: 'prem_cashback',
        title: 'Премиум Кэшбэк',
        icon: premiumIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="card-number-row">
                    <span className="digit">3</span>
                    <span className="sign">%</span>
                </div>
                <span className="text">на абсолютно все покупки</span>
            </div>
            <div className="cardColumn">
                <span><b>без ограничений</b></span>
                <span>по максимальной сумме</span>
            </div>
            {/* <span><b>3 %</b> на абсолютно все покупки</span><span><b>без ограничений</b> по максимальной сумме</span> */}
        </>
    },
    {
        id: 'prem_wealth',
        title: 'Управление капиталом',
        icon: goldIcon,
        href: '#',
        content: <>
            <div className="cardRow">
                <div className="cardColumn">
                    <span><b>персональный</b></span>
                    <span>финансовый советник</span>
                </div>
            </div>
            <div className="cardColumn">
                <span><b>доступ</b></span>
                <span>к закрытым фондам и IPO</span>
            </div>
            {/* <span><b>персональный</b> финансовый советник</span><span><b>доступ</b> к закрытым фондам и IPO</span> */}
        </>
    }
]