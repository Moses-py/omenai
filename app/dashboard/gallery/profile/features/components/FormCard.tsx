"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FormEvent } from "react";
import { InputCard } from "./InputCard";
import { TextareaCard } from "./TextareaCard";

export const FormCard = () => {
  const session = useSession();

  const user = session.data?.user;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 space-y-8 lg:px-2">
      <InputCard label="Gallery name" value={"Louvre d'museum"} />
      <InputCard
        label="Email address"
        value={"louvremuseum@gmail.com"}
        rightComponent={
          <div>
            {user?.verified ? (
              <p className="text-green-400">Verified</p>
            ) : (
              <p className="text-red-500">Verify</p>
            )}
          </div>
        }
      />
      <InputCard
        label="Location"
        value={"79, Voonburg hensuarrt street, de hague, Netherlands"}
      />
      <InputCard label="Admin" value={"Johnathan Wick"} />
      <TextareaCard
        label="Gallery description"
        rows={2}
        className="resize-none"
      />

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
