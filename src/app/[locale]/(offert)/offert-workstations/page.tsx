import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ImageTextBlock } from '@/components/offert/ImageTextBlock'
import { IconSection } from '@/components/offert/IconSection'
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
            {t('Robotic Cells and Industrial Workstations')}
          </p>
          <p className="mt-10 text-sm text-white sm:text-base">
            {t('BAL Industry is a manufacturer')}
          </p>
        </div>
        <Image
          src="/offert/workstations/workstations.png"
          className="h-[400px] w-screen object-cover object-top"
          alt=""
          width="1440"
          height="394"
        />
      </div>

      <SectionTitle className="mt-8 text-black">
        {t('We offer systems dedicated to:')}
      </SectionTitle>
      <div className="mx-auto my-10 flex w-full flex-wrap justify-center gap-4">
        <IconSection src="/offert/icons/cnc.png" title={t('Machining')} />
        <IconSection
          src="/offert/icons/polishing.png"
          title={t('Grinding and polishing')}
        />
        <IconSection
          src="/offert/icons/welding.png"
          title={t('MIG/MAG, TIG, and laser welding')}
        />
        <IconSection
          src="/offert/icons/manipulation.png"
          title={t('Part handling and manipulation')}
        />
      </div>

      <SectionTitle className="mt-8 text-black">
        {t('Robotic Welding Cells')}
      </SectionTitle>

      <p className="mx-auto mb-4 mt-8 w-11/12 text-sm font-bold sm:text-base">
        {t('Our welding cells')}
      </p>
      <div className="mx-auto my-10 flex w-11/12 flex-col gap-10 md:flex-row">
        <ImageTextBlock src="/offert/workstations/workstations-1.png" />
        <div className="flex w-full flex-col">
          <SectionTitle className="w-full text-black">
            {t('We offer:')}
          </SectionTitle>
          <BulletListBold
            title={t('Single and Dual Cells')}
            items={[
              {
                title: t('Single cell'),
                description: t('for smaller production'),
              },
              { title: t('Dual cells'), description: t('allow continuous') },
            ]}
          />

          <BulletList
            title={t('With or Without Linear Tracks')}
            items={[t('With linear track'), t('Without track')]}
          />

          <BulletList
            title={t('With Single- or Dual-Axis')}
            items={[t('Enable optimal positioning'), t('Improve weld')]}
          />
        </div>
      </div>

      <div className="mx-auto my-10 flex w-11/12 flex-col-reverse gap-10 md:flex-row ">
        <div className="flex w-full flex-col">
          <BulletList
            title={t('Enclosed Cells')}
            items={[
              t('Enclosed on all'),
              t('Optical protection'),
              t('Fully compliant'),
            ]}
          />

          <BulletList
            title={t('Open Compact Workstations')}
            items={[t('For smaller components'), t('Can be integrated')]}
          />

          <BulletList
            title={t('Longitudinal Welding Workstation')}
            items={[t('A dedicated solution')]}
          />
        </div>
        <ImageTextBlock src="/offert/workstations/workstations-2.png" />
      </div>

      <div className="relative mx-auto w-11/12">
        <div className="absolute  left-1/2 top-1/2 w-11/12 max-w-[600px] -translate-x-1/2 -translate-y-1/2 lg:left-10 lg:translate-x-0">
          <p className="text-lg font-bold text-white xs:text-2xl sm:left-8 sm:text-3xl md:text-4xl">
            {t('Robotic Machining Workstation')}
          </p>
          <p className="mt-10 text-sm text-white sm:text-base">
            {t('A robotic cell')}
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

      <SectionTitle className="mt-12 uppercase text-black">
        {t('Competitive advantage')}
      </SectionTitle>

      <p className="mx-auto mb-4 mt-8 w-11/12 text-sm font-semibold sm:text-base">
        {t('All our solutions')}
      </p>

      <div className="mx-auto my-10 flex w-11/12 flex-col gap-10 md:flex-row">
        <div className="flex w-full flex-col">
          <ol>
            {[
              t('3D design'),
              t('Cutting and laser'),
              t('CNC and conventional'),
              t('Bending and forming'),
              t('Welding'),
              t('Powder and wet painting'),
              t('Final assembly and testing'),
            ].map((item, idx) => (
              <li
                key={idx}
                className="list-inside list-decimal text-sm font-semibold sm:text-base"
              >
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <p className="mx-auto mb-4 mt-8 w-11/12 text-sm font-semibold sm:text-base">
        {t('Through full')}
      </p>

      <div className="mx-auto my-10 flex w-11/12 flex-col gap-10 md:flex-row">
        <ImageTextBlock src="/offert/workstations/workstations-3.png" />
        <div className="flex w-full flex-col">
          <BulletList
            title={t('Complete in-house production ensures:')}
            items={[
              t('Short lead times'),
              t('Design flexibility'),
              t('Full quality control'),
              t('Complete post-installation'),
            ]}
          />

          <BulletList
            title={t('Integration and support')}
            items={[
              t('Selection of'),
              t('On-site commissioning'),
              t('Warranty and post-warranty service'),
            ]}
          />

          <BulletList
            title={t('With Single- or Dual-Axis')}
            items={[t('Enable optimal positioning'), t('Improve weld')]}
          />
          <p className="mx-auto mb-2 mt-6 w-full text-sm font-bold uppercase sm:text-base">
            {t('Contact us')}
          </p>
          <p className="mx-auto mt-2 w-full text-sm sm:text-base">
            {t('Want to learn more')}
          </p>
        </div>
      </div>

      <p className="mx-auto my-10 w-11/12 text-sm text-gray-500 md:my-16 ">
        {t('hashtags-workstations')}
      </p>
    </main>
  )
}

export default Offert
