import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const monthlyData = [
  { name: "Jan", cashflow: 18000, inflow: 5000 },
  { name: "Feb", cashflow: 22000, inflow: 3000 },
  { name: "Mar", cashflow: 45000, inflow: -7500 },
  { name: "Apr", cashflow: 33847, inflow: -7456 },
  { name: "May", cashflow: 28000, inflow: 4000 },
  { name: "Jun", cashflow: 25000, inflow: 6000 },
  { name: "Jul", cashflow: 30000, inflow: 5500 },
];

const yearlyData = [
  { name: "2020", cashflow: 180000, inflow: 50000 },
  { name: "2021", cashflow: 220000, inflow: 60000 },
  { name: "2022", cashflow: 310000, inflow: 80000 },
  { name: "2023", cashflow: 400000, inflow: 95000 },
  { name: "2024", cashflow: 480000, inflow: 110000 },
  { name: "2025", cashflow: 540000, inflow: 130000 },
  { name: "2026", cashflow: 600000, inflow: 150000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <div className="bg-card border border-border rounded-lg p-3 text-xs shadow-lg">
      <p className="text-foreground font-medium mb-1">{label}</p>
      {payload.map((p: any) => (
        <p key={p.dataKey} className="text-muted-foreground">
          {p.dataKey === "cashflow" ? "Cashflow" : "Inflow"}:{" "}
          <span className="text-foreground font-medium">
            ${Math.abs(p.value).toLocaleString()}.00
          </span>
        </p>
      ))}
    </div>
  );
};

export default function CashFlow() {
  const [view, setView] = useState<"monthly" | "yearly">("yearly");
  const data = view === "monthly" ? monthlyData : yearlyData;

  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-lg font-semibold text-foreground">Cash Flow</h3>
        <div className="flex items-center bg-secondary rounded-lg p-0.5">
          <button
            onClick={() => setView("monthly")}
            className={`text-xs px-3 py-1.5 rounded-md font-medium transition-colors ${
              view === "monthly"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setView("yearly")}
            className={`text-xs px-3 py-1.5 rounded-md font-medium transition-colors ${
              view === "yearly"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>
      <p className="text-2xl font-bold text-foreground mb-4">$540,323.45</p>

      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="25%">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(0 0% 18%)" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(0 0% 55%)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(0 0% 55%)", fontSize: 12 }}
              tickFormatter={(v) => `${v / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Bar dataKey="cashflow" fill="hsl(16 100% 55%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
