import { useStyles } from "./style.js"
import { leftBlock } from "./Data.jsx"
import logo from "./assets/logo_white.png"
import mobile from "./assets/logo-mobile-app.png"
import insuranceImg from "./assets/logo_insurance.png"
import { useExchangeRates } from "./useExchangeRates.js";

export default function Footer() {

    const classes = useStyles();
    const rates = useExchangeRates(); 

    return (
        <>
            <footer className={classes.footer}>
                <div className={classes.container}>

                    {/* 1. Левая колонка: Лого и навигация */}
                    <div className={classes.column}>
                        <img src={logo} alt="Русский Стандарт" className={classes.logo} />
                        <nav className={classes.nav}>
                            {leftBlock.map((item) => (
                                <a key={item.id} href={item.href}>{item.text}</a>
                            )
                            )}
                        </nav>
                    </div>

                    {/* 2. Центральная колонка: Контакты и приложение */}
                    <div className={classes.column}>
                        <div className={classes.phoneBlock}>
                            <div className={classes.phoneNumber}><a href="tel:84957480748">8 495 748-0-748</a></div>
                            <div className={classes.phoneDesc}>По России</div>
                        </div>

                        <div className={classes.appBlock}>
                            <a href="https://www.rsb.ru/remote/mobile/" style={{width: 50, height: 50}}><img style={{width: 50, height: 50, borderRadius: 10}} src={mobile} alt="App" /></a>
                            <div>
                                <div className={classes.appHref}><a href="https://www.rsb.ru/remote/mobile/">Мобильный банк<br />Русский Стандарт Онлайн</a></div>
                                <div className={classes.appText}>Удобное приложение для iOS и Android</div>
                            </div>
                        </div>

                        <p className={classes.legalText} style={{fontSize: 14}}>
                            АО «Банк Русский Стандарт» для повышения удобства работы с веб-сайтом rsb.ru (далее — Сайт) и с целью персонализации сервисов использует файлы «cookie» (небольшие файлы, содержащие информацию о предыдущих посещениях веб-сайтов). Продолжая пользоваться Сайтом, Вы выражаете своё согласие на обработку данных пользователя Сайта. В случае несогласия с обработкой Ваших пользовательских данных  Вы можете отключить сохранение файлов «cookie» в настройках Вашего браузера. В этом случае работа некоторых сервисов на Сайте может быть ограничена.
                        </p>

                        <div className={classes.insuranceBlock}>
                            <a href="#" style={{width: 50, height: 50}}><img src={insuranceImg} style={{width: 50, height: 50}} alt="" /></a>
                            <span>Вклады в Банке Русский Стандарт застрахованы в соответствии с законодательством РФ</span>
                        </div>
                    </div>

                    {/* 3. Правая колонка: Курсы валют и копирайт */}
                    <div className={classes.column}>
                        <div className={classes.rates}>
                            <div className={classes.ratesTitle}>Самый выгодный курс в городе</div>
                            <div className={classes.ratesGrid}>
                                <div></div>
                                <div style={{fontSize: 18}}>Покупка</div>
                                <div style={{fontSize: 18}}>Продажа</div>
                                <div>$</div>
                                <div className={classes.exchangeRate}>{rates.usd.buy}</div>
                                <div className={classes.exchangeRate}>{rates.usd.sell}</div>
                                <div>€</div>
                                <div className={classes.exchangeRate}>{rates.eur.buy}</div>
                                <div className={classes.exchangeRate}>{rates.eur.sell}</div>
                            </div>
                        </div>

                        <div className={classes.copyright}>
                            © 2017 – 2026 АО «Банк Русский Стандарт»
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}