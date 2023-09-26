import Recovery from "../recovery/RecoveryDialog";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative h-[100vh] w-[100vw]">
      <Recovery />
      {children}
    </main>
  );
}
