import vi from '@/locales/vi.json';
import home from '@/locales/vi/home.json';
import 'i18next';

declare module 'i18next' {
  // eslint-disable-next-line no-unused-vars
  interface CustomTypeOptions {
    defaultNS: 'translate';
    resources: {
      translate: typeof vi;
    };
  }
}
