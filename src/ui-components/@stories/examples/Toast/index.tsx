import React, { useCallback } from 'react'
import { z } from 'zod'

import { Button, Form, ToastProvider, useToast } from '@/ui-components'

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
})

type FormSchema = z.infer<typeof formSchema>

const Toast: React.FC = () => {
  const { addToast } = useToast()

  const handleSubmit = useCallback(
    (data: FormSchema) => {
      addToast({
        title: data.title || 'Novo Toast',
        description:
          data.description ||
          'Você pode inserir os dados que deseja ver no Toast',
        duration: 3000,
        type: 'success',
      })
    },
    [addToast],
  )

  return (
    <Form
      formSchema={formSchema}
      onSubmitForm={handleSubmit}
      className="flex flex-col gap-4"
    >
      <Form.Input
        type="text"
        name="title"
        label="Título"
        placeHolder="Novo Modal"
      />
      <Form.Input
        type="text"
        name="description"
        label="Descrição"
        placeHolder="Testando o novo modal"
      />

      <Button type="submit">Abrir Toast</Button>
    </Form>
  )
}

export const Example: React.FC = () => {
  return (
    <ToastProvider>
      <Toast />
    </ToastProvider>
  )
}
