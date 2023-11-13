"use client";
import { useSession } from "next-auth/react";
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
      <InputCard label="Gallery name" value={user?.name} onChange={() => {}} />
      <InputCard
        label="Email address"
        value={user?.email}
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
      <InputCard label="Location" value={user?.location} />
      <InputCard label="Admin" value={user?.admin} />
      <TextareaCard
        label="Gallery description"
        rows={2}
        className="resize-none"
        value={user?.description}
      />

      <button
        type="submit"
        className="disabled:cursor-not-allowed disabled:bg-secondary/20 place-items-center px-8 py-2 bg-primary hover:bg-primary/50 rounded-full text-white text-base"
      >
        Edit profile
      </button>
    </form>
  );
};

type CardProps = {
  label: string;
  showAddButton?: boolean;
};
