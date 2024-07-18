import i18nConfig from '@/i18nConfig';
import { redirect } from 'next/navigation';

export default function NotFound() {
  redirect(`/${i18nConfig.defaultLocale}`);
  return null;
}
