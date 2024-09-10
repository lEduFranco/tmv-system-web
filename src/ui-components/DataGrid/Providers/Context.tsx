import { createContext } from 'react'

export type ItemProps<T> = {
  item: T
}

type RenderExpandedContentProps<T> = ItemProps<T> & {
  isExpanded: boolean
}

export type ColumnProps<T> = {
  label?: string
  propertyName: string
  renderContents?: ({ item }: ItemProps<T>) => JSX.Element | string
  fixedWidthColumn?: number
  renderTableActions?: ({ item }: ItemProps<T>) => JSX.Element
  sortable?: boolean
  align?: 'left' | 'center' | 'right'
}

export type PaginationDynamoProps = {
  loadMoreResults: () => void
  itemsPerPage?: number
}

export type ArrayData<T> = T[]
export type ArrayOfArrayData<T> = T[][]

export interface DataGridContextProps<T> {
  fixedColumns?: number
  columns: ColumnProps<T>[]
  data: ArrayData<T> | ArrayOfArrayData<T>
  keyExtractor: (item: T) => string
  sort?: (a: T, b: T) => number
  renderTableActions?: ({ item }: ItemProps<T>) => JSX.Element
  header: JSX.Element
  loading?: boolean
  renderExpandedContent?: ({
    item,
    isExpanded,
  }: RenderExpandedContentProps<T>) => JSX.Element
}

const DataGridContext = createContext<DataGridContextProps<object>>(
  {} as DataGridContextProps<object>,
)

export { DataGridContext }
