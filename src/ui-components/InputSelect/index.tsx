import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { tv } from 'tailwind-variants'

import { FiSearch, FiX } from 'react-icons/fi'
import { isEmpty } from 'lodash'

const content = tv({
  base: 'relative',
  variants: {
    size: {
      block: 'w-full',
      default: 'w-96',
      fit: 'w-fit',
    },
  },
})

const optionsBox = tv({
  base: 'rounded bg-background border w-full mt-1 p-2 gap-1 max-h-44 overflow-auto shadow-2xl shadow-disabled animate-slideDownAndFade',
  variants: {
    open: {
      true: 'absolute flex flex-col z-50',
      false: 'hidden',
    },
  },
})

const icon = tv({
  base: 'absolute right-2 top-3',
  variants: {
    typeIcon: {
      search: 'text-text-disabled',
      close: 'cursor-pointer',
    },
  },
})

export type OptionSchema = {
  id: string
  title: string
  value: string
}

export type InputSelectProps = {
  size?: 'block' | 'fit' | 'default'
  placeholder?: string
  label?: string
  options?: OptionSchema[]
  onValueChange?: (value: string) => void
  setSelectedOption?: (props: OptionSchema) => void
  defaultInputValue?: string
}

type PropertiesSchema = {
  open: boolean
  inputValue: string
}

export const InputSelect: React.FC<InputSelectProps> = ({
  size = 'default',
  placeholder,
  label,
  options,
  onValueChange,
  setSelectedOption,
  defaultInputValue,
}) => {
  const [properties, setProperties] = useState<PropertiesSchema>({
    open: false,
    inputValue: defaultInputValue || '',
  })

  const inputRef = useRef<HTMLInputElement | null>(null)
  const optionsRef = useRef<HTMLDivElement | null>(null)

  const inputValueIsEmpty = useMemo(() => {
    return properties.inputValue.length === 0
  }, [properties.inputValue])

  const handleSetProperties = useCallback(
    (props: Partial<PropertiesSchema>) => {
      setProperties((oldState) => {
        return {
          ...oldState,
          ...props,
        }
      })
    },
    [],
  )

  const handleSelectOption = useCallback(
    (option: OptionSchema) => {
      setSelectedOption(option)
      handleSetProperties({
        open: false,
        inputValue: option.title,
      })
    },
    [handleSetProperties, setSelectedOption],
  )

  const handleChangeInput = useCallback(
    (inputValue: string) => {
      onValueChange(inputValue)
      handleSetProperties({
        inputValue,
      })

      if (!isEmpty(options)) {
        handleSetProperties({
          open: true,
        })
      }

      if (isEmpty(options)) {
        handleSetProperties({
          open: false,
        })
      }
    },
    [handleSetProperties, onValueChange, options],
  )

  useEffect(() => {
    if (options && !defaultInputValue) {
      handleSetProperties({
        open: true,
      })
    }
  }, [defaultInputValue, handleSetProperties, options])

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
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

  useEffect(() => {
    if (inputValueIsEmpty) {
      handleSetProperties({
        open: false,
      })
    }
  }, [handleSetProperties, inputValueIsEmpty])

  const Icon = inputValueIsEmpty ? FiSearch : FiX

  const iconAction = useCallback(() => {
    if (!inputValueIsEmpty) {
      handleSetProperties({
        open: false,
        inputValue: '',
      })
    }
  }, [handleSetProperties, inputValueIsEmpty])

  return (
    <div className={content({ size })}>
      <div>
        {label ? (
          <small className="font-semibold text-sm">{label}</small>
        ) : null}
      </div>
      <div>
        <div className="relative">
          <input
            type="text"
            ref={inputRef}
            placeholder={placeholder}
            value={properties.inputValue}
            onChange={(e) => handleChangeInput(e.currentTarget.value)}
            className="rounded w-full p-2 focus:border-primary transition-all border pr-8"
          />
          <Icon
            onClick={iconAction}
            className={icon({
              typeIcon: inputValueIsEmpty ? 'search' : 'close',
            })}
          />
        </div>
        <div ref={optionsRef} className={optionsBox({ open: properties.open })}>
          {!isEmpty(options)
            ? options.map((option) => {
                return (
                  <span
                    key={option.id}
                    onClick={() => handleSelectOption(option)}
                    className="rounded py-1 px-2 cursor-pointer transition-all bg-menu-bg hover:bg-menu-foreground"
                  >
                    {option.title}
                  </span>
                )
              })
            : null}

          {isEmpty(options) && properties.inputValue.length >= 3 ? (
            <span className="mx-auto text-text-disabled">Nenhuma Opção</span>
          ) : null}

          {isEmpty(options) && properties.inputValue.length < 3 ? (
            <span className="mx-auto text-text-disabled">
              Digite no mínimo 3 caracteres.
            </span>
          ) : null}
        </div>
      </div>
    </div>
  )
}
