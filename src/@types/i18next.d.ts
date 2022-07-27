import * as i18next from 'i18next';

declare module 'i18next' {
  interface TFunction {
    <
      TKeys extends i18next.TFunctionKeys = string,
      TInterpolationMap extends object = i18next.StringMap
    >(
      key: TKeys,
      options?: i18next.TOptions<TInterpolationMap> | string
    ): string;
  }
}
