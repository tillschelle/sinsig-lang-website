import { Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/app/components/WhatsAppFloat";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Sinsig & Lang GmbH & Co. KG | Ihr Mercedes-Benz Partner",
  description: "Autohaus Sinsig & Lang: Ihr Mercedes-Benz Vertragshändler und Vertragswerkstatt. Service, Werkstatt, Gebrauchtwagen und mehr seit 1945.",
  keywords: "Mercedes-Benz, Autohaus, Werkstatt, Gebrauchtwagen, Service, Sinsig Lang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="h-full">
      <body className={`${poppins.variable} font-sans min-h-full flex flex-col antialiased bg-[#161616]`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
