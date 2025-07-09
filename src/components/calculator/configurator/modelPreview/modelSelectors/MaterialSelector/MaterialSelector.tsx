import { useState, useEffect } from 'react'
import { type FileContextType } from '../../../../../../app/context/dataContext'
import { type SelectedFileContextType } from '../../../../../../app/context/selectedContext'
import materials from '../../../../materials.json'
import styles from './MaterialSelector.module.scss'
import { Label } from '@/components/ui/label'
import { useTranslations } from 'next-intl'

interface MaterialProps {
  contextData: FileContextType
  selectedModel: SelectedFileContextType
}

const Material: React.FC<MaterialProps> = ({ contextData, selectedModel }) => {
  const t = useTranslations('components.calculator')

  let material: string | null = null
  if (contextData.data) {
    material = contextData.data[selectedModel.index]?.material
  }

  const list = materials.map((el) => el.name)

  const handleMaterialChange = (selectedMaterial: string) => {
    const defaultThick = null
    contextData.updateData({
      index: selectedModel.index,
      key: 'material',
      value: selectedMaterial,
    })
    contextData.updateData({
      index: selectedModel.index,
      key: 'thickness',
      value: defaultThick,
    })
  }

  const handleChange = (e: React.SyntheticEvent) => {
    const selectedMaterial = (e.target as HTMLOptionElement).value
    handleMaterialChange(selectedMaterial)
  }

  useEffect(() => {
    if (material === null) {
      setInputValue('')
    } else {
      setInputValue(material)
      contextData.updateData({
        index: selectedModel.index,
        key: 'thickness',
        value: null,
      })
    }
  }, [material])

  const [inputValue, setInputValue] = useState('')

  const materialsList = list.map((material) => {
    return (
      <option value={material} key={material}>
        {material}
      </option>
    )
  })
  return (
    <div className={styles.materialSelector}>
      <Label className={styles.label} htmlFor="materialsList">
        {t('Material')}
      </Label>
      <select
        id="materialsList"
        className={styles.selector}
        value={inputValue}
        onChange={handleChange}
      >
        <option value="">{t('Select a material from the list')}</option>
        {materialsList}
      </select>
    </div>
  )
}

export default Material
