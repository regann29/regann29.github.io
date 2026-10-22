import type { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  fill?: boolean;
  priority?: boolean;
  unoptimized?: boolean;
};

/** Plain <img> replacement for the former Next.js Image component. */
export function Image({ fill, priority, unoptimized: _u, className, loading, ...rest }: ImageProps) {
  return (
    <img
      {...rest}
      loading={priority ? "eager" : (loading ?? "lazy")}
      decoding="async"
      className={cn(fill && "absolute inset-0 h-full w-full", className)}
    />
  );
}

/** Plain anchor replacement for the former Next.js Link (all links are in-page or external). */
export function Link(props: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return <a {...props} />;
}
