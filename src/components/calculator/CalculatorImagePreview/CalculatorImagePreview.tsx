import { useContext } from 'react'
import Image from 'next/image'
import { DataContext } from '../../../app/context/dataContext'
import { SelectedContext } from '../../../app/context/selectedContext'
import styles from './CalculatorImagePreview.module.scss'
import { useTranslations } from 'next-intl'

interface ImagePreviewProps {
  filePath?: string
}
const CalculatorImagePreview: React.FC<ImagePreviewProps> = ({ filePath }) => {
  const t = useTranslations('components.calculator')

  const contextData = useContext(DataContext)
  const selectedContext = useContext(SelectedContext)
  const allModels = contextData?.data
  let url = null
  let selectedModel = null
  if (allModels) {
    selectedModel = allModels[selectedContext?.index ?? 0]
    // url = 'http://localhost:3000/' + (selectedModel?.path ?? '')
    url = 'https://www.balindustry.com/' + (selectedModel?.path ?? '')
  }

  return (
    <div className={styles.imgWrapper}>
      {filePath ? (
        <Image
          // src={'http://localhost:3000/' + filePath}
          src={'https://www.balindustry.com/' + filePath}
          alt={'podgląd pliku'}
          fill={true}
        />
      ) : url && selectedModel ? (
        <Image src={url} alt={selectedModel.fileName} fill={true} />
      ) : (
        <div>{t('Unfortunately')}</div>
      )}
    </div>
  )
}

export default CalculatorImagePreview
