/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, Context } from 'react'

import { DataGridContext, DataGridContextProps } from '../Context'

type UseDataGridProps<T> = DataGridContextProps<T>

function useDataGrid<T>(): UseDataGridProps<T> {
  const context = useContext<UseDataGridProps<T>>(
    DataGridContext as unknown as Context<UseDataGridProps<T>>,
  )

  if (!context) {
    throw new Error('useDataGridContext must be used under DataGridProvider')
  }

  return context
}

export { useDataGrid }
