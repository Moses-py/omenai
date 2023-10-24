import { Fragment } from "react";
import { FormCard, UserImage } from "./features";

export default function Profile() {
  return (
    <Fragment>
      <UserImage />

      <p className="text-base-theme text-base xs:text-sm font-medium pt-8 px-5 lg:px-2">
        Personal information
      </p>

      <FormCard />
    </Fragment>
  );
}
