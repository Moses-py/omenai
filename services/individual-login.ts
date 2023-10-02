import CredentialsProvider from "next-auth/providers/credentials";

export const IndividualLoginProvider = CredentialsProvider({
  id: "individual-login",
  name: "Credentials",
  type: "credentials",
  credentials: {},
  authorize: async (credentials) => {
    try {
      const response = await fetch("/api/individual-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      return {
        id: data._id,
        ...data,
      };
    } catch (error) {
      console.log(error);
    }
  },
});

// email,name, id
