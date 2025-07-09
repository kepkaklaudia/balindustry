import React from 'react'
import { useController } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { RadioGroupFieldsProps } from '@/components/forms/types'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export const RadioGroupFields = ({
  control,
  errors,
  fieldName,
  requiredMessage,
  watch,
  setValue,
  dataTable,
}: RadioGroupFieldsProps) => {
  const t = useTranslations('components.forms')

  useController({
    name: fieldName,
    control,
    rules: { required: requiredMessage },
  })

  return (
    <div className="relative my-2 w-full">
      <RadioGroup
        className="mx-auto grid w-full flex-wrap items-center gap-x-8 gap-y-4 sm:grid-cols-[1fr_1fr] sm:justify-center"
        name={fieldName}
      >
        {dataTable.map(({ label }) => (
          <div
            key={label}
            className="grid grid-cols-[auto_1fr] items-center gap-4"
          >
            <RadioGroupItem
              id={label}
              value={label}
              checked={watch(fieldName) === label}
              onClick={() => setValue && setValue(fieldName, label)}
            />
            <label className="cursor-pointer" htmlFor={label}>
              {t(label as keyof Messages['components']['forms'])}
            </label>
          </div>
        ))}
      </RadioGroup>
      {!watch(fieldName) && errors[fieldName] && (
        <p className="absolute -bottom-8 text-xs text-orange-500 sm:-bottom-6">
          {`${t(errors[fieldName]?.message as keyof Messages['components']['forms'])}` ||
            ''}
        </p>
      )}
    </div>
  )
}
