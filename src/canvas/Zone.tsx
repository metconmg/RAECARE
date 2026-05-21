import type { ReactNode } from 'react';

interface ZoneProps {
  title: string;
  children: ReactNode;
}

export function Zone({ title, children }: ZoneProps) {
  return (
    <section className="zone-panel" aria-label={title}>
      <h2>{title}</h2>
      <div className="zone-stack">{children}</div>
    </section>
  );
}
