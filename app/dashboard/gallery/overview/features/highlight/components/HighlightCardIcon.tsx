export default function HighlightCardIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="p-2 rounded-md bg-primary grid place-items-center">
      {icon}
    </div>
  );
}
