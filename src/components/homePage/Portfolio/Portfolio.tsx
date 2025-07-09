import { useTranslations } from 'next-intl'
import styles from './Portfolio.module.scss'

export default function Portfolio() {
  const t = useTranslations('components.homePage')
  return (
    <section className={styles.portfolio}>
      <h2>
        {t('Product portfolio')}
        <span className="font-semibold"> BAL Industry</span> {t('in the field')}
      </h2>
    </section>
  )
}
