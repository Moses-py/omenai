"use client";
import { Timeline } from "flowbite-react";

const Input = ({
  label,
  description,
  placeholder,
  type,
  register,
  name,
  onchange,
  required,
  value,
}: Input) => {
  return (
    <>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <div className="flex flex-col gap-3 text-dark">
            <label htmlFor="" className=" font-light">
              {label}
            </label>

            <label htmlFor="label_description" className=" text-dark">
              {description}
            </label>
            <input
              type={type}
              {...(register && register(name, { required: required }))}
              className={`block border-transparent border-b-dark/20 focus:border-transparent focus:border-b-dark focus:ring-0 border w-full placeholder:text-xs placeholder:italic px-0 ${
                type === "file" && "text-dark"
              } placeholder:text-dark `}
              placeholder={placeholder}
              onChange={onchange}
              defaultValue={value}
            />
          </div>
        </Timeline.Content>
      </Timeline.Item>
    </>
  );
};

export default Input;
