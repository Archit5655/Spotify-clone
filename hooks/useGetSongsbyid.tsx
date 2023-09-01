import { Song } from "@/types"
import { SupabaseClient } from "@supabase/auth-helpers-nextjs"
import { useSessionContext } from "@supabase/auth-helpers-react"
import { useEffect, useMemo, useState } from "react"
import { toast } from "react-hot-toast"

const GetSongsbyid=(id?:string)=>{
    const [isLoading, setisLoading] = useState(false)
    const [song, setsong] = useState<Song | undefined>(undefined)
   const {supabaseClient}=useSessionContext();

   useEffect(() => {
    if(!id){
        return;
    }
    setisLoading(true)
    const fetchsong=async()=>{
        
        const {data,error}=await supabaseClient
        .from('songs')
        .select('*')
        .eq('id',id)
        .single()
        
        if(error){
            setisLoading(false);
            return toast.error(error.message)
            
        }
        setsong(data as Song)
        setisLoading(false)
        
    }
    fetchsong();
        
   
    
   }, [id,supabaseClient])

   

return useMemo(() => ({
    isLoading,song
})


, [isLoading,song])

}
export default GetSongsbyid;