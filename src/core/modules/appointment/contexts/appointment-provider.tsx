import React, {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

import {
  Appointments,
  GroupCountProvidersAvailables,
  HandleListAllAppointmentsProps,
  HandleRemoveAppointmentInMemoryProps,
  HandleUpdateAppointmentInMemoryProps,
  useListAllAppointments,
} from '@appointment'

import { addDays, endOfWeek, startOfWeek } from 'date-fns'
import { useAuth } from '@/core/hooks/use-auth'

type HandleToggleWeekProps = 'next' | 'prev' | 'default'
interface HandleChangeWeekProps {
  startDate: Date
  endDate: Date
}
interface HandleSetProviderFilterProps {
  providerId: string
  providerName: string
}

interface AppointmentContextSchema {
  appointments: Appointments[]
  groupCountProvidersAvailables: GroupCountProvidersAvailables
  startOfWeek: Date
  loading: boolean
  isFilterActive: boolean
  providerFilterData: HandleSetProviderFilterProps
  handlers: {
    handleSetProviderFilter: (params: HandleSetProviderFilterProps) => void
    handleUpdateList: () => void
    handleToggleWeek: (week: HandleToggleWeekProps) => void
    handleChangeWeek: (week: HandleChangeWeekProps) => void
    handleListAllAppointments: ({
      startDate,
      endDate,
    }: HandleListAllAppointmentsProps) => void
  }
  inMemoryHandlers: {
    handleRemoveAppointmentInMemory: (
      props: HandleRemoveAppointmentInMemoryProps,
    ) => void
    handleUpdateAppointmentInMemory: (
      props: HandleUpdateAppointmentInMemoryProps,
    ) => void
  }
}

interface AppointmentProviderProps {
  children: ReactNode
}

interface Properties {
  startDate: Date
  endDate: Date
  providerId: string
  providerName: string
}

const defaultWeek = {
  startDate: startOfWeek(new Date(), {
    weekStartsOn: 1,
  }),
  endDate: addDays(endOfWeek(new Date()), -1),
}

export const AppointmentContext = createContext<AppointmentContextSchema>(
  {} as AppointmentContextSchema,
)

export const AppointmentProvider: React.FC<AppointmentProviderProps> = ({
  children,
}) => {
  const { user } = useAuth()
  const {
    appointments: { appointments, groupCountProvidersAvailables },
    inMemoryHandlers: {
      handleRemoveAppointmentInMemory,
      handleUpdateAppointmentInMemory,
    },
    handleListAllAppointments,
    loading,
  } = useListAllAppointments()

  const [propertires, setProperties] = useState<Properties>({} as Properties)

  const handleSetProperties = useCallback((props: Partial<Properties>) => {
    setProperties((oldState) => {
      return {
        ...oldState,
        ...props,
      }
    })
  }, [])

  const handleUpdateList = useCallback(() => {
    const { providerId, endDate, startDate } = propertires

    handleListAllAppointments({
      startDate,
      endDate,
      providerId,
    })
  }, [handleListAllAppointments, propertires])

  const handleToggleWeek = useCallback(
    (week: HandleToggleWeekProps) => {
      const { providerId, endDate, startDate } = propertires

      if (week === 'next') {
        handleSetProperties({
          startDate: addDays(startDate, 7),
          endDate: addDays(endDate, 7),
          providerId,
        })

        return
      }

      if (week === 'prev') {
        handleSetProperties({
          startDate: addDays(startDate, -7),
          endDate: addDays(endDate, -7),
          providerId,
        })

        return
      }

      handleSetProperties({
        startDate: defaultWeek.startDate,
        endDate: defaultWeek.endDate,
        providerId,
      })
    },
    [handleSetProperties, propertires],
  )

  const handleChangeWeek = useCallback(
    ({ startDate, endDate }: HandleChangeWeekProps) => {
      handleSetProperties({
        startDate,
        endDate,
        providerId: propertires.providerId,
      })
    },
    [handleSetProperties, propertires.providerId],
  )

  const handleSetProviderFilter = useCallback(
    ({ providerId, providerName }: HandleSetProviderFilterProps) => {
      handleSetProperties({
        providerId,
        providerName,
      })
      handleUpdateList()
    },
    [handleSetProperties, handleUpdateList],
  )

  useEffect(() => {
    const { endDate, providerId, startDate } = propertires

    if (!propertires.startDate || !propertires.endDate) {
      handleSetProperties({
        startDate: defaultWeek.startDate,
        endDate: defaultWeek.endDate,
        providerId,
      })

      if (user) {
        handleListAllAppointments({
          startDate: defaultWeek.startDate,
          endDate: defaultWeek.endDate,
          providerId,
        })
      }

      return
    }

    if (user) {
      handleListAllAppointments({
        startDate,
        endDate,
        providerId,
      })
    }
  }, [handleListAllAppointments, handleSetProperties, propertires, user])

  return (
    <AppointmentContext.Provider
      value={{
        isFilterActive: !!propertires.providerId,
        appointments,
        groupCountProvidersAvailables,
        providerFilterData: {
          providerId: propertires.providerId,
          providerName: propertires.providerName,
        },
        handlers: {
          handleListAllAppointments,
          handleToggleWeek,
          handleChangeWeek,
          handleUpdateList,
          handleSetProviderFilter,
        },
        inMemoryHandlers: {
          handleRemoveAppointmentInMemory,
          handleUpdateAppointmentInMemory,
        },
        startOfWeek: propertires.startDate || defaultWeek.startDate,
        loading,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  )
}
