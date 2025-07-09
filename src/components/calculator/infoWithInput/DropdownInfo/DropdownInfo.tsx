'use client'
import React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import styles from './DropdownInfo.module.scss'
import { useTranslations } from 'next-intl'

type AccordionPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Root
>
type AccordionProps = AccordionPrimitiveProps

type AccordionTriggerPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
>
type AccordionTriggerProps = AccordionTriggerPrimitiveProps

export const DropdownInfo = () => {
  const t = useTranslations('components.calculator')
  const AccordionRoot = AccordionPrimitive.Root
  const AccordionHeader = AccordionPrimitive.Header
  const AccordionPrimitiveTrigger = AccordionPrimitive.Trigger
  const AccordionItem = AccordionPrimitive.Item
  const AccordionContent = AccordionPrimitive.Content

  const Accordion = React.forwardRef<
    React.ElementRef<typeof AccordionRoot>,
    AccordionProps
  >(({ children, ...props }, forwardedRef) => (
    <AccordionRoot
      ref={forwardedRef}
      {...props}
      {...(props.type === 'single' ? { collapsible: true } : {})}
    >
      {children}
    </AccordionRoot>
  ))

  Accordion.displayName = 'Accordion'

  const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitiveTrigger>,
    AccordionTriggerProps
  >(({ children, ...props }, forwardedRef) => (
    <AccordionHeader>
      <AccordionPrimitiveTrigger {...props} ref={forwardedRef}>
        {children}
        <ChevronDown />
      </AccordionPrimitiveTrigger>
    </AccordionHeader>
  ))

  AccordionTrigger.displayName = 'AccordionTrigger'

  return (
    <Accordion type="single" collapsible className={styles.dropdownInfo}>
      <AccordionItem value={'item-1'} className={styles.dropdownWrapper}>
        <AccordionTrigger className={styles.dropdownHeader}>
          {t('What does')}
        </AccordionTrigger>
        <AccordionContent className={styles.accordionContent}>
          <div className={styles.dropdownContent}>{t('An optimal file')}</div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value={'item-2'} className={styles.dropdownWrapper}>
        <AccordionTrigger className={styles.dropdownHeader}>
          {t('What should be')}
        </AccordionTrigger>
        <AccordionContent className={styles.accordionContent}>
          <div className={styles.dropdownContent}>
            {t('The following points')}
            <ul className={styles.dropdownContentList}>
              <li>{t('the file should contain')}</li>
              <li>{t('there should be')}</li>
              <li>{t('lines should not overlap')}</li>
              <li>{t('the file should not')}</li>
              <li>{t('when exporting')}</li>
              <li> {t('the file should not contain')}</li>
              <li>{t('lines should be')}</li>
              <li>{t('contours should be closed')}</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value={'item-3'} className={styles.dropdownWrapper}>
        <AccordionTrigger className={styles.dropdownHeader}>
          {t('What mistakes')}
        </AccordionTrigger>
        <AccordionContent className={styles.accordionContent}>
          <div className={styles.dropdownContent}>
            {t('A file containing')}
            <ul className={styles.dropdownContentList}>
              <li>{t('colored lines')}</li>
              <li>{t('open contours')}</li>
              <li>{t('borders around the drawing edges')}</li>
              <li>{t('material information and text annotations')}</li>
              <li>{t('multiple parts in the same file')}</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default DropdownInfo
