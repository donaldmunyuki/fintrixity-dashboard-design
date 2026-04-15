import { useState } from "react";
import OverviewCards from "@/components/OverviewCards";
import MyWallet from "@/components/MyWallet";
import CashFlow from "@/components/CashFlow";
import RecentActivities from "@/components/RecentActivities";

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("This Month");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Overview</h1>
          <p className="text-sm text-muted-foreground">Here is the summary of overall data</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-secondary text-foreground text-sm rounded-lg px-3 py-2 border border-border outline-none"
          >
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select>
          <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg px-3 py-2 transition-colors">
            ↻ Reset Data
          </button>
        </div>
      </div>

      <OverviewCards />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2">
          <MyWallet />
        </div>
        <div className="lg:col-span-3">
          <CashFlow />
        </div>
      </div>

      <RecentActivities />
    </div>
  );
}
