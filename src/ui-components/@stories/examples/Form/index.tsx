import { Form, Button } from '@/ui-components'
import { useCallback } from 'react'

import { z } from 'zod'

const formSchema = z.object({
  name: z.string(),
  password: z.string(),
  appointmentType: z.enum(['Avulso, Fixo']),
})

type FormSchema = z.infer<typeof formSchema>

export const Example = () => {
  const handleSubmit = useCallback((data: FormSchema) => {
    alert(
      `Name: ${data.name} | Password: ${data.password} | appointmentType: ${data.appointmentType}`,
    )
  }, [])

  return (
    <Form
      formSchema={formSchema}
      onSubmitForm={handleSubmit}
      className="flex flex-col gap-4"
    >
      <Form.Input type="text" name="name" label="Name" placeHolder="Name" />
      <Form.Input
        type="password"
        name="password"
        label="Password"
        placeHolder="Password"
      />

      <Form.ToggleButton
        name="appointmentType"
        items={[
          { label: 'Avulso', value: 'detached' },
          { label: 'Fixo', value: 'fix' },
        ]}
      />

      <Button type="submit" loadingMessage="Entrando...">
        Submeter
      </Button>
    </Form>
  )
}
