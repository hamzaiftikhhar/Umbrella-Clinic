"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Check, ChevronDown, Stethoscope } from "lucide-react";
import { CLINICAL_SERVICES } from "@/data/clinical-services";

export function HomeHeroSpecialtySelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(CLINICAL_SERVICES[0]);
  const [menuStyle, setMenuStyle] = useState<{ top: number; left: number; width: number } | null>(
    null,
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const updateMenuPosition = () => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    setMenuStyle({
      top: rect.bottom + 8,
      left: rect.left,
      width: Math.max(rect.width, 340),
    });
  };

  useEffect(() => {
    if (!open) return;

    updateMenuPosition();

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (rootRef.current?.contains(target)) return;
      if ((event.target as Element).closest("[data-hero-specialty-menu]")) return;
      setOpen(false);
    };

    const onReposition = () => updateMenuPosition();

    document.addEventListener("mousedown", onPointerDown);
    window.addEventListener("resize", onReposition);
    window.addEventListener("scroll", onReposition, true);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("resize", onReposition);
      window.removeEventListener("scroll", onReposition, true);
    };
  }, [open]);

  const menu =
    open && menuStyle ? (
      <ul
        data-hero-specialty-menu
        role="listbox"
        style={{
          position: "fixed",
          top: menuStyle.top,
          left: menuStyle.left,
          width: menuStyle.width,
          zIndex: 200,
        }}
        className="overflow-y-auto rounded-xl border border-border/60 bg-card p-1.5 shadow-[var(--shadow-elegant)]"
      >
        {CLINICAL_SERVICES.map((service) => {
          const isSelected = selected.href === service.href;
          return (
            <li key={service.href} role="option" aria-selected={isSelected}>
              <button
                type="button"
                onClick={() => {
                  setSelected(service);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm leading-snug transition-colors ${
                  isSelected
                    ? "bg-secondary font-medium text-primary"
                    : "text-foreground/85 hover:bg-secondary/70"
                }`}
              >
                <span>{service.label}</span>
                {isSelected && <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />}
              </button>
            </li>
          );
        })}
      </ul>
    ) : null;

  return (
    <div ref={rootRef} className="relative min-w-0 flex-1">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          setOpen((value) => {
            const next = !value;
            if (next) {
              requestAnimationFrame(updateMenuPosition);
            }
            return next;
          });
        }}
        className="flex w-full items-center gap-3 px-4 py-3.5 text-left sm:py-2.5 sm:pl-5"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <Stethoscope className="h-4 w-4 shrink-0 text-primary/70" aria-hidden />
        <span className="min-w-0 flex-1">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Specialty
          </span>
          <span className="mt-0.5 block truncate text-sm font-medium text-foreground">
            {selected.label}
          </span>
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {typeof document !== "undefined" && menu ? createPortal(menu, document.body) : null}

      <input type="hidden" name="specialty" value={selected.label} />
    </div>
  );
}
