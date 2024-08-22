import React, { ButtonHTMLAttributes, useMemo } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

import { Spinner } from '@ui-components'

const button = tv({
  base: 'border-2 border-transparent rounded transition-all font-bold cursor-pointer flex items-center gap-2 justify-center',
  variants: {
    typeColor: {
      disabled:
        'bg-disabled text-text-disabled cursor-not-allowed hover:bg-disabled',
      primary: 'bg-primary hover:bg-primary-hover text-text-tertiary',
      success: 'bg-success hover:opacity-85 text-text-tertiary',
      error: 'bg-error hover:opacity-85 text-text-tertiary',
      alert: 'bg-alert hover:opacity-85 text-text-tertiary',
      blank: 'border-2 border-border text-text-primary hover:bg-border',
    },
    block: {
      true: 'w-full',
      false: 'h-fit',
    },
    size: {
      sm: 'text-sm py-1 px-2 font-medium',
      md: 'text-md py-2 px-4',
      lg: 'text-lg py-1 px-6',
    },
  },
})

type ButtonVariants = VariantProps<typeof button>

export type TypeColor =
  | 'disabled'
  | 'primary'
  | 'success'
  | 'error'
  | 'alert'
  | 'blank'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  isLoading?: boolean
  loadingMessage?: string
  icon?: React.ReactNode
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  typeColor = 'primary',
  disabled,
  isLoading,
  children,
  block = true,
  loadingMessage,
  icon,
  size = 'md',
  ...props
}) => {
  const content = useMemo(() => {
    if (isLoading) {
      return (
        <div className="flex items-center gap-2">
          <Spinner size="xsm" />
          <span>{loadingMessage || 'Carregando...'}</span>
        </div>
      )
    }

    return (
      <div className="flex items-center gap-2">
        {icon && <div className="w-4 h-4">{icon}</div>}
        {children}
      </div>
    )
  }, [children, icon, isLoading, loadingMessage])

  return (
    <button
      disabled={disabled || isLoading}
      {...props}
      className={button({
        block,
        size,
        typeColor: (disabled && 'disabled') || typeColor,
      })}
    >
      {content}
    </button>
  )
}
