import Link from 'next/link'
import React from 'react'
import {IconType} from 'react-icons'
import { twMerge } from 'tailwind-merge'
interface sidebaritemprops{
  icon: IconType,
  label:string,
  active:boolean,
  href:string,
}
const SidebarItem:React.FC<sidebaritemprops> = ({
  icon:Icon,label,active,href
}) => {
  return (
    <Link href={href}  className={twMerge(`flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,active && 'text-white' )}>
      sidebaritem
    </Link>
   
  )
}

export default SidebarItem
