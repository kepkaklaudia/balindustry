import { cn } from '@/libs/utils'

export const BulletList = ({
  title,
  items,
  className,
}: {
  title: string
  items: string[]
  className?: string
}) => (
  <div className={cn('flex w-full flex-col', className)}>
    <p className="my-4 font-semibold text-sm sm:text-base">{title}</p>
    <ul>
      {items.map((item, idx) => (
        <li key={idx} className="list-inside list-disc text-sm sm:text-base">
          {item}
        </li>
      ))}
    </ul>
  </div>
)
