import { format, parseISO } from "date-fns";

export function formatDisplayDate(iso: string): string {
  return format(parseISO(iso), "M/d/yyyy");
}

export function formatChartDate(iso: string): string {
  return format(parseISO(iso), "MMM ''yy");
}

export function formatTimestamp(iso: string): string {
  return format(parseISO(iso), "M/d/yyyy, h:mm:ss a 'PDT'");
}

/** Viewer's time zone, e.g. "Pacific Standard Time (PST)". */
export function formatViewerTimeZoneLabel(date: Date = new Date()): string {
  const zoneName = (style: "long" | "short") =>
    new Intl.DateTimeFormat("en-US", { timeZoneName: style })
      .formatToParts(date)
      .find((part) => part.type === "timeZoneName")?.value;
  const long = zoneName("long");
  const short = zoneName("short");
  if (long && short && long !== short) return `${long} (${short})`;
  return long ?? short ?? "Local time";
}

/** Live “taken at” label using the viewer’s local date and time. */
export function formatLiveTimestamp(date: Date = new Date()): string {
  return date.toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZoneName: "short",
  });
}

export function formatLongDateRange(start: string, end: string): string {
  return `${format(parseISO(start), "MMM d, yyyy")} - ${format(parseISO(end), "MMM d, yyyy")}`;
}
