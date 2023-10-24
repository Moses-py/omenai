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
interface UserType extends GallerySchemaTypes, IndividualSchemaTypes {
  id: string;
  verified: boolean;
}
