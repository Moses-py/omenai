export async function registerAccount(
  payload: IndividualRegisterData | GalleryRegisterData,
  route: "gallery" | "individual"
) {
  const result = await fetch(
    `http://localhost:3000/api/auth/${route}/register`,
    {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    }
  ).then(async (res) => {
    const response = {
      isOk: res.ok,
      body: await res.json(),
    };

    return response;
  });

  return result;
}
