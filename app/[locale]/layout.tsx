import {
  Footer,
  Header,
  LocalizationProvider,
  ThemeRegistry,
  TranslationProvider,
} from "@/components";
import i18nConfig from "@/i18nConfig";
import { Metadata } from "next";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import initTranslations from "../i18n";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { t } = await initTranslations(params.locale);
  const basePath = process.env.BASE_PATH || "";
  return {
    metadataBase: new URL(`https://light.traxem.vn${basePath}`),
    alternates: {
      canonical: "/",
      languages: i18nConfig.locales.reduce((prev, lang) => {
        prev[lang] = `/${lang}`;
        return prev;
      }, {} as Record<string, string>),
    },
    icons: `${basePath}/favicon.svg`,
    keywords: [
      "TraXem",
      "minh bạch",
      "công khai",
      "tra cứu bằng QR",
      "thông tin bằng QR",
      "nguồn gốc",
      "xuất xứ",
      "công khai nguồn gốc xuất xứ",
    ],
    title: t("common.text.title"),
    description: t("common.text.description"),
    openGraph: {
      images: [`/meta/${params.locale}/banner.png`],
      type: "website",
      url: `https://light.traxem.vn${basePath}/${params.locale}`,
      title: t("common.text.title"),
      description: t("common.text.description"),
    },
    twitter: {
      images: [`/meta/${params.locale}/banner.png`],
      creator: "vsii",
      title: t("common.text.title"),
      description: t("common.text.description"),
    },
  };
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { resources } = await initTranslations(locale);

  return (
    <LocalizationProvider>
      <TranslationProvider locale={locale} resources={resources}>
        <ThemeRegistry options={{ key: "mui" }}>
          <Toaster
            toastOptions={{
              style: {
                wordBreak: "break-all",
              },
            }}
          />
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </TranslationProvider>
    </LocalizationProvider>
  );
}
