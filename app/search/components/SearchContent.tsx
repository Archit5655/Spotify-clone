"use client";
import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import { Song } from "@/types";
import React from "react";
interface SearchContentprops {
  song: Song[];
}
const SearchContent: React.FC<SearchContentprops> = ( {song} ) => {
  if (song.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No songs FOund
      </div>
    );
  }
  return (
    <div className=" flex flex-col gap-y-2 w-full px-6 ">
      {song.map((item) => (
        <div key={item.id} className="flex items-center w-full gap-x-4">
          <div className="flex-1">
            <MediaItem onClick={() => {}} data={item} />
          </div>
          <LikeButton songId={item.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
