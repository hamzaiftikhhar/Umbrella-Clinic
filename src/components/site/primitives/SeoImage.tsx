"use client";

import type { ImageProps } from "next/image";
import { GeoImage } from "./GeoImage";
import { type ImageAltKey, getImageAlt } from "@/data/image-seo";

type SeoImageProps = Omit<ImageProps, "alt"> & {
  /** Lookup key for SEO-optimized alt + keyword pair. */
  altKey?: ImageAltKey;
  alt?: string;
};

/**
 * Geo-tagged image with optional SEO alt lookup.
 * Latitude/longitude: 32 West 14th Street, New York, NY 10011.
 */
export function SeoImage({ altKey, alt, ...props }: SeoImageProps) {
  const resolvedAlt = altKey ? getImageAlt(altKey) : (alt ?? "");
  return <GeoImage {...props} alt={resolvedAlt} />;
}
