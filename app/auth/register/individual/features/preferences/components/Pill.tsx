"use client";

import { useIndividualAuthStore } from "@/store/auth/register/IndividualAuthStore";

type PillProps = {
  text: string;
  selected?: boolean;
  onClick?: () => void;
};
export default function Pill({ text, selected = false, onClick }: PillProps) {
  const [preferences, updatePreference] = useIndividualAuthStore((state) => [
    state.preferences,
    state.updatePreference,
  ]);
  return (
    <button
      onClick={() => updatePreference(text)}
      type="button"
      className={`rounded-full w-fit border border-primary hover:ring-2 hover:ring-primary  transition-all ease-linear duration-100 px-3 py-1 ${
        preferences.includes(text)
          ? "bg-primary text-white"
          : "bg-transparent text-dark"
      }`}
    >
      {text}
    </button>
  );
}
