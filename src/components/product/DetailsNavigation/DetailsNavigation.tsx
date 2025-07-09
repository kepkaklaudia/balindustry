import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

const DetailsNavigation: React.FC<{
  characteristics?: boolean
  specification?: boolean
}> = ({ characteristics = false, specification = false }) => {
  const t = useTranslations('components.product')

  return (
    <div className="mx-[20px] mr-0 hidden justify-around bg-zinc-800 p-4 px-10 text-white laptop:flex">
      {characteristics && (
        <>
          <Link href="#characteristics">{t('Main features')}</Link>
          <div className="h-[20px] w-[1px] bg-white"></div>
        </>
      )}

      {specification && (
        <>
          <Link href="#specification">{t('Parameters')}</Link>
          <div className="h-[20px] w-[1px] bg-white"></div>
        </>
      )}

      <Link href="#carousel">{t('Similar products')}</Link>
    </div>
  )
}

export default DetailsNavigation
