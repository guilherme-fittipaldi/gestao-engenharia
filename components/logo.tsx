import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5 object-left", className)}>
      <img
        src="/logos/claro-horizontal.png"
        alt="Logo Gestão Engenharia"
        aria-hidden="true"
        className="size-full object-contain object-left"
      />
    </span>
  );
}
