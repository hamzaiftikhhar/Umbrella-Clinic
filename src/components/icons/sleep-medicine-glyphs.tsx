"use client";

import type { ComponentType } from "react";
import {
  BandageGlyph,
  CognitiveGlyph,
  HeartRateGlyph,
  HospitalGlyph,
  SleepGlyph,
  StethoscopeGlyph,
  type SvgRepoGlyphComponent,
} from "./svgrepo-health-glyphs";
import type { MedicalGlyphProps } from "./MedicalIcon";
import { medicalSvgProps } from "./MedicalIcon";

/** Sleep apnea — airway / breathing pulse. */
export function SleepApneaGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M4 14c2-3 4-5 8-5s6 2 8 5" />
      <path d="M6 17c1.5-2 3.5-3 6-3s4.5 1 6 3" />
      <circle cx="12" cy="8" r="2.5" />
      <path d="M12 10.5v3" />
    </svg>
  );
}

/** Insomnia — open eye + moon. */
export function InsomniaGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M15.5 5.5a5.5 5.5 0 1 0 6.2 8.7A7 7 0 1 1 15.5 5.5Z" />
      <path d="M5 14h4l1.2-2 1.3 4 1.2-2.5H15" />
    </svg>
  );
}

/** Snoring / airflow. */
export function SnoringGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M5 12h3l2-4 2.5 8 2-5H19" />
      <path d="M8 18.5c1.5.8 3.2 1.2 4.5 1.2s3-.4 4.5-1.2" />
    </svg>
  );
}

/** Restless legs — motion arcs on limbs. */
export function RestlessLegsGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M8 5v6.5l-2.5 7.5" />
      <path d="M16 5v6.5l2.5 7.5" />
      <path d="M4.5 12.5c1-.6 2.2-.7 3.2-.2" />
      <path d="M19.5 12.5c-1-.6-2.2-.7-3.2-.2" />
      <path d="M5 16c1.2-.3 2.4 0 3.3.7" />
      <path d="M19 16c-1.2-.3-2.4 0-3.3.7" />
    </svg>
  );
}

/** Circadian / clock. */
export function CircadianGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
      <path d="M12 3.5v1.5M12 19v1.5M3.5 12H5M19 12h1.5" />
    </svg>
  );
}

/** Daytime sleepiness — sun + yawn arc. */
export function DaytimeSleepinessGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <circle cx="12" cy="10" r="3.5" />
      <path d="M12 3.5v1.5M12 15v1.5M5.5 10H4M20 10h-1.5M6.5 5.5l1 1M16.5 14.5l1 1M17.5 5.5l-1 1M6.5 14.5l-1 1" />
      <path d="M8 19.5c1.2.8 2.8 1.2 4 1.2s2.8-.4 4-1.2" />
    </svg>
  );
}

/** Parasomnia — sleepwalking figure. */
export function ParasomniaGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <circle cx="12" cy="5.5" r="2" />
      <path d="M12 7.5v6" />
      <path d="M8 11.5h8" />
      <path d="M9.5 13.5 8 20" />
      <path d="M14.5 13.5 16 20" />
      <path d="M17 8.5c1.2.4 2.2 1.4 2.5 2.8" />
    </svg>
  );
}

export const SLEEP_CONDITION_GLYPHS = [
  SleepApneaGlyph,
  InsomniaGlyph,
  SnoringGlyph,
  RestlessLegsGlyph,
  SleepGlyph,
  CircadianGlyph,
  DaytimeSleepinessGlyph,
  ParasomniaGlyph,
] as const satisfies readonly SvgRepoGlyphComponent[];

export const SLEEP_DIAGNOSTIC_GLYPHS = [
  StethoscopeGlyph,
  SleepGlyph,
  SleepApneaGlyph,
  CognitiveGlyph,
  HeartRateGlyph,
] as const satisfies readonly SvgRepoGlyphComponent[];

export const SLEEP_TRUST_GLYPHS = [
  StethoscopeGlyph,
  SleepGlyph,
  CognitiveGlyph,
  HospitalGlyph,
  MapPinGlyph,
  ClockGlyph,
] as const satisfies readonly SvgRepoGlyphComponent[];

function MapPinGlyph(props: MedicalGlyphProps) {
  const { className, size = 22 } = props;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockGlyph(props: MedicalGlyphProps) {
  const { className, size = 22 } = props;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function SleepInsuranceGlyph(props: MedicalGlyphProps) {
  return <BandageGlyph {...props} />;
}

export type SleepGlyphComponent = ComponentType<MedicalGlyphProps>;
