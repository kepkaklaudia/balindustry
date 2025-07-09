import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { type MainCharacteristicsProps } from '@/app/[locale]/product/types'
import { useTranslations } from 'next-intl'

const MainCharacteristics: React.FC<MainCharacteristicsProps> = ({ data }) => {
  const t = useTranslations('components.product')
  return (
    <div id="characteristics" className="mx-[20px]">
      <Accordion type="single" collapsible defaultValue="open">
        <AccordionItem value="open">
          <AccordionTrigger className="mt-[60px] border-0 border-b-[2px] border-solid border-stone-300 text-[26px] font-bold text-stone-800">
            {t('Main features')}
          </AccordionTrigger>
          <AccordionContent className="cursor-default">
            {data.map((characteristic, i) => (
              <div
                key={i}
                className="my-[30px] laptop:mb-[20px] laptop:ml-[40px]"
              >
                <h2 className="text-balance text-xl font-bold text-black">
                  {characteristic.title}
                </h2>

                {characteristic.content.length === 1 ? (
                  <p className="my-[10px]">{characteristic.content[0]}</p>
                ) : (
                  <ul className="flex flex-col">
                    {characteristic.content.map((characteristic, i) => {
                      return (
                        <li key={i} className=" my-3 ml-6 list-disc pl-2">
                          {characteristic}
                        </li>
                      )
                    })}
                  </ul>
                )}

                {characteristic.image && (
                  <Image
                    src={characteristic.image}
                    alt={characteristic.title}
                    width={1600}
                    height={500}
                  />
                )}
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default MainCharacteristics
