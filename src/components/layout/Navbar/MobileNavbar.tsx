import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { type Dispatch, type SetStateAction } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { AnimatePresence, motion } from 'framer-motion'
import { categories } from './categories'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Link } from '@/navigation'

const MobileNavbar: React.FC<{
  isDropdownOpen: boolean
  setDropdownOpen: Dispatch<SetStateAction<boolean>>
}> = ({ isDropdownOpen, setDropdownOpen }) => {
  const t = useTranslations('components.layout')

  type CategoriesKeys =
    | 'About us'
    | 'Robotic workstations'
    | 'Single workstation'
    | 'Robotic workstation'
    | 'Twin One-axis workstation'
    | 'Welding automation'
    | 'Dual workstation'
    | 'Machine and equipment automation'
    | 'Products Machines'
    | 'Surface treatment'
    | 'Vertical sheet metal storage'
    | 'Chamber furnaces'
    | 'Wet and powder coating booths'
    | 'Our machine park'
    | 'Metal processing department'
    | 'CNC processing department'
    | 'Services'
    | 'Offer form'
    | 'Cutting quotation'
    | 'Powder and wet painting'
    | 'Contact'
    | 'Single Workstation'
    | 'Dual Workstation'
    | 'Twin One-axis Workstation'
    | 'Waterjet'
    | 'TruPunch 5000 | TRUMPF'
    | 'TruLaser Tube 7000 fiber'
    | 'TruLaser 3030 fiber | TRUMPF'
    | 'Bending workstation'
    | 'ARC D600'
    | 'ARC B250'
    | 'ARC Trackmotion 2t'
    | 'CLX 350'
    | 'DMU 75 monoBLOCK'
    | 'DMU 210 P'
    | 'SPRINT 32I5'
    | 'M1'
    | 'LH'
    | '5-axis CNC'
    | 'NLX 2500'
    | 'ALW-1200'
    | 'Flex Cobot Esab'
    | 'Flex Cobot Fronius'
    | 'Chamber furnace'
    | 'Satin finishing machine'
    | 'Laser Services Offer'
    | 'MIG, MAG, TIG offert'

  return (
    <div className="fixed top-0 z-[2] flex min-h-[70px] w-full items-center justify-between bg-navbar px-[38px] py-0 text-white transition-all navbar:hidden">
      <Link href="/">
        <Image
          src={'/images/logos/BALIndustryLogoWhite.svg'}
          alt={'logo'}
          width={60}
          height={32}
          priority
        />
      </Link>
      <Hamburger toggled={isDropdownOpen} size={26} toggle={setDropdownOpen} />

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="shadow-4xl fixed left-0 right-0 top-[3.5rem] max-h-[95vh] bg-navbar p-[38px] pr-[55px] pt-2"
          >
            <Accordion type="multiple" className="w-full">
              <ScrollArea className="h-[95vh] pb-8 pt-5">
                <ul className="grid gap-2">
                  <Link href={categories[0].link as string}>
                    <motion.li>
                      <AccordionItem
                        className="pb-4 pt-0 font-medium"
                        value="ble"
                        onClick={() => {
                          setDropdownOpen((prev) => !prev)
                        }}
                      >
                        {t(categories[0].name as CategoriesKeys)}
                      </AccordionItem>
                    </motion.li>
                  </Link>
                  {categories.map((category, idx) =>
                    category.subcategories ? (
                      <motion.li key={idx}>
                        <AccordionItem value={`${idx}`}>
                          <AccordionTrigger>
                            {t(category.name as CategoriesKeys)}
                          </AccordionTrigger>
                          <AccordionContent>
                            {category.subcategories.map((subcat, idx) => {
                              return (
                                <AccordionItem
                                  key={idx}
                                  value={`${category.name} ${idx}`}
                                >
                                  {subcat.name === '' ? (
                                    <Link href={subcat.items[0].link}>
                                      <AccordionItem
                                        className="pb-4 pt-1 font-normal !text-orange-500"
                                        value={subcat.items[0].name}
                                        onClick={() => {
                                          setDropdownOpen((prev) => !prev)
                                        }}
                                      >
                                        {t(
                                          subcat.items[0].name as CategoriesKeys
                                        )}
                                      </AccordionItem>
                                    </Link>
                                  ) : (
                                    <>
                                      <AccordionTrigger className="pb-4 pt-1 font-normal !text-orange-500">
                                        {t(subcat.name as CategoriesKeys)}
                                      </AccordionTrigger>
                                      {subcat.items.map((item, idx) => (
                                        <Link href={item.link} key={idx}>
                                          <AccordionContent
                                            onClick={() => {
                                              setDropdownOpen((prev) => !prev)
                                            }}
                                            className="py-2"
                                          >
                                            {t(item.name as CategoriesKeys)}
                                          </AccordionContent>
                                        </Link>
                                      ))}
                                    </>
                                  )}
                                </AccordionItem>
                              )
                            })}
                          </AccordionContent>
                        </AccordionItem>
                      </motion.li>
                    ) : null
                  )}
                  <Link href={categories[categories.length - 1].link as string}>
                    <motion.li>
                      <AccordionItem
                        className="pb-4 pt-0 font-medium"
                        value="ble"
                        onClick={() => {
                          setDropdownOpen((prev) => !prev)
                        }}
                      >
                        {t(
                          categories[categories.length - 1]
                            .name as CategoriesKeys
                        )}
                      </AccordionItem>
                    </motion.li>
                  </Link>
                </ul>
              </ScrollArea>
            </Accordion>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileNavbar
