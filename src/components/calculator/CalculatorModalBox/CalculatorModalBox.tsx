/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/switch-case-braces */
import { type Dispatch, type SetStateAction } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import checkIcon from '../../../../public/icons/greenCheck.svg'
import errorIcon from '../../../../public/icons/redX.svg'
import styles from './CalculatorModalBox.module.scss'
import Button from '@/components/common/Button'
import { useTranslations } from 'next-intl'

const getErrorMessage = (
  type: string,
  errorModal: {
    contact1: string
    contact2: string
    thanks: string
    configuration: string
  }
) => {
  const t = useTranslations('components.calculator')

  switch (type) {
    case 'contact':
      return (
        <div className={styles.modal}>
          <Image src={errorIcon} alt={'Error'} width={24} height={24} />
          <div className={styles.modalTexts}>
            <p>{t('Error')}</p>
            <div>
              {errorModal.contact1} <br /> {errorModal.contact2}
            </div>
          </div>
        </div>
      )
    case 'thanks':
      return (
        <div className={styles.modal}>
          <Image src={checkIcon} alt={'Done'} width={24} height={24} />
          <div className={styles.modalTexts}>
            <p>{t('Thank you')}</p>
            <p>{errorModal.thanks}</p>
          </div>
        </div>
      )
    case 'configuration':
      return (
        <div className={styles.modal}>
          <Image src={errorIcon} alt={'Error'} width={24} height={24} />
          <div className={styles.modalTexts}>
            <p>{t('Error')}</p>
            <p>{errorModal.configuration}</p>
          </div>
        </div>
      )
    default:
      return (
        <div className={styles.modal}>
          <Image src={errorIcon} alt={'Error'} width={24} height={24} />
          <div className={styles.modalTexts}>
            <p>{t('Error')}</p>
            <p>{t('Something went wrong')}</p>
          </div>
        </div>
      )
  }
}

interface CalculatorModalBoxProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>
  type: string
  setFilesArray: Dispatch<SetStateAction<File[]>>
}

const CalculatorModalBox: React.FC<CalculatorModalBoxProps> = ({
  setOpenModal,
  setFilesArray,
  type,
}) => {
  const t = useTranslations('components.calculator')

  const errorModal = {
    contact1: t('Failed to'),
    contact2: t('Please fill'),
    thanks: t('Your inquiry'),
    configuration: t('No model'),
  }

  const closeModal = () => {
    if (type === 'thanks') {
      setFilesArray([])
    }

    setOpenModal(false)
  }

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalBox}>
        <div>
          <div className={styles.modalLayout}>
            {getErrorMessage(type, errorModal)}{' '}
            <Button
              disabled={false}
              className={styles.modalButtonBlack}
              primary={false}
              size="XS"
              onClick={closeModal}
            >
              <X />
            </Button>
          </div>
          <Button
            className={styles.modalButton}
            content="OK"
            onClick={closeModal}
            disabled={false}
            primary={true}
            size="XS"
          />
        </div>
      </div>
    </div>
  )
}

export default CalculatorModalBox
