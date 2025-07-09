import { ReactElement } from 'react'
import { DirectContact } from '@/components/contact/ContactField/directContact'
import { useTranslations } from 'next-intl'

interface ContactField {
  title: ReactElement
  phoneNumber: string
  emailAddress: string
}

export const ContactField = ({
  title,
  phoneNumber,
  emailAddress,
}: ContactField) => {
  const t = useTranslations('components.contact')

  return (
    <>
      {title}
      <div className="my-8 flex flex-col gap-6 sm:flex-row laptop:flex-col">
        <DirectContact
          icon="/images/contact/phoneOrange.svg"
          title={t('Phone')}
          content={phoneNumber}
        />
        <DirectContact
          icon="/images/contact/mailOrange.svg"
          title={t('Email')}
          content={emailAddress}
        />
      </div>
    </>
  )
}
