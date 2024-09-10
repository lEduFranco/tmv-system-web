import React from 'react'

import { Table } from './Table'
import { useDataGrid } from './Providers'

interface AppProps {
  tableWrapperRef: React.MutableRefObject<HTMLDivElement>
}

const App = ({ tableWrapperRef }: AppProps): JSX.Element => {
  const { header } = useDataGrid()

  return (
    <div className="flex flex-col scroll-smooth border border-slate-5 overflow-hidden w-full flex-1">
      {header && <div className="p-[0.938rem]">{header}</div>}
      <Table tableWrapperRef={tableWrapperRef} />
    </div>
  )
}

export { App }
