import { Fragment } from "react";
import { FormCard, UserImage } from "./features";

export default function Profile() {
  return (
    <Fragment>
      <UserImage />

      <p className="text-gray-200 pt-8 px-5 lg:px-2">Personal information</p>

      <FormCard />
    </Fragment>
  );
}
