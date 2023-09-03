"use client";
import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import { Song } from "@/types";
import React, { useEffect, useState } from "react";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import Slider from "./Slider";
import usePlayer from "@/hooks/usePlayer";
// @ts-ignore
import useSound from "use-sound";

interface playerconstextprops {
  song: Song;
  songUrl: string;
}
const PlayerContent: React.FC<playerconstextprops> = ({ song, songUrl }) => {
  const player = usePlayer();
  const [volume, setvolume] = useState(1);
  const [isplaying, setisplaying] = useState(false);
  const Volume = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;
  const Icon = isplaying ? BsPauseFill : BsPlayFill;

  const onPlayNext = () => {
    if (player.ids.length === 0) {
      return;
    }
    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const nextsong = player.ids[currentIndex + 1];
    if (!nextsong) {
      return player.setId(player.ids[0]);
    }
    player.setId(nextsong);
  };
  const onPlayPrevious = () => {
    if (player.ids.length === 0) {
      return;
    }
    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const previoussong = player.ids[currentIndex - 1];
    if (!previoussong) {
      return player.setId(player.ids[player.ids.length - 1]);
    }
    player.setId(previoussong);
  };

  const [play, { pause, sound }] = useSound(songUrl, {
    volume: volume,
    onplay: () => setisplaying(true),
    onend: () => {
      setisplaying(false), onPlayNext();
    },
    onpause: () => setisplaying(false),
    format: ["mp3"],
  });

  useEffect(() => {
    sound?.play();

    return () => {
      sound?.unload();
    };
  }, [sound]);

  const handleplay = () => {
    if (!isplaying) {
      play();
    } else {
      pause();
    }
  };
  const togglemute = () => {
    if (volume === 0) {
      setvolume(1);
    } else {
      setvolume(0);
    }
  };

  return (
    <div className=" grid grid-cols-2  md:grid-cols-3 h-full">
      <div className=" flex w-full justify-start">
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>
      <div className=" flex  md:hidden col-auto w-full justify-end items-center ">
        <div
          onClick={handleplay}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer"
        >
          <Icon size={30} className="text-black" />
        </div>
      </div>
      <div className=" hidden h-full md:flex justify-center items-center w-full max-w-[772px] gap-x-6">
        <AiFillStepBackward
          size={30}
          onClick={onPlayPrevious}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
        <div
          onClick={handleplay}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer"
        >
          <Icon size={30} className="text-black" />
        </div>
        <AiFillStepForward
          size={30}
          onClick={onPlayNext}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className=" hidden md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <Volume onClick={togglemute} className="cursor-pointer" size={34} />
          <Slider value={volume} onChange={(value) => setvolume(value)} />
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
