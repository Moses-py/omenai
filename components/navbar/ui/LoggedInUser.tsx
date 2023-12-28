import { FaUserGear } from "react-icons/fa6";

export default function LoggedInUser({ user }: { user: string | undefined }) {
  return (
    <div className="flex space-x-2 items-center">
      <p>{user}</p>
      <FaUserGear className="text-sm" />
    </div>
  );
}
