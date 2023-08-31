"use client"
import useAuthModal from '@/hooks/useAuthModal'
import { useUser } from '@/hooks/useUser'
import { useSessionContext } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
// import async from '../app/(site)/page';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { toast } from 'react-hot-toast'
interface likebuttonprops{
    songId:string;
};
const LikeButton:React.FC<likebuttonprops> = ({songId}) => {
    const router=useRouter()
    const {supabaseClient}=useSessionContext(); 
    const authmodal=useAuthModal();
    const {user}=useUser();
    const [isLiked, setisLiked] = useState<boolean>(false)
    useEffect(() => {
        if(!user?.id){
            return;
        }
        const fetchdata=async()=>{
            const{data,error}=await supabaseClient
            .from('liked_songs')
            .select('*')
            .eq('user_id',user.id)
            .eq('song_id',songId)
            .single()
            if(!error && data){
                setisLiked(true);
            }

        }
        fetchdata()
    }, [songId,supabaseClient,user?.id])
    // ! New way of rendering a icon as a component 
    const Icon=isLiked? AiFillHeart :AiOutlineHeart
const handlelike= async ()=>{
    if(!user){
        return authmodal.onOpen(); 
    }
    if(isLiked){
        const {error}=await supabaseClient
        .from('liked_songs')
        .delete()
        .eq('user_id',user.id)
        .eq('song_id',songId)
        if(error){
            toast.error(error.message)
        }
        else{
            setisLiked(false)
            toast.success("Removed from Liked Songs")
        }
        
    }
    else{
        const{error}=await supabaseClient
        .from('liked_songs')
        .insert({
            song_id:songId,
            user_id:user.id
        })
        if(error){
            toast.error(error.message);
        }
        else{
            setisLiked(true)
            toast.success('Added To Liked Songs')
        }


    }
    router.refresh()

}
    
  return (
    <button className=' hover:opacity-75 transition' onClick={handlelike}>
        <Icon color={isLiked ? '#22c55e' : 'white'} size={25} />
    </button>
  )
}

export default LikeButton
