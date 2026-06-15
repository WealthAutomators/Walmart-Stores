import { format, subDays } from "date-fns";
import type { DateRange } from "@/types/common";

/** Default visible window on marketplace dashboards. */
export const ROLLING_DASHBOARD_DAYS = 30;

export function getTodayIso(asOf: Date = new Date()): string {
  return format(asOf, "yyyy-MM-dd");
}

/** Last N days through today (inclusive of today as end). */
export function getRollingDashboardDateRange(
  days: number = ROLLING_DASHBOARD_DAYS,
  asOf: Date = new Date()
): DateRange {
  return {
    start: format(subDays(asOf, days), "yyyy-MM-dd"),
    end: format(asOf, "yyyy-MM-dd"),
  };
}

/** Full store history from a fixed start date through today. */
export function getFullHistoryDashboardDateRange(
  startDate: string,
  asOf: Date = new Date()
): DateRange {
  return {
    start: startDate,
    end: format(asOf, "yyyy-MM-dd"),
  };
}
