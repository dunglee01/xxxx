import type { Metadata } from "next";
import "./globals.css";
import MyHeader from "../../components/Header/Header";
import MyFooter from "../../components/Footer/Footer";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "CÔNG TY GIẢI PHÁP SỐ DTAK",
  description: "Công ty giải pháp số DTAK",
};

export default function RootLayout({
  children,
  params: { locale = 'vi' }
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string
  }
}>) {
  const t = useTranslations('Index')

  const contentHeader = {
    menu1 : t('menu1'),
    menu2 : t('menu2'),
    menu3 : t('menu3'),
    menu4 : t('menu4'),
    menu5 : t('menu5'),
    warning: t('warning'),
    goto: t('goto'),
    cancel: t('cancel'),
  }

  
  const contentFooter = {
    footer1: t('footer1'),
    footer2: t('footer2'),
    footer3: t('footer3'),
    footer4: t('footer4'),
    footer5: t('footer5'),
    footer6: t('footer6'),
    footer7: t('footer7'),
    footer8: t('footer8'),
    footer9: t('footer9'),
    footer10: t('footer10'),
    footer11: t('footer11'),
    footer12: t('footer12'),
    footer13: t('footer13'),
    footer14: t('footer14'),
  }

  return (
    <html lang={locale}>
      <body>
        <div >
          <div className="container md:mx-auto ">
          <MyHeader t={contentHeader}/>
          </div>
          {children}
          <div className="container md:mx-auto ">
          <MyFooter contentFooter={contentFooter}/>
          </div>
        </div>
      </body>
    </html>
  );
}
