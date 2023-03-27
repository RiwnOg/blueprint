import { Roboto } from "next/font/google";
import Nav from "./auth/Nav";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
})

export const metadata = {
  title: "Blueprint",
  description: "This is a scafold project. The base to all other projects.",
};

export default function RootLayout({
  children,
} ) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-48 xl:mx-96 ${roboto.variable} font-sans bg-gray-200`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
