import { getEditorialData } from "./getEditorialData";

export const getPromiseResolvedSingleEditorialData = async (editorial: any) => {
  const editorialResolvedData = await Promise.resolve(async () => ({
    ...editorial,
    image: await editorial.image,
  }));

  return editorialResolvedData;
};
