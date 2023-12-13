import { getEditorialData } from "./getEditorialData";

export const getPromiseResolvedEditorialData = async (editorials: any) => {
  const blogDataWithResolvedImagePromises = await Promise.all(
    editorials!.map(async (editorial: any) => ({
      ...editorial,
      image: await editorial.image,
    }))
  );

  return blogDataWithResolvedImagePromises;
};
