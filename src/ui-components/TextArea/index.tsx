import React from 'react'

import { tv, VariantProps } from 'tailwind-variants'

const texteArea = tv({
  base: 'w-full p-2 border-2 border-menu-bg rounded',
  variants: {
    resize: {
      true: 'resize-y',
      false: 'resize-none',
    },
  },
})

type TextAreaVariants = VariantProps<typeof texteArea>

interface TextAreaProps extends TextAreaVariants {
  label?: string
  placeholder?: string
  onValueChange?: (value: string) => void
  value?: string
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  resize,
  onValueChange,
  value,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label ? (
        <div>
          <span className="font-bold text-primary">{label}</span>
        </div>
      ) : null}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={({ currentTarget: { value } }) => {
          onValueChange(value)
        }}
        className={texteArea({ resize })}
      />
    </div>
  )
}
