export type BedroomKey = "1BR" | "2BR" | "3BR" | "4BR";

export type SeasonKey = "jan" | "febMar" | "aprSep" | "octNov" | "dec";

export const seasons: { key: SeasonKey; label: string }[] = [
  { key: "jan", label: "Jan" },
  { key: "febMar", label: "Feb – Mar" },
  { key: "aprSep", label: "Apr – Sep" },
  { key: "octNov", label: "Oct – Nov" },
  { key: "dec", label: "Dec" },
];

/** Monthly rental rates in THB from the official rate sheet */
export const monthlyRates: Record<
  BedroomKey,
  Record<SeasonKey, number> & { yearlyTotal: number }
> = {
  "1BR": {
    jan: 150_000,
    febMar: 100_000,
    aprSep: 80_000,
    octNov: 100_000,
    dec: 150_000,
    yearlyTotal: 767_000,
  },
  "2BR": {
    jan: 250_000,
    febMar: 170_000,
    aprSep: 120_000,
    octNov: 170_000,
    dec: 250_000,
    yearlyTotal: 1_235_000,
  },
  "3BR": {
    jan: 300_000,
    febMar: 240_000,
    aprSep: 150_000,
    octNov: 240_000,
    dec: 300_000,
    yearlyTotal: 1_599_000,
  },
  "4BR": {
    jan: 350_000,
    febMar: 260_000,
    aprSep: 180_000,
    octNov: 260_000,
    dec: 350_000,
    yearlyTotal: 1_833_000,
  },
};

export const longStayDiscounts = [
  { term: "3 months", discount: "-20%" },
  { term: "6 months", discount: "-25%" },
  { term: "12 months", discount: "-35%" },
] as const;

export const rateInclusions = [
  "Pool and garden service",
  "Cleaning twice a week",
  "Linen changed once a week",
  "High-speed Wi-Fi",
  "24-hour reception and estate maintenance",
  "On-site restaurant and café access",
];

export const rateExclusions = [
  "Utility expenses (water and electricity are billed on actual usage)",
];

export function formatThb(amount: number) {
  return new Intl.NumberFormat("en-TH", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatThbShort(amount: number) {
  return `THB ${amount.toLocaleString("en-US")}`;
}
