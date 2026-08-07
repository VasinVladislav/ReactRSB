import Header from './components/Header/Header.jsx'
import PromoBlock from './components/PromoBlock/PromoBlock.jsx'
import CatalogSection from './components/CatalogSection/CatalogSection.jsx'
import MapBlock from './components/MapBlock/MapBlock.jsx'
import Footer from './components/Footer/Footer.jsx'
import { useStyles } from './style.js'

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header />
      <PromoBlock />
      <CatalogSection />
      <MapBlock />
      <Footer />
    </div>
  )
}