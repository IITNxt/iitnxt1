import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ChatbotButton from "@/components/general/Chatbot";
const karla = Karla({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IITNxt | Empowering the Innovators of Tomorrow",
  description:
    "At IITNxt, our mission is to empower young minds by providing high-quality training and project opportunities that address real-world challenges and contribute to societal welfare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={karla.className}>
        <body suppressHydrationWarning>
          {children}
          <ChatbotButton />
        </body>
      </html>
    </ClerkProvider>
  );
}
