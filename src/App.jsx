import Header from './components/Header/Header.jsx'
import PromoBlock from './components/PromoBlock/PromoBlock.jsx'
import CatalogSection from './components/CatalogSection/CatalogSection.jsx'
import MapBlock from './components/MapBlock/MapBlock.jsx'
import Footer from './components/Footer/Footer.jsx'
import { useStyles } from './style.js'
import { useState, useEffect } from 'react'

export default function App() {
  
  const [scale, setScale] = useState(1);
  const [isScaled, setIsScaled] = useState(false); // Флаг: включено ли сжатие
  const BREAKPOINT = 1200;

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      
      if (currentWidth < BREAKPOINT) {
        setScale(currentWidth / BREAKPOINT);
        setIsScaled(true);  // Включаем режим сжатия и фиксированную ширину
      } else {
        setScale(1);
        setIsScaled(false); // Выключаем режим сжатия, возвращаем 100% ширину
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const classes = useStyles({scale, isScaled});

  return (
    <div className={classes.wrapper}>
      <Header />
      <PromoBlock />
      <CatalogSection />
      <MapBlock />
      <Footer />
    </div>
  )
}