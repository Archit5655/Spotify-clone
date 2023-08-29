"use client"
import useLoadImage from '@/hooks/useLoadImage.'
import { Song } from '@/types'
import Image from 'next/image'
import React from 'react'
interface mediaitemprops{
    data:Song,
    onClick?:(id:string)=>void
}
const MediaItem:React.FC<mediaitemprops> = ({data,onClick}) => {
    const imageURL=useLoadImage(data)
    const handleclick=()=>{
        if(onClick){
            return data.id
        }
        // Deafault 
    }
  return (
    <div onClick={handleclick} className=' flex items-baseline gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2  rounded-md'>
        <div className=' relative rounded-md  min-h-[48px]  min-w-[48px] overflow-hidden'>
            <Image src={imageURL || 'liked.png'} alt=' IMage' fill  className=' object-cover' />

        </div>
     <div className=' flex flex-col gap-y-1 overflow-hidden'>
        <p className='text-white truncate'>
            {data.title}
        </p>
        <p className=' text-neutral-400 text-sm  truncate'>
            {data.author}
        </p>

     </div>
    </div>
  )
}

export default MediaItem
