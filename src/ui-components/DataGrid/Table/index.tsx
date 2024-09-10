import React, { useCallback, useMemo } from 'react'
import classnames from 'classnames'

import { useDataGrid, ColumnProps } from '../Providers'

import { TableHeader } from './TableHeader'
import { TableBody } from './TableBody'

export type StyleCellProps<T> = {
  arrayColumns: ColumnProps<T>[]
  index: number
  type?: 'column' | 'row'
}

interface TableProps {
  tableWrapperRef: React.MutableRefObject<HTMLDivElement>
}

const Table = <T,>({ tableWrapperRef }: TableProps): JSX.Element => {
  const { fixedColumns, columns } = useDataGrid<T>()

  const widthByFixedColumns = useMemo(() => {
    return columns
      .slice(0, 2)
      .filter((column) => 'fixedWidthColumn' in column)
      .reduce((acc, column) => acc + column.fixedWidthColumn, 0)
  }, [columns])

  const styleCell = useCallback(
    ({ arrayColumns, index, type = 'column' }: StyleCellProps<T>) => {
      if (fixedColumns > index) {
        const width = arrayColumns[index]?.fixedWidthColumn ?? 0

        if (index > 0) {
          const previousItemWidth =
            arrayColumns[index - 1]?.fixedWidthColumn ?? 0
          return `sticky left-[${previousItemWidth}px] min-w-[${width}px] max-w-[${width}px] ${
            type === 'column' ? 'bg-slate-4' : 'bg-white-bee2pay'
          }`
        }

        return `sticky left-0 min-w-[${width}px] max-w-[${width}px] ${
          type === 'column' ? 'bg-slate-4' : 'bg-white-bee2pay'
        }`
      }

      return ''
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fixedColumns],
  )

  return (
    <div
      ref={tableWrapperRef}
      className={classnames(
        'overflow-auto scrollbar-bee2pay-data-grid w-full bg-white block h-screen',
        {
          [`[&::-webkit-scrollbar-track]:ml-[${widthByFixedColumns}px]`]:
            fixedColumns > 0,
        },
      )}
    >
      <table className="relative w-full text-slate-2">
        <TableHeader styleCell={styleCell} />
        <TableBody styleCell={styleCell} />
      </table>
    </div>
  )
}

export { Table }
