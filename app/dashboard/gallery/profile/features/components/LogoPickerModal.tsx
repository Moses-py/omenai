"use client";

import { Modal } from "flowbite-react";
import { useRef, useState } from "react";
import Image from "next/image";
import { galleryLogoUpdate } from "@/store/gallery/gallery_logo_upload/GalleryLogoUpload";
import LoaderAnimation from "@/components/loader/LoaderAnimation";
import { storage } from "@/appwrite";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ID } from "appwrite";
import { updateLogo } from "@/services/update/updateLogo";
export default function LogoPickerModal() {
  const [modal, updateModal] = galleryLogoUpdate((state) => [
    state.modal,
    state.updateModal,
  ]);
  const logoPickerRef = useRef<HTMLInputElement>(null);

  const session = useSession();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [logo, setLogo] = useState<File | null>(null);

  async function handleLogoUpdate() {
    setLoading(true);

    try {
      if (logo) {
        const logoUpdated = await storage.createFile(
          process.env.NEXT_PUBLIC_APPWRITE_LOGO_BUCKET_ID!,
          ID.unique(),
          logo
        );

        if (logoUpdated) {
          let file: { bucketId: string; fileId: string } = {
            bucketId: logoUpdated.bucketId,
            fileId: logoUpdated.$id,
          };

          const fileData = storage.getFilePreview(
            process.env.NEXT_PUBLIC_APPWRITE_LOGO_BUCKET_ID!,
            file.fileId
          );

          const { isOk, body } = await updateLogo({
            id: session.data!.user.id,
            url: fileData.href,
          });

          if (!isOk) toast.error(body.message);
          else {
            updateModal(false);
            await session.update();
            toast.success(`${body.message}... Please log back in`);
            router.refresh();
          }
        }
      }
    } catch (error) {
      toast.error("An error has occured, try again");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Modal show={modal} onClose={() => updateModal(false)}>
        <div className="p-5">
          <p className="text-sm font-normal">Select logo image</p>
        </div>

        <div className="w-full flex justify-center h-full p-5">
          <div className="w-[300px] h-[20vh]">
            {logo ? (
              <Image
                src={URL.createObjectURL(logo)}
                alt="uploaded image"
                width={300}
                height={200}
                className="w-full h-[20vh] object-cover mt-2 filter hover:grayscale transition-all duration-200 rounded-lg cursor-not-allowed"
                onClick={() => {
                  setLogo(null);
                }}
              />
            ) : (
              <button
                type="button"
                className="w-full h-full border border-dark/10 rounded-md outline-none p-5 focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 hover:border-dark"
                onClick={() => {
                  logoPickerRef.current?.click();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                Upload logo
              </button>
            )}

            <input
              type="file"
              hidden
              ref={logoPickerRef}
              onChange={(e) => {
                // Check if input is actaully an image
                if (!e.target.files![0].type.startsWith("image/")) return;
                setLogo(e.target.files![0]);
              }}
            />
          </div>
        </div>
        <div className="flex justify-end px-5 py-8">
          <div className="flex gap-4">
            <button
              className="px-3 py-2 bg-dark hover:bg-dark/40 duration-200 rounded-lg text-white font-normal text-base"
              onClick={() => updateModal(false)}
            >
              Cancel
            </button>
            <button
              onClick={handleLogoUpdate}
              disabled={loading || !logo}
              className="px-3 py-2 bg-primary rounded-lg disabled:grayscale disabled:cursor-not-allowed text-white font-normal text-base hover:grayscale duration-200"
            >
              {loading ? <LoaderAnimation theme="dark" /> : "Upload logo"}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
