import { tailwindMerge } from '@/utils/tailwindMerge'
import React, {
  InputHTMLAttributes,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { useFormContext } from 'react-hook-form'
import { FiEye, FiEyeOff } from 'react-icons/fi'

import { VariantProps, tv } from 'tailwind-variants'

const variants = tv({
  base: 'flex items-center rounded p-2 w-full focus:border-primary transition-all border',
  variants: {
    hasError: {
      true: 'border-error focus:border-error',
      false: 'focus:border-primary',
    },
    focus: {
      true: 'focus:border-primary',
    },
  },
})

type InputVariants = VariantProps<typeof variants>

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    InputVariants {
  placeHolder?: string
  label?: string
  isRequired?: boolean
  name: string
  type: 'text' | 'password'
}

export const Input: React.FC<InputProps> = ({
  name,
  placeHolder,
  label,
  isRequired,
  type,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const IconPassword = useMemo(
    () => (showPassword ? FiEye : FiEyeOff),
    [showPassword],
  )
  const typePassword = useMemo(
    () => (showPassword ? 'text' : 'password'),
    [showPassword],
  )

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  const handleTogglePassword = useCallback(() => {
    setShowPassword((prevValue) => !prevValue)
  }, [])

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex justify-between">
        <label className="font-semibold text-sm">
          {label}
          {isRequired ? <span className="text-red-600"> *</span> : null}
        </label>
        {errors[name] ? (
          <small className="text-error font-semibold">
            {errors[name]?.message as string}
          </small>
        ) : null}
      </div>

      <div
        className={tailwindMerge(
          variants({ hasError: !!errors[name]?.message }),
          isFocused ? 'focus-within:border-primary' : null,
        )}
      >
        <input
          {...register(name)}
          className="w-full bg-transparent focus:outline-none"
          placeholder={placeHolder}
          type={type === 'password' ? typePassword : type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {type === 'password' ? (
          <IconPassword
            className="cursor-pointer"
            onClick={handleTogglePassword}
          />
        ) : null}
      </div>
    </div>
  )
}
