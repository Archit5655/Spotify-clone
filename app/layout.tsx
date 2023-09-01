import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Supabaseprovider from "@/providers/Supabaseprovider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByuserid from "@/actions/getSongsByuserid";
import Player from "@/components/Player";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen to Quality Music",
};
export const revalidate=0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs=await getSongsByuserid();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>

        <Supabaseprovider>
          <UserProvider>
            <ModalProvider/>

            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player/>

          </UserProvider>
        </Supabaseprovider>
      
      </body>
    </html>
  );
}
