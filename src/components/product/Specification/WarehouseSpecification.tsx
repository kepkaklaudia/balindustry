import { cn } from '@/libs/utils'
import { type WarehouseSpecificationProps } from '@/app/[locale]/product/types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useTranslations } from 'next-intl'

const WarehouseSpecification: React.FC<WarehouseSpecificationProps> = ({
  metal,
  pallets,
}) => {
  const t = useTranslations('components.product')
  return (
    <div className="mx-[20px] mb-[60px] mt-[20px]" id="specification">
      <Accordion type="single" collapsible defaultValue="open">
        <AccordionItem value="open">
          <AccordionTrigger className="mb-[10px] border-0 border-b-[2px] border-solid border-stone-300 text-[26px] font-bold text-stone-800">
            {t('Parameters')}
          </AccordionTrigger>

          <AccordionContent className="cursor-default laptop:ml-[40px]">
            <h2 className="my-6 text-balance text-xl font-bold text-black">
              {t('Sheet metal storage')}
            </h2>

            <Table>
              <TableHeader className=" bg-stone-800">
                <TableRow className="grid grid-cols-[1fr_1fr_1fr]">
                  <TableHead className="grid  place-items-center text-center !text-white">
                    {t('Max sheet size')}
                  </TableHead>
                  <TableHead className="grid  place-items-center text-center !text-white">
                    {t('Own weight')}
                  </TableHead>
                  <TableHead className="grid  place-items-center text-center !text-white">
                    {t('Number of drawers')}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {metal.map((elem, i) => {
                  return (
                    <TableRow
                      key={i}
                      className={cn(
                        i % 2 === 0 && 'bg-stone-300',
                        'grid grid-cols-[1fr_1fr_1fr]'
                      )}
                    >
                      <TableCell className="text-center">{elem.size}</TableCell>
                      <TableCell className="text-center">{elem.mass}</TableCell>
                      <TableCell className="text-center">
                        {elem.drawers}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>

            <h2 className="my-6 text-balance text-xl font-bold text-black">
              {t('Storage for elements with pallets')}
            </h2>
            <Table>
              <TableHeader className=" bg-stone-800">
                <TableRow className="grid grid-cols-[1fr_1fr_1fr]">
                  <TableHead className="grid  place-items-center text-center !text-white">
                    {t('Max sheet size')}
                  </TableHead>
                  <TableHead className="grid  place-items-center text-center !text-white">
                    {t('Own weight')}
                  </TableHead>
                  <TableHead className="grid  place-items-center text-center !text-white">
                    {t('Number of drawers')}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pallets.map((elem, i) => {
                  return (
                    <TableRow
                      key={i}
                      className={cn(
                        i % 2 === 0 && 'bg-stone-300',
                        'grid grid-cols-[1fr_1fr_1fr]'
                      )}
                    >
                      <TableCell className="text-center">{elem.size}</TableCell>
                      <TableCell className="text-center">{elem.mass}</TableCell>
                      <TableCell className="text-center">
                        {elem.drawers}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default WarehouseSpecification
