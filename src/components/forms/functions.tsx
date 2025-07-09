import {
  HandleInputProps,
  HandleKeyDownProps,
  ValidateAllFalseTypes,
  ValidateEmailTypes,
} from '@/components/forms/types'

export const validateAllFalse: ValidateAllFalseTypes = (
  variants,
  watch,
  setErrorInfo,
  errorText
) => {
  const isAllFalse = variants.every(
    ({ fieldName }: { fieldName: string }) => watch(fieldName) === false
  )
  setErrorInfo(isAllFalse ? errorText : '')
  return isAllFalse
}

export const validateEmail: ValidateEmailTypes = (value, invalidMessage) => {
  if (/^[\w\.-]+@[\w\.-]+\.\w+$/.test(value) || value.trim() === '') {
    return true
  }
  return invalidMessage
}

export const handleKeyDown: HandleKeyDownProps = (e, setError, errorText) => {
  const key = e.key
  const isNumericKey = /^\d$/.test(key)

  if (
    isNumericKey ||
    key === 'Backspace' ||
    key === 'Tab' ||
    key === 'Enter' ||
    key === '+'
  ) {
    setError('')
  } else {
    setError(errorText)
  }
}

export const handleNumberInput: HandleInputProps = (e) => {
  const rawValue = e.target.value.replace(/[^\d+]/g, '')
  e.target.value = rawValue
}

export const handleAnchorScroll = () => {
  const elem = document.getElementById('form')
  if (elem?.offsetTop !== undefined) {
    window.scrollTo({
      top: elem?.offsetTop - 200,
    })
  }
}
