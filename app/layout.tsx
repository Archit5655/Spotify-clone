import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Supabaseprovider from "@/providers/Supabaseprovider";
import UserProvider from "@/providers/UserProvider";

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
        <Supabaseprovider>
          <UserProvider>
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </Supabaseprovider>
      </body>
    </html>
  );
}
