import { CiLogout, CiGrid41, CiExport } from "react-icons/ci";

const overview = <CiGrid41 className="text-dark group-hover:text-white" />;
const upload = <CiExport className="text-dark group-hover:text-white" />;
const logout = <CiLogout className="text-dark group-hover:text-white" />;

export const editorialNavMockData = [
  {
    title: "My editorials",
    icon: overview,
    url: "/secure/editorial/admin/editorials",
  },

  {
    title: "Upload editorial",
    icon: upload,
    url: "/secure/editorial/admin/upload",
  },

  { title: "Sign out", icon: logout, url: "/" },
];
