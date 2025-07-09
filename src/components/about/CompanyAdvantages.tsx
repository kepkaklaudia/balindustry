import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface AdvantageProps {
  icon: string
  title: string
  content: string
}

const Advantage: React.FC<AdvantageProps> = ({ icon, title, content }) => {
  return (
    <div className="flex w-[300px] flex-col gap-[16px] text-white">
      <Image src={icon} alt={title} width={50} height={50} />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p>{content}</p>
    </div>
  )
}

const CompanyAdvantages: React.FC = () => {
  const t = useTranslations('components.about')
  return (
    <div className="place-center grid bg-stone-800 px-[30px] py-[80px]">
      <div className="mx-auto inline-flex w-full max-w-[1300px] flex-wrap items-center justify-around gap-24">
        <Advantage
          icon={'/images/advantages/advantage5.svg'}
          title={t('Modern applications')}
          content={t('Thanks to our continuous')}
        />
        <Advantage
          icon={'/images/advantages/advantage1.svg'}
          title={t('Creativity')}
          content={t('Our company places')}
        />
        <Advantage
          icon={'/images/advantages/advantage4.svg'}
          title={t('Quality')}
          content={t('Quality is the foundation')}
        />
        <Advantage
          icon={'/images/advantages/advantage2.svg'}
          title={t('Teamwork')}
          content={t('Working together')}
        />
        <Advantage
          icon={'/images/advantages/advantage3.svg'}
          title={t('Ingenuity')}
          content={t('We strive')}
        />
        <div className="flex w-[300px] opacity-0" />
      </div>
    </div>
  )
}

export default CompanyAdvantages
