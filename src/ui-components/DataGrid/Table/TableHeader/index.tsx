import React, { useCallback } from 'react'
import classnames from 'classnames'

import { useDataGrid } from '../../Providers'

import { StyleCellProps } from '..'
const baseColumn =
  'sticky top-0 p-4 text-left text-body6 bg-slate-8 whitespace-nowrap [&:not(:last-child):after]:content-[""] [&:not(:last-child):after]:h-[35%] [&:not(:last-child):after]:w-[1px] [&:not(:last-child):after]:absolute [&:not(:last-child):after]:right-0 [&:not(:last-child):after]:bottom-0 [&:not(:last-child):after]:mb-[0.938rem] [&:not(:last-child):after]:bg-slate-4 [&:not(:last-child):after]:flex [&:not(:last-child):after]:items-center'

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
            className={classnames(
              baseColumn,
              {
                [styleCell({ arrayColumns: columns, index })]: fixedColumns,
                'left-0': fixedColumns && index === 0,
                'z-10': index > fixedColumns - 1,
                'z-20': index < fixedColumns,
                '[&:not(:last-child):after]:h-[100%] [&:not(:last-child):after]:mb-0':
                  fixedColumns && index === fixedColumns - 1,
                [fixedWidthColumn(column.fixedWidthColumn)]:
                  column.fixedWidthColumn,
              },
              'z-[1]',
            )}
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
