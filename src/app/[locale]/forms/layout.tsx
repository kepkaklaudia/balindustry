import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import PageTitle from '@/components/common/PageTitle'
import { Form } from '@/components/forms/form'
import { useTranslations } from 'next-intl'

export async function generateMetadata() {
  const t = await getTranslations('metaData.forms')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function Layout() {
  const linkClass =
    'h-fit w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-1 border-transparent border-2 rounded-sm'
  const t = useTranslations('forms')

  return (
    <main>
      <PageTitle content={t('Offer Form')} />
      <p className="mx-auto -mt-8 w-11/12 max-w-[750px] text-center text-sm sm:-mt-4 sm:text-base">
        {t('Dear Customer')} <br /> {t('Please fill')}
      </p>
      <Form />
      <p className="my-4 text-center text-lg font-semibold">{t('Follow us')}</p>
      <div className="mx-auto mb-24 flex justify-center gap-3 sm:mb-32">
        <a className={linkClass} href="">
          <Image
            src="/images/contact/facebook.svg"
            className="my-auto"
            alt="facebook"
            width={35}
            height={35}
          />
        </a>
        <a className={linkClass} href="">
          <Image
            src="/images/contact/linkedin.svg"
            alt="linkedin"
            width={35}
            height={35}
          />
        </a>
      </div>
    </main>
  )
}
