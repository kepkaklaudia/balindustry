/* eslint-disable import/no-unassigned-import */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import bendingLogo from '../../../../public/offert/icons/bending.png'
import cncLogo from '../../../../public/offert/icons/cnc.png'
import weldingLogo from '../../../../public/offert/icons/welding.png'
import detalLogo from '../../../../public/offert/icons/detal.png'
import paintsLogo from '../../../../public/offert/icons/paints.png'
import manipulationLogo from '../../../../public/offert/icons/manipulation.png'
import useWindowDimensions from '@/utils/useWindowDimensions'
import './swiperStyles.scss'
import { useTranslations } from 'next-intl'
import styles from './OffertSlider.module.scss'
import { Link } from '@/navigation'

export default function OffertSlider() {
  const windowDimensions = useWindowDimensions()
  const t = useTranslations('components.homePage')

  const partners = [
    {
      name: 'MIG, MAG, TIG offert',
      logo: weldingLogo,
      href: '/offert-welding',
    },
    { name: 'Laser Services', logo: '', href: '/offert-laser' },
    { name: 'CNC Services', logo: cncLogo, href: '/offert-cnc' },
    {
      name: 'Sheet metal bending services',
      logo: bendingLogo,
      href: '/offert-bending',
    },
    { name: 'Industrial Paint', logo: paintsLogo, href: '/offert-shops' },
    { name: 'Sheet Metal Cutting', logo: detalLogo, href: '/offert-cutting' },
    { name: 'Powder Coating', logo: paintsLogo, href: '/offert-painting' },
    {
      name: 'Robotic Cells and Industrial Workstations',
      logo: manipulationLogo,
      href: '/offert-workstations',
    },
  ] as const

  return (
    <section>
      <h2 className={styles.heading}>{t('Services')}</h2>
      <p className="font-semibold">{t('Take advantage')}</p>
      <p>{t('We offer')}</p>
      <p className="mb-6">{t('We work')}</p>
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        slidesPerView={Math.floor(
          windowDimensions.width === undefined
            ? 1
            : windowDimensions.width / 320
        )}
        navigation
        spaceBetween={20}
        autoplay={{
          disableOnInteraction: false,
        }}
      >
        {partners.map((partner, index) => (
          <SwiperSlide
            key={index}
            className="mt-20 border-b-2 border-black bg-gray-100"
          >
            <Link
              href={partner.href}
              className="flex h-full flex-col items-center justify-between py-8"
            >
              <Image
                className="h-14"
                key={t(partner.name)}
                src={partner.logo}
                alt={t(partner.name)}
              />
              <p className="mt-2 text-center font-semibold">
                {t(partner.name)}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
