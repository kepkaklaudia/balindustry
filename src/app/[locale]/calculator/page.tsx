'use client'
import { useContext, useState } from 'react'
import { DataContext } from '../../context/dataContext'
import styles from './calculator.module.scss'
import PageTitle from '@/components/common/PageTitle'
import DropdownInfo from '@/components/calculator/infoWithInput/DropdownInfo/DropdownInfo'
import DropInput from '@/components/calculator/DropInput/DropInput'
import CalculatorConfigurator from '@/components/calculator/configurator/CalculatorConfigurator/CalculatorConfigurator'
import SelectedContextProvider from '@/app/context/selectedContext'
import { useTranslations } from 'next-intl'

const Calculator = () => {
  const contextData = useContext(DataContext)
  const [filesArray, setFilesArray] = useState<File[]>([])
  const t = useTranslations('calculator')

  return (
    <main className={styles.wrapper}>
      <PageTitle content={t('Cutting quotation')} />
      <div className={styles.headingText}>{t('Do you want')}</div>
      <div className={styles.mainContent}>
        <SelectedContextProvider>
          {contextData?.data !== null && filesArray.length > 0 ? (
            <CalculatorConfigurator
              filesArray={filesArray}
              setFilesArray={setFilesArray}
            />
          ) : (
            <>
              <p className={styles.acceptedFiles}>{t('Do you want')} </p>
              <div className={styles.mainColumns}>
                <DropdownInfo />
                <div className={styles.dropInput}>
                  <DropInput
                    filesArray={filesArray}
                    setFilesArray={setFilesArray}
                  />
                </div>
              </div>
            </>
          )}
        </SelectedContextProvider>
      </div>
    </main>
  )
}

export default Calculator
