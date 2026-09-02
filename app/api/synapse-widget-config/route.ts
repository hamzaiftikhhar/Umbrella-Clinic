import { NextResponse } from "next/server";
import { SYNAPSE_APP_URL, SYNAPSE_CLINIC_SLUG } from "@/lib/site";

export const revalidate = 300;

export async function GET() {
  const url = `${SYNAPSE_APP_URL}/api/v1/widget/config?clinic_slug=${encodeURIComponent(SYNAPSE_CLINIC_SLUG)}`;
  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) {
    return NextResponse.json(
      { primaryColor: "#3b82f6", textColor: "#ffffff", avatarUrl: "", greeting: "" },
      { status: 200 },
    );
  }
  const data = (await res.json()) as {
    clinic_name?: string;
    configuration?: {
      widget?: {
        greeting?: string;
        avatar_url?: string;
        primary_color?: string;
        text_color?: string;
        corner_radius?: number;
      };
    };
  };
  const widget = data.configuration?.widget ?? {};
  return NextResponse.json({
    clinicName: data.clinic_name ?? "Umbrella Health",
    greeting: widget.greeting ?? "Hi! How can I help you today?",
    primaryColor: widget.primary_color || "#3b82f6",
    textColor: widget.text_color || "#ffffff",
    avatarUrl: widget.avatar_url || "",
    cornerRadius: widget.corner_radius ?? 18,
  });
}
