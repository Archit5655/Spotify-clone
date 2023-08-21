import React from 'react'
import { twMerge } from 'tailwind-merge';
interface boxprops{
    children:React.ReactNode;
    classname?:string 
}
const Box:React.FC<boxprops> = ({children,classname}) => {
  return (
    <div className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`, classname)}>
      {children}
    </div>
  )
  // TODO:
  // !
}

export default Box
