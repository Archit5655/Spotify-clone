"use client"
import { Database } from "@/types_db"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import React, { useState } from "react"

interface supabaseproviderprops{
    children:React.ReactNode,
}
const Supabaseprovider:React.FC<supabaseproviderprops>=({children})=>{
  
    const [supabaseClient]=useState(()=>createClientComponentClient<Database>());
    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    )

}
export default Supabaseprovider;