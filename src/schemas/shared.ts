import { getTranslations } from 'next-intl/server';

export type ReactSerializable =
  | Record<string, unknown>
  | Array<Record<string, unknown>>
  | Array<string>
  | Array<number>
  | Array<boolean>
  | string
  | number
  | boolean
  | undefined
  | object;

export type ServerActionResult<T = undefined> = {
  status: 'error' | 'success';
  message?: string;
  data?: T;
};

export type ServerActionInjected<T = undefined> = {
  t: Awaited<ReturnType<typeof getTranslations<'results'>>>;
  values: T;
};

export interface NestedObjects {
  [key: string]:
    | string
    | number
    | NestedObjects
    | Array<string | number | NestedObjects>;
}

export type IMediaRendering = {
  minWidth?: number;
  maxWidth?: number;
  isMobile?: boolean;
  children: React.ReactNode;
};
