export const getIp = async (): Promise<string> => {
  const ip: string = await fetch("https://api.ipify.org").then((res) =>
    res.text()
  );
  return ip;
};
