import React from 'react'

import {
  DataGridContext,
  DataGridContextProps,
  PaginationDynamoProps,
} from './Context'

interface DataGridProviderProps<T> extends DataGridContextProps<T> {
  paginationDynamo?: PaginationDynamoProps & {
    updatePage: (page: number) => void
    pageActive: number
    numberOfPages: number
  }
  sortableConfig?: {
    requestSort: any
    sortConfig: any
  }
  children: React.ReactNode
}

const DataGridProvider = <T extends object>({
  children,
  ...props
}: DataGridProviderProps<T>): JSX.Element => {
  return (
    <DataGridContext.Provider value={props}>
      {children}
    </DataGridContext.Provider>
  )
}

export { DataGridProvider }
