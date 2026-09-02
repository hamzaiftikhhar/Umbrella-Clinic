"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

type LinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & {
  to?: string;
  href?: string;
  activeProps?: { className?: string };
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function Link({ to, href, activeProps, className, onClick, ...props }: LinkProps) {
  const pathname = usePathname();
  const url = href ?? to ?? "/";
  const isActive =
    pathname === url || (url !== "/" && url.length > 1 && pathname.startsWith(`${url}/`));
  const activeClass = isActive && activeProps?.className ? activeProps.className : "";

  return (
    <NextLink href={url} className={cn(className, activeClass)} onClick={onClick} {...props} />
  );
}
