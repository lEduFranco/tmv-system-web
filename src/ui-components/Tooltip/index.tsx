import React from 'react'

import * as BaseTooltip from '@radix-ui/react-tooltip'

interface TooltipProps {
  children: React.ReactNode
  content: string | JSX.Element
}

export const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  return (
    <BaseTooltip.Provider delayDuration={100}>
      <BaseTooltip.Root>
        <BaseTooltip.Trigger>{children}</BaseTooltip.Trigger>
        <BaseTooltip.Portal>
          <BaseTooltip.Content className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]">
            <span className="text-xs font-bold">{content}</span>
            <BaseTooltip.Arrow className="fill-white" />
          </BaseTooltip.Content>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  )
}
