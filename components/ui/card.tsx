export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white">{children}</div>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}
