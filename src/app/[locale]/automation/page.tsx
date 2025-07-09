import { getTranslations } from 'next-intl/server'
import styles from './page.module.scss'
import PageTitle from '@/components/common/PageTitle'
import Advantages from '@/components/automation/Advantages'
import { useTranslations } from 'next-intl'

export async function generateMetadata() {
  const t = await getTranslations('metaData.automation')

  return {
    title: t('title'),
    description: t('description'),
  }
}

const Automation = () => {
  const t = useTranslations('automation')

  return (
    <>
      <main>
        <div className={styles.pageTitle__wrapper}>
          <PageTitle content={t("Machine and equipment automation")} />
        </div>
        <p className="mx-auto mb-[100px] max-w-[1100px] px-[20px] text-center ">
          {t('The modernization')}
        </p>
        <Advantages />
      </main>
    </>
  )
}

export default Automation
