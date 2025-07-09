'use client'

import { Counter } from '@/components/counter'
import { useTranslations } from 'next-intl'

const Statistics = () => {
  const t = useTranslations('components.about')
  return (
    <div className="mx-auto my-[120px] grid w-full max-w-[700px] items-center justify-center gap-[40px] px-[20px] text-center sm:my-[150px] sm:grid-cols-[1fr_1fr] laptop:max-w-[1200px] laptop:grid-cols-[repeat(4,1fr)] ">
      <Counter to={26} content={t('Years on the market')} />
      <Counter to={110} content={t('Completed projects')} />
      <Counter
        to={99}
        content={t('Positive reviews')}
        additionalContent={'%'}
      />
      <Counter to={100} content={t('Cups of coffee')} additionalContent={'+'} />
    </div>
  )
}

export default Statistics
