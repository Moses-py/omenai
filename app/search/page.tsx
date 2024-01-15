import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";
import SearchResultWrapper from "./components/SearchResultWrapper";
import Footer from "@/components/footer/Footer";

export default function page() {
  return (
    <div>
      <DesktopNavbar />
      <SearchResultWrapper />
      <Footer />
    </div>
  );
}
