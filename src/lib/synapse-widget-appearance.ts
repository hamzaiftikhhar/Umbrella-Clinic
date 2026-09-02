export type WidgetAppearance = {
  clinicName: string;
  greeting: string;
  primaryColor: string;
  textColor: string;
  avatarUrl: string;
  cornerRadius: number;
};

export const WIDGET_APPEARANCE_CACHE_KEY = "umbrella-synapse-widget-appearance-v1";

export const WIDGET_APPEARANCE_FALLBACK: WidgetAppearance = {
  clinicName: "Umbrella Health",
  greeting: "Hi! How can I help you today?",
  primaryColor: "#3b82f6",
  textColor: "#ffffff",
  avatarUrl: "/images/logo-mark.webp",
  cornerRadius: 18,
};

export function normalizeWidgetAppearance(data: Partial<WidgetAppearance>): WidgetAppearance {
  return {
    clinicName: data.clinicName || WIDGET_APPEARANCE_FALLBACK.clinicName,
    greeting: data.greeting || WIDGET_APPEARANCE_FALLBACK.greeting,
    primaryColor: data.primaryColor || WIDGET_APPEARANCE_FALLBACK.primaryColor,
    textColor: data.textColor || WIDGET_APPEARANCE_FALLBACK.textColor,
    avatarUrl: data.avatarUrl || WIDGET_APPEARANCE_FALLBACK.avatarUrl,
    cornerRadius: data.cornerRadius ?? WIDGET_APPEARANCE_FALLBACK.cornerRadius,
  };
}

export function readCachedWidgetAppearance(): WidgetAppearance | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(WIDGET_APPEARANCE_CACHE_KEY);
    if (!raw) return null;
    return normalizeWidgetAppearance(JSON.parse(raw) as Partial<WidgetAppearance>);
  } catch {
    return null;
  }
}

export function writeCachedWidgetAppearance(appearance: WidgetAppearance) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      WIDGET_APPEARANCE_CACHE_KEY,
      JSON.stringify({
        clinicName: appearance.clinicName,
        greeting: appearance.greeting,
        primaryColor: appearance.primaryColor,
        textColor: appearance.textColor,
        // Avatars are large data URLs — cache colors/name only.
        avatarUrl: appearance.avatarUrl.startsWith("data:") ? "" : appearance.avatarUrl,
        cornerRadius: appearance.cornerRadius,
      }),
    );
  } catch {
    // Ignore quota errors.
  }
}
