import React, { ReactNode, useMemo } from 'react'

import { Spinner } from '@ui-components'

interface PageCreateProps {
  children: ReactNode
  icon: JSX.Element
  title: string
  description?: ReactNode
  actions?: ReactNode
  loading?: boolean
  fitContent?: boolean
}

export const PageCreate: React.FC<PageCreateProps> = ({
  children,
  icon,
  title,
  description,
  actions,
  loading,
  fitContent = false,
}) => {
  const Content = useMemo(() => {
    if (fitContent) {
      return children
    }

    return (
      <main className="p-4 w-full h-full rounded overflow-auto border-2 border-border">
        {children}
      </main>
    )
  }, [children, fitContent])

  return (
    <div className="w-full h-full bg-background p-8 flex flex-col gap-4">
      <header className="p-4 border-2 border-border rounded flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            {icon}
            <h1 className="font-bold text-xl">{title}</h1>
          </div>
          {description ? <div>{description}</div> : null}
        </div>
        <div>{actions}</div>
      </header>
      {loading ? (
        <main className="p-4 w-full h-full rounded overflow-auto border-2 border-border flex flex-col items-center justify-center">
          <Spinner />
        </main>
      ) : (
        Content
      )}
    </div>
  )
}
