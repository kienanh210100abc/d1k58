import { TranslationProvider } from "@/components";
import initTranslations from "../i18n";
import { SummaryIntro } from "./summaryIntro";
import { Contact } from "./contact";
import { Feature } from "./feature";
import { Benefit } from "./benefit";
import { PriceList } from "./price-list";
import { Application } from "./application";
import { Ecosystem } from "./ecosystem";
import { Procedure } from "./procedure";

async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { resources } = await initTranslations(locale);

  return (
    <TranslationProvider locale={locale} resources={resources}>
      <main>
        <SummaryIntro />
        <Benefit />
        <Feature />
        <Procedure />
        <Application />
        <PriceList />
        <Ecosystem />
        <Contact />
      </main>
    </TranslationProvider>
  );
}

export default Home;
