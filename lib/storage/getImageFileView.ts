import { storage } from "@/appwrite";

export const getImageFileView = (
  fileId: string,
  width: number,
  height?: number
) => {
  const fileData = storage.getFilePreview(
    process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
    fileId,

    width, // width, will be resized using this value.
    height ? height : 0, // height, ignored when 0
    "center", // crop center
    90, // slight compression
    0, // border width
    "FFFFFF", // border color
    0, // border radius
    1, // full opacity
    0, // no rotation
    "FFFFFF", // background color
    "webp"
  );

  return fileData.href;
};
