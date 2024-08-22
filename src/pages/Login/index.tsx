import React, { useCallback } from 'react'

import tmvLogoHorizontal from '@/assets/logo/tmv-horizontal-logo.svg'

import { z } from 'zod'

import { Button, Form } from '@/ui-components'

import { useAuth } from '@/core/hooks/use-auth'

const formSchema = z.object({
  email: z.string().email({ message: 'Precisa ser um email' }),
  password: z.string().min(6, { message: 'Mínimo de 6 caracteres' }),
})

type FormSchemaType = z.infer<typeof formSchema>

export const Login: React.FC = () => {
  const {
    handlers: { handleSignIn },
    isSubmitting,
  } = useAuth()

  const onSubmit = useCallback(
    (data: FormSchemaType) => {
      handleSignIn({
        email: data.email,
        password: data.password,
      })
    },
    [handleSignIn],
  )

  return (
    <div className="h-screen w-screen max-h-screen max-w-screen flex flex-col items-center justify-center bg-gradient-to-r from-background to-foreground overflow-hidden">
      <div className="flex flex-col gap-8 items-center w-96 p-8 rounded shadow-2xl bg-background">
        <div>
          <img
            src={tmvLogoHorizontal}
            alt="Logo TôMaisVip Horizontal"
            className="w-3/4 mx-auto"
          />
        </div>
        <Form
          onSubmitForm={onSubmit}
          formSchema={formSchema}
          className="flex flex-col gap-4 items-center w-full"
        >
          <Form.Input type="text" label="Email" name="email" isRequired />
          <Form.Input
            type="password"
            label="Senha"
            name="password"
            isRequired
          />

          <Button
            type="submit"
            isLoading={isSubmitting}
            loadingMessage="Entrando..."
            disabled={isSubmitting}
          >
            Entrar
          </Button>
        </Form>
      </div>
    </div>
  )
}
