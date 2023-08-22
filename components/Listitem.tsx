"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import {FaPlay} from 'react-icons/fa'

interface listitemprops{
    image:string,
    name:string,
    href:string
}
const Listitem :React.FC<listitemprops>= ({image,name,href}) => {
    const router=useRouter();

    const Onclick=()=>[
        // Add authentication before useing
        router.push(href)
    ]
  return (

    // we have given group class name here 
 <button onClick={Onclick} className=' relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10
  hover:bg-neutral-100/20 transition pr-4'>
    <div className=' relative min-h-[64px] min-w-[64px]'>
        <Image className=' object-cover' fill src={image} alt=' Image' />
    </div>
    <p className=' font-medium truncate py-5'> {name}</p>
     {/* we are using group class given abbouve to gruphover */}
    <div className=' absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-100'>

<FaPlay  className="text-black" />
    </div>

 </button>
  )
}

export default Listitem
