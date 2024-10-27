import { ReactNode } from "react";

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mb-12">
      <h3 className="text-2xl font-semibold text-slate-200 mb-4">{title}</h3>
      {children}
    </section>
  );
}
