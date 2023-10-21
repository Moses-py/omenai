"use client";
import Image from "next/image";
import { FormEvent } from "react";
import { InputCard } from "./InputCard";
import { TextareaCard } from "./TextareaCard";

export const FormCard = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 space-y-8 lg:px-0">
      <InputCard label="Full name" />
      <InputCard
        label="Email address"
        rightComponent={
          <div>
            <p className="text-green-400">Verified</p>
          </div>
        }
      />
      <InputCard
        label="Phone Number"
        rightComponent={
          <div>
            <p className="text-red-500">Verify</p>
          </div>
        }
      />
      <TextareaCard label="Bio" rows={3} className="resize-none" />

      <div className="grid lg:grid-cols-2 gap-8 pt-5">
        <Card label="Address information" showAddButton />
        <Card label="Art interests" />
      </div>

      <button
        type="submit"
        className="disabled:cursor-not-allowed disabled:bg-secondary/20 place-items-center px-8 py-2 bg-primary hover:bg-primary/50 rounded-full text-white text-base"
      >
        Save
      </button>
    </form>
  );
};

type CardProps = {
  label: string;
  showAddButton?: boolean;
};

const Card = (props: CardProps) => {
  const { label, showAddButton = false } = props;
  return (
    <div className="">
      <div className="flex items-center justify-between mb-3 h-[35px] px-1">
        <p className="text-base text-gray-200">{label}</p>

        {showAddButton ? (
          <button
            type="button"
            className="hidden md:flex bg-gray-300 text-gray-200 rounded-full h-fit p-2 px-4"
          >
            <Image
              src={"/icons/plus.png"}
              alt="plus icon"
              width={24}
              height={24}
              className="mr-2 shrink-0"
            />
            Logout
          </button>
        ) : null}
      </div>

      <div className="border border-line h-[240px] rounded-2xl bg-white"></div>
    </div>
  );
};
