"use client";

import type { ComponentType } from "react";
import {
  BandageGlyph,
  BrainDuotoneGlyph,
  BrainFogGlyph,
  CognitiveGlyph,
  EkgMonitorGlyph,
  EmgGlyph,
  EpilepsyGlyph,
  HeadacheGlyph,
  HeartRateGlyph,
  HospitalGlyph,
  MedicalScannerGlyph,
  MemoryBrainGlyph,
  MovementDisorderGlyph,
  NeuropathyGlyph,
  NervousSystemGlyph,
  SleepGlyph,
  StrokeGlyph,
  StethoscopeGlyph,
  TremorGlyph,
  type SvgRepoGlyphComponent,
} from "./svgrepo-health-glyphs";
import type { MedicalGlyphProps } from "./MedicalIcon";

/** One unique icon per condition — index matches NEUROLOGIST_CONDITIONS.items */
export const NEUROLOGY_CONDITION_GLYPHS = [
  HeadacheGlyph, // Migraine & chronic headaches
  MemoryBrainGlyph, // Memory loss & dementia
  TremorGlyph, // Parkinson's & tremors
  MovementDisorderGlyph, // Dystonia & movement disorders
  EpilepsyGlyph, // Epilepsy & seizures
  StrokeGlyph, // Stroke prevention & recovery
  NeuropathyGlyph, // Peripheral neuropathy
  BrainFogGlyph, // Brain fog & cognitive changes
  SleepGlyph, // Sleep disorders
] as const satisfies readonly SvgRepoGlyphComponent[];

export const NEUROLOGY_DIAGNOSTIC_GLYPHS = [
  StethoscopeGlyph,
  EmgGlyph,
  EkgMonitorGlyph,
  MedicalScannerGlyph,
  CognitiveGlyph,
] as const satisfies readonly SvgRepoGlyphComponent[];

export const NEUROLOGY_WHY_GLYPHS = [
  StethoscopeGlyph,
  CognitiveGlyph,
  MedicalScannerGlyph,
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

export function InsuranceSectionGlyph(props: MedicalGlyphProps) {
  return <BandageGlyph {...props} />;
}

export {
  BandageGlyph,
  BrainDuotoneGlyph,
  EkgMonitorGlyph,
  HeadacheGlyph,
  HospitalGlyph,
  MedicalScannerGlyph,
  SleepGlyph,
  StethoscopeGlyph,
};
