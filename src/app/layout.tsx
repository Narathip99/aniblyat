// styles
import "@/styles/globals.css";
import "@/styles/tailwind.css";
import { ThemeProvider } from "@/components/theme-provider";

// meta
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Aniblyat",
  description: "",
};

// components
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-[2000px] mt-[100px]">{children}</main>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
