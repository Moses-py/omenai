"use client";

// Library imports
import { Label, Select, Timeline } from "flowbite-react";
import { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

// Style imports
import Input from "../components/Input";
import { blog_category, form_data } from "../mocks/formdata";
import ImageUpload from "./ImageUpload";
import Editor from "../wysiwyg/Editor";

export default function Admin() {
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | undefined>();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("Technology");

  const { register, handleSubmit } = useForm();

  return (
    <>
      <section className="p-4 font-sans">
        <form>
          <div className="md:container">
            <div className="flex justify-between items-center mt-5 mb-[3rem]">
              <h1 className="divide-y text-lg ">Create an editorial content</h1>
              <button
                type="submit"
                className="py-2 px-5 text-white bg-blue-600 hover:bg-blue-500 rounded-md"
              >
                {loading ? "Loading..." : "Save"}
              </button>
            </div>

            <Timeline>
              {form_data.map((data, index) => {
                if (data.type === "file") {
                  return (
                    <>
                      <Timeline.Item>
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
                        key={index + "f"}
                        register={register}
                        name={data.name}
                        required={data.required}
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
