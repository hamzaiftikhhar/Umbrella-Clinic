"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TOTAL_IN_NETWORK_PLANS } from "@/data/insurance-network";
import { POPULAR_INSURANCE_CARRIERS, TOTAL_INSURANCE_CARRIERS } from "@/data/insurance-carriers";
import {
  hasExactInsuranceMatch,
  MAX_INSURANCE_RESULTS,
  searchInsurance,
} from "@/lib/insurance-search";
import { SITE_PHONE } from "@/lib/site";

export function InsuranceFinderDialog() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const results = useMemo(() => searchInsurance(query), [query]);
  const exactMatch = useMemo(() => hasExactInsuranceMatch(query), [query]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary/30 hover:bg-muted/40"
        >
          <Search className="h-4 w-4" aria-hidden />
          Find your insurance
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[min(85vh,720px)] max-w-xl gap-0 overflow-hidden p-0 sm:rounded-[1.5rem]">
        <DialogHeader className="space-y-1 border-b border-border/60 px-6 pb-5 pt-6 text-left">
          <DialogTitle className="font-display text-2xl font-semibold tracking-tight">
            Find your insurance
          </DialogTitle>
          <DialogDescription>
            Search {TOTAL_INSURANCE_CARRIERS.toLocaleString()}+ carriers and{" "}
            {TOTAL_IN_NETWORK_PLANS.toLocaleString()}+ in-network plans. We&apos;ll verify your
            exact coverage before your visit.
          </DialogDescription>
        </DialogHeader>

        <div className="border-b border-border/60 px-6 py-4">
          <label className="relative block">
            <span className="sr-only">Search insurance carrier or plan</span>
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by carrier or plan name…"
              className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none ring-primary/20 transition-shadow placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2"
              autoFocus
            />
          </label>
        </div>

        <div className="max-h-[min(50vh,420px)] overflow-y-auto px-6 py-4">
          {query.length < 2 ? (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Popular carriers we accept in NYC:</p>
              <ul className="flex flex-wrap gap-2">
                {POPULAR_INSURANCE_CARRIERS.map((carrier) => (
                  <li key={carrier}>
                    <button
                      type="button"
                      onClick={() => setQuery(carrier)}
                      className="rounded-full border border-border/60 bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-secondary"
                    >
                      {carrier}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : results.length === 0 ? (
            <div className="rounded-xl border border-border/60 bg-muted/30 p-4 text-sm">
              <p className="font-medium text-foreground">No exact match found</p>
              <p className="mt-1 text-muted-foreground">
                We may still accept your plan. Call us at{" "}
                <a href={`tel:${SITE_PHONE.replace(/\D/g, "")}`} className="text-primary underline">
                  {SITE_PHONE}
                </a>{" "}
                and we&apos;ll verify before you book.
              </p>
            </div>
          ) : (
            <ul className="space-y-2">
              {exactMatch && (
                <li className="mb-3 flex items-start gap-2 rounded-xl bg-accent-emerald-surface px-3 py-2.5 text-sm text-accent-emerald">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>Likely in-network — our team will confirm at booking.</span>
                </li>
              )}
              {results.map((result) => (
                <li
                  key={result.key}
                  className="rounded-xl border border-border/50 bg-card px-3.5 py-3"
                >
                  {result.type === "carrier" ? (
                    <>
                      <p className="text-sm font-medium text-foreground">{result.name}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {result.popular ? "Popular carrier" : "Insurance carrier"}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm font-medium text-foreground">{result.plan}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{result.carrier}</p>
                    </>
                  )}
                </li>
              ))}
              {results.length === MAX_INSURANCE_RESULTS && (
                <p className="pt-2 text-xs text-muted-foreground">
                  Showing first {MAX_INSURANCE_RESULTS} matches — refine your search for more
                  specific results.
                </p>
              )}
            </ul>
          )}
        </div>

        <div className="border-t border-border/60 bg-muted/20 px-6 py-4 text-center text-xs text-muted-foreground">
          Coverage varies by plan.{" "}
          <a href="/insurance" className="font-medium text-primary underline underline-offset-2">
            View insurance details
          </a>{" "}
          or call {SITE_PHONE} to confirm.
        </div>
      </DialogContent>
    </Dialog>
  );
}
