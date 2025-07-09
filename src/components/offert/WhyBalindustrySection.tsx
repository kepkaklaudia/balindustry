import { useTranslations } from 'next-intl'
import { ImageTextBlock } from '@/components/offert/ImageTextBlock'
import { SectionTitle } from '@/components/offert/SectionTitle'

export const WhyBalindustrySection = () => {
  const t = useTranslations('offert')

  return (
    <div className="mx-auto my-10 flex w-11/12 flex-col gap-5 xs:gap-10 md:flex-row">
      <ImageTextBlock src="/offert/r5.png" />
      <div className="flex w-full flex-col gap-2">
        <SectionTitle className="w-full">
          {t('Why Choose BAL Industry?')}
        </SectionTitle>
        <ul className="h-full">
          {[
            [t('Comprehensive services'), t('from design')],
            [
              t('Modern technologies'),
              t('robotic welding systems, CNC, paint shops'),
            ],
            [t('Flexible execution'), t('customer-supplied')],
            [t('High quality'), t('experience, quality control')],
            [t('Individual approach'), t('solutions tailored')],
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
    </div>
  )
}
