interface LeverListProps {
  levers: string[];
}

export function LeverList({ levers }: LeverListProps) {
  return (
    <ul className="lever-list">
      {levers.map((lever) => <li key={lever}>{lever}</li>)}
    </ul>
  );
}
