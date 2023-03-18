import "./globals.css";

export const metadata = {
  title: "Blueprint",
  description: "This is a scafold project. The base to all other projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
