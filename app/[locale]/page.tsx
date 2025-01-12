import { TranslationProvider } from "@/components";
import initTranslations from "../i18n";
import { Benefit } from "./benefit";
import { Contact } from "./contact";
import { SummaryIntro } from "./summaryIntro";
import { Application } from "./application";
import { Procedure } from "./procedure";

async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { resources } = await initTranslations(locale);

  return (
    <TranslationProvider locale={locale} resources={resources}>
      <main>
        <SummaryIntro />
        <Benefit />
        <Procedure />
        <Application />
        {/* <PriceList /> */}
        {/* <Ecosystem /> */}
        <Contact />
      </main>
    </TranslationProvider>
  );
}

export default Home;
