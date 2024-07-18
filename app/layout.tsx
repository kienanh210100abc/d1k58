import "@/styles/global.scss";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";
import { Analytics } from "./analytics";

const montserat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className={montserat.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
