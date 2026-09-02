export function HomeHeroSatisfactionBadge() {
  return (
    <div className="flex w-full max-w-[340px] items-center gap-3 rounded-2xl border border-border/50 bg-card/95 px-4 py-3 shadow-[var(--shadow-card)] backdrop-blur-md">
      <div
        className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-xs font-bold text-primary"
        aria-hidden
      >
        <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-border/50"
          />
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="113"
            strokeDashoffset="9"
            strokeLinecap="round"
            className="text-primary"
          />
        </svg>
        <span className="relative">92%</span>
      </div>
      <div>
        <p className="text-sm font-semibold leading-tight text-foreground">Patient satisfaction</p>
        <p className="text-xs text-muted-foreground">Based on verified Google reviews</p>
      </div>
    </div>
  );
}
