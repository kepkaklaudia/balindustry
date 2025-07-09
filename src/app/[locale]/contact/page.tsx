import { getTranslations } from 'next-intl/server'
import PageTitle from '@/components/common/PageTitle'
import Intro from '@/components/contact/intro'
import { Form } from '@/components/forms/form'
import { useTranslations } from 'next-intl'

export async function generateMetadata() {
  const t = await getTranslations('metaData.contact')

  return {
    title: t('title'),
    description: t('description'),
  }
}

const Contact = () => {
  const t = useTranslations('contact')

  return (
    <main>
      <PageTitle content={t('Contact form')} />
      <p className="mx-auto -mt-8 mb-[60px] w-11/12 max-w-[1100px] text-balance text-center text-sm sm:-mt-4 sm:text-base">
        {t('Thank you')}
      </p>

      <div className="mx-auto mb-6 mt-0 grid w-11/12 max-w-[1300px] grid-cols-[1fr] sm:mb-20 laptop:grid-cols-[40%_60%]">
        <Intro />
        <Form className="mt-0 laptop:-mt-5" />
      </div>
    </main>
  )
}

export default Contact
