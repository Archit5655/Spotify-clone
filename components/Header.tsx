"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import {HiHome} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Button from "./Button";
interface headerproos {
  children: React.ReactNode;
  className?: string;
}
const Header: React.FC<headerproos> = ({ children, className }) => {
  const router = useRouter();
  const handlelogout = () => {
    // Handle logout
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
            <>
            <div>
                <Button onClick={()=>{}}  className=" bg-transparent text-neutral-400 font-medium">
                    Sign-up

                </Button>
            </div>    
             <div>
                <Button  onClick={()=>{}} className=" bg-white px-6 py-2">
                  Login

                </Button>
            </div>
            </>

        </div>
      </div>
{children}
    </div>
  );
};

export default Header;
