/* eslint-disable import/no-unassigned-import */
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'
// import bg from './backgrounds/welcomeSlideBG.svg'
import styles from './WelcomeSlider.module.scss'
import './swiperStyles.scss'
import Button from '@/components/common/Button'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

export default function WelcomeSlider() {
  const t = useTranslations('components.homePage')

  const slidesContent = [
    {
      header: t('Robotics and automation'),
      text: t('Introducing'),
      buttonText: t('Learn more'),
      link: '/automation',
    },
    {
      header: t('Machine park'),
      text: t('A well-equipped'),
      buttonText: t('Learn more'),
      link: '/product/waterjet',
    },
    {
      header: t('Products'),
      text: t('We offer machines'),
      buttonText: t('Learn more'),
      link: '/product/vertical-warehouse',
    },
    {
      header: t('Services'),
      text: t('Based on knowledge'),
      buttonText: t('Learn more'),
      link: '/calculator',
    },
  ]

  const slidesPagination = {
    clickable: true,
    renderBullet(index: any, className: string) {
      return (
        '<div class="' +
        className +
        ' ' +
        styles.paginationBullet +
        '"><span></span></div>'
      )
    },
  }

  return (
    <div className={styles.welcomeSlider}>
      <Image
        src="/images/backgrounds/welcomeSlideBG2.svg"
        alt="Background"
        width={5000}
        height={0}
      />
      <Swiper
        pagination={slidesPagination}
        modules={[Pagination]}
        loop={true}
        className={styles.welcomeSwiper}
      >
        {slidesContent.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slideContainer}>
              <h1>{slide.header}</h1>
              <p className="my-4 leading-relaxed">{slide.text}</p>
              <Link href={slide.link}>
                <Button
                  className="cursor-pointer select-none items-center rounded-sm bg-main-orange px-5 py-1.5 text-sm transition-all hover:bg-orange-400"
                  content={slide.buttonText}
                  disabled={false}
                  primary={false}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
