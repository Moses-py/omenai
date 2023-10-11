declare global {
  declare module "next-auth" {
    interface Session {
      user: UserType;
    }

    interface JWT {
      uid: string;
    }
  }
}
interface UserType {
  id: string;
  verified: boolean;
}
