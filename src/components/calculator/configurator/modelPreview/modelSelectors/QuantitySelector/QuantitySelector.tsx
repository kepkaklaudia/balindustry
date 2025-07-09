import { useState, useEffect } from 'react'
import { type FileContextType } from '../../../../../../app/context/dataContext'
import { type SelectedFileContextType } from '../../../../../../app/context/selectedContext'
import { type FileData } from '../../../../../../../server/interfaces'
import styles from './QuantitySelector.module.scss'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useTranslations } from 'next-intl'

interface QuantityProps {
  contextData: FileContextType
  selectedModel: SelectedFileContextType
}

const Quantity: React.FC<QuantityProps> = ({ contextData, selectedModel }) => {
  const t = useTranslations('components.calculator')

  const [num, setNum] = useState<number | undefined | string>('')

  /*   const model = contextData.data[selectedModel.index]
   */

  let model: FileData | null = null

  if (contextData.data) {
    model = contextData.data[selectedModel.index]
  }

  const handleChange = ({ target }: { target: HTMLInputElement }) => {
    const regex = /^(?!0)[\d\b]+$/
    if (regex.test(target.value)) {
      setNum(Number(target.value))
      contextData.updateData({
        index: selectedModel.index,
        key: 'quantity',
        value: target.value,
      })
    } else {
      setNum('')
      contextData.updateData({
        index: selectedModel.index,
        key: 'quantity',
        value: null,
      })
    }
  }

  // Initialize the num state based on model.quantity and model.material
  useEffect(() => {
    if (model) {
      if (model.material !== null) {
        setNum(model.quantity ?? '')
      }

      if (model.material === null) {
        setNum(model.quantity ?? '')
      }
    }
  }, [model?.material, model?.quantity])

  return (
    <div className={styles.quantitySelector}>
      <Label className={styles.label} htmlFor="quantity">
        {t('Quantity')}
      </Label>
      <Input
        name="quantity"
        type="number"
        placeholder={t('Enter the target quantity of pieces')}
        onChange={({ target }) => {
          handleChange({ target })
        }}
        value={num}
        className={styles.input}
      />
    </div>
  )
}

export default Quantity
