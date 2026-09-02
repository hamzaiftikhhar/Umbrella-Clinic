"use client";

import { useMemo, useState, type FormEvent } from "react";
import { CheckCircle2, Search } from "lucide-react";
import { TOTAL_IN_NETWORK_PLANS } from "@/data/insurance-network";
import { POPULAR_INSURANCE_CARRIERS, TOTAL_INSURANCE_CARRIERS } from "@/data/insurance-carriers";
import {
  hasExactInsuranceMatch,
  MAX_INSURANCE_RESULTS,
  searchInsurance,
} from "@/lib/insurance-search";
import { SITE_PHONE } from "@/lib/site";

interface InsuranceFinderPanelProps {
  /** Larger layout for the dedicated /insurance page. */
  variant?: "inline" | "compact";
  className?: string;
}

export function InsuranceFinderPanel({ variant = "inline", className }: InsuranceFinderPanelProps) {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const activeQuery = submittedQuery || query;
  const results = useMemo(() => searchInsurance(activeQuery), [activeQuery]);
  const exactMatch = useMemo(() => hasExactInsuranceMatch(activeQuery), [activeQuery]);
  const isInline = variant === "inline";

  function handleSearch(e?: FormEvent) {
    e?.preventDefault();
    setSubmittedQuery(query.trim());
  }

  return (
    <div className={className}>
      {isInline && (
        <div className="mb-6 max-w-2xl">
          <h2
            id="insurance-search-heading"
            className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Check if we&apos;re in your network
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Search {TOTAL_INSURANCE_CARRIERS.toLocaleString()}+ carriers and{" "}
            {TOTAL_IN_NETWORK_PLANS.toLocaleString()}+ in-network plans. Our team verifies your
            exact benefits before your visit.
          </p>
        </div>
      )}

      <form onSubmit={handleSearch} className="relative">
        <label htmlFor="insurance-search" className="sr-only">
          Search insurance carrier or plan
        </label>
        <div
          className={
            isInline
              ? "flex flex-col gap-3 rounded-[1.25rem] border border-border/60 bg-card p-2 shadow-[var(--shadow-card)] sm:flex-row sm:items-center sm:rounded-full sm:p-1.5"
              : "relative"
          }
        >
          <div className="relative min-w-0 flex-1">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              id="insurance-search"
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (!e.target.value.trim()) setSubmittedQuery("");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              placeholder="Search by carrier or plan — e.g. Aetna, Empire, Medicare"
              className={
                isInline
                  ? "h-12 w-full rounded-xl bg-transparent pl-11 pr-4 text-sm text-foreground outline-none placeholder:text-muted-foreground sm:h-11 sm:rounded-full"
                  : "h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none ring-primary/20 transition-shadow placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2"
              }
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className={
              isInline
                ? "inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:h-11 sm:rounded-full sm:px-8"
                : "sr-only"
            }
          >
            <Search className="h-4 w-4 sm:hidden" aria-hidden />
            Search insurance
          </button>
        </div>
      </form>

      <div className={isInline ? "mt-8" : "mt-4"}>
        {activeQuery.length < 2 ? (
          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">Popular carriers in NYC</p>
            <ul className="flex flex-wrap gap-2">
              {POPULAR_INSURANCE_CARRIERS.map((carrier) => (
                <li key={carrier}>
                  <button
                    type="button"
                    onClick={() => {
                      setQuery(carrier);
                      setSubmittedQuery(carrier);
                    }}
                    className="rounded-full border border-border/60 bg-card px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-secondary"
                  >
                    {carrier}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : results.length === 0 ? (
          <div className="rounded-2xl border border-border/60 bg-muted/30 p-5 text-sm">
            <p className="font-medium text-foreground">
              No exact match for &ldquo;{activeQuery}&rdquo;
            </p>
            <p className="mt-1.5 text-muted-foreground">
              We may still accept your plan. Call{" "}
              <a
                href={`tel:${SITE_PHONE.replace(/\D/g, "")}`}
                className="font-medium text-primary underline"
              >
                {SITE_PHONE}
              </a>{" "}
              and we&apos;ll verify before you book.
            </p>
          </div>
        ) : (
          <div>
            {exactMatch && (
              <div className="mb-4 flex items-start gap-2.5 rounded-2xl bg-accent-emerald-surface px-4 py-3 text-sm text-accent-emerald">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>
                  <strong className="font-semibold">Likely in-network.</strong> Our team will
                  confirm your exact benefits at booking.
                </span>
              </div>
            )}
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {results.length} result{results.length === 1 ? "" : "s"}
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {results.map((result) => (
                <li
                  key={result.key}
                  className="rounded-xl border border-border/50 bg-card px-4 py-3 transition-colors hover:border-primary/20 hover:bg-secondary/30"
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
            </ul>
            {results.length === MAX_INSURANCE_RESULTS && (
              <p className="mt-3 text-xs text-muted-foreground">
                Showing first {MAX_INSURANCE_RESULTS} matches — try a more specific plan name.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
