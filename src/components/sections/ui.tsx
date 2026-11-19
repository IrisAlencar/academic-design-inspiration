import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-glow">
      <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
      {children}
    </span>
  );
}

export function Btn({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "outline" }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-all";
  const v = variant === "primary"
    ? "bg-[image:var(--gradient-primary)] text-primary-foreground glow hover:brightness-110"
    : "border border-primary/40 bg-accent/40 text-foreground hover:border-primary hover:bg-accent";
  const ext = href.startsWith("http");
  return <a href={href} className={`${base} ${v}`} {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}>{children}</a>;
}

export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`relative scroll-mt-20 px-6 py-24 md:py-32 ${className}`}><div className="mx-auto max-w-6xl">{children}</div></section>;
}

export function Title({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`mt-6 font-display text-2xl leading-tight md:text-4xl ${className}`}>{children}</h2>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-border bg-card/70 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/60 hover:glow ${className}`}>{children}</div>;
}
