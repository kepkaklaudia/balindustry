import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import RealisationsSlider from '@/components/offert/RealisationsSlider'
import { BulletList } from '@/components/offert/BulletList'
import { ImageTextBlock } from '@/components/offert/ImageTextBlock'
import { SectionTitle } from '@/components/offert/SectionTitle'
import { WhyBalindustrySection } from '@/components/offert/WhyBalindustrySection'
import LaserSlider from '@/components/offert/LaserSlider'

export async function generateMetadata() {
  const t = await getTranslations('metaData.contact')
  return {
    title: t('title'),
    description: t('description'),
  }
}

const Offert = () => {
  const t = useTranslations('offert')

  const slidesContent = [
    {
      link: '/offert/laser-1.jpeg',
    },
    {
      link: '/offert/laser-2.jpeg',
    },
    {
      link: '/offert/laser-3.jpeg',
    },
    {
      link: '/offert/laser-4.jpeg',
    },
  ]

  return (
    <main>
      <div className="relative mt-[70px]">
        <div className="absolute  left-1/2 top-1/2 w-11/12 max-w-[600px] -translate-x-1/2 -translate-y-1/2 lg:left-10 lg:translate-x-0">
          <p className="text-center text-lg font-bold text-white xs:text-left xs:text-2xl sm:left-8 sm:text-3xl md:text-4xl">
            {t('Laser Services Offer')}
          </p>
          <p className="mt-10 text-sm text-white sm:text-base">
            {t('In the era of Industry')}
          </p>
          <p className="mt-2 text-sm text-white sm:text-base">
            {t('We are a modern company')}
          </p>
        </div>
        <Image
          src="/offert/offert-laser.png"
          className="h-[600px] w-screen object-cover object-top sm:max-h-[700px] md:max-h-[600px]"
          alt=""
          width="1920"
          height="674"
        />
      </div>
      <LaserSlider />
      <div className="mx-auto my-10 flex w-11/12 flex-col gap-10 md:flex-row">
        <ImageTextBlock src="/offert/mig.png" />
        <div className="my-auto flex w-full flex-col">
          <SectionTitle className="w-full">
            {t('Comprehensive Welding Services')}
          </SectionTitle>
          <BulletList
            title={t('BAL Industry is not just')}
            items={[
              t('robotic welding stations'),
              t('machining cells'),
              t('automated cutting and bending lines'),
            ]}
          />
          <p className="mt-4 text-sm sm:text-base">{t('Our solutions')}</p>
        </div>
      </div>
      <div className="relative mx-auto w-11/12">
        <div className="absolute  left-1/2 top-1/2 w-11/12 max-w-[600px] -translate-x-1/2 -translate-y-1/2 lg:left-10 lg:translate-x-0">
          <p className="text-lg font-bold text-orange-400 xs:text-2xl sm:left-8 sm:text-3xl md:text-4xl">
            {t('Flexibility and Comprehensive Execution')}
          </p>
          <BulletList
            className="text-white"
            title={t('Thanks to a modern')}
            items={[
              t('Processing of'),
              t('Complete in-house'),
              t('Option to finish'),
            ]}
          />
          <BulletList
            className="text-white"
            title={t('We work based on:')}
            items={[
              t('Ready-made components'),
              t('Technical drawings'),
              t('Preliminary concepts'),
            ]}
          />
        </div>
        <Image
          src="/offert/laser.png"
          className="h-[550px] w-screen object-cover object-top md:max-h-[500px]"
          alt=""
          width="1356"
          height="512"
        />
      </div>
      <WhyBalindustrySection />
      <SectionTitle className="text-black">{t('Our projects')}</SectionTitle>
      <RealisationsSlider slidesContent={slidesContent} />
      <p className="mx-auto my-16 w-11/12 text-sm text-gray-500">
        {t('hashtags-laser')}
      </p>
    </main>
  )
}

export default Offert
