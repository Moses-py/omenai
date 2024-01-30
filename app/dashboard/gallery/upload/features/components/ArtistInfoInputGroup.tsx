import {
  uploadArtistDetailsInputMocks,
  uploadArtworkDimensionInputMocks,
} from "../mocks";
import ArtworkSelectInput from "./ArtworkSelectInput";
import ArtworkTextInput from "./ArtworkTextInput";

export default function ArtistInfoInputGroup() {
  return (
    <div className="my-10">
      <h2 className="text-primary font-normal text-base my-4">
        Artist information
      </h2>
      <div className="grid grid-cols-3 gap-5 ">
        {uploadArtistDetailsInputMocks.map((input, index) => {
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
    </div>
  );
}
