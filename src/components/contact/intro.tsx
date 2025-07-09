import { ContactField } from '@/components/contact/ContactField'
import { useTranslations } from 'next-intl'

const Intro = () => {
  const t = useTranslations('components.contact')
  return (
    <div>
      <div>
        <h3 className="text-balance text-2xl font-bold text-gray-950 sm:text-3xl">
          {t('Contact us')}
        </h3>
        <span className="my-4 block max-w-[335px] text-balance text-sm sm:text-base">
          {t('Send us an email')}
        </span>
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="mb-4 mt-8 text-balance text-xl font-bold text-gray-950 sm:text-2xl">
          {t('Contact us directly')}
        </h3>
        <ContactField
          title={
            <p>
              {t('Get in touch with Robert')}
              <span className="font-semibold"> {t('the robotics')}</span>
            </p>
          }
          emailAddress="r.mrozik@balindustry.com"
          phoneNumber="+48510790214"
        />
        <ContactField
          title={
            <p>
              {t('Get in touch with Jakub')}
              <span className="font-semibold"> {t('the installation')}</span>
            </p>
          }
          emailAddress="j.sobisz@balindustry.com"
          phoneNumber="+48508790879"
        />
      </div>
    </div>
  )
}

export default Intro
