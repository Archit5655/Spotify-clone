"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
interface headerproos {
  children: React.ReactNode;
  className?: string;
}
const Header: React.FC<headerproos> = ({ children, className }) => {
  const authModal = useAuthModal();

  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handlelogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    // TODO : any song is playing
    router.refresh();
    if (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={twMerge(
        ` h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className=" hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className=" rounded-full bg-black flex items-center justify-center hover:opacity-60 transition"
          >
            <RxCaretLeft size={34} className="text-white" />
          </button>
          <button
            onClick={() => router.forward()}
            className=" rounded-full bg-black flex items-center justify-center hover:opacity-60 transition"
          >
            <RxCaretRight size={34} className="text-white" />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className=" rounded-full p-2 bg-white flex items-center justify-center hover:opacity-60 transition">
            <HiHome size={30} className=" text-black" />
          </button>
          <button className=" rounded-full p-2 bg-white flex items-center justify-center hover:opacity-60 transition">
            <BiSearch size={30} className=" text-black" />
          </button>
        </div>
        <div className=" flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button onClick={handlelogout} className=" bg-white px-6 py-2">
                Logout
              </Button>
              <Button>
                <FaUserAlt/>
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className=" bg-transparent text-neutral-400 font-medium"
                >
                  Sign-up
                </Button>
              </div>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className=" bg-white px-6 py-2"
                >
                  Login
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
