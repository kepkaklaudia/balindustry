import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ImageTextBlock } from '@/components/offert/ImageTextBlock'
import { SectionTitle } from '@/components/offert/SectionTitle'
import { BulletListBold } from '@/components/offert/BulletListBold'

export async function generateMetadata() {
  const t = await getTranslations('metaData.contact')
  return {
    title: t('title'),
    description: t('description'),
  }
}

const Offert = () => {
  const t = useTranslations('offert')

  return (
    <main>
      <div className="relative mt-[70px]">
        <div className="absolute left-1/2 top-1/2 w-11/12 max-w-[600px] -translate-x-1/2 -translate-y-1/2 lg:left-10 lg:translate-x-0">
          <p className="text-center text-lg font-bold text-white xs:text-left xs:text-2xl sm:left-8 sm:text-3xl md:text-4xl">
            {t('Industrial Paint')}
          </p>
          <p className="mt-10 text-sm text-white sm:text-base">
            {t('Designing and building')}
          </p>
        </div>
        <Image
          src="/offert/shops/shops.png"
          className="h-[400px] w-screen object-cover object-top"
          alt=""
          width="1440"
          height="394"
        />
      </div>

      <div className="mx-auto my-10 flex w-11/12 flex-col gap-10 md:flex-row">
        <ImageTextBlock src="/offert/shops/shops-1.png" />
        <div className="flex w-full flex-col">
          <SectionTitle className="mb-6 w-full text-black">
            {t('We offer comprehensive')}
          </SectionTitle>
          <BulletListBold
            title={''}
            items={[
              {
                title: t('Technological design'),
                description: t('and consulting'),
              },
              {
                title: t('Production of'),
                description: t('(booths, ovens, part transport systems)'),
              },
              {
                title: t('On-site installation'),
                description: t("at the customer's facility"),
              },

              {
                title: t('System commissioning'),
                description: t('personnel training'),
              },
            ]}
          />

          <p className="mx-auto mb-4 mt-8 text-sm sm:text-base">
            {t('We deliver')}
          </p>
          <p className="mx-auto mb-4 text-sm sm:text-base">
            {t('The entire process')}
          </p>
        </div>
      </div>

      <div className="mx-auto my-10 flex w-11/12 flex-col gap-10 md:flex-row">
        <div className="flex w-full flex-col">
          <SectionTitle className="mb-6 w-full text-black">
            {t('Full-Scale')}
          </SectionTitle>
          <BulletListBold
            title={''}
            items={[
              {
                title: t('Paint shop design'),
                description: t('tailored'),
              },
              {
                title: t('cutting'),
                description: t('(carbon steel, stainless steel, aluminum)'),
              },
              {
                title: t('CNC Machining'),
                description: t('milling'),
              },

              {
                title: t('Bending parts'),
                description: t('using advanced'),
              },
              {
                title: t('Welding'),
                description: '',
              },
              {
                title: t('Coating parts'),
                description: t('using powder'),
              },
            ]}
          />
        </div>
        <ImageTextBlock src="/offert/shops/shops-2.png" />
      </div>

      <div className="mx-auto my-10 flex w-11/12 flex-col gap-10 md:flex-row">
        <div className="flex w-full flex-col">
          <SectionTitle className="mb-6 w-full text-black">
            {t('Why Choose BAL INDUSTRY?')}
          </SectionTitle>
          <BulletListBold
            title={''}
            items={[
              {
                title: `${t('End-to-end service')} - ${t('one partner')}`,
                description: '',
              },
              {
                title: `${t('Production flexibility ')} - ${t('both single')}`,
                description: '',
              },
              {
                title: `${t('Versatile machining')} - ${t('from small')}`,
                description: '',
              },

              {
                title: `${t('High quality and precision')} ${t('thanks to')}`,
                description: '',
              },
              {
                title: `${t('In-house paint shops')} - ${t('saving clients time and money')}`,
                description: '',
              },
              {
                title: `${t('Extensive machine resources')} ${t('enabling us')}`,
                description: '',
              },
            ]}
          />
        </div>
      </div>
      <p className="mx-auto mt-8 w-11/12 text-sm font-bold sm:text-base">
        {t('Contact us and tell')}
      </p>
      <p className="mx-auto mb-4 w-11/12 text-sm font-bold sm:text-base">
        {t('We handle orders')}
      </p>
      <p className="mx-auto my-10 w-11/12 text-sm text-gray-500 md:my-16 ">
        {t('hashtags-shops')}
      </p>
    </main>
  )
}

export default Offert
