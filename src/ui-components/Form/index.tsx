import React, { FormHTMLAttributes } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import { ZodSchema } from 'zod'

import { Input } from '@ui-components/Form/Input'
import { Select } from '@ui-components/Form/Select'
import { ToggleButton } from '@ui-components/Form/Toogle'
import { DatePicker } from '@ui-components/Form/DatePicker'

type FormData<T extends ZodSchema> =
  T extends ZodSchema<infer Data> ? Data : never

interface FormProps<T extends ZodSchema>
  extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
  formSchema: T
  onSubmitForm: SubmitHandler<FormData<T>>
  className?: string
  isToReset?: boolean
}

export const Form = <T extends ZodSchema>({
  children,
  formSchema,
  onSubmitForm,
  className,
  isToReset,
}: FormProps<T>) => {
  const methods = useForm<FormData<T>>({
    resolver: zodResolver(formSchema),
  })

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    methods.handleSubmit(async (data) => {
      await onSubmitForm(data)
      if (isToReset) {
        methods.reset()
      }
    })(event)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className={className}>
        {children}
      </form>
    </FormProvider>
  )
}

Form.Input = Input
Form.Select = Select
Form.ToggleButton = ToggleButton
Form.DatePicker = DatePicker
