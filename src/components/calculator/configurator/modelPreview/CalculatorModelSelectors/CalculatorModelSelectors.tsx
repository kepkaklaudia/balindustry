import { useContext } from 'react'
import Material from '../modelSelectors/MaterialSelector/MaterialSelector'
import Thickness from '../modelSelectors/ThicknessSelector/ThicknessSelector'
import Quantity from '../modelSelectors/QuantitySelector/QuantitySelector'
import { DataContext } from '../../../../../app/context/dataContext'
import { SelectedContext } from '../../../../../app/context/selectedContext'
import styles from './CalculatorModelSelectors.module.scss'
import { useTranslations } from 'next-intl'

function CalculatorModelSelectors() {
  const contextData = useContext(DataContext)
  const selectedModel = useContext(SelectedContext)
  const t = useTranslations('components.calculator')
  
  return (
    <div className={styles.selectorsWrapper}>
      <div className={styles.calculatorModelSelectors}>
        {!contextData || !selectedModel ? (
          <div>{t('Loading')}</div>
        ) : (
          <>
            <Material contextData={contextData} selectedModel={selectedModel} />
            <Thickness
              contextData={contextData}
              selectedModel={selectedModel}
            />
            <Quantity contextData={contextData} selectedModel={selectedModel} />
          </>
        )}
      </div>
    </div>
  )
}

export default CalculatorModelSelectors
