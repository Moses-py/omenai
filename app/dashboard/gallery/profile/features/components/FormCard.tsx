"use client";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { InputCard } from "./InputCard";
import { TextareaCard } from "./TextareaCard";
import { galleryProfileUpdate } from "@/store/gallery/gallery_profile_update/GalleryProfileUpdateStore";
import { updateProfile } from "@/services/update/updateProfile";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

export const FormCard = () => {
  const session = useSession();

  const user = session.data?.user;
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const [updateData, clearData] = galleryProfileUpdate((state) => [
    state.updateData,
    state.clearData,
  ]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(updateData);
    const { isOk, body } = await updateProfile(
      "gallery",
      updateData,
      session.data!.user.id
    );
    if (!isOk) toast.error(body.message);
    else {
      await session.update();
      toast.success(`${body.message}... Please log back in`);
      setIsLoading(false);
      clearData();
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 space-y-8 lg:px-2">
      <InputCard
        label="Gallery name"
        value={user?.name}
        onChange={() => {}}
        labelText="gallery"
      />
      <InputCard
        label="Email address"
        value={user?.email}
        labelText="email"
        rightComponent={
          <div>
            {user?.verified ? (
              <p className="text-green-400">Verified</p>
            ) : (
              <p className="text-red-500">Verify</p>
            )}
          </div>
        }
      />
      <InputCard
        label="Location"
        defaultValue={user?.location}
        labelText="location"
      />
      <InputCard label="Admin" defaultValue={user?.admin} labelText="admin" />
      <TextareaCard
        label="Gallery description"
        rows={2}
        className="resize-none"
        defaultValue={user?.description}
        name="description"
      />

      <button
        type="submit"
        disabled={
          (!updateData.admin &&
            !updateData.location &&
            !updateData.description) ||
          isLoading
        }
        className="disabled:cursor-not-allowed disabled:bg-secondary/20 place-items-center px-8 py-2 bg-primary hover:bg-primary/50 rounded-full text-white text-base"
      >
        {isLoading ? <ClipLoader size={20} color="#fff" /> : "Save edit data"}
      </button>
    </form>
  );
};
