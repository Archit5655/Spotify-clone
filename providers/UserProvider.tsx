"use client"

import { MyUserContextProvider } from "@/hooks/useUser"
import { Chilanka } from "next/font/google"
import React, { Children } from "react"

interface userproviderProps{
    children:React.ReactNode
}


const UserProvider:React.FC<userproviderProps> = ({children}) => {
  return (
<MyUserContextProvider>
    {children}
</MyUserContextProvider>
  )
}

export default UserProvider
