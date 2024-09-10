import React, { memo, useCallback } from 'react'
import classnames from 'classnames'

import { useDataGrid } from '../../Providers'
import { renderContent } from '../../functions'

import type { StyleCellProps } from '..'

interface RowProps<T> {
  item: T
  styleCell: (props: StyleCellProps<T>) => string
  handleRowExpanded: (id: string) => void
  isRowExpanded?: boolean
}

const baseRow =
  'px-4 py-2 text-left whitespace-nowrap group-hover/reservation:bg-slate-6 text-body1 font-Open-Sans border-b border-slate-6'

const RowComponent = <T,>({
  item,
  styleCell,

  isRowExpanded,
}: RowProps<T>): JSX.Element => {
  const { fixedColumns, columns, renderTableActions } = useDataGrid<T>()

  const fixedWidthColumn = useCallback((width: number) => {
    return `min-w-[${width}px] max-w-[${width}px]`
  }, [])

  return (
    <tr className="group/reservation relative h-0 align-top">
      {columns.map((column, index) => (
        <td
          key={index}
          className={classnames(baseRow, {
            [styleCell({ arrayColumns: columns, index, type: 'row' })]:
              fixedColumns,
            'left-0': fixedColumns && index === 0,
            'bg-slate-6': isRowExpanded,
            [fixedWidthColumn(column.fixedWidthColumn)]:
              column.fixedWidthColumn,
          })}
        >
          {index === fixedColumns - 1 ? (
            <div className="w-[0.063rem] max-w-[0.063rem] absolute bg-slate-4 h-full right-0 top-0"></div>
          ) : null}
          {renderContent<T>({ column })({ item })}
        </td>
      ))}
      <div className="hidden group-hover/reservation:flex absolute right-0 mr-4 h-full items-center">
        <>
          {renderTableActions && (
            <>
              {renderTableActions({
                item,
              })}
            </>
          )}
        </>
      </div>
    </tr>
  )
}

const Row = memo(RowComponent)

export { Row }
