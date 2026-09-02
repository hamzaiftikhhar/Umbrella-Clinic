import { ALL_INSURANCE_PLANS } from "@/data/insurance-network";
import { ALL_INSURANCE_CARRIER_NAMES, POPULAR_INSURANCE_CARRIERS } from "@/data/insurance-carriers";

export const MAX_INSURANCE_RESULTS = 40;

export function normalizeInsuranceQuery(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export type InsuranceSearchResult =
  | { type: "plan"; carrier: string; plan: string; key: string }
  | { type: "carrier"; name: string; popular: boolean; key: string };

export function searchInsurance(query: string): InsuranceSearchResult[] {
  const q = normalizeInsuranceQuery(query);
  if (q.length < 2) return [];

  const planMatches: InsuranceSearchResult[] = ALL_INSURANCE_PLANS.filter(({ carrier, plan }) => {
    const haystack = normalizeInsuranceQuery(`${carrier} ${plan}`);
    return haystack.includes(q);
  }).map(({ carrier, plan }) => ({
    type: "plan" as const,
    carrier,
    plan,
    key: `plan-${carrier}-${plan}`,
  }));

  const carrierMatches: InsuranceSearchResult[] = ALL_INSURANCE_CARRIER_NAMES.filter((name) => {
    if (planMatches.some((match) => match.type === "plan" && match.carrier === name)) {
      return false;
    }
    return normalizeInsuranceQuery(name).includes(q);
  }).map((name) => ({
    type: "carrier" as const,
    name,
    popular: POPULAR_INSURANCE_CARRIERS.includes(
      name as (typeof POPULAR_INSURANCE_CARRIERS)[number],
    ),
    key: `carrier-${name}`,
  }));

  return [...carrierMatches, ...planMatches].slice(0, MAX_INSURANCE_RESULTS);
}

export function hasExactInsuranceMatch(query: string): boolean {
  const q = normalizeInsuranceQuery(query);
  if (q.length < 2) return false;

  return (
    ALL_INSURANCE_PLANS.some(
      ({ carrier, plan }) =>
        normalizeInsuranceQuery(plan) === q || normalizeInsuranceQuery(carrier) === q,
    ) || ALL_INSURANCE_CARRIER_NAMES.some((name) => normalizeInsuranceQuery(name) === q)
  );
}
