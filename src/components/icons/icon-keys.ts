/** Serializable icon keys  safe to pass from Server to Client Components. */
export const LUCIDE_ICON_KEYS = [
  "accessibility",
  "activity",
  "award",
  "badge-check",
  "brain",
  "briefcase",
  "building-2",
  "calendar",
  "clipboard-check",
  "clipboard-list",
  "clock",
  "flask-conical",
  "gift",
  "graduation-cap",
  "heart",
  "heart-handshake",
  "heart-pulse",
  "hospital",
  "languages",
  "line-chart",
  "map-pin",
  "medal",
  "microscope",
  "moon",
  "scale",
  "scan-line",
  "shield-check",
  "stethoscope",
  "syringe",
  "users",
  "video",
  "wind",
] as const;

export type LucideIconKey = (typeof LUCIDE_ICON_KEYS)[number];

/** Contextual health icons from SVG Repo (themed duotone / medical glyphs). */
export const SVGREPO_HEALTH_ICON_NAMES = [
  "brain",
  "headache",
  "nervous-system",
  "ekg",
  "scanner",
  "sleep",
  "hospital",
  "heart-rate",
  "pill",
  "lab-tube",
  "bandage",
  "stethoscope",
  "cardiology",
  "neurology",
  "diagnostics",
  "primary-care",
  "weight-loss",
  "pain",
] as const;

export type SvgRepoHealthIconName = (typeof SVGREPO_HEALTH_ICON_NAMES)[number];

/** @deprecated Use SvgRepoHealthIconName — kept for PremiumIcon prop compatibility. */
export type HealthIconName = SvgRepoHealthIconName;
