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
            {t('CNC Services Offer')}
          </p>
          <p className="mt-10 text-sm text-white sm:text-base">
            {t('BAL INDUSTRY is a modern')}
          </p>
        </div>
        <Image
          src="/offert/cnc/cnc.png"
          className="h-[400px] w-screen object-cover object-top"
          alt=""
          width="1440"
          height="394"
        />
      </div>

      <div className="mx-auto mt-10 flex w-11/12 flex-col gap-10 md:flex-row">
        <ImageTextBlock src="/offert/cnc/cnc-1.png" />
        <div className="flex w-full flex-col">
          <SectionTitle className="mb-6 w-full text-black">
            {t('What do we offer?')}
          </SectionTitle>
          <p className="text-sm font-bold sm:text-base">
            {t('Our production hall')}
          </p>

          <p className="mt-6 text-sm font-bold sm:text-base">
            {t('Custom Part Manufacturing')}
          </p>

          <p className="mx-auto text-sm sm:text-base">{t('We carry out')}</p>

          <p className="mt-6 text-sm font-bold sm:text-base">
            {t('Metal Cutting and Burning')}
          </p>

          <p className="mx-auto text-sm sm:text-base">
            {t('Precise cutting and')}
          </p>

          <p className="mt-6 text-sm font-bold sm:text-base">
            {t('CNC Machining')}
          </p>

          <p className="mx-auto mb-4 text-sm sm:text-base">
            {t('High-quality milling')}
          </p>
        </div>
      </div>

      <div className="mx-auto mb-10 flex w-11/12 flex-col gap-10 md:mt-10 md:flex-row">
        <div className="flex w-full flex-col">
          <p className="text-sm font-bold sm:text-base">{t('Metal Bending')}</p>

          <p className="mx-auto text-sm sm:text-base">
            {t('Accurate bending')}
          </p>

          <p className="mt-6 text-sm font-bold sm:text-base">
            {t('Powder and Wet Painting')}
          </p>

          <p className="mx-auto mb-4 text-sm sm:text-base">{t('We operate')}</p>
          <SectionTitle className="mb-2 mt-4 w-full text-black">
            {t('Production Capabilities')}
          </SectionTitle>
          <BulletListBold
            title={t('We have a modern')}
            items={[
              {
                title: t('DMU 210P'),
                description: '',
              },
              {
                title: t('CLX 350'),
                description: '',
              },
              {
                title: t('DMU 75 monoBLOCK'),
                description: '',
              },

              {
                title: t('SPRINT 32|5'),
                description: '',
              },
              {
                title: t('NLX 2500'),
                description: '',
              },
              {
                title: t('M1'),
                description: '',
              },
            ]}
          />
        </div>
        <ImageTextBlock src="/offert/cnc/cnc-2.png" />
      </div>

      <div className="mx-auto my-10 flex w-11/12 flex-col gap-10 md:flex-row">
        <div className="flex w-full flex-col">
          <SectionTitle className="mb-6 w-full text-black md:mt-8">
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
        {t('hashtags-cnc')}
      </p>
    </main>
  )
}

export default Offert
