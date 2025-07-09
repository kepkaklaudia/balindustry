import styles from './Solutions.module.scss'
import { Link } from '@/navigation'
import Button from '@/components/common/Button'
import { useTranslations } from 'next-intl'

export default function Solutions() {
  const t = useTranslations('components.homePage')

  return (
    <section className={styles.solutions}>
      <h2>
        {t('Discover modern solutions')}
        <span className="font-semibold"> BAL Industry</span> {t('for industry')}
      </h2>

      <p>{t('We provide')}</p>
      <Link className="mb-8" href="/about">
        <Button disabled={false} size="XL" content={t('Learn more')} />
      </Link>
    </section>
  )
}
