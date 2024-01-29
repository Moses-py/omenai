import { storage } from "../controller/appwrite";

export const getEditorialImageFilePreview = (fileId: string, width: number) => {
  const fileData = storage.getFilePreview(
    process.env.NEXT_PUBLIC_APPWRITE_EDITORIAL_BUCKET_ID!,
    fileId,

    width, // width, will be resized using this value.
    0, // height, ignored when 0
    "center", // crop center
    90, // slight compression
    0, // border width
    "FFFFFF", // border color
    0, // border radius
    1, // full opacity
    0, // no rotation
    "FFFFFF", // background color
    "jpg"
  );

  return fileData.href;
};
