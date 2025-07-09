import { cn } from '@/libs/utils'

export const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <p
    className={cn(
      'mx-auto mb-2 w-11/12 text-lg font-bold text-orange-400 lg:text-xl',
      className
    )}
  >
    {children}
  </p>
)
