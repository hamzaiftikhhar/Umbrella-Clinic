import Image, { type ImageProps } from "next/image";
import { IMAGE_GEO, imageGeoProps } from "@/data/image-seo";

/**
 * next/image with clinic geo data attributes on every image.
 * Coordinates: 32 West 14th Street, New York, NY 10011.
 */
export function GeoImage({ alt, title, quality = 85, ...props }: ImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      quality={quality}
      {...imageGeoProps()}
      title={title ?? `${alt} · ${IMAGE_GEO.address}`}
    />
  );
}

/** Geo attributes for native <img> elements. */
export function geoImgProps(alt: string) {
  return {
    ...imageGeoProps(),
    title: `${alt} · ${IMAGE_GEO.address}`,
  };
}
