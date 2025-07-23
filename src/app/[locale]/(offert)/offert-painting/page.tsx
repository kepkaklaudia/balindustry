import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
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
            {t('Powder Coating')}
          </p>
          <p className="mt-10 text-sm text-white sm:text-base">
            {t('BAL Industry is a modern')}
          </p>
        </div>
        <Image
          src="/offert/painting/painting.png"
          className="h-[400px] w-screen object-cover object-top sm:max-h-[400px] md:max-h-[400px]"
          alt=""
          width="1440"
          height="394"
        />
      </div>

      <SectionTitle className="mt-8 text-black">
        {t('Coating Services')}
      </SectionTitle>

      <p className="mx-auto mb-4 mt-8 w-11/12 text-sm sm:text-base">
        {t('We offer professional')}
      </p>

      <div className="mx-auto my-10 flex w-11/12 flex-col gap-10 md:flex-row">
        <ImageTextBlock src="/offert/painting/painting-1.png" />
        <div className="flex w-full flex-col">
          <SectionTitle className="w-full text-black">
            {t('We offer:')}
          </SectionTitle>
          <p className="my-4 text-sm font-bold sm:text-base">
            {t('Painting of')}
          </p>

          <BulletListBold
            title={t('Full in-house')}
            items={[
              {
                title: t('Cutting and burning'),
                description: t(' of metal components'),
              },
              {
                title: t('CNC machining:'),
                description: t('milling, turning'),
              },
              { title: t('Bending of parts'), description: t('using modern') },
              { title: t('Welding'), description: t('using MIG/MAG') },
              {
                title: t('Application of powder'),
                description: t(' or wet coating'),
              },
            ]}
          />
          <p className="my-4 text-sm font-bold sm:text-base">
            {t('Thanks to this')}
          </p>
        </div>
      </div>
      <div className="mx-auto my-10 flex w-11/12 flex-col gap-5 xs:gap-10 md:flex-row">
        <div className="flex w-full flex-col gap-2">
          <SectionTitle className="w-full text-black">
            {t('Why Work with BAL Industry?')}
          </SectionTitle>
          <ul className="h-full">
            {[
              [t('Comprehensive service '), t('a single partner')],
              [t('Modern machine park'), t('enabling the execution')],
              [t('Experience'), t('many years')],
              [t('Flexibility'), t('we handle both')],
              [t('Tailored approach'), t('we customize')],
            ].map(([label, desc], i) => (
              <li
                key={i}
                className="my-4 list-inside list-disc text-sm sm:text-base"
              >
                <span className="font-semibold ">{label}</span> - {desc}
              </li>
            ))}
          </ul>
        </div>
        <ImageTextBlock src="/offert/painting/painting-2.png" />
      </div>
      <p className="mx-auto my-10 w-11/12 text-sm text-gray-500 md:my-16 ">
        {t('hashtags-painting')}
      </p>
    </main>
  )
}

export default Offert
