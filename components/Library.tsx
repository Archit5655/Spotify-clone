import React from 'react'
import {TbPlaylist} from 'react-icons/tb'
import {AiOutlinePlus} from 'react-icons/ai'
import useAuthModal from '@/hooks/useAuthModal'
import { useUser } from '@/hooks/useUser'
import useUploadModal from '@/hooks/useUploadModal'
import { Song } from '@/types'
import MediaItem from './MediaItem'
interface librabryprops{
  songs:Song []
}
const Library:React.FC<librabryprops> = ({songs}) => {
  const authMOdal=useAuthModal();
  const {user}=useUser();
  const UploadModal=useUploadModal();
    const Onclick=()=>{
      if(!user){
        return authMOdal.onOpen();
      }

      // TODO : check for subscription
      return UploadModal.onOpen();

 


    }
  return (
    <div className=' flex flex-col'>
      <div className=' flex items-center justify-between px-5 pt-4'>
        <div className=' inline-flex items-center gap-x-2'>
            <TbPlaylist size={26} className=" text-neutral-400" />
            <p className='text-neitral-400 font-medium text-md'>Your library</p>

        </div>

<AiOutlinePlus onClick={Onclick} size={20} className=" text-neutral-400 cursor-pointer hover:text-white transition" />
      </div>
      <div className='flex flex-col gap-y-2 mt-4 px-3'>
   {songs.map((item)=>(
    <div>
     <MediaItem onClick={()=>{}} key={item.id} data={item} />
    </div>
   ))}

      </div>
    </div>
  )
}

export default Library
