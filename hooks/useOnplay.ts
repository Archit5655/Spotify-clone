import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";


const useOnplay=(songs:Song[])=>{
    const player=usePlayer();
    const authmodal=useAuthModal();
    const {user}= useUser();
    const onPLay=(id:string)=>{
        if(!user){
            return authmodal.onOpen()
        }
        player.setId(id);
        player.setIds(songs.map((song)=>song.id))

    }
   return onPLay;


}
export default useOnplay;
