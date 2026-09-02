"use client";

import type { ComponentType } from "react";
import { cn } from "@/lib/utils";
import type { SvgRepoHealthIconName } from "./icon-keys";
import type { MedicalGlyphProps } from "./MedicalIcon";
import {
  BandageGlyph,
  BrainDuotoneGlyph,
  EkgMonitorGlyph,
  HeadacheGlyph,
  HeartRateGlyph,
  HospitalGlyph,
  LabTubeGlyph,
  MedicalScannerGlyph,
  NervousSystemGlyph,
  PillGlyph,
  SleepGlyph,
  StethoscopeGlyph,
} from "./svgrepo-health-glyphs";

const GLYPHS: Record<SvgRepoHealthIconName, ComponentType<MedicalGlyphProps>> = {
  brain: BrainDuotoneGlyph,
  headache: HeadacheGlyph,
  "nervous-system": NervousSystemGlyph,
  ekg: EkgMonitorGlyph,
  scanner: MedicalScannerGlyph,
  sleep: SleepGlyph,
  hospital: HospitalGlyph,
  "heart-rate": HeartRateGlyph,
  pill: PillGlyph,
  "lab-tube": LabTubeGlyph,
  bandage: BandageGlyph,
  stethoscope: StethoscopeGlyph,
  cardiology: HeartRateGlyph,
  neurology: BrainDuotoneGlyph,
  diagnostics: EkgMonitorGlyph,
  "primary-care": StethoscopeGlyph,
  "weight-loss": PillGlyph,
  pain: BandageGlyph,
};

interface HealthIconProps {
  name: SvgRepoHealthIconName;
  className?: string;
  size?: number;
}

/** SVG Repo health icons — navy-themed via currentColor duotone layers. */
export function HealthIcon({ name, className, size }: HealthIconProps) {
  const Glyph = GLYPHS[name];
  return (
    <span
      className={cn("inline-flex shrink-0 items-center justify-center text-current", className)}
    >
      <Glyph size={size} />
    </span>
  );
}
