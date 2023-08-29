"use client"

import useLoadImage from '@/hooks/useLoadImage.'
import { Song } from '@/types'
import Image from 'next/image'
import React from 'react'
interface songitemprops{
    data:Song,
    onClick:(id:string)=>void
}

const Songitem:React.FC<songitemprops> = ({data,onClick}) => {



    const imagepath=useLoadImage(data);

  return (
    <div className=' relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4  bg-neutral-400/5  cursor-pointer  hover:bg-neutral-400/10 transition p-3'
      onClick={()=> onClick(data.id)}>

<div className=' relative aspect-square w-full h-full rounded-md overflow-hidden'>
  <Image className=' object-cover ' src={imagepath || '/liked.png'} alt='Image' fill />
</div>
      
    </div>
  )
}

export default Songitem
