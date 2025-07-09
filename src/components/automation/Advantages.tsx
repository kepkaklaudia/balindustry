import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface AdvantageProps {
  icon: string
  title: string
  content: string
}

const Advantage: React.FC<AdvantageProps> = ({ icon, title, content }) => {
  return (
    <div className="flex w-[330px] flex-col gap-[16px] ">
      <Image src={icon} alt={title} width={70} height={70} />
      <h3 className="text-balance text-2xl font-bold">{title}</h3>
      <p>{content}</p>
    </div>
  )
}

const Advantages: React.FC = () => {
  const t = useTranslations('components.automation')

  return (
    <div className="place-center grid px-[30px] pb-[70px] pt-[70px]">
      <div className="mx-auto inline-flex w-full max-w-[1300px] flex-wrap items-center justify-start gap-24">
        <Advantage
          icon={'/images/automationAdvantages/advantage1.svg'}
          title={t('Adding sensors and actuators')}
          content={t('Installation of additional sensors')}
        />
        <Advantage
          icon={'/images/automationAdvantages/advantage2.svg'}
          title={t('Automation of control systems')}
          content={t('Implementation of modern control')}
        />
        <Advantage
          icon={'/images/automationAdvantages/advantage3.svg'}
          title={t('Integration with IT systems')}
          content={t('Connecting machines')}
        />
        <Advantage
          icon={'/images/automationAdvantages/advantage4.svg'}
          title={t('Energy optimization')}
          content={t('Implementation of solutions')}
        />
        <Advantage
          icon={'/images/automationAdvantages/advantage5.svg'}
          title={t('Robotics and process automation')}
          content={t('Implementation of industrial robots')}
        />
      </div>
    </div>
  )
}

export default Advantages
