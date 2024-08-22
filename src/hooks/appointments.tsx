import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'
import { api } from '@/core/services/api'
import { addDays, startOfWeek, subDays } from 'date-fns'
import { useAuth } from '@/core/hooks/use-auth'

type Provider = {
  id: string
  user: {
    user_profile: {
      cel: string
      tel: string
      firstname: string
      lastname: string
    }
  }
}

interface AppointmentProps {
  id: string
  date: string
  period: 'integral' | 'part_time_morning' | 'part_time_afternoon'
  frequency:
    | 'first_contact_client'
    | 'first_contact_provider'
    | 'weekly'
    | 'biweekly'
    | 'detached'
  neighborhood: string
  address: string
  number: string
  complement: string
  reference_points: string
  nearest_subway_station: string
  localization: string
  observation: string
  notes: string
  status: string
  provider_id: string
  provider: Provider
  client: {
    company_responsible: string
    client_type: 'fixed' | 'detached'
    user: {
      user_profile: {
        cel: string
        tel: string
        firstname: string
        lastname: string
      }
    }
    status: 'active' | 'inactive'
  }
}

export interface AppointmentsPeriod {
  integral?: AppointmentProps
  part_time_morning?: AppointmentProps
  part_time_afternoon?: AppointmentProps
}

export type HistoryStatus =
  | 'TO_BE_DEFINED'
  | 'TO_BE_DEFINED_AFTERNOON'
  | 'RELEASED_AFTERNOON'
  | 'TO_BE_DEFINED_MORNING'
  | 'RELEASED_MORNING'
  | 'RELEASED'
  | 'FILLED'
  | 'DAY_OFF'
  | 'FAULT'
  | 'REPLACING'
  | 'REPLACING_MORNING'
  | 'REPLACING_AFTERNOON'
  | 'EXTRA'
  | 'EXTRA_MORNING'
  | 'EXTRA_AFTERNOON'
  | 'FAULT_MORNING'
  | 'FAULT_AFTERNOON'
  | 'FAULT_DAY_OFF'
  | 'FAULT_DAY_OFF_MORNING'
  | 'FAULT_DAY_OFF_AFTERNOON'
  | 'FAULT_MORNING_RELEASED_AFTERNOON'
  | 'RELEASED_MORNING_FAULT_AFTERNOON'
  | 'TO_BE_DEFINED_MORNING_FAULT_AFTERNOON'
  | 'FAULT_MORNING_TO_BE_DEFINED_AFTERNOON'
  | 'TO_BE_DEFINED_MORNING_RELEASED_AFTERNOON'
  | 'RELEASED_MORNING_TO_BE_DEFINED_AFTERNOON'

interface AppointmentsProvider {
  provider: {
    id: string
    name: string
    neighborhood: string
    status: string
  }
  appointmentsProvider: {
    monday: AppointmentsPeriod
    tuesday: AppointmentsPeriod
    wednesday: AppointmentsPeriod
    thursday: AppointmentsPeriod
    friday: AppointmentsPeriod
    saturday: AppointmentsPeriod
  }
  historyStatusProvider: {
    monday: HistoryStatus
    tuesday: HistoryStatus
    wednesday: HistoryStatus
    thursday: HistoryStatus
    friday: HistoryStatus
    saturday: HistoryStatus
  }
}

interface AppointmentsProviverProps {
  children: ReactNode
}

type IPeriodCount = {
  integral: number
  part_time_morning: number
  part_time_afternoon: number
}

type IWeekCount = {
  monday: IPeriodCount
  tuesday: IPeriodCount
  wednesday: IPeriodCount
  thursday: IPeriodCount
  friday: IPeriodCount
  saturday: IPeriodCount
}

interface AppointmentWithPeriod {
  id: string
  date: string
  period: 'integral' | 'part_time_morning' | 'part_time_afternoon'
  frequency:
    | 'first_contact_client'
    | 'first_contact_provider'
    | 'weekly'
    | 'biweekly'
    | 'detached'
  neighborhood: string
  address: string
  number: string
  complement: string
  reference_points: string
  nearest_subway_station: string
  localization: string
  observation: string
  notes: string
  status: string
  provider_id: string
  provider: {
    id: string
    user: {
      user_profile: {
        cel: string
        tel: string
        firstname: string
        lastname: string
      }
    }
  }
  client: {
    company_responsible: string
    user: {
      user_profile: {
        cel: string
        tel: string
        firstname: string
        lastname: string
      }
    }
  }
}

export type HandleDeleteAppointment = {
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'
  appointment: AppointmentWithPeriod
}

export type HandleUpdateAppointment = {
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'
  period: 'integral' | 'part_time_morning' | 'part_time_afternoon'
  appointment: AppointmentWithPeriod
}

interface AppointmentsContextSchema {
  appointments: AppointmentsProvider[]
  handleDeleteAppointment: ({
    day,
    appointment,
  }: HandleDeleteAppointment) => void
  handleUpdateAppointment: ({
    day,
    period,
    appointment,
  }: HandleUpdateAppointment) => void
  handlePreviousWeek: () => void
  handleNextWeek: () => void
  loading: boolean
  countProvidersAvailable: IWeekCount
  startDate: Date
  endDate: Date
  handleChangeWeek: (date?: Date) => void
  getAppointments: () => void
  provider?: Provider
  setProvider: React.Dispatch<React.SetStateAction<Provider | undefined>>
}

export const AppointmentsContext = createContext<AppointmentsContextSchema>(
  {} as AppointmentsContextSchema,
)

const AppointmentsProviver: React.FC<AppointmentsProviverProps> = ({
  children,
}) => {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [appointments, setAppointments] = useState<AppointmentsProvider[]>([])
  const [countProvidersAvailable, setCountProvidersAvailable] =
    useState<IWeekCount>({} as IWeekCount)

  const [provider, setProvider] = useState<Provider | undefined>()

  const [startDate, setStartDate] = useState(
    startOfWeek(new Date(), {
      weekStartsOn: 1,
    }),
  )
  const [endDate, setEndDate] = useState(addDays(startDate, 5))

  const getAppointments = useCallback(() => {
    if (user) {
      setLoading(true)
      api
        .get('/appointments/lits-all-appointments', {
          params: {
            startDate,
            endDate,
            providerId: provider?.id,
          },
        })
        .then(({ data }) => {
          setAppointments(data.appointments)
          setCountProvidersAvailable(data.groupCountProvidersAvailables)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [endDate, provider?.id, startDate, user])

  const handlePreviousWeek = useCallback(() => {
    const newMonday = subDays(startDate, 7)
    const newSaturday = subDays(endDate, 7)
    setStartDate(newMonday)
    setEndDate(newSaturday)
  }, [startDate, endDate])

  const handleNextWeek = useCallback(() => {
    const newMonday = addDays(startDate, 7)
    const newSaturday = addDays(endDate, 7)
    setStartDate(newMonday)
    setEndDate(newSaturday)
  }, [startDate, endDate])

  const handleDeleteAppointment = useCallback(
    ({ day, appointment }: HandleDeleteAppointment) => {
      const response = appointments.map((item) => {
        if (item.provider.id === appointment.provider.id) {
          const newAppointmentsProvider = { ...item.appointmentsProvider }

          const result = {
            ...newAppointmentsProvider,
            [day]: {
              ...newAppointmentsProvider[day],
            },
          }
          delete result[day][appointment.period]
          return { ...item, appointmentsProvider: result }
        }
        return item
      })

      return setAppointments(response)
    },
    [appointments],
  )

  const handleUpdateAppointment = useCallback(
    ({ day, period, appointment }: HandleUpdateAppointment) => {
      const response = appointments.map((item) => {
        if (item.provider.id === appointment.provider_id) {
          const newAppointmentsProvider = { ...item.appointmentsProvider }
          const result = {
            ...newAppointmentsProvider,
            [day]: {
              ...newAppointmentsProvider[day],
              [period]: { ...appointment },
            },
          }
          return { ...item, appointmentsProvider: result }
        }

        return item
      })
      setAppointments(response)
    },
    [appointments],
  )

  const handleChangeWeek = useCallback((date?: Date) => {
    const newDate = date || new Date()

    setStartDate(
      startOfWeek(newDate, {
        weekStartsOn: 1,
      }),
    )
    setEndDate(
      addDays(
        startOfWeek(newDate, {
          weekStartsOn: 1,
        }),
        5,
      ),
    )
  }, [])

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        handleDeleteAppointment,
        handleUpdateAppointment,
        handleNextWeek,
        handlePreviousWeek,
        startDate,
        endDate,
        countProvidersAvailable,
        loading,
        handleChangeWeek,
        getAppointments,
        provider,
        setProvider,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  )
}

function useAppointments() {
  const context = useContext(AppointmentsContext)

  if (!context) {
    throw new Error(
      'useAppointments must be used within an AppointmentsProvider',
    )
  }

  return context
}

export { AppointmentsProviver, useAppointments }
