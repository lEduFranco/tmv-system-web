import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import DatePickerComponent from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FiCalendar } from 'react-icons/fi'

interface DatePickerProps {
  label?: string
  name: string
  className?: string
  isRequired?: boolean
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  name,
  className,
  isRequired,
}) => {
  const { control, setValue } = useFormContext()

  return (
    <div>
      {label ? (
        <label>
          {label} {isRequired ? <span className="text-red-600"> *</span> : null}
        </label>
      ) : null}
      <Controller
        name="date"
        control={control}
        render={({ field }) => (
          <div className="flex items-center justify-between gap-1 border border-gray-300 rounded p-2 w-[150px] cursor-pointer">
            <DatePickerComponent
              className={className}
              placeholderText="Selecione a data"
              onChange={(date) => {
                field.onChange(date)
                setValue(name, date)
              }}
              selected={field.value}
              dateFormat="dd/MM/yyyy"
              dateFormatCalendar="dd/MM/yyyy"
            />
            <FiCalendar color="#000000" />
          </div>
        )}
      />
    </div>
  )
}

export { DatePicker }
