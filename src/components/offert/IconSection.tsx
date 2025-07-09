import Image from 'next/image'

export const IconSection = ({
  src,
  title,
  description,
}: {
  src: string
  title: string
  description: string
}) => (
  <div className="flex w-[45%] flex-col items-center rounded-lg border p-4 sm:w-[30%] lg:w-[18%]">
    <Image src={src} className="h-16 w-16" alt="" width="60" height="60" />
    {title && <p className="mt-2 text-center font-semibold text-sm sm:text-base">{title}</p>}
    {description && <p className="text-center text-sm sm:text-base">{description}</p>}
  </div>
)
