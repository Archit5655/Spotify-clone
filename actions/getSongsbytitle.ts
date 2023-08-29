import { Song } from '@/types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import React from 'react'
import getSongs from './getSongs'

const getSongsbytitle =async (title:string):Promise<Song[]>=>{

    const supabase=createServerComponentClient({
   
        cookies:cookies,

    });
    if(!title){
        const allsongs=await getSongs();
        return allsongs
    }
    const {data,error}=await supabase
    .from('songs')
    .select('*')
    .ilike('title',`%${title}%`)
    .order('created_at',{ascending:false})
    if(error){
        console.log(error)
    }
    return (data as any) || [];

}
export default getSongsbytitle;