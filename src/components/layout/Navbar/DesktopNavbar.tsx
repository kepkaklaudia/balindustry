import Image from 'next/image'
import { MainCategory } from './MainCategory'
import { SubCategoryLabel } from './SubCategoryLabel'
import styles from './Navbar.module.scss'
import { Link } from '@/navigation'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { cn } from '@/libs/utils'
import { useTranslations } from 'next-intl'

const DesktopNavbar = () => {
  const t = useTranslations('components.layout')

  return (
    <div className="fixed top-0 z-[2] hidden min-h-[70px] w-full items-center justify-between bg-navbar px-[38px] py-0 text-white transition-all navbar:flex">
      <Link href="/">
        <Image
          src={'/images/logos/BALIndustryLogoWhite.svg'}
          alt={'logo'}
          width={60}
          height={32}
          priority
        />
      </Link>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href={`/about`}>{t('About us')}</Link>
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MainCategory content={t('Robotic workstations')} />

          <MenubarContent className={cn(styles.popover, styles.robotics)}>
            <div className={styles.gridWrapper}>
              <Link href="/product/single">
                <MenubarItem className={styles.menubarItem}>
                  <Image
                    src={'/images/navbarProducts/single.svg'}
                    alt={'single'}
                    width={80}
                    height={80}
                  />
                  <div>
                    <SubCategoryLabel content={t('Robotic workstation')} />
                    <span>{t('Single workstation')}</span>
                  </div>
                </MenubarItem>
              </Link>

              <Link href="/product/twin-one-axis">
                <MenubarItem className={styles.menubarItem}>
                  <Image
                    src={'/images/navbarProducts/twin-one-axis.svg'}
                    alt={'twin-one-axis'}
                    width={80}
                    height={80}
                  />
                  <div>
                    <SubCategoryLabel content={t('Robotic workstation')} />
                    <span>{t('Twin One-axis workstation')}</span>
                  </div>
                </MenubarItem>
              </Link>

              <div className="row-span-2 px-2 py-1.5">
                <SubCategoryLabel content={t('Welding automation')} />
                <Link href="/product/alw-1200">
                  <MenubarItem>ALW-1200</MenubarItem>
                </Link>
                <Link href="/product/flex-esab">
                  <MenubarItem>Flex Cobot Esab</MenubarItem>
                </Link>
                <Link href="/product/flex-fronius">
                  <MenubarItem>Flex Cobot Fronius</MenubarItem>
                </Link>
              </div>

              <Link href="/product/dual">
                <MenubarItem className={styles.menubarItem}>
                  <Image
                    src={'/images/navbarProducts/dual.svg'}
                    alt={'dual'}
                    width={80}
                    height={80}
                  />
                  <div>
                    <SubCategoryLabel content={t('Robotic workstation')} />
                    <span>{t('Dual workstation')}</span>
                  </div>
                </MenubarItem>
              </Link>

              <Link href="/automation">
                <MenubarItem className={styles.menubarItem}>
                  <Image
                    src={'/images/navbarProducts/automatyzacja.svg'}
                    alt={'single'}
                    width={80}
                    height={80}
                  />
                  <span>{t('Machine and equipment automation')}</span>
                </MenubarItem>
              </Link>
            </div>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MainCategory content={t('Products Machines')} />
          <MenubarContent className={cn(styles.popover, styles.products)}>
            <div className={styles.gridWrapper}>
              <Link href="/product/surface-treatment">
                <MenubarItem>
                  <Image
                    src={'/images/navbarProducts/surface-treatment.svg'}
                    alt={'surface-treatment'}
                    width={80}
                    height={80}
                  />

                  <span>{t('Surface treatment')}</span>
                </MenubarItem>
              </Link>
              <Link href="/product/vertical-warehouse">
                <MenubarItem>
                  <Image
                    src={'/images/navbarProducts/vertical-warehouse.svg'}
                    alt={'vertical-warehouse'}
                    width={80}
                    height={80}
                  />

                  <span>{t('Vertical sheet metal storage')}</span>
                </MenubarItem>
              </Link>

              <Link href="/product/furnace">
                <MenubarItem>
                  <Image
                    src={'/images/navbarProducts/furnace.svg'}
                    alt={'furnace'}
                    width={80}
                    height={80}
                  />

                  <span>{t('Chamber furnaces')}</span>
                </MenubarItem>
              </Link>
              <Link href="/product/paintshops-installation">
                <MenubarItem>
                  <Image
                    src={'/images/navbarProducts/paintshops-installation.svg'}
                    alt={'paintshops-installation'}
                    width={80}
                    height={80}
                  />

                  <span>{t('Wet and powder coating booths')}</span>
                </MenubarItem>
              </Link>
            </div>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MainCategory content={t('Our machine park')} />

          <MenubarContent className={cn(styles.popover, styles.machines)}>
            <div className={styles.gridWrapper}>
              <div>
                <SubCategoryLabel content={t('Metal processing department')} />
                <Link href="/product/waterjet">
                  <MenubarItem>Waterjet</MenubarItem>
                </Link>
                <Link href="/product/trupunch-5000">
                  <MenubarItem>TruPunch 5000 | TRUMPF</MenubarItem>
                </Link>
                <Link href="/product/trulaser-7000">
                  <MenubarItem>TruLaser Tube 7000 fiber</MenubarItem>
                </Link>
                <Link href="/product/trulaser-3030">
                  <MenubarItem>TruLaser 3030 fiber | TRUMPF</MenubarItem>
                </Link>
                <Link href="/product/bending-station">
                  <MenubarItem>{t('Bending workstation')}</MenubarItem>
                </Link>
                <Link href="/product/arc-d600">
                  <MenubarItem>ARC D600</MenubarItem>
                </Link>
                <Link href="/product/arc-b250">
                  <MenubarItem>ARC B250</MenubarItem>
                </Link>
                <Link href="/product/arc-trackmotion-2t">
                  <MenubarItem>ARC Trackmotion 2t</MenubarItem>
                </Link>
              </div>
              <div>
                <SubCategoryLabel content={t('CNC processing department')} />
                <Link href="/product/clx-350">
                  <MenubarItem>CLX 350</MenubarItem>
                </Link>
                <Link href="/product/dmu-75-monoblock">
                  <MenubarItem>DMU 75 monoBLOCK</MenubarItem>
                </Link>
                <Link href="/product/dmu-210-p">
                  <MenubarItem>DMU 210 P</MenubarItem>
                </Link>
                <Link href="/product/sprint-32I5">
                  <MenubarItem>SPRINT 32I5</MenubarItem>
                </Link>
                <Link href="/product/m1">
                  <MenubarItem>M1</MenubarItem>
                </Link>
                <Link href="/product/waterjet">
                  <MenubarItem>Waterjet</MenubarItem>
                </Link>
                <Link href="/product/lh">
                  <MenubarItem>LH</MenubarItem>
                </Link>
                <Link href="/product/5-axis-cnc">
                  <MenubarItem>{t('5-axis CNC')}</MenubarItem>
                </Link>
                <Link href="/product/nlx-2500">
                  <MenubarItem>NLX 2500</MenubarItem>
                </Link>
              </div>
              {/* <div>
                <SubCategoryLabel content={'Lakiernie'} />
                <Link href="/product(usługi)/paintshops">
                  <MenubarItem>Lakiernie mokre i proszkowe</MenubarItem>
                </Link>
              </div> */}
            </div>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MainCategory content={t('Services')} />
          <MenubarContent className={cn(styles.popover, styles.services)}>
            <div className={styles.gridWrapper}>
              <Link href="/forms/form">
                <MenubarItem>
                  <Image
                    src={'/images/navbarProducts/form-offer.svg'}
                    alt={'single'}
                    width={80}
                    height={80}
                  />
                  <span>{t('Offer form')}</span>
                </MenubarItem>
              </Link>
              <Link href="/calculator">
                <MenubarItem>
                  <Image
                    src={'/images/navbarProducts/calc.svg'}
                    alt={'single'}
                    width={80}
                    height={80}
                  />
                  <span>{t('Cutting quotation')}</span>
                </MenubarItem>
              </Link>
              <Link href="/product/service-paintshop">
                <MenubarItem>
                  <Image
                    src={'/images/navbarProducts/service-paintshop.svg'}
                    alt={'single'}
                    width={80}
                    height={80}
                  />
                  <span>{t('Powder and wet painting')}</span>
                </MenubarItem>
              </Link>
              <Link href="/offert">
                <MenubarItem>
                  <Image
                    src={'/images/navbarProducts/offert.svg'}
                    alt={'welding'}
                    width={80}
                    height={80}
                    className="h-[80px] w-[80px] object-cover"
                  />
                  <span>{t('MIG, MAG, TIG offert')}</span>
                </MenubarItem>
              </Link>
              <Link href="/offert-laser">
                <MenubarItem>
                  <Image
                    src={'/images/navbarProducts/offert-laser.svg'}
                    alt={'laser'}
                    width={80}
                    height={80}
                    className="h-[80px] w-[80px] object-cover"
                  />
                  <span>{t('Laser Services Offer')}</span>
                </MenubarItem>
              </Link>
            </div>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <Menubar>
        <Link
          className="cursor-pointer select-none items-center rounded-sm bg-main-orange px-5 py-1.5 text-sm transition-all hover:bg-orange-400"
          href={'/contact'}
        >
          {t('Contact')}
        </Link>
      </Menubar>
    </div>
  )
}

export default DesktopNavbar
