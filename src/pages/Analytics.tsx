import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const revenueData = [
  { name: "Jan", revenue: 12000 },
  { name: "Feb", revenue: 19000 },
  { name: "Mar", revenue: 15000 },
  { name: "Apr", revenue: 22000 },
  { name: "May", revenue: 28000 },
  { name: "Jun", revenue: 24000 },
  { name: "Jul", revenue: 32000 },
  { name: "Aug", revenue: 29000 },
  { name: "Sep", revenue: 35000 },
  { name: "Oct", revenue: 31000 },
  { name: "Nov", revenue: 38000 },
  { name: "Dec", revenue: 42000 },
];

const expenseBreakdown = [
  { name: "Marketing", value: 35 },
  { name: "Operations", value: 25 },
  { name: "Development", value: 20 },
  { name: "HR", value: 12 },
  { name: "Other", value: 8 },
];

const COLORS = ["hsl(16 100% 55%)", "hsl(30 100% 55%)", "hsl(45 100% 50%)", "hsl(0 0% 45%)", "hsl(0 0% 30%)"];

const stats = [
  { label: "Total Revenue", value: "$327,000", change: "+12.5%" },
  { label: "Total Expenses", value: "$194,200", change: "-3.2%" },
  { label: "Net Profit", value: "$132,800", change: "+18.7%" },
  { label: "Growth Rate", value: "24.3%", change: "+5.1%" },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
        <p className="text-sm text-muted-foreground">Detailed insights into your financial performance</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
            <p className="text-xl font-bold text-foreground">{s.value}</p>
            <span className="text-xs font-medium text-success">{s.change}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-5">
          <h3 className="text-lg font-semibold text-foreground mb-4">Revenue Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0 0% 18%)" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "hsl(0 0% 55%)", fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(0 0% 55%)", fontSize: 12 }} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="hsl(16 100% 55%)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-5">
          <h3 className="text-lg font-semibold text-foreground mb-4">Expense Breakdown</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={expenseBreakdown} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value">
                  {expenseBreakdown.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-2">
            {expenseBreakdown.map((item, i) => (
              <div key={item.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                  <span className="text-muted-foreground">{item.name}</span>
                </div>
                <span className="text-foreground font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
