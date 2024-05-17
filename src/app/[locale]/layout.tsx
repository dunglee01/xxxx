import type { Metadata } from "next";
import "./globals.css";
import MyHeader from "../../components/Header/Header";
import MyFooter from "../../components/Footer/Footer";

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
  return (
    <html lang={'vi'}>
      <body>
        <div >
          <div className="container md:mx-auto ">
          <MyHeader />
          </div>
          {children}
          <div className="container md:mx-auto ">
          <MyFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
