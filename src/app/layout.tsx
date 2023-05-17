import "./globals.css";

export const metadata = {
  title: `Tyler${`'`}s personal website`,
  description: "Portfolio for Tyler Meyer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01'] font-soehne">
        {children}
      </body>
    </html>
  );
}
