/* eslint-disable import/no-unassigned-import */
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'
import './swiperStyles.scss'
import { BulletList } from './BulletList'
import { useTranslations } from 'next-intl'

export default function LaserSlider() {
  const t = useTranslations('offert')
  const slidesContent = [
    {
      link: '/offert/laser-welding.png',
      title: t('Laser Welding:'),
      items: [
        t('Precise and durable'),
        t('High-quality, aesthetic welds'),
        t('Available as manual welding'),
        t('Processing possible'),
      ],
    },
    {
      link: '/offert/laser-cut.png',
      title: t('Laser Cutting:'),
      items: [t('Fast, clean'), t('Execution based'), t('High precision')],
    },
    {
      link: '/offert/laser-clean.png',
      title: t('Laser Cleaning:'),
      items: [t('Removal of rust'), t('An excellent alternative')],
    },
  ]

  const slidesPagination = {
    clickable: true,
    renderBullet(index: any, className: string) {
      return (
        '<div class="' +
        className +
        ' ' +
        'paginationBullet' +
        '"><span></span></div>'
      )
    },
  }

  return (
    <div className="relative mx-auto mt-20 h-[500px] w-11/12 overflow-hidden text-white">
      <Swiper
        pagination={slidesPagination}
        modules={[Pagination]}
        loop={true}
        className="h-full"
      >
        {slidesContent.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex h-full cursor-pointer flex-col items-center justify-center">
              <div className="absolute left-1/2 top-1/2 z-[2] w-11/12 max-w-[500px] -translate-x-1/2 -translate-y-1/2 lg:left-10 lg:translate-x-0">
                <p className="text-lg font-bold text-orange-400 xs:text-2xl sm:left-8 sm:text-3xl md:text-4xl">
                  {t('Scope of Laser Services')}
                </p>
                <BulletList
                  className="text-white"
                  title={slide.title}
                  items={slide.items}
                />
              </div>
              <Image
                src={slide.link}
                alt={slide.link}
                width="1920"
                height="674"
                className="absolute left-0 top-0 h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
