import React, { useEffect, useMemo } from 'react'
import { Button, ColumnProps, DataGrid, PageCreate } from '@/ui-components'
import { FiCalendar, FiRotateCcw } from 'react-icons/fi'
import { useGetAppointmentsByDate } from '@/core/modules/appointment/hooks/use-get-appointments-by-date'
import { Provider } from './components/provider'
import { Client } from './components/client'
import { Address } from './components/address'
import { Appointment } from '@/core'
import { Actions } from './components/actions'
import { Header } from './components/header'
import { FormProvider, useForm } from 'react-hook-form'
import { format } from 'date-fns'

export const Schedule: React.FC = () => {
  const { appointments, getAppointments, loading } = useGetAppointmentsByDate()
  const form = useForm({
    defaultValues: {
      date: new Date(),
    },
  })

  const date = form.watch('date')

  const dateFormat = useMemo(() => {
    return format(date, 'yyyy-MM-dd')
  }, [date])

  useEffect(() => {
    getAppointments(dateFormat)
  }, [date, getAppointments, dateFormat])

  const columns: ColumnProps<Appointment>[] = useMemo(() => {
    return [
      {
        label: 'Prestadora',
        propertyName: 'providerId',
        renderContents: ({ item }) => <Provider item={item} />,
      },
      {
        label: 'Cliente',
        propertyName: 'clientId',
        renderContents: ({ item }) => <Client item={item} />,
      },
      {
        label: 'Endereço',
        propertyName: 'address[0].street',
        renderContents: ({ item }) => <Address item={item} />,
      },
    ]
  }, [])

  return (
    <FormProvider {...form}>
      <PageCreate
        title="Agenda"
        icon={<FiCalendar />}
        fitContent
        actions={
          <Button onClick={() => getAppointments(dateFormat)}>
            <FiRotateCcw />
          </Button>
        }
      >
        <DataGrid
          header={<Header getAppointments={getAppointments} />}
          keyExtractor={(item) => item.id}
          data={appointments}
          columns={columns}
          renderTableActions={({ item }) => (
            <Actions getAppointments={getAppointments} item={item} />
          )}
          loading={loading}
        />
      </PageCreate>
    </FormProvider>
  )
}
