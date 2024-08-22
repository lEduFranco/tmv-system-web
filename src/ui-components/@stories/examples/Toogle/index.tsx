import { Form } from '@/ui-components'
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
    alert(` appointmentType: ${data.appointmentType}`)
  }, [])

  return (
    <Form
      formSchema={formSchema}
      onSubmitForm={handleSubmit}
      className="flex flex-col gap-4"
    >
      <Form.ToggleButton
        name="appointmentType"
        items={[
          { label: 'Avulso', value: 'detached' },
          { label: 'Fixo', value: 'fix' },
        ]}
      />
    </Form>
  )
}
