import Image from 'next/image'
import { type FloatingCTAProps } from '@/app/[locale]/product/types'
import Button from '@/components/common/Button'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

const FloatingCTA: React.FC<FloatingCTAProps> = ({ data }) => {
  const { title, image, content, button, form, qr, ar, arLink } = data
  const t = useTranslations('components.product')

  return (
    <div
      id="floatingCTA"
      className="fixed right-[38px] top-[150px] rounded border border-zinc-200 p-4 2xl:right-auto 2xl:ml-[40px] 2xl:p-6"
    >
      <span className="text-lg">{title}</span>

      <Image
        src={image || qr}
        alt={''}
        width={200}
        height={100}
        className="mx-auto my-6"
      />

      {content && (
        <span className="my-4 block max-w-[220px] whitespace-normal text-center">
          {content}
        </span>
      )}

      {ar && arLink && (
        <>
          <Link href={arLink}>
            <Button
              content={t('See in 3D')}
              className="m-auto my-4 w-[215px] text-wrap"
            />
          </Link>
        </>
      )}

      <Link href={form}>
        <Button content={button} className="m-auto" />
      </Link>
    </div>
  )
}

export default FloatingCTA
