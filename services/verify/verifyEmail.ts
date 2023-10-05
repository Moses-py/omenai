export async function verifyEmail(
  payload: { params: string; token: string },
  route: "gallery" | "individual"
) {
  const result = await fetch(
    `http://localhost:3000/api/requests/${route}/verifyMail`,
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
