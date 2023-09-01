"use client"
import PlayerContent from '@/components/PlayerContent';
import GetSongsbyid from '@/hooks/useGetSongsbyid';
import useLoadSongUrl from '@/hooks/useLoadSongUrl';
import usePlayer from '@/hooks/usePlayer'
import React from 'react'


const Player = () => {
    const player=usePlayer();
    const {song}=GetSongsbyid(player.activeId)

    const songUrl=useLoadSongUrl(song!);
    if(!song || !songUrl || !player.activeId){
        return null;
    }
    

  return (
    <div className=' fixed bottom-0 bg-black w-full py-2 h-[80px] px-4'>
     <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
    </div>
  )
}

export default Player
