import React from 'react'
import { twMerge } from 'tailwind-merge';
interface boxprops{
    children:React.ReactNode;
    className?:string 
}
const Box:React.FC<boxprops> = ({children,className}) => {
  return (
    <div className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`, className)}>
      {children}
    </div>
  )
  // TODO:
  // !
}

export default Box
