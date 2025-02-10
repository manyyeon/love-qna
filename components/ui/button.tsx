export function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition"
    >
      {children}
    </button>
  );
}
