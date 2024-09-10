import React, { Fragment, useCallback, useState } from 'react'
import { useDataGrid } from '../../Providers'

import type { StyleCellProps } from '..'
import { Row } from './Row'
import { ExpandedContent } from './ExpandedContent'
import { ArrayData } from '../../Providers/Context'

interface TbodyArrayProps<T> {
  styleCell: ({ arrayColumns, index, type }: StyleCellProps<T>) => string
}

const TbodyArray = <T,>({ styleCell }: TbodyArrayProps<T>): JSX.Element => {
  const { columns, data, keyExtractor } = useDataGrid<T>()

  const dataArray = data as ArrayData<T>

  const [rowExpanded, setRowExpanded] = useState<string | null>(null)

  const handleRowExpanded = useCallback(
    (id: string) => {
      if (id === rowExpanded) {
        setRowExpanded(null)
        return
      }

      setRowExpanded(id)
    },
    [rowExpanded],
  )

  return (
    <tbody className="bg-white-bee2pay">
      {dataArray.map((item) => (
        <Fragment key={keyExtractor(item)}>
          <Row
            item={item}
            styleCell={styleCell}
            handleRowExpanded={handleRowExpanded}
            isRowExpanded={rowExpanded === keyExtractor(item)}
          />

          <ExpandedContent
            item={item}
            isRowExpanded={rowExpanded === keyExtractor(item)}
          />
        </Fragment>
      ))}
      <tr className="hover:bg-white-bee2pay">
        <td colSpan={columns.length}></td>
      </tr>
    </tbody>
  )
}

export { TbodyArray }
