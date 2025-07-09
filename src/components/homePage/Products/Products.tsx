import Image from 'next/image'
import magazyn from '../../../../public/images/mainPageProducts/magazyn.png'
import waterjet from '../../../../public/images/mainPageProducts/waterjet.png'
import cela from '../../../../public/images/mainPageProducts/twin_one_axis.png'
import styles from './Products.module.scss'
import Button from '@/components/common/Button'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

export default function Products() {
  const t = useTranslations('components.homePage')

  const sectionCards = [
    {
      topHeader: t('Robotics and automation'),
      topPhoto: cela,
      topParagraph: null,
      link: '/automation',
      topButton: t('Form'),
      bottomHeader: t('Robotics and automation'),
      bottomText: t('Are you curious'),
    },
    {
      topHeader: t('Machine park'),
      topPhoto: waterjet,
      topParagraph: null,
      link: '/product/waterjet',
      topButton: t('Form'),
      bottomHeader: t('Machine park'),
      bottomText: t('Check out'),
    },
    {
      topHeader: t('Products'),
      topPhoto: magazyn,
      topParagraph: null,
      link: '/product/vertical-warehouse',
      topButton: t('Form'),
      bottomHeader: t('Solutions'),
      bottomText: t('Discover'),
    },
    {
      topHeader: t('Services'),
      topPhoto: null,
      topParagraph: (
        <>
          {t('Check our services')}
          <br />
          {t('Fill out the offer form on our website')}
        </>
      ),
      link: '/contact',
      topButton: t('Form'),
      bottomHeader: t('Services'),
      bottomText: t('Want to'),
    },
  ]

  return (
    <section className={styles.products}>
      <h2></h2>
      <div className={styles.productsContainer}>
        {sectionCards.map((card) => (
          <div key={card.topHeader} className={styles.card}>
            <Link href={card.link}>
              <div className={styles.cardTop}>
                {card.topParagraph === null && card.topPhoto !== null ? (
                  <div>
                    <h3>{card.topHeader}</h3>
                    <Image src={card.topPhoto} alt="Section photo" />
                    {/* <Button disabled={false} content={card.topButton} size="XL" /> */}
                    <div data-role="flex-helper"></div>
                  </div>
                ) : (
                  <div className={styles.servicesCard}>
                    <div className={styles.headerWOImg}>
                      <h3>{card.topHeader}</h3>
                      {card.topParagraph && <p>{card.topParagraph}</p>}
                    </div>
                    {/* <Link href="/about" className="z-50 flex self-end"> */}
                    <Button
                      disabled={false}
                      content={t('Learn more')}
                      size="XL"
                      primary
                    />
                    {/* </Link> */}
                  </div>
                )}
              </div>
            </Link>

            <div className={styles.cardBottom}>
              {/* <h3>{card.bottomHeader}</h3> */}
              <p>{card.bottomText}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
