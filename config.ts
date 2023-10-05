export const getApiUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.NEXT_PUBLIC_URL_DEVELOPMENT!;
  } else {
    return process.env.NEXT_PUBLIC_URL_PRODUCTION!;
  }
};
