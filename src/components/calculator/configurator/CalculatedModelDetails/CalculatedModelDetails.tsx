import { useContext } from 'react'
import { DataContext } from '../../../../app/context/dataContext'
import { SelectedContext } from '../../../../app/context/selectedContext'
import { type FileData } from '../../../../../server/interfaces'
import styles from './CalculatedModelDetails.module.scss'
import { useTranslations } from 'next-intl'

const displayLength = ({
  selectedModel,
  roundedTotalLength,
  isMM,
}: {
  selectedModel: FileData
  roundedTotalLength: number
  isMM: boolean
}) => {
  const t = useTranslations('components.calculator')

  if (selectedModel.totalLength) {
    return isMM
      ? ` ${roundedTotalLength}${selectedModel.units}`
      : ` ${(roundedTotalLength * 0.001).toFixed(3)} m`
  }

  return t('No value')
}

const displayTotalArea = ({
  selectedModel,
  roundedTotalArea,
  isMM,
}: {
  selectedModel: FileData
  roundedTotalArea: number
  isMM: boolean
}) => {
  const t = useTranslations('components.calculator')

  if (selectedModel.totalArea) {
    return (
      <span>
        {isMM
          ? `${roundedTotalArea}${selectedModel.units}`
          : `${(roundedTotalArea * 0.000_001).toFixed(3)} m`}
        {<sup>2</sup>}
      </span>
    )
  }

  return t('No value')
}

const displayMass = ({
  mass,
  roundedMass,
  isMM,
}: {
  mass: number
  roundedMass: number
  isMM: boolean
}) => {
  const t = useTranslations('components.calculator')

  if (mass) {
    return isMM ? `${roundedMass * 1000} g` : `${roundedMass} kg`
  }

  return t('No value')
}

const CalculatedModelDetails = () => {
  const t = useTranslations('components.calculator')

  const contextData = useContext(DataContext)
  const selectedContext = useContext(SelectedContext)

  let mass = 0

  let selectedModel: FileData | null = null
  if (contextData?.data && selectedContext) {
    selectedModel = contextData.data[selectedContext.index]

    // obliczanie masy
    const thickness = (selectedModel?.thickness ?? 0) / 1000
    const volume = ((selectedModel?.totalArea ?? 0) / 1_000_000) * thickness
    mass = volume * ((selectedModel?.density ?? 0) * 1000)
  }

  const round = (value: number) => Math.round(value * 1000) / 1000
  const roundedTotalLength = round(Number(selectedModel?.totalLength ?? 0))
  const roundedTotalArea = round(selectedModel?.totalArea ?? 0)
  const roundedMass = round(mass)

  return (
    <div className={styles.calculatedModelDetailsWrapper}>
      <h4 className={styles.header}>{t('Values for a single unit')}</h4>
      <div className={styles.calculatedModelDetails}>
        <div className={styles.detailsContainer}>
          <p>{t('Data in millimeters')}</p>
          <div>
            <span className={styles.dataLabel}>
              {t('Laser cutting length')}&nbsp;
            </span>
            {selectedModel
              ? displayLength({
                  selectedModel,
                  roundedTotalLength,
                  isMM: true,
                })
              : t('No value')}
          </div>
          <div>
            <span className={styles.dataLabel}>{t('Surface area:')}&nbsp;</span>
            {selectedModel
              ? displayTotalArea({
                  selectedModel,
                  roundedTotalArea,
                  isMM: true,
                })
              : t('No value')}
          </div>
          <div>
            <span className={styles.dataLabel}>{t("Mass:")}&nbsp;</span>
            {displayMass({ mass, roundedMass, isMM: true })}
          </div>
        </div>
        <div className={styles.detailsContainer}>
          <p>{t("Data in meters:")}</p>
          <div>
            <span className={styles.dataLabel}>
            {t('Laser cutting length')}&nbsp;
            </span>
            {selectedModel
              ? displayLength({
                  selectedModel,
                  roundedTotalLength,
                  isMM: false,
                })
              : t('No value')}
          </div>
          <div>
            <span className={styles.dataLabel}>{t('Surface area:')}&nbsp;</span>
            {selectedModel
              ? displayTotalArea({
                  selectedModel,
                  roundedTotalArea,
                  isMM: false,
                })
              : t('No value')}
          </div>
          <div>
            <span className={styles.dataLabel}>{t("Mass:")}&nbsp;</span>
            {displayMass({ mass, roundedMass, isMM: false })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalculatedModelDetails
