import { TextareaFieldProps } from '@/components/forms/types'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useTranslations } from 'next-intl'

export const TextareaField = ({
  register,
  errors,
  placeholder,
  fieldName,
  requiredMessage,
}: TextareaFieldProps) => {
  const t = useTranslations('components.forms')

  return (
    <div className="relative grid w-full items-center gap-4">
      <Label
        className="mt-8 text-base font-bold sm:text-lg"
        htmlFor={fieldName}
      >
        {t('Your message *')}
      </Label>
      <Textarea
        className="h-[200px] w-full"
        id={fieldName}
        placeholder={placeholder}
        {...register(fieldName, {
          required: requiredMessage,
        })}
      />
      {errors[fieldName] && (
        <p className="absolute -bottom-6 text-xs text-orange-500">{`${errors[fieldName]?.message}`}</p>
      )}
    </div>
  )
}
