import React, { memo } from 'react'
import classnames from 'classnames'

import { useDataGrid } from '../../Providers'

interface ExpandedContentProps<T> {
  item: T
  isRowExpanded?: boolean
}

const ExpandedContentComponent = <T,>({
  isRowExpanded,
  item,
}: ExpandedContentProps<T>): JSX.Element => {
  const { columns, renderExpandedContent } = useDataGrid<T>()

  return (
    <tr className="border-none h-0">
      <td
        colSpan={columns.length}
        className={classnames('p-0 ', {
          'border-0': !isRowExpanded,
          'border-t border-slate-5': isRowExpanded,
        })}
      >
        <div
          className={classnames(
            'bg-slate-6 transition-all duration-500 overflow-hidden',
            {
              'max-h-0': !isRowExpanded,
              'max-h-screen': isRowExpanded,
            },
          )}
        >
          {renderExpandedContent &&
            renderExpandedContent({ item, isExpanded: isRowExpanded })}
        </div>
      </td>
    </tr>
  )
}

const ExpandedContent = memo(ExpandedContentComponent)

export { ExpandedContent }
