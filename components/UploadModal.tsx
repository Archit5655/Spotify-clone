"use client";
import uniqid from "uniqid";
import React, { useState } from "react";
import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { toast } from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

const UploadModal = () => {
  const { user } = useUser();
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const uploadmodal = useUploadModal();
  const supabaseClient = useSupabaseClient();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: "null",
      image: "null",
    },
  });
  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadmodal.onClose();
    }
  };
  const onSumbit: SubmitHandler<FieldValues> = async (values) => {
    // Upload to supabase
    try {
      setisLoading(true);
      const imageFile = values.image?.[0];
      const songFile = values.song?.[0];
      if (!imageFile || !songFile || !user) {
        toast.error("Missing fields");
        return;
      }
      const uniqID = uniqid();
      // uploaad song
      const { data: songData, error: songError } = await supabaseClient.storage
        .from("songs")
        .upload(`songs-${values.title}-${uniqID}`, songFile, {
          cacheControl: "3600",
          upsert: false,
        });
      if (songError) {
        setisLoading(false);
        return toast.error("Failed song upload");
      }

      // Upload iMage
      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(`images-${values.title}-${uniqID}`, imageFile, {
            cacheControl: "3600",
            upsert: false,
          });
      if (imageError) {
        setisLoading(false);
        return toast.error("failed Image Upload");
      }
      const { error: supabaseError } = await supabaseClient
        .from("songs")
        .insert({
          user_id: user.id,
          title: values.title,
          author: values.author,
          image_path: imageData.path,
          song_path: songData.path,
        });
      if (supabaseError) {
        setisLoading(false);
        return toast.error(supabaseError.message);
      }
      router.refresh();
      setisLoading(false);
      toast.success("Song Created");
      reset();
      uploadmodal.onClose();
    } catch (error) {
      toast.error("SOmething Went Wrong");
    } finally {
      setisLoading(false);
    }
  };

  return (
    <Modal
      title="Add A Song"
      description="Upload an mp3 file"
      isOpen={uploadmodal.isOpen}
      onChange={onChange}
    >
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSumbit)}>
        <Input
          id="title"
          disabled={isLoading}
          placeholder="Song title"
          {...register("title", { required: true })}
        />
        <Input
          id="Author"
          disabled={isLoading}
          placeholder="Song AUthor"
          {...register("Author", { required: true })}
        />
        <div>
          <div className="pb-1">Select a Song</div>
          <Input
            id="song"
            disabled={isLoading}
            type="file"
            accept=".mp3"
            {...register("song", { required: true })}
          />
        </div>
        <div>
          <div className="pb-1">Select a Image</div>
          <Input
            id="image"
            disabled={isLoading}
            type="file"
            accept="image/*"
            {...register("image", { required: true })}
          />
        </div>
        <Button disabled={isLoading} type="submit">
          Create
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
