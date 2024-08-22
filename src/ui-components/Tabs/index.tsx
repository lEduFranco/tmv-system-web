import React, { useState } from 'react'
import { tv } from 'tailwind-variants'

const tabButton = tv({
  base: 'border-2 border-transparent transition-all font-medium cursor-pointer flex items-center gap-2 justify-center p-2',
  variants: {
    isActive: {
      true: 'text-primary p-2 cursor-pointer font-bold justify-center items-center border-b-primary border-[0.25rem]',
      false:
        'border-2 text-text-primary hover:text-primary p-2 cursor-pointer font-medium justify-center items-center border-b-disabled',
    },
    disabled: {
      true: 'text-text-disabled cursor-not-allowed p-2 font-medium justify-center items-center hover:text-text-disabled',
      false: null,
    },
  },
})

type Title = {
  name: string
  icon?: React.ReactNode
}

type Tab = {
  title: Title
  content: React.ReactNode
  isDisabled?: boolean
}

export interface TabsProps {
  tabs: Tab[]
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(1)

  const newTabs = tabs.map((tab, index) => {
    return {
      ...tab,
      id: index + 1,
    }
  })

  return (
    <div>
      <div className="flex items-center gap-2">
        {newTabs.map((item) => (
          <button
            className={tabButton({
              isActive: item.id === activeTab,
              disabled: item.isDisabled,
            })}
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            disabled={item.isDisabled}
          >
            <span className="flex items-center gap-2">
              {item.title.icon} {item.title.name}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-2 p-2 flex items-center text-justify">
        {newTabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  )
}

export { Tabs }
