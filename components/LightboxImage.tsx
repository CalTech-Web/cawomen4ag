"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

interface LightboxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  sizes?: string;
}

export default function LightboxImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  sizes,
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`cursor-zoom-in ${containerClassName}`}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter") setOpen(true); }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={className}
          sizes={sizes || "(max-width: 1024px) 100vw, 50vw"}
        />
      </div>
      <Lightbox src={src} alt={alt} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
