/* eslint-disable import/no-unassigned-import */
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './page.module.scss'
import WelcomeSlider from '@/components/homePage/WelcomeSlider/WelcomeSlider'
import Solutions from '@/components/homePage/Solutions/Solutions'
import Portfolio from '@/components/homePage/Portfolio/Portfolio'
import CatalogTools from '@/components/homePage/CatalogTools/CatalogTools'
import Partners from '@/components/homePage/Partners/Partners'
import Products from '@/components/homePage/Products/Products'

export default function Home() {
  return (
    <>
      <WelcomeSlider />
      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <Solutions />
          <Portfolio />
          <CatalogTools />
          <Partners />
          <Products />
        </div>
      </main>
    </>
  )
}
