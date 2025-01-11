import "@/styles/global.scss";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";

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
      </body>
    </html>
  );
}
