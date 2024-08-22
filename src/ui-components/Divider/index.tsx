import { tv, VariantProps } from 'tailwind-variants'

const divider = tv({
  base: 'bg-border',
  variants: {
    orientation: {
      vertical: 'w-[1px]',
      horizontal: 'h-[1px]',
    },
    size: {
      sm: 'w-1/4',
      md: 'w-2/4',
      lg: 'w-3/4',
      full: 'w-full',
    },
    margin: {
      none: '',
      sm: 'my-1 mx-1',
      md: 'my-2 mx-2',
      lg: 'my-3 mx-3',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

type StyleProps = VariantProps<typeof divider>

export interface DividerProps extends StyleProps {}

export const Divider: React.FC<DividerProps> = ({
  orientation,
  margin,
  size,
}) => {
  return <div className={divider({ orientation, margin, size })} />
}
