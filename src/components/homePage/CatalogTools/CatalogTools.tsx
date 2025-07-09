// eslint-disable-next-line import/no-extraneous-dependencies

import { PiBookOpen } from 'react-icons/pi'
import { Drill } from 'lucide-react'
import Image from 'next/image'
import catalog from '../../../../public/images/imgs/bal_katalog_2025.png'
import styles from './CatalogTools.module.scss'
import { Link } from '@/navigation'
import Button from '@/components/common/Button'
import { useTranslations } from 'next-intl'

export default function CatalogTools() {
  const t = useTranslations('components.homePage')
  return (
    <section className={styles.catalogTools}>
      <div className={styles.container}>
        <div className={styles.containerText}>
          <div className={styles.iconContainer}>
            <PiBookOpen />
          </div>
          <h2>{t('Browse')}</h2>
          <p>{t('Learn more about')}</p>
          <a
            href={'/assets/BAL_Industry_2024.pdf'}
            aria-label="download-catalog"
            className="catalogView__downloadLink"
            download="BAL_Industry_Catalog_2024.pdf"
          >
            <Button disabled={false} size="M" content={t('Download catalog')} />
          </a>
        </div>
        <div className={styles.imgContainer}>
          <Image width={507} height={378} src={catalog} alt="Catalog photo" />
        </div>
        <a
          href={'/assets/BAL_Industry_2024.pdf'}
          aria-label="download-catalog"
          className="catalogView__downloadLink"
          download="BAL_Industry_Catalog_2024.pdf"
        >
          <Button disabled={false} size="M" content={t('Download catalog')} />
        </a>
      </div>
      <div className={`${styles.container} ${styles.containterDrill}`}>
        <div className={styles.containerText}>
          <div className={styles.iconContainer}>
            <Drill strokeWidth={1.25} className={styles.drillIcon} />
          </div>
          <div>
            <p>{t('Learn more about workshop')}</p>
          </div>
          <a
            href={'/assets/BAL_Industry_Equipment_2025.pdf'}
            aria-label="download-catalog"
            className="catalogView__downloadLink"
            download="BAL_Industry_Equipment_2025.pdf"
          >
            <Button disabled={false} size="M" content={t('Download catalog')} />
          </a>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/images/imgs/bal_wyposazenie_2025.png"
            alt="Tool photo"
            width={507}
            height={378}
          />
        </div>
        <a
          href={'/assets/BAL_Industry_Equipment_2025.pdf'}
          aria-label="download-catalog"
          className="catalogView__downloadLink"
          download="BAL_Industry_Equipment_2025.pdf"
        >
          <Button disabled={false} size="M" content={t('Download catalog')} />
        </a>
      </div>
    </section>
  )
}
