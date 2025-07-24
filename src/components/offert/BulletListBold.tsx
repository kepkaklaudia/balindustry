import { cn } from '@/libs/utils'

export const BulletListBold = ({
  title,
  items,
  className,
}: {
  title: string
  items: { title: string; description: string }[]
  className?: string
}) => (
  <div className={cn('flex w-full flex-col', className)}>
    {title && <p className="my-4 text-sm font-bold sm:text-base">{title}</p>}
    <ul>
      {items.map((item, idx) => (
        <li key={idx} className="list-inside list-disc text-sm sm:text-base">
          <span className="font-semibold"> {item.title}</span> {item.description}
        </li>
      ))}
    </ul>
  </div>
)
