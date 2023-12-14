import getEditorialDocument from "@/app/secure/editorial/admin/lib/getSingleEditorialPost";
import EditorialData from "./components/EditorialData";
import { IndividualLogo } from "@/components/logo/Logo";

export default async function page({ params }: { params: { id: string[] } }) {
  const editorialDocumentData = await getEditorialDocument(params.id[0]);

  return (
    <div className="container">
      <div className="my-10">
        <IndividualLogo />
      </div>
      <EditorialData singleEditorialData={editorialDocumentData} />
    </div>
  );
}
