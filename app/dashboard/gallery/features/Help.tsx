import { TfiHelpAlt } from "react-icons/tfi";
import IconWrapper from "../components/IconWrapper";
export default function Help() {
  return (
    <div className="rounded-lg p-4 bg-[url(/images/white_curved.jpg)] flex flex-col gap-y-1 text-base-theme">
      <IconWrapper>
        <TfiHelpAlt />
      </IconWrapper>

      <h3>Need help?</h3>
      <p className="text-xs">
        Feel free to react us through any of our help channels below:
      </p>

      <div className="flex flex-col text-xs">
        <span>
          email: <span className="text-dark font-normal">moses@omenai.net</span>
        </span>
        <span>
          whatsapp: <span className="text-dark font-normal">+1234567890</span>
        </span>
        <span>
          instagram: <span className="text-dark font-normal">@omenai_Inc</span>
        </span>
      </div>
    </div>
  );
}
