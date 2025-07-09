/* eslint-disable import/no-unassigned-import */
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'
import './swiperStyles.scss'
export default function RealisationsSlider({
  slidesContent,
}: {
  slidesContent: { link: string }[]
}) {
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
    <div className="relative mx-auto my-6 h-[500px] w-11/12 overflow-hidden text-white">
      <Swiper
        pagination={slidesPagination}
        modules={[Pagination]}
        loop={true}
        className="h-full"
      >
        {slidesContent.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex h-full cursor-pointer flex-col items-center justify-center">
              <Image
                src={slide.link}
                alt={slide.link}
                width={3024}
                height={4032}
                className="absolute left-0 top-0 h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
