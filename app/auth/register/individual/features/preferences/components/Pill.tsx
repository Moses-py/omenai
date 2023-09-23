type PillProps = {
  text: string;
  selected?: boolean;
  onClick?: () => void;
};
export default function Pill({ text, selected = false, onClick }: PillProps) {
  return (
    <button
      type="button"
      className={`rounded-full w-fit border border-primary hover:bg-primary hover:text-white transition-all ease-linear duration-200 px-3 py-1 ${
        selected ? "bg-primary text-white" : "bg-transparent text-secondary"
      }`}
    >
      {text}
    </button>
  );
}
