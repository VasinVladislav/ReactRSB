import { useState, useEffect } from 'react';

export function useExchangeRates() {
  const [rates, setRates] = useState({ 
    usd: { buy: '..', sell: '..' }, 
    eur: { buy: '..', sell: '..' } 
  });

  useEffect(() => {
    // Функция для проверки, загрузились ли данные в объект fx
    const checkRates = () => {
      // Проверяем, существует ли глобальный объект fx и его курсы
      if (window.fx && window.fx.rates && window.fx.rates.USD) {

        // В этой библиотеке курсы часто идут "наоборот" (сколько валюты в 1 рубле)
        // Поэтому для получения цены рубля используем конвертацию:
        const usdRate = window.fx(1).from("USD").to("RUB");
        const eurRate = window.fx(1).from("EUR").to("RUB");

        setRates({
          usd: {
            buy: (usdRate - 0.5).toFixed(2),
            sell: (usdRate + 2.5).toFixed(2)
          },
          eur: {
            buy: (eurRate - 0.5).toFixed(2),
            sell: (eurRate + 2.5).toFixed(2)
          }
        });
      } else {
        // Если еще не загрузилось, проверим через 100мс
        setTimeout(checkRates, 100);
      }
    };

    checkRates();
  }, []);



  return rates;
}
