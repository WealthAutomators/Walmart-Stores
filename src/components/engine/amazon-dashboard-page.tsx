"use client";

import { useCallback, useEffect, useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { format, subDays } from "date-fns";
import { AmazonDashboardView } from "@/components/engine/amazon-dashboard-view";
import { useStore } from "@/lib/store/store-context";
import { getStoreDefaultDateRange } from "@/config/stores/registry";
import { useReportFilters } from "@/hooks/use-report-filters";
import { useStoreOverridesVersion } from "@/hooks/use-store-overrides-version";
import { getResolvedDashboardUi } from "@/lib/store/resolve-dashboard-ui";
import { getAmazonDashboard } from "@/services/store-analytics.service";
import type { SalesDashboardResponse } from "@/types/amazon";
import type { DatePreset } from "@/types/common";

interface AmazonDashboardPageProps {
  title: string;
  showAsinCarousel?: boolean;
}

function applyPreset(preset: DatePreset): { start: string; end: string } {
  const end = new Date();
  const endStr = format(end, "yyyy-MM-dd");
  switch (preset) {
    case "7d":
      return { start: format(subDays(end, 7), "yyyy-MM-dd"), end: endStr };
    case "30d":
      return { start: format(subDays(end, 30), "yyyy-MM-dd"), end: endStr };
    case "90d":
      return { start: format(subDays(end, 90), "yyyy-MM-dd"), end: endStr };
    case "ytd":
      return {
        start: format(new Date(end.getFullYear(), 0, 1), "yyyy-MM-dd"),
        end: endStr,
      };
    default:
      return { start: format(subDays(end, 30), "yyyy-MM-dd"), end: endStr };
  }
}

export function AmazonDashboardPage({
  title,
  showAsinCarousel = false,
}: AmazonDashboardPageProps) {
  const router = useRouter();
  const { storeId, config } = useStore();

  useEffect(() => {
    if (config.template !== "amazon-sales") {
      router.replace(config.routes.home);
    }
  }, [config.template, config.routes.home, router]);

  const defaultDateRange = useMemo(
    () => getStoreDefaultDateRange(storeId),
    [storeId]
  );

  const {
    draft,
    applied,
    updateRange,
    updatePreset,
    updateFulfillment,
    updateSalesBreakdown,
    applyFilters,
    setApplied,
  } = useReportFilters({
    range: defaultDateRange,
    preset: "custom",
    salesBreakdown: "marketplace_total",
  });

  useEffect(() => {
    setApplied((prev) => ({
      ...prev,
      range: defaultDateRange,
      preset: "custom",
    }));
    updateRange(defaultDateRange);
    updatePreset("custom");
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reset range when switching stores
  }, [storeId]);

  const [data, setData] = useState<SalesDashboardResponse | null>(null);
  const [isPending, startTransition] = useTransition();
  const overridesVersion = useStoreOverridesVersion(storeId);
  const dashboardUi = useMemo(
    () => getResolvedDashboardUi(storeId),
    [storeId, overridesVersion]
  );

  const fetchData = useCallback(
    (filters = applied) => {
      startTransition(async () => {
        const result = await getAmazonDashboard(storeId, filters);
        setData(result);
      });
    },
    [storeId, applied]
  );

  useEffect(() => {
    if (config.template === "amazon-sales") {
      fetchData(applied);
    }
  }, [storeId, overridesVersion, config.template, fetchData, applied]);

  const handleApply = () => {
    const next = applyFilters();
    fetchData(next);
  };

  const handlePresetChange = (preset: DatePreset) => {
    updatePreset(preset);
    if (preset !== "custom") {
      updateRange(applyPreset(preset));
    }
  };

  if (config.template !== "amazon-sales") {
    return null;
  }

  const isLoading = isPending || !data;

  return (
    <AmazonDashboardView
      title={title}
      storeId={storeId}
      data={data}
      draftFilters={draft}
      isLoading={isLoading}
      isPending={isPending}
      showAsinCarousel={showAsinCarousel}
      dashboardUi={dashboardUi}
      onPresetChange={handlePresetChange}
      onRangeChange={updateRange}
      onFulfillmentChange={updateFulfillment}
      onSalesBreakdownChange={updateSalesBreakdown}
      onApply={handleApply}
      onRefresh={() => fetchData(applied)}
    />
  );
}
