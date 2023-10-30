export default function IconWrapper({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={`p-2 rounded-md w-fit shadow-md ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
