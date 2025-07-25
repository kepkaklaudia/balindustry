import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ImageTextBlock } from '@/components/offert/ImageTextBlock'
import { SectionTitle } from '@/components/offert/SectionTitle'
import { BulletListBold } from '@/components/offert/BulletListBold'
import { BulletList } from '@/components/offert/BulletList'

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
            {t(
              'Comprehensive Sheet Metal Cutting, Punching, and Processing Services'
            )}
          </p>
          <p className="mt-10 text-sm text-white sm:text-base">
            {t('BAL INDUSTRY specializes')}
          </p>
        </div>
        <Image
          src="/offert/cutting/cutting.png"
          className="h-[400px] w-screen object-cover object-top"
          alt=""
          width="1440"
          height="394"
        />
      </div>

      <SectionTitle className="mt-8 text-black">
        {t('Modern Technology')}
      </SectionTitle>

      <p className="mx-auto mb-4 mt-8 w-11/12 text-sm font-bold sm:text-base">
        {t('We work with')}
      </p>

      <div className="mx-auto mt-10 md:my-10 flex w-11/12 flex-col gap-10 md:flex-row">
        <ImageTextBlock src="/offert/cutting/cutting-1.png" />
        <div className="flex w-full flex-col">
          <SectionTitle className="w-full text-black">
            {t('Advanced Machinery')}
          </SectionTitle>
          <p className="my-4 text-sm font-bold sm:text-base">
            {t('Our production hall')}
          </p>

          <BulletListBold
            title={t('Laser Cutting Machines:')}
            items={[
              {
                title: t('TruDisk 6001'),
                description: t('high-power laser source'),
              },
              {
                title: t('TruLaser 5030 fiber, 5040 fiber, 5060 fiber'),
                description: '',
              },
            ]}
          />
          <p className="my-4 text-sm sm:text-base">{t('These machines')}</p>
        </div>
      </div>

      <div className="mx-auto mb-10 flex w-11/12 flex-col gap-10 md:flex-row">
        <div className="flex w-full flex-col">
          <BulletListBold
            title={t('Tube and Profile Cutting:')}
            items={[
              {
                title: t('TruLaser Tube 7000 fiber'),
                description: t('specialized equipment'),
              },
            ]}
          />
          <BulletListBold
            title={t('Sheet Metal Punching:')}
            items={[
              {
                title: t('TruPunch 500'),
                description: t('a fast and precise'),
              },
            ]}
          />
          <BulletListBold
            title={t('Waterjet Cutting:')}
            items={[
              {
                title: t('Intermac Waterjet Primus 184'),
                description: t('a high-pressure'),
              },
            ]}
          />
        </div>

        <ImageTextBlock src="/offert/cutting/cutting-2.png" />
      </div>

      <SectionTitle className="mt-8 text-black">
        {t('BAL INDUSTRY Service Portfolio')}
      </SectionTitle>

      <p className="mx-auto -mb-8 mt-8 w-11/12 text-sm font-bold sm:text-base">
        {t('For clients seeking')}
      </p>

      <div className="mx-auto my-10 flex w-11/12 flex-col gap-10 md:flex-row">
        <BulletListBold
          title={''}
          items={[
            {
              title: t('Laser and Waterjet Cutting'),
              description: t('Precise cutting using'),
            },
            {
              title: t('Punching'),
              description: t('Ideal for serial production'),
            },
            {
              title: t('CNC Machining'),
              description: t('Capabilities include'),
            },
            {
              title: t('Bending'),
              description: t('Performed according'),
            },
            {
              title: t('Powder and Wet Coating'),
              description: t('Complete part'),
            },
          ]}
        />
      </div>

      <div className="relative mx-auto w-11/12">
        <div className="absolute  left-1/2 top-1/2 w-11/12 max-w-[600px] -translate-x-1/2 -translate-y-1/2 lg:left-10 lg:translate-x-0">
          <p className="text-lg font-bold text-white xs:text-2xl sm:left-8 sm:text-3xl md:text-4xl">
            {t('End-to-End Project Execution')}
          </p>
          <BulletList
            className="text-white"
            title={t('We accept orders')}
            items={[
              t('Provided samples or physical parts'),
              t('Technical drawings or CAD'),
              t('Complete documentation'),
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

      <SectionTitle className="mt-10 w-11/12 text-black">
        {t('Process Automation')}
      </SectionTitle>
      <p className="mx-auto my-8 w-11/12 text-sm sm:text-base">
        {t('For clients requiring')}
      </p>

      <div className="mx-auto my-10 flex w-11/12 flex-col gap-5 xs:gap-10 md:flex-row">
        <ImageTextBlock src="/offert/cutting/cutting-3.png" />
        <div className="flex w-full flex-col gap-2">
          <SectionTitle className="w-full text-black">
            {t('Why Work with BAL Industry?')}
          </SectionTitle>

          <BulletListBold
            title={''}
            items={[
              {
                title: t('State-of-the-art machinery'),
                description: t('guaranteed precision'),
              },
              {
                title: t('Flexible approach'),
                description: t('we handle both small'),
              },
              {
                title: t('Engineering'),
                description: t('helping you'),
              },
              {
                title: t('Comprehensive service'),
                description: t('from design to'),
              },
            ]}
          />
          <p className="mt-8 text-sm sm:text-base">
            {t('We work with manufacturing')}
          </p>
          <p className="my-8 text-sm font-bold sm:text-base">
            {t('Feel free')}
          </p>
        </div>
      </div>
      <p className="mx-auto my-10 md:my-16 w-11/12 text-sm text-gray-500 ">
        {t('hashtags-cutting')}
      </p>
    </main>
  )
}

export default Offert
