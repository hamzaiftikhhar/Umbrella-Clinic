"use client";

import type { ComponentType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { medicalSvgProps, type MedicalGlyphProps } from "./MedicalIcon";

function Duotone({
  viewBox,
  light,
  solid,
  className,
  size = 22,
}: MedicalGlyphProps & {
  viewBox: string;
  light: ReactNode;
  solid: ReactNode;
}) {
  return (
    <svg
      {...medicalSvgProps({ className, size })}
      viewBox={viewBox}
      fill="currentColor"
      stroke="none"
    >
      <g opacity={0.28}>{light}</g>
      <g>{solid}</g>
    </svg>
  );
}

function Solid({
  viewBox,
  children,
  className,
  size = 22,
}: MedicalGlyphProps & { viewBox: string; children: ReactNode }) {
  return (
    <svg
      {...medicalSvgProps({ className, size })}
      viewBox={viewBox}
      fill="currentColor"
      stroke="none"
    >
      {children}
    </svg>
  );
}

/** SVG Repo duotone — brain (health/duotone collection). */
export function BrainDuotoneGlyph(props: MedicalGlyphProps) {
  return (
    <Duotone
      {...props}
      viewBox="0 0 256 256"
      light={
        <path d="M240,132a48.01975,48.01975,0,0,1-31.99951,45.26855L208,177.26685V184a40,40,0,0,1-80,0,40,40,0,0,1-80,0v-6.73315l-.00049.0017a48.01968,48.01968,0,0,1-.00049-90.537L48,72a40,40,0,0,1,80,0,40,40,0,0,1,80,0l.001,14.73157A48.02,48.02,0,0,1,240,132Z" />
      }
      solid={
        <path d="M248,132a56.1211,56.1211,0,0,0-31.99951-50.61035L216,72a47.98283,47.98283,0,0,0-88-26.49316A47.98283,47.98283,0,0,0,40,71.99951l-.00049,9.39014A56.00268,56.00268,0,0,0,40,182.58569V184a47.98283,47.98283,0,0,0,88,26.49316A47.98283,47.98283,0,0,0,216,184v-1.41431A56.06726,56.06726,0,0,0,248,132ZM88,216a32.0433,32.0433,0,0,1-31.812-28.55664A56.1738,56.1738,0,0,0,64,188h8a8,8,0,0,0,0-16H64A40.00827,40.00827,0,0,1,50.66553,94.27393a7.99958,7.99958,0,0,0,5.33349-7.542L56,72a32,32,0,0,1,64,0v76.26147A47.80252,47.80252,0,0,0,88,136a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a56.1738,56.1738,0,0,0,7.812-.55664A31.999,31.999,0,1,1,168,152a8,8,0,0,0,0-16,47.80252,47.80252,0,0,0-32,12.26147V72a32,32,0,1,1,64,.00049l.001,14.73144a7.99958,7.99958,0,0,0,5.33349,7.542A40.00827,40.00827,0,0,1,192,172ZM60,128a8,8,0,0,1,0-16A20.0226,20.0226,0,0,0,80,92V84a8,8,0,0,1,16,0v8A36.04061,36.04061,0,0,1,60,128Zm144-8a8.00008,8.00008,0,0,1-8,8,36.04061,36.04061,0,0,1-36-36V84a8,8,0,0,1,16,0v8a20.0226,20.0226,0,0,0,20,20A8.00008,8.00008,0,0,1,204,120Z" />
      }
    />
  );
}

/** SVG Repo — headache / migraine. */
export function HeadacheGlyph(props: MedicalGlyphProps) {
  return (
    <Solid {...props} viewBox="0 0 512 512">
      <path d="M233.972,228.194c-12.8,39.747,9.046,82.341,48.792,95.159c39.747,12.8,82.341-9.036,95.16-48.783c12.78-39.747-9.056-82.34-48.784-95.141C289.394,166.629,246.772,188.466,233.972,228.194z" />
      <polygon points="189.486,91.816 251.901,168.827 264.539,162.092 214.465,94.787 232.749,84.709 175.932,0 158.49,10.804 208.725,80.143" />
      <polygon points="130.864,169.056 221.171,199.575 228.612,186.899 153.732,157.765 164.527,138.813 75.309,98.483 65.737,117.378 141.697,148.165" />
      <path d="M457.589,456.129c-9.781-75.548-69.54-90.508-138.307-99.048c-0.028,0.02-168.492-20.594-168.492-20.594l55.737-70.266c10.641-12.285,9.332-30.873-2.952-41.533c-12.255-10.632-30.844-9.294-41.494,2.952L57.656,337.863c-22.83,24.778-1.567,61.479,22.39,67.525c5.98,1.5,132.547,29.803,133.96,32.248c5.063,8.903,5.56,74.364,5.56,74.364h244.537L457.589,456.129z" />
    </Solid>
  );
}

/** SVG Repo — nervous system / spine (neuropathy, movement). */
export function NervousSystemGlyph(props: MedicalGlyphProps) {
  return (
    <Solid {...props} viewBox="0 0 141 260">
      <path d="M83.654,145.881v-13.429h7.394c12.075,0,21.863-9.788,21.863-21.863V95.076h7.565c3.07,0,5.191-3.071,4.105-5.942L112.968,58.43c0,0-1.237-12.085-2.304-16.749C105.83,20.884,82.618,2,57.438,2C26.807,2,1.964,26.842,1.964,57.53c0,16.34,7.048,30.994,18.295,41.156v46.868c-8.846,7.135-14.466,18.09-14.466,30.669V258h133.242v0C139.034,213.135,117.146,165.465,83.654,145.881z M43.17,242.194c-4.75,0-8.601-3.851-8.601-8.601s3.851-8.601,8.601-8.601c4.75,0,8.601,3.851,8.601,8.601S47.92,242.194,43.17,242.194z" />
    </Solid>
  );
}

/** SVG Repo duotone — EKG / EEG monitor. */
export function EkgMonitorGlyph(props: MedicalGlyphProps) {
  return (
    <Duotone
      {...props}
      viewBox="0 0 32 32"
      light={
        <>
          <path d="M26,2H6A4,4,0,0,0,2,6V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6A4,4,0,0,0,26,2Z" />
          <path d="M23,15H19.72L19,12.68a1,1,0,0,0-.82-.67,1,1,0,0,0-1,.44l-1,1.41-1.29-3.23A1,1,0,0,0,14.1,10a1,1,0,0,0-.93.44L11.46,13H9a1,1,0,0,0,0,2h3a1,1,0,0,0,.83-.45l.95-1.41,1.29,3.23a1,1,0,0,0,.83.62H16a1,1,0,0,0,.83-.45l.87-1.29.35,1.06A1,1,0,0,0,19,17h4a1,1,0,0,0,0-2Z" />
        </>
      }
      solid={
        <>
          <circle cx="10" cy="25" r="3" />
          <path d="M18,24h5a1,1,0,0,0,0-2H18a1,1,0,0,0,0,2Z" />
          <path d="M23,25H18a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2Z" />
          <path d="M22.11,6H9.89A3.9,3.9,0,0,0,6,9.89V20a1,1,0,0,0,1,1H25a1,1,0,0,0,1-1V9.89A3.9,3.9,0,0,0,22.11,6Z" />
        </>
      }
    />
  );
}

/** SVG Repo — medical scanner / brain imaging. */
export function MedicalScannerGlyph(props: MedicalGlyphProps) {
  return (
    <Solid {...props} viewBox="0 0 24 24">
      <path d="M5,22H19a3,3,0,0,0,3-3V5a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V19A3,3,0,0,0,5,22Zm14-2H5a1,1,0,0,1-1-1V13H8a1,1,0,0,0,.928-.628L10,9.692l3.071,7.68a1,1,0,0,0,1.858,0L16.677,13H20v6A1,1,0,0,1,19,20ZM5,4H19a1,1,0,0,1,1,1v6H16a1,1,0,0,0-.929.629L14,14.307,10.929,6.628a1,1,0,0,0-1.857,0L7.323,11H4V5A1,1,0,0,1,5,4Z" />
    </Solid>
  );
}

/** SVG Repo — sleep / rest. */
export function SleepGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg} viewBox="0 0 192 192" fill="none">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12">
        <path d="M30 22h62L30 96h62m25-24h46l-46 55h46m-109 0h36l-36 43h36" />
      </g>
    </svg>
  );
}

/** SVG Repo duotone — hospital / multispecialty clinic. */
export function HospitalGlyph(props: MedicalGlyphProps) {
  return (
    <Duotone
      {...props}
      viewBox="0 0 32 32"
      light={
        <>
          <path d="M21.29,3.58,16.29,2a1.14,1.14,0,0,0-.58,0l-5,1.54a1,1,0,0,0-.71,1V13a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V4.54A1,1,0,0,0,21.29,3.58Z" />
          <rect height="10" rx="1" ry="1" width="10" x="11" y="20" />
          <rect height="15" rx="1" ry="1" width="6" x="2" y="15" />
          <rect height="15" rx="1" ry="1" width="6" x="24" y="15" />
        </>
      }
      solid={
        <>
          <path d="M25,8H21a1,1,0,0,0-1,1v3H12V9a1,1,0,0,0-1-1H7A1,1,0,0,0,6,9V29a1,1,0,0,0,1,1H25a1,1,0,0,0,1-1V9A1,1,0,0,0,25,8Z" />
          <path d="M29.29,6l-13-4a1.14,1.14,0,0,0-.58,0l-13,4A1,1,0,1,0,3.29,8L16,4.05,28.71,8A.92.92,0,0,0,29,8a1,1,0,0,0,.29-2Z" />
          <path d="M18,7H17V6a1,1,0,0,0-2,0V7H14a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V9h1a1,1,0,0,0,0-2Z" />
        </>
      }
    />
  );
}

/** SVG Repo duotone — heart rate / cardiology. */
export function HeartRateGlyph(props: MedicalGlyphProps) {
  return (
    <Duotone
      {...props}
      viewBox="0 0 32 32"
      light={
        <path d="M27.31,7.54a8,8,0,0,0-5.64-2.3h-.09A8,8,0,0,0,16,7.58a8.2,8.2,0,0,0-5.71-2.26,8.17,8.17,0,0,0-5.62,14l.43.39a1.07,1.07,0,0,0,.14.16l10.22,10a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.3l10-10.23a1.06,1.06,0,0,0,.24-.39l.32-.31a8.08,8.08,0,0,0-.12-11.39Z" />
      }
      solid={
        <path d="M29,15.13,18.26,15h0a1,1,0,0,0-.92.61L17,14.28a1,1,0,0,0-.61-.67,1,1,0,0,0-.91.11l-1.26.85-1.4-4a1,1,0,0,0-.8-.66,1,1,0,0,0-1,.4L7.57,15,3,15.13a1,1,0,0,0,.06,2L8.11,17a1,1,0,0,0,.78-.41L11.52,13l1.2,3.45a1,1,0,0,0,.63.62,1,1,0,0,0,.88-.12l1.18-.8.79,2.9a1,1,0,0,0,.92.74h.05a1,1,0,0,0,.93-.64L18.93,17,29,17.13h0a1,1,0,0,0,0-2Z" />
      }
    />
  );
}

/** SVG Repo duotone — medication / pill. */
export function PillGlyph(props: MedicalGlyphProps) {
  return (
    <Duotone
      {...props}
      viewBox="0 0 32 32"
      light={
        <path d="M26,21.21V27a3,3,0,0,1-3,3H9a3,3,0,0,1-2.84-2.06,1,1,0,0,1,.27-1L9.51,24a1,1,0,0,0,.32-.73.94.94,0,0,0-.26-.67,1,1,0,0,0-1.42-.07L7.68,23a1,1,0,0,1-1.08.19,1,1,0,0,1-.6-.92V16c0-.34,0-.67,0-1A10,10,0,0,1,16,6a9.87,9.87,0,0,1,7.07,2.94A7.92,7.92,0,0,1,24,10a1,1,0,0,1,.11,1,1,1,0,0,1-.84.58,4.4,4.4,0,0,0,.32,8.78,4,4,0,0,0,1.12-.15,1,1,0,0,1,.88.16A1,1,0,0,1,26,21.21Z" />
      }
      solid={
        <>
          <path d="M18,2H14a3,3,0,0,0-3,3V7a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V5A3,3,0,0,0,18,2Z" />
          <path d="M23.6,9.6a3,3,0,0,0-.46,0A6.4,6.4,0,0,0,23.6,22.4a6.28,6.28,0,0,0,1.66-.22A6.4,6.4,0,0,0,23.6,9.6Z" />
          <path d="M19,16a1.08,1.08,0,0,1-1.14,1H6V16c0-.34,0-.67,0-1H17.86A1.08,1.08,0,0,1,19,16Z" />
          <path d="M26,24v2H10.12a1,1,0,0,1,0-2Z" />
          <path d="M11,21.26a3,3,0,0,0-4.24-.16L5,22.8a1,1,0,0,0,0,1.41l2.72,2.94a1,1,0,0,0,.69.32h0A1,1,0,0,0,9,27.2l1.82-1.69A3,3,0,0,0,11,21.26Z" />
        </>
      }
    />
  );
}

/** SVG Repo duotone — lab tube / diagnostics. */
export function LabTubeGlyph(props: MedicalGlyphProps) {
  const { className, size = 22 } = props;
  return (
    <svg
      {...medicalSvgProps({ className, size })}
      viewBox="0 0 32 32"
      fill="currentColor"
      stroke="currentColor"
    >
      <g opacity={0.28}>
        <path
          d="M26,20A10,10,0,0,1,6,20a10,10,0,0,1,5-8.65V7a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1v4.35A10,10,0,0,1,26,20Z"
          stroke="none"
        />
      </g>
      <path
        d="M8.61,15.6c1.53,3.27,4.93.55,7.39,2.77,2.46-2.22,5.86.5,7.39-2.77"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17,10a1.16,1.16,0,0,1-1.27,1H11V9h4.73A1.16,1.16,0,0,1,17,10Z" stroke="none" />
      <path d="M21,2H11a3,3,0,0,0,0,6H21a3,3,0,0,0,0-6Z" stroke="none" />
    </svg>
  );
}

/** SVG Repo duotone — bandage / first aid / insurance. */
export function BandageGlyph(props: MedicalGlyphProps) {
  return (
    <Duotone
      {...props}
      viewBox="0 0 32 32"
      light={
        <path d="M23.91,16.14l3.88-3.62a3,3,0,0,0,.15-4.24L24.53,4.63a3,3,0,0,0-4.23-.15L16.13,8.36l-4-4a3,3,0,0,0-4.24,0L4.33,7.87a3,3,0,0,0,0,4.24l3.76,3.75L4.21,19.48a3,3,0,0,0-.15,4.24l3.41,3.65a3,3,0,0,0,2.1,1h.1a2.94,2.94,0,0,0,2-.81l4.17-3.88,2.06,2.07a1,1,0,0,0,.71.29h6.74a1,1,0,0,0,.71-.29l1.58-1.58h0a3,3,0,0,0,0-4.24Z" />
      }
      solid={
        <>
          <path d="M26,24.2a1,1,0,0,0-.61-1.13l-5-2a1,1,0,0,0-1.28.52l-1.36,3a1,1,0,0,0,.07.95,1,1,0,0,0,.84.46h6.74a1,1,0,0,0,.6-1.8Z" />
          <circle cx="11.5" cy="11.5" r="2.5" />
        </>
      }
    />
  );
}

/** Outline stethoscope — clinical exam. */
export function StethoscopeGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M8 14a4 4 0 0 0 8 0v-2.5a2 2 0 0 1 4 0V14a4 4 0 0 0 4 3.5V20a6 6 0 0 1-12 0v-2.5" />
      <path d="M11 6.5V4a1 1 0 0 1 2 0v2.5" />
      <path d="M14 6.5V3.5a1 1 0 0 1 2 0V6.5" />
      <path d="M17 6.5V4a1 1 0 0 1 2 0v4.5" />
      <path d="M6 20v1.5a6 6 0 0 0 12 0V20" />
    </svg>
  );
}

/** Tremor / hand motion — Parkinson's. */
export function TremorGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M8.5 10V6.5a1.5 1.5 0 0 1 3 0V10" />
      <path d="M11.5 10V5.5a1.5 1.5 0 0 1 3 0V10" />
      <path d="M14.5 10V6.5a1.5 1.5 0 0 1 3 0v5.5a5.5 5.5 0 0 1-5.5 5.5H10a3 3 0 0 1-3-3v-1.5" />
      <path d="M5.5 12.5c1-.8 2.2-1 3.2-.6" />
      <path d="M4.5 15c1.2-.4 2.4-.2 3.3.5" />
      <path d="M4 17.5c1.4-.2 2.7.3 3.5 1.3" />
    </svg>
  );
}

/** Brain with evaluation markers — cognitive assessment. */
export function CognitiveGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M12 4.5c-2.2 0-4 1.5-4.5 3.5-.8.3-1.5 1-1.8 2-.5 1.6.2 3.3 1.6 4.2-.3 1.4.4 2.8 1.7 3.5.8 1.6 2.6 2.3 4.3 1.8 1.2.8 2.8.6 3.8-.5 1.3-.4 2.2-1.6 2.2-3 1.2-.9 1.8-2.5 1.4-4-.3-1.2-1.2-2.1-2.4-2.5C16.2 6.2 14.3 4.5 12 4.5Z" />
      <path d="M9 18.5h6" />
      <path d="M10 16.5h4" />
      <path d="M11 14.5h2" />
    </svg>
  );
}

/** EMG nerve pathway. */
export function EmgGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <circle cx="12" cy="5" r="1.5" />
      <path d="M12 6.5v4" />
      <path d="M8.5 14.5 12 10.5l3.5 4" />
      <path d="M7.5 17.5h9" />
      <path d="M8 15.5v4M10.5 16v3.5M13.5 16v3.5M16 15.5v4" />
    </svg>
  );
}

/** Dystonia & movement disorders — spine with joint markers. */
export function MovementDisorderGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M12 3.5v17" />
      <path d="M9 7h6M8.5 11.5h7M9 16h6" />
      <circle cx="12" cy="7" r="1.35" />
      <circle cx="12" cy="11.5" r="1.35" />
      <circle cx="12" cy="16" r="1.35" />
      <path d="M7.5 19.5c1.2.8 2.6 1 4.5 1s3.3-.2 4.5-1" />
    </svg>
  );
}

/** Epilepsy & seizures — brain with electrical signal. */
export function EpilepsyGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M12 4.5c-2.2 0-4 1.5-4.5 3.5-.8.3-1.5 1-1.8 2-.5 1.6.2 3.3 1.6 4.2-.3 1.4.4 2.8 1.7 3.5.8 1.6 2.6 2.3 4.3 1.8 1.2.8 2.8.6 3.8-.5 1.3-.4 2.2-1.6 2.2-3 1.2-.9 1.8-2.5 1.4-4-.3-1.2-1.2-2.1-2.4-2.5C16.2 6.2 14.3 4.5 12 4.5Z" />
      <path d="M13.5 8.5 11.5 12l2 1-1.5 3" />
    </svg>
  );
}

/** Peripheral neuropathy — branching nerve network. */
export function NeuropathyGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <circle cx="12" cy="5.5" r="1.5" />
      <path d="M12 7v3.5" />
      <path d="M12 10.5 8.5 14" />
      <path d="M12 10.5h3.5" />
      <path d="M12 10.5 12 16" />
      <circle cx="8.5" cy="14" r="1.2" />
      <circle cx="15.5" cy="14" r="1.2" />
      <circle cx="12" cy="16" r="1.2" />
      <path d="M8.5 15.2v2.3M15.5 15.2v2.3M12 17.2v2.3" />
      <circle cx="8.5" cy="18.5" r="1" />
      <circle cx="15.5" cy="18.5" r="1" />
      <circle cx="12" cy="20" r="1" />
    </svg>
  );
}

/** Brain fog & cognitive changes — brain with diffuse haze. */
export function BrainFogGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M12 4.5c-2.2 0-4 1.5-4.5 3.5-.8.3-1.5 1-1.8 2-.5 1.6.2 3.3 1.6 4.2-.3 1.4.4 2.8 1.7 3.5.8 1.6 2.6 2.3 4.3 1.8 1.2.8 2.8.6 3.8-.5 1.3-.4 2.2-1.6 2.2-3 1.2-.9 1.8-2.5 1.4-4-.3-1.2-1.2-2.1-2.4-2.5C16.2 6.2 14.3 4.5 12 4.5Z" />
      <path d="M6.5 17.5c1.2-.8 2.6-1.2 4-1.1M7 19.5c1.5-.5 3.2-.4 4.7.4M8.5 21c2-.4 3.8-.2 5.5.8" />
    </svg>
  );
}

/** Memory loss & dementia — brain with connected memory nodes. */
export function MemoryBrainGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M12 4.5c-2.2 0-4 1.5-4.5 3.5-.8.3-1.5 1-1.8 2-.5 1.6.2 3.3 1.6 4.2-.3 1.4.4 2.8 1.7 3.5.8 1.6 2.6 2.3 4.3 1.8 1.2.8 2.8.6 3.8-.5 1.3-.4 2.2-1.6 2.2-3 1.2-.9 1.8-2.5 1.4-4-.3-1.2-1.2-2.1-2.4-2.5C16.2 6.2 14.3 4.5 12 4.5Z" />
      <circle cx="9.5" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="8.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <path d="M9.5 10 12 8.5M12 8.5l2.5 2M9.5 10l5 0.5" />
    </svg>
  );
}

/** Stroke prevention — brain with vessel pathway. */
export function StrokeGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M12 4.5c-2.2 0-4 1.5-4.5 3.5-.8.3-1.5 1-1.8 2-.5 1.6.2 3.3 1.6 4.2-.3 1.4.4 2.8 1.7 3.5.8 1.6 2.6 2.3 4.3 1.8 1.2.8 2.8.6 3.8-.5 1.3-.4 2.2-1.6 2.2-3 1.2-.9 1.8-2.5 1.4-4-.3-1.2-1.2-2.1-2.4-2.5C16.2 6.2 14.3 4.5 12 4.5Z" />
      <path d="M7.5 11.5c1.5 1 3 1.2 4.5.5 1.8-.8 3.5-.2 4.5 1.5" />
      <path d="M8 14.5h5.5" />
      <circle cx="14.5" cy="14.5" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export type SvgRepoGlyphComponent = ComponentType<MedicalGlyphProps>;
