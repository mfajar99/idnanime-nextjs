import Navbar from "@/components/Navbar";
import { Gabarito } from "next/font/google";
import "@/app/globals.css";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "IdnAnimelist",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
