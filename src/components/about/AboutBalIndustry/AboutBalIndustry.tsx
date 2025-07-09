import Image from 'next/image'
import styles from './AboutBalIndustry.module.scss'
import { useTranslations } from 'next-intl'

const AboutBalIndustry = () => {
  const t = useTranslations('components.about')

  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <div>
          <h3>{t('Why')}</h3>
          <p>{t('We specialize')}</p>
        </div>
        <Image
          src="/images/imgs/suszarnia.webp"
          alt="suszarnia"
          width={650}
          height={390}
        />
      </div>
      <div className={styles.aboutDetails}>
        <div className={styles.aboutDetails__1}>
          <h3>{t('Excellence in production')}</h3>
          <p>{t('Thanks to')}</p>
        </div>
        <div className={styles.aboutDetails__2}>
          <h3>{t('What do we do')}</h3>
          <p>{t('Thanks to our own experience')}</p>
        </div>
        <div className={styles.aboutDetails__3}>
          <h3>{t('Our machines')}</h3>
          <p>{t('Our offer')}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutBalIndustry
