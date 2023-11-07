import { uploadArtworkDetailInputMocks } from "../mocks";
import ArtworkSelectInput from "./ArtworkSelectInput";
import ArtworkTextInput from "./ArtworkTextInput";

export default function ArtworkInfoInputGroup() {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 mt-12">
      {uploadArtworkDetailInputMocks.map((input, index) => {
        if (input.type === "text") {
          return (
            <ArtworkTextInput
              key={index}
              label={input.label}
              placeholder={input.placeholder}
              name={input.name}
              required={input.required}
            />
          );
        } else {
          return (
            <ArtworkSelectInput
              key={index}
              label={input.label}
              items={input.options}
              name={input.name}
              required={input.required}
            />
          );
        }
      })}
    </div>
  );
}
