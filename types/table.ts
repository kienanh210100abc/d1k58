import { CSSProperties, ReactNode } from 'react';

export type ColumnRenderOptions<T> = {
  root: T;
  index: number;
};

export type Column<T> = {
  key: string | number;
  title: ReactNode | (() => ReactNode);
  minWidth?: number | string;
  render?: (value: unknown, options: ColumnRenderOptions<T>) => ReactNode;
  textAlign?: CSSProperties['textAlign'];
};
