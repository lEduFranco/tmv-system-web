import React from 'react'
import ContentLoader from 'react-content-loader'

interface TableLoaderProps {
  colSpan: number
  width?: number
}

const TableLoader = ({ colSpan, width }: TableLoaderProps): JSX.Element => {
  return (
    <tbody className="bg-white-bee2pay">
      <tr>
        <td colSpan={colSpan}>
          <ContentLoader
            backgroundColor="#eaeced"
            foregroundColor="#ffffff"
            style={{
              width: width ? `${width}%` : '100%',
              height: `calc(100vh - 134px)`,
            }}
          >
            {Array.from({ length: 20 }).map((_, key) => {
              let y = key + (5 - key)

              if (key !== 0) {
                y += 45 * key
              }

              return (
                <rect
                  key={key}
                  x="0"
                  y={y}
                  rx="3"
                  ry="3"
                  width="100%"
                  height="40"
                />
              )
            })}
          </ContentLoader>
        </td>
      </tr>
    </tbody>
  )
}

export { TableLoader }
