import type { ReactNode } from "react";

type PageShellProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-soft sm:p-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-[color:var(--color-text-dark)]">{title}</h1>
        <p className="mt-2 text-[color:var(--color-text-gray)]">{description}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </main>
  );
}
