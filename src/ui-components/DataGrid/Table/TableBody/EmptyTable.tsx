import React from 'react'

import { useDataGrid } from '../../Providers'
import { FiXCircle } from 'react-icons/fi'

const EmptyTable: React.FC = () => {
  const { columns } = useDataGrid()

  return (
    <tbody className="bg-white h-[calc(100vh-9.375rem)]">
      <tr>
        <th className="text-center text-xl font-bold" colSpan={columns.length}>
          <div className="flex items-center justify-center gap-10">
            <FiXCircle fontSize="6rem" />
            <div className="text-start">
              Nenhum resultado foi encontrado <br /> com base nos critérios de
              pesquisa.
            </div>
          </div>
        </th>
      </tr>
    </tbody>
  )
}

export { EmptyTable }
