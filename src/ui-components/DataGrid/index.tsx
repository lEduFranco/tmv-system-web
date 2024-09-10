import { useRef } from 'react'

import { App } from './App'
import {
  DataGridProvider,
  DataGridContextProps,
  ColumnProps,
} from './Providers'

const DataGrid = <T extends object>({
  columns,
  data,
  fixedColumns,
  keyExtractor,
  renderTableActions,
  header,
  loading,
  renderExpandedContent,
}: DataGridContextProps<T>): JSX.Element => {
  const tableWrapperRef = useRef<HTMLDivElement>(null)

  return (
    <DataGridProvider
      columns={columns}
      data={data}
      fixedColumns={fixedColumns}
      keyExtractor={keyExtractor}
      renderTableActions={renderTableActions}
      header={header}
      loading={loading}
      renderExpandedContent={renderExpandedContent}
    >
      <App tableWrapperRef={tableWrapperRef} />
    </DataGridProvider>
  )
}

export { DataGrid }

export type { ColumnProps }
