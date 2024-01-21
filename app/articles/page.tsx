import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";
import { listEditorials } from "../secure/editorial/admin/lib/getAllBlogArticles";
import EditorialsWrapper from "./components/EditorialsWrapper";

export default async function page() {
  const editorials: any = await listEditorials();
  const editorialList = editorials.reverse().map((editorial: any) => {
    return {
      title: editorial.title,
      id: editorial.id,
      author: editorial.author,
      date: editorial.date,
      url: editorial.image.href,
    };
  });

  return (
    <>
      <DesktopNavbar />
      <EditorialsWrapper editorials={editorialList} />
    </>
  );
}
