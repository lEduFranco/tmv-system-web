import React, { useCallback, useEffect, useRef, useState } from 'react'

import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

import { tv } from 'tailwind-variants'

const container = tv({
  base: 'relative',
  variants: {
    size: {
      min: 'w-fit',
      sm: 'w-36',
      md: 'w-48',
      lg: 'w-56',
      full: 'w-full',
    },
  },
})

const display = tv({
  base: 'relative rounded p-2 min-h-[42px] min-w-fit focus:border-primary transition-all border pr-8',
  variants: {
    open: {
      true: 'border-primary',
      false: null,
    },
  },
})

const optionsBox = tv({
  base: 'w-full rounded bg-background border min-w-fit mt-1 p-2 gap-1 max-h-44 overflow-auto shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] animate-slideDownAndFade',
  variants: {
    open: {
      true: 'absolute flex flex-col z-50',
      false: 'hidden',
    },
  },
})

const optionItem = tv({
  base: 'rounded py-1 px-2 cursor-pointer transition-all',
  variants: {
    isSelected: {
      true: 'bg-primary hover:bg-primary-hover text-text-tertiary',
      false: 'bg-menu-bg hover:bg-menu-foreground',
    },
  },
})

type Option = {
  label: string | number
  value: string | number
}

type Properties = {
  open: boolean
  selectedOption: Option
}

interface SelectProps {
  label?: string
  placeholder?: string
  options: Option[]
  defaultValue?: Option
  value?: Option
  onChange: (option: Option) => void
  size?: 'min' | 'sm' | 'md' | 'lg' | 'full'
}

export const Select: React.FC<SelectProps> = ({
  label,
  placeholder,
  options,
  defaultValue,
  value,
  onChange,
  size = 'min',
}) => {
  const [properties, setProperties] = useState<Properties>({} as Properties)

  const handleSetProperties = useCallback((props: Partial<Properties>) => {
    setProperties((oldState) => {
      return {
        ...oldState,
        ...props,
      }
    })
  }, [])

  const handleSelectOptions = useCallback(
    (option: Option) => {
      handleSetProperties({
        selectedOption: option,
        open: false,
      })
      onChange(option)
    },
    [handleSetProperties, onChange],
  )

  const boxRef = useRef<HTMLDivElement | null>(null)
  const optionsRef = useRef<HTMLDivElement | null>(null)

  const Icon = properties.open ? FiChevronUp : FiChevronDown

  useEffect(() => {
    if (defaultValue && !properties.selectedOption) {
      handleSetProperties({
        selectedOption: defaultValue,
      })
    }

    if (value) {
      handleSetProperties({
        selectedOption: value,
      })
    }
  }, [defaultValue, handleSetProperties, properties.selectedOption, value])

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        boxRef.current &&
        !boxRef.current.contains(event.target) &&
        optionsRef.current &&
        !optionsRef.current.contains(event.target)
      ) {
        handleSetProperties({
          open: false,
        })
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleSetProperties])

  return (
    <div className={container({ size })}>
      <div>
        {label ? (
          <small className="font-semibold text-sm">{label}</small>
        ) : null}
      </div>
      <div
        className="relative cursor-pointer"
        onClick={() =>
          handleSetProperties({
            open: !properties.open,
          })
        }
      >
        <div ref={boxRef} className={display({ open: properties.open })}>
          {properties.selectedOption?.label || placeholder}
        </div>
        <Icon className="absolute right-2 top-3" />
      </div>
      <div ref={optionsRef} className={optionsBox({ open: properties.open })}>
        {options.map((option) => {
          return (
            <span
              key={option.value}
              onClick={() => handleSelectOptions(option)}
              className={optionItem({
                isSelected: properties.selectedOption?.value === option.value,
              })}
            >
              {option.label}
            </span>
          )
        })}
      </div>
    </div>
  )
}
