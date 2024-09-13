import React, { useCallback } from 'react'
import classnames from 'classnames'

import { useDataGrid } from '../../Providers'

import { StyleCellProps } from '..'
const baseColumn =
  'sticky top-0 py-2 px-2 text-left text-md bg-zinc-200 whitespace-nowrap'

interface TableHeaderProps<T> {
  styleCell: ({ arrayColumns, index, type }: StyleCellProps<T>) => string
}

const TableHeader = <T,>({ styleCell }: TableHeaderProps<T>): JSX.Element => {
  const { fixedColumns, columns } = useDataGrid<T>()

  const fixedWidthColumn = useCallback((width: number) => {
    return `min-w-[${width}px] max-w-[${width}px]`
  }, [])

  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th
            key={`${column.propertyName}-${index}`}
            className={classnames(baseColumn, {
              [styleCell({ arrayColumns: columns, index })]: fixedColumns,
              'left-0': fixedColumns && index === 0,
              '[&:not(:last-child):after]:h-[100%] [&:not(:last-child):after]:mb-0':
                fixedColumns && index === fixedColumns - 1,
              [fixedWidthColumn(column.fixedWidthColumn)]:
                column.fixedWidthColumn,
            })}
          >
            <div
              className={classnames(
                'flex items-center gap-1 cursor-pointer group',
                {
                  'justify-start': !column.align || column.align === 'left',
                  'justify-center': column.align === 'center',
                  'justify-end': column.align === 'right',
                },
              )}
            >
              {column.label}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  )
}

export { TableHeader }
