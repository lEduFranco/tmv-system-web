import React from 'react'

import { useDataGrid } from '../../Providers'

import { EmptyTable } from './EmptyTable'
import { TableLoader } from './TableLoader'

import { TbodyArray } from './TbodyArray'

import type { StyleCellProps } from '..'

interface TableBodyProps<T> {
  styleCell: ({ arrayColumns, index, type }: StyleCellProps<T>) => string
}

const TableBody = <T,>({ styleCell }: TableBodyProps<T>): JSX.Element => {
  const { columns, data, loading } = useDataGrid<T>()

  if (loading) {
    return <TableLoader colSpan={columns.length} />
  }

  if (data.length === 0) {
    return <EmptyTable />
  }

  return <TbodyArray styleCell={styleCell} />
}

export { TableBody }
