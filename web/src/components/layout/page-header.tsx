import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function PageHeader({ eyebrow, title, description, action }: PageHeaderProps) {
  return (
    <div className="mb-6 flex animate-float-in flex-wrap items-end justify-between gap-4">
      <div className="min-w-0">
        {eyebrow && (
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
        )}
        <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
        {description && <p className="mt-1 text-sm text-muted-foreground sm:text-base">{description}</p>}
      </div>
      {action}
    </div>
  );
}
