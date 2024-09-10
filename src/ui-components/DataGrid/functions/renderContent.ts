import type { ItemProps, ColumnProps } from '../Providers';

interface RenderContentsProps<T> {
  column: ColumnProps<T>;
}

const renderContent =
  <T>({ column }: RenderContentsProps<T>) =>
  ({ item }: ItemProps<T>): JSX.Element | string => {
    if (column.renderContents) {
      return column.renderContents({ item });
    }

    return item?.[column?.propertyName];
  };

export { renderContent };
