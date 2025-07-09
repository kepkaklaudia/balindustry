'use client'

import React, { KeyboardEvent, useState } from 'react'
import { PhoneFieldProps } from '@/components/forms/types'
import { handleKeyDown, handleNumberInput } from '@/components/forms/functions'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useTranslations } from 'next-intl'

export const PhoneField = ({ register, errors }: PhoneFieldProps) => {
  const [error, setError] = useState<string>('')
  const t = useTranslations('components.forms')

  return (
    <Label className="mt-8 grid w-full items-center gap-4 text-base font-bold sm:text-lg">
      {t('Phone number *')}
      <div className="relative w-full font-normal">
        <Input
          id="tel"
          placeholder={t('Enter your phone number')}
          type="text"
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
            handleKeyDown(e, setError, t("The field accepts"))
          }
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleNumberInput(e)
          }
          inputMode="numeric"
          {...register('tel', {
            minLength: {
              value: 6,
              message: t('The field must'),
            },
            maxLength: {
              value: 15,
              message: t('The field can'),
            },
            required: t('Phone number is required'),
          })}
        />
        {!error && errors.tel && (
          <p className="absolute -bottom-6 text-xs text-orange-500">
            {`${errors.tel?.message}`}
          </p>
        )}
        {error && (
          <p className="absolute -bottom-6 text-xs text-orange-500">{error}</p>
        )}{' '}
      </div>
    </Label>
  )
}
