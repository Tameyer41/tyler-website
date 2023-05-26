import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: `Tyler Meyer`,
  description: "The portfolio for Software Engineer Tyler Meyer",
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
      <Analytics />
    </html>
  );
}
