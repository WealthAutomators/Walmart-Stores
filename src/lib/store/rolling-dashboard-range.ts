import { format, subDays } from "date-fns";
import type { DateRange } from "@/types/common";

/** Default visible window on marketplace dashboards. */
export const ROLLING_DASHBOARD_DAYS = 30;

/**
 * Date of the last daily data refresh (Africa/Lagos). Store history and tables
 * always extend through the viewer's own local "today" (see getDemoAsOfDate).
 */
export const DEMO_AS_OF_DATE = "2026-11-09";

/** Viewer's current local date/time — dashboards always run through today. */
function getDemoAsOfDate(): Date {
  return new Date();
}

export function getTodayIso(asOf: Date = getDemoAsOfDate()): string {
  return format(asOf, "yyyy-MM-dd");
}

/** Last N days through today (inclusive of today as end). */
export function getRollingDashboardDateRange(
  days: number = ROLLING_DASHBOARD_DAYS,
  asOf: Date = getDemoAsOfDate()
): DateRange {
  return {
    start: format(subDays(asOf, days), "yyyy-MM-dd"),
    end: format(asOf, "yyyy-MM-dd"),
  };
}

/** Full store history from a fixed start date through today. */
export function getFullHistoryDashboardDateRange(
  startDate: string,
  asOf: Date = getDemoAsOfDate()
): DateRange {
  return {
    start: startDate,
    end: format(asOf, "yyyy-MM-dd"),
  };
}
