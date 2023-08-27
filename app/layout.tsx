import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Supabaseprovider from "@/providers/Supabaseprovider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen to Quality Music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>

        <Supabaseprovider>
          <UserProvider>
            <ModalProvider/>

            <Sidebar>{children}</Sidebar>

          </UserProvider>
        </Supabaseprovider>
      
      </body>
    </html>
  );
}
