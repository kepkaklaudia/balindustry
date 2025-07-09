import { getTranslations } from 'next-intl/server'
import AboutBalIndustry from '@/components/about/AboutBalIndustry/AboutBalIndustry'
import CompanyAdvantages from '@/components/about/CompanyAdvantages'
import Statistics from '@/components/about/Statistics'
import PageTitle from '@/components/common/PageTitle'
import Partners from '@/components/homePage/Partners/Partners'
import { useTranslations } from 'next-intl'

export async function generateMetadata() {
  const t = await getTranslations('metaData.about')

  return {
    title: t('title'),
    description: t('description'),
  }
}

const About = () => {
  const t = useTranslations('about')
  return (
    <>
      <main>
        <PageTitle content={t('About us')} />
        <p className="mx-auto mb-[100px] max-w-[1100px] px-[20px] text-center">
          {t('Our company')}
        </p>
        <Partners />
        <AboutBalIndustry />
      </main>
      <CompanyAdvantages />
      <Statistics />
    </>
  )
}

export default About
