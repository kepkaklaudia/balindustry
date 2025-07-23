import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ImageTextBlock } from '@/components/offert/ImageTextBlock'
import { SectionTitle } from '@/components/offert/SectionTitle'
import { BulletList } from '@/components/offert/BulletList'
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
            {t('Sheet metal bending services offer')}
          </p>
          <p className="mt-10 text-sm text-white sm:text-base">
            {t('BAL Industry specializes')}
          </p>
        </div>
        <Image
          src="/offert/bending/bending.png"
          className="h-[400px] w-screen object-cover object-top sm:max-h-[400px] md:max-h-[400px]"
          alt=""
          width="1440"
          height="394"
        />
      </div>

      <div className="mx-auto my-10 flex w-11/12 flex-col gap-10 md:flex-row">
        <ImageTextBlock src="/offert/bending/bending-1.png" />
        <div className="flex w-full flex-col">
          <SectionTitle className="w-full text-black">
            {t('Modern Machinery')}{' '}
          </SectionTitle>
          <p className="my-4 text-sm font-bold sm:text-base">
            {t('We carry out the bending')}
          </p>
          <BulletListBold
            title={t('TRUMPF Press Brakes:')}
            items={[
              {
                title: t('TruBend 5085'),
                description: t('Compact'),
              },
              { title: t('TruBend 5130'), description: t('Versatile machine') },
              { title: t('TruBend 7036'), description: t('Extremely fast') },
            ]}
          />

          <BulletList
            title={t('SAFAN Press Brakes:')}
            items={[t('Energy-efficient')]}
          />

          <p className="my-4 text-sm sm:text-base">{t('All machines')}</p>
        </div>
      </div>

      <div className="mx-auto flex w-11/12 flex-col">
        <SectionTitle className="w-full text-black">
          {t('Flexible Sheet')}
        </SectionTitle>

        <BulletListBold
          title={t('We offer sheet')}
          items={[
            {
              title: t('On ready-made'),
              description: '',
            },
            { title: t('Based on'), description: '' },
          ]}
        />
        <p className="my-4 text-sm font-bold sm:text-base">
          {t('Our solutions are')}
        </p>
      </div>

      <div className="mx-auto my-10 flex w-11/12 flex-col gap-10 md:flex-row">
        <div className="flex w-full flex-col">
          <SectionTitle className="w-full text-black">
            {t('Robotic Bending')}
          </SectionTitle>
          <BulletList
            title={t('We operate fully')}
            items={[t('Mass'), t('Minimized'), t('Increased'), t('Reduced')]}
          />

          <p className="mx-auto mt-2 w-full text-sm font-bold sm:text-base">
            {t('Automated bending')}
          </p>
        </div>
        <ImageTextBlock src="/offert/bending/bending-2.png" />
      </div>

      <SectionTitle className="mt-12 text-black">
        {t('Complete Order Fulfillment')}
      </SectionTitle>

      <p className="mx-auto mb-4 mt-8 w-11/12 text-sm font-bold sm:text-base">
        {t('For clients')}
      </p>
      <div className="mx-auto my-10 flex w-11/12 flex-col gap-10 md:flex-row">
        <div className="flex w-full flex-col">
          <ol>
            {[
              {
                text: `${t('Sheet metal')} - ${t('(black steel, stainless steel)')}`,
              },
              {
                text: `${t('CNC Machining')} - ${t('turning')}`,
              },
              {
                text: `${t('Sheet bending')} - ${t('in accordance')}`,
              },
              {
                text: t('Surface finishing'),
                subitems: [
                  `${t('Powder coating')} - ${t('corrosion')}`,
                  `${t('Wet painting')} - ${t('durability')}`,
                ],
              },
            ].map((item, idx) => {
              const text = typeof item === 'string' ? item : item.text
              const subitems =
                typeof item === 'string' ? undefined : item.subitems

              return (
                <li
                  key={idx}
                  className="list-inside list-decimal text-sm font-semibold sm:text-base"
                >
                  {text}
                  {subitems && (
                    <ul className="list-inside list-disc pl-5 font-normal">
                      {subitems.map((sub, subIdx) => (
                        <li
                          className="list-inside list-disc font-semibold"
                          key={subIdx}
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </div>

      <div className="mx-auto my-10 flex w-11/12 flex-col gap-10 md:flex-row">
        <ImageTextBlock src="/offert/bending/bending-3.png" />
        <div className="flex w-full flex-col">
          <SectionTitle className="w-full text-black">
            {t('Industrial Solutions')}
          </SectionTitle>

          <p className="mx-auto mb-4 mt-8 text-sm sm:text-base">
            {t('For industrial clients')}
          </p>

          <BulletList
            title={t('Perfect for')}
            items={[
              t('Increase production'),
              t('Reduce operational costs'),
              t('Automate'),
              t('Minimize'),
            ]}
          />

          <p className="mx-auto mt-2 w-full text-sm font-bold sm:text-base">
            {t('Our stations')}
          </p>
        </div>
      </div>

      <p className="mx-auto my-10 w-11/12 text-sm text-gray-500 md:my-16 ">
        {t('hashtags-bending')}
      </p>
    </main>
  )
}

export default Offert
