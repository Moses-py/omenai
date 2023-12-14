"use client";

// Library imports
import { Label, Select, Timeline } from "flowbite-react";
import { FormEvent, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

// Style imports
import Input from "../../../components/Input";
import { form_data } from "../mocks/formdata";
import ImageUpload from "./ImageUpload";
import Editor from "../wysiwyg/Editor";
import { editorialAdminStore } from "../store/EditorialAdminStore";
import { toast } from "sonner";
import { uploadImage } from "../lib/uploadImage";
import formatDate from "../utils/formatData";
import { ID, database } from "../controller/appwrite";
import { ClipLoader } from "react-spinners";

export default function Admin() {
  const [loading, setLoading] = useState(false);
  const { register } = useForm();
  const [updateEditorialData, editorialData, cover, clearData] =
    editorialAdminStore((state) => [
      state.updateEditorialData,
      state.editorialData,
      state.cover,
      state.clearData,
    ]);
  function handleChange(label: string, value: string) {
    updateEditorialData(label, value);
  }

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    if (editorialData.content === "" || editorialData.title === "") {
      toast.error("Some fields are missing");
    } else {
      toast.success("Adding new editorial post...Please wait");
      setLoading(true);

      try {
        let image: Image | undefined;
        const fileUpload = await uploadImage(cover);

        if (fileUpload) {
          image = {
            bucketId: fileUpload.bucketId,
            fileId: fileUpload.$id,
          };
        }

        const parse_data = {
          ...editorialData,
          date: formatDate(new Date()),
          ...(image && { cover: JSON.stringify(image) }),
        };

        const { $id } = await database.createDocument(
          process.env.NEXT_PUBLIC_APPWRITE_EDITORIAL_DATABASE_ID!,
          process.env.NEXT_PUBLIC_APPWRITE_EDITORIAL_COLLECTION_ID!,
          ID.unique(),
          { ...parse_data }
        );

        if ($id) {
          clearData();
          setLoading(false);
          toast.success("Editorial added successfully");
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  }

  return (
    <>
      <section className="p-4 font-sans">
        <form onSubmit={handleFormSubmit}>
          <div className="md:container">
            <div className="flex justify-between items-center mt-5 mb-[3rem]">
              <h1 className="divide-y text-lg ">Create an editorial content</h1>
              <button
                disabled={loading}
                type="submit"
                className={`py-2 px-5 text-white disabled:cursor-not-allowed ${
                  loading ? "bg-base-theme" : "bg-primary"
                } hover:bg-base-theme rounded-md`}
              >
                {loading ? <ClipLoader size={20} color="#fff" /> : "Save"}
              </button>
            </div>

            <Timeline>
              {form_data.map((data, index) => {
                if (data.type === "file") {
                  return (
                    <>
                      <Timeline.Item key={index}>
                        <Timeline.Point />
                        <Timeline.Content>
                          <div className="flex flex-col gap-3">
                            <label htmlFor="" className="font-light">
                              Cover image
                            </label>
                            <label
                              htmlFor="label_description"
                              className=" text-base-theme"
                            >
                              Got a nice cover image for your post?
                            </label>
                          </div>
                          <ImageUpload />
                        </Timeline.Content>
                      </Timeline.Item>
                    </>
                  );
                } else {
                  return (
                    <>
                      <Input
                        label={data.label}
                        description={data.description}
                        placeholder={data.placeholder}
                        type={data.type}
                        key={index}
                        register={register}
                        name={data.name}
                        required={data.required}
                        onchange={(e) =>
                          handleChange(data.name, e.target.value)
                        }
                      />
                    </>
                  );
                }
              })}

              {/* Content */}
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="" className="font-light">
                      Content
                    </label>
                    <label
                      htmlFor="label_description"
                      className=" text-base-theme"
                    >
                      Write your editorial content!
                    </label>
                    <Editor />
                  </div>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
        </form>
      </section>
    </>
  );
}
