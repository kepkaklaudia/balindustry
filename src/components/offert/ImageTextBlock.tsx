import Image from 'next/image'

export const ImageTextBlock = ({
  src,
  title,
}: {
  src: string
  title?: string
}) => (
  <div className="w-full">
    <Image
      src={src}
      className="h-full max-h-[350px] w-screen object-cover md:max-h-[450px]"
      alt=""
      width={src.includes('r5') ? '4096' : '1080'}
      height={src.includes('r5') ? '2160' : '1350'}
    />
    {title && <p className="mt-2 font-semibold">{title}</p>}
  </div>
)
