import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "@/theme/globals.css";
import ProvidersWrapper from "@/providers/ProvidersWrapper";
import UserHeader from "@/components/UserHeader/UserHeader";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tinder Cats",
  description: "Generated by AMV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable}`}
        cz-shortcut-listen="true"
      >
        <ProvidersWrapper>
          <UserHeader />
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}
