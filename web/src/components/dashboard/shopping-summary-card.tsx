import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ShoppingSummary } from "@/lib/mock-data";

const RADIUS = 26;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function ProgressRing({ percent }: { percent: number }) {
  return (
    <div className="relative size-16 shrink-0">
      <svg viewBox="0 0 64 64" className="size-full -rotate-90" aria-hidden>
        <circle cx="32" cy="32" r={RADIUS} fill="none" strokeWidth="6" className="stroke-muted" />
        <circle
          cx="32"
          cy="32"
          r={RADIUS}
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          className="stroke-primary"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - percent / 100)}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center text-[11px] font-bold">{percent}%</span>
    </div>
  );
}

interface ShoppingSummaryCardProps {
  summary: ShoppingSummary;
  className?: string;
}

export function ShoppingSummaryCard({ summary, className }: ShoppingSummaryCardProps) {
  const { purchased, total, categories } = summary;
  const percent = Math.round((purchased / total) * 100);

  return (
    <section
      aria-labelledby="compra-titulo"
      className={cn("flex flex-col rounded-3xl bg-card p-5 shadow-card sm:p-6", className)}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 id="compra-titulo" className="font-sans text-sm font-normal text-muted-foreground">
            Compra de esta semana
          </h2>
          <p className="mt-2 font-display text-4xl font-bold leading-none">
            {purchased}
            <span className="text-xl font-semibold text-muted-foreground">/{total}</span>
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground">artículos comprados</p>
        </div>
        <ProgressRing percent={percent} />
      </div>

      <div
        role="progressbar"
        aria-valuenow={purchased}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label="Artículos comprados"
        className="mt-4 h-2 overflow-hidden rounded-full bg-muted"
      >
        <div className="h-full rounded-full bg-primary" style={{ width: `${percent}%` }} />
      </div>

      <ul className="mt-5 grid grid-cols-2 gap-2">
        {categories.map((c) => (
          <li
            key={c.id}
            className="flex h-10 items-center gap-2 rounded-full bg-muted/60 px-3 text-sm font-medium"
          >
            <span aria-hidden>{c.emoji}</span>
            <span className="flex-1 truncate">{c.label}</span>
            <span className="text-xs font-semibold">{c.pending}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/lista"
        className="mt-6 flex h-11 items-center justify-center gap-2 rounded-2xl bg-primary-soft text-sm font-medium text-primary-ink transition-colors hover:bg-primary-soft/70"
      >
        Ir a la lista
        <ArrowRight className="size-4" />
      </Link>
    </section>
  );
}
