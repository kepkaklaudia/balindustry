import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import RealisationsSlider from '@/components/offert/RealisationsSlider'
import { ImageTextBlock } from '@/components/offert/ImageTextBlock'
import { IconSection } from '@/components/offert/IconSection'
import { SectionTitle } from '@/components/offert/SectionTitle'
import { BulletList } from '@/components/offert/BulletList'
import { useTranslations } from 'next-intl'
import { WhyBalindustrySection } from '@/components/offert/WhyBalindustrySection'

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
      link: '/offert/welding-1.jpeg',
    },
    {
      link: '/offert/welding-2.jpeg',
    },
    {
      link: '/offert/welding-3.jpeg',
    },
    {
      link: '/offert/welding-4.jpeg',
    },
  ]

  
  return (
    <main>
      <div className="relative mt-[70px]">
        <div className="absolute left-1/2 top-1/2 w-11/12 max-w-[600px] -translate-x-1/2 -translate-y-1/2 lg:left-10 lg:translate-x-0">
          <p className="text-center text-lg font-bold text-white xs:text-left xs:text-2xl sm:left-8 sm:text-3xl md:text-4xl">
            {t('Comprehensive Welding Services')}
          </p>
          <p className="mt-10 text-sm text-white sm:text-base">
            {t('BAL Industry is a modern company')}
          </p>
        </div>
        <Image
          src="/offert/offert.png"
          className="h-[600px] w-screen object-cover object-top sm:max-h-[700px] md:max-h-[600px]"
          alt=""
          width="1920"
          height="674"
        />
      </div>
      <div className="mx-auto my-10 flex w-11/12 flex-col gap-10 md:flex-row">
        <ImageTextBlock src="/mig.png" />
        <div className="flex w-full flex-col">
          <SectionTitle className="w-full">
            {t('Comprehensive MIG/MAG and TIG Welding Services')}
          </SectionTitle>
          <BulletList
            title={t('Manual Welding:')}
            items={[
              t('Experienced welders'),
              t('Unit, repair, and small-batch production'),
              t('Ability to work with various materials'),
            ]}
          />

          <BulletList
            title={t('Robotic Welding:')}
            items={[
              t('Robotic welding cells'),
              t('Ideal for serial and mass production'),
              t('Methods: MIG/MAG and TIG'),
            ]}
          />
        </div>
      </div>
      <SectionTitle className="text-black">
        {t('For Complete Product Execution, We Offer:')}
      </SectionTitle>
      <div className="mx-auto my-10 flex w-full flex-wrap justify-center gap-4">
        <IconSection
          src="/offert/detal.png"
          title={t('Cutting and burning parts')}
          description={t('Precise cutting')}
        />
        <IconSection
          src="/offert/cnc.png"
          title={t('CNC machining')}
          description={t(
            'Milling, turning, drilling with high dimensional accuracy'
          )}
        />
        <IconSection
          src="/offert/bending.png"
          title={t('Bending components')}
          description={t('Modern press brakes')}
        />
        <IconSection
          src="/offert/welding.png"
          title={t('Welding')}
          description={t('Manual or robotic')}
        />
        <IconSection
          src="/offert/paints.png"
          title={t('Painting')}
          description={t('In-house painting')}
        />
      </div>
      <SectionTitle className="mt-16">
        {t('Production of Welding Workstations')}
      </SectionTitle>
      <p className="mx-auto mb-4 mt-8 w-11/12 text-sm sm:text-base">
        {t('As a manufacturer')}
      </p>
      <div className="mx-auto flex w-11/12 flex-col gap-2 md:flex-row">
        <BulletList
          title={t('Manual Welding Workstations:')}
          items={[
            t('Custom-designed to client requirements'),
            t('Option for integration'),
            t('Equipped with'),
          ]}
        />
        <BulletList
          title={t('Robotic Welding Workstations:')}
          items={[
            t('Complete cells'),
            t('Options with'),
            t('Programming, commissioning'),
          ]}
        />
      </div>
      <p className="mx-auto mb-12 mt-8 w-11/12 text-sm sm:text-base">
        {t('*Each workstation')}
      </p>
      <div className="relative mx-auto w-11/12">
        <div className="absolute  left-1/2 top-1/2 w-11/12 max-w-[600px] -translate-x-1/2 -translate-y-1/2 lg:left-10 lg:translate-x-0">
          <p className="text-lg font-bold text-orange-400 xs:text-2xl sm:left-8 sm:text-3xl md:text-4xl">
            {t('BAL Industry - Technology That Unites Your Production')}
          </p>
          <p className="mt-10 text-sm text-white sm:text-base">
            {t('Whether you need')}
          </p>
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
      <p className="mx-auto my-16 w-11/12 text-sm text-gray-500 ">
        {t('hashtags')}
      </p>
    </main>
  )
}

export default Offert
