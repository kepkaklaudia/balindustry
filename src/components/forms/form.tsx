'use client'

import { Fragment, useState } from 'react'
import { useForm, FieldValues } from 'react-hook-form'
import { usePathname } from 'next/navigation'
import { cn } from '@/libs/utils'
import {
  handleAnchorScroll,
  validateAllFalse,
  validateEmail,
} from '@/components/forms/functions'
import Button from '@/components/common/Button'
import { useToast } from '@/components/ui/use-toast'
import {
  additionalInputsSection,
  radioFieldsSection,
  satinData,
} from '@/components/forms/data'
import { RadioGroupFields } from '@/components/forms/radioGroupFields'
import { TextField } from '@/components/forms/textField'
import { TextareaField } from '@/components/forms/textareaField'
import { CheckboxField } from '@/components/forms/checkboxField'
import { PhoneField } from '@/components/forms/phoneField'
import { DropZone } from '@/components/forms/dropZone'
import { sendForm } from '@/components/forms/sendForm'
import { useTranslations } from 'next-intl'

type AdditionalInformationsKeys =
  | 'select_processing_method'
  | 'select_welding_type'
  | 'select_welding_type_required'
  | 'select_painting_technology'
  | 'select_painting_technology_required'
  | 'max_dimensions_required'
  | 'max_dimensions_label'
  | 'max_dimensions_placeholder'
  | 'weight_required'
  | 'weight_label'
  | 'weight_placeholder'
  | 'temperature_required'
  | 'temperature_label'
  | 'temperature_placeholder'
  | 'window_dimensions_required'
  | 'window_dimensions_label'
  | 'window_dimensions_placeholder'

type SatinKeys = 'satinizing' | 'blunting' | 'grinding'

export const Form = ({ className }: { className?: string }) => {
  const t = useTranslations('components.forms')

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<FieldValues>()
  const { toast } = useToast()
  const [file, setFile] = useState<File | null>(null)
  const [errorInfo, setErrorInfo] = useState('')

  const pathname = usePathname()

  const submitForm = async (data: FieldValues) => {
    if (
      pathname.includes('satin') &&
      validateAllFalse(satinData, watch, setErrorInfo, t('Please select'))
    ) {
      handleAnchorScroll()
      return
    }

    const getRecipientEmail = (pathname: string) => {
      const emailMap: {
        [key: string]: string
      } = {
        satin: 'j.sobisz@balindustry.com',
        warehouses: 'j.sobisz@balindustry.com',
        paintshops: 'j.sobisz@balindustry.com',
        furnaces: 'j.sobisz@balindustry.com',
        'robotic-stations': 'r.mrozik@balindustry.com',
      }

      for (const key in emailMap) {
        if (pathname.includes(key)) {
          return emailMap[key]
        }
      }

      return 'info@balindustry.com'
    }
    const recipientEmail = getRecipientEmail(pathname)

    sendForm(data, file, reset, setFile, setErrorInfo, toast, recipientEmail, t)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(submitForm)}
        encType="multipart/form-data"
        noValidate
        autoComplete="off"
        id="form"
        className={cn('mx-auto mt-12 w-11/12 max-w-[700px]', className)}
      >
        <div className="flex flex-col gap-4">
          {radioFieldsSection.map(
            ({ sectionPathname, labelText, dataTable, requiredMessage }) =>
              pathname.includes(sectionPathname) && (
                <Fragment key={sectionPathname}>
                  {labelText ? (
                    <p className="text-sm text-neutral-400">{labelText}</p>
                  ) : null}
                  <RadioGroupFields
                    control={control}
                    fieldName="type"
                    requiredMessage={requiredMessage}
                    errors={errors}
                    dataTable={dataTable}
                    watch={watch}
                    setValue={setValue}
                  />
                </Fragment>
              )
          )}
          {pathname.includes('satin') && (
            <>
              <p className="text-sm text-neutral-400">{t('Select the type')}</p>
              <div className="relative mx-auto my-2 flex flex-col items-start justify-start gap-3 sm:flex-row sm:gap-6">
                {satinData.map(({ label, id, fieldName }) => (
                  <CheckboxField
                    control={control}
                    key={id}
                    validationFunction={() =>
                      validateAllFalse(
                        satinData,
                        watch,
                        setErrorInfo,
                        t('Please select')
                      )
                    }
                    label={t(label as SatinKeys)}
                    fieldName={fieldName}
                  />
                ))}
                <p className="absolute -bottom-10 text-xs text-orange-500 sm:-bottom-6">
                  {errorInfo}
                </p>
              </div>
            </>
          )}
          <div className="gap-8 md:flex">
            <TextField
              requiredMessage={t('Full name is required')}
              fieldName="name"
              label={t('Full name *')}
              placeholder={t('Enter your full name')}
              register={register}
              errors={errors}
            />
            {pathname.includes('contact') && (
              <TextField
                requiredMessage={t('Message subject is required')}
                fieldName="topic"
                label={t('Message subject *')}
                placeholder={t('Enter the message subject')}
                register={register}
                errors={errors}
              />
            )}
          </div>
          <div className="gap-8 md:flex">
            <TextField
              requiredMessage={t('Email is required')}
              fieldName="email"
              label={'Email *'}
              placeholder={t('Enter your email address')}
              register={register}
              errors={errors}
              validateFunction={(value: FieldValues['email']) =>
                validateEmail(value, t('Email is invalid'))
              }
            />
            <PhoneField register={register} errors={errors} />
          </div>
          {additionalInputsSection.map(
            (section, index) =>
              pathname.includes(section.sectionPathname) && (
                <div key={index} className="gap-8 md:flex">
                  {section.fields.map((field, fieldIndex) => (
                    <TextField
                      key={fieldIndex}
                      requiredMessage={t(
                        field.requiredMessage as AdditionalInformationsKeys
                      )}
                      fieldName={field.fieldName}
                      label={t(field.label as AdditionalInformationsKeys)}
                      placeholder={t(
                        field.placeholder as AdditionalInformationsKeys
                      )}
                      register={register}
                      errors={errors}
                    />
                  ))}
                </div>
              )
          )}
          <TextareaField
            requiredMessage={t('Message is required')}
            fieldName="message"
            placeholder={t('Your message *')}
            register={register}
            errors={errors}
          />
        </div>
        <div className="my-12 grid w-full grid-cols-[1fr] items-center gap-2 sm:mt-4 sm:grid-cols-[70%_auto] sm:gap-8">
          <DropZone file={file} setFile={setFile} />
          <Button
            className="mx-auto my-8"
            disabled={false}
            content={t('Send')}
            onClick={() => {
              watch('type') === undefined && handleAnchorScroll()
              validateAllFalse(
                satinData,
                watch,
                setErrorInfo,
                t('Please select')
              )
            }}
          />
        </div>
      </form>
    </>
  )
}
