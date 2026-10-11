// lib/utils.ts — Shared utility functions

export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

export function mapRange(
  v: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return outMin + ((v - inMin) / (inMax - inMin)) * (outMax - outMin);
}

export function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
