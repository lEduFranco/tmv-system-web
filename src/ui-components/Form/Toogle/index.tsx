import { Button, ButtonProps } from '@/ui-components/Button'
import React, { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'

export type ToggleButtonItem = {
  label: string
  value: string
}

export interface ToggleButtonProps extends Omit<ButtonProps, 'typeColor'> {
  name: string
  items: ToggleButtonItem[]
  onToggle?: (value: string) => void
  type?: 'button' | 'submit' | 'reset'
  typeColor?: ButtonProps['typeColor']
  block?: ButtonProps['block']
  size?: ButtonProps['size']
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  name,
  items,
  onToggle,
  type = 'button',
  typeColor = 'primary',
  block = true,
  size = 'md',
  ...buttonProps
}) => {
  const { setValue, watch } = useFormContext()
  const value = watch(name)

  const handleToggle = useCallback(
    (value: string) => {
      setValue(name, value)
      if (onToggle) onToggle(value)
    },
    [name, onToggle, setValue],
  )
  return (
    <div className="flex space-x-4">
      {items.map((item) => (
        <Button
          key={item.value}
          type={type}
          name={name}
          value={item.value}
          typeColor={item.value === value ? 'primary' : typeColor}
          block={block}
          size={size}
          onClick={() => handleToggle(item.value)}
          {...buttonProps}
        >
          {item.label}
        </Button>
      ))}
    </div>
  )
}
