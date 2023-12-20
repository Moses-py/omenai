import getEditorialDocument from "@/app/secure/editorial/admin/lib/getSingleEditorialPost";
import EditorialData from "./components/EditorialData";
import { IndividualLogo } from "@/components/logo/Logo";
import EditorialReply from "../../components/EditorialReply";

export default async function page({ params }: { params: { id: string[] } }) {
  const editorialDocumentData = await getEditorialDocument(params.id[0]);

  return (
    <div className="sm:container mb-5">
      <div className="py-8 px-4">
        <IndividualLogo />
      </div>
      <EditorialData singleEditorialData={editorialDocumentData} />
      <EditorialReply />
    </div>
  );
}
