import { createContext, useEffect, useState } from 'react'
import useFilesData from '../../utils/useFilesData'
import { type FileData } from '../../../server/interfaces'

export interface FileContextType {
  data: FileData[] | null
  backendConnector: ({
    filesArray,
    isReady,
  }: {
    filesArray: File[]
    isReady: boolean
  }) => number | void
  error: string
  isLoading: boolean
  updateData: ({
    index,
    key,
    value,
  }: {
    index: number
    key: 'thickness' | 'material' | 'quantity' | 'density'
    value: number | string | null
  }) => void
}

export const DataContext = createContext<FileContextType | null>(null)

const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[] | null>(null)
  const [modelsData, setModelsData] = useState<FileData[] | null>([])
  const { data, error, isLoading, setData } = useFilesData(uploadedFiles)

  useEffect(() => {
    setModelsData(data)
  }, [data])

  const backendConnector = ({
    filesArray,
    isReady,
  }: {
    filesArray: File[]
    isReady: boolean
  }) => {
    if (isReady) {
      setUploadedFiles(filesArray)
    } else {
      setData(null)
    }
  }
  /**
   * Nadpisuje wartości dla każdego z załadowych plików. Przyjmuje indeks, klucz do zmiany i nową wartość
   * @param {index, key, value}
   */

  const updateData = ({
    index,
    key,
    value,
  }: {
    index: number
    key: 'thickness' | 'material' | 'quantity' | 'density'
    value: number | string | null
  }) => {
    if (modelsData) {
      const newArray = [...modelsData]
      const model = newArray[index]
      if (key === 'thickness') model.thickness = Number(value)
      if (key === 'material') model.material = value?.toString() ?? null
      if (key === 'quantity') model.quantity = Number(value)
      if (key === 'density') model.density = Number(value)
      setModelsData(newArray)
    }
  }

  const value = { data, backendConnector, error, isLoading, updateData }
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export default DataContextProvider
