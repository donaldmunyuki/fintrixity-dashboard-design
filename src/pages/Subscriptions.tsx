import { CreditCard, MoreHorizontal, Plus } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const subscriptions = [
  { name: "Starter Plan", price: "$9.99/mo", users: 5, storage: "10 GB", status: "Active" },
  { name: "Pro Plan", price: "$29.99/mo", users: 25, storage: "100 GB", status: "Active" },
  { name: "Enterprise", price: "$99.99/mo", users: "Unlimited", storage: "1 TB", status: "Active" },
];

const spendData = [
  { month: "Jan", amount: 120 },
  { month: "Feb", amount: 140 },
  { month: "Mar", amount: 135 },
  { month: "Apr", amount: 160 },
  { month: "May", amount: 155 },
  { month: "Jun", amount: 170 },
];

export default function Subscriptions() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Subscriptions</h1>
          <p className="text-sm text-muted-foreground">Manage your active subscription plans</p>
        </div>
        <button className="flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg transition-colors w-fit">
          <Plus className="w-4 h-4" /> New Plan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {subscriptions.map((sub) => (
          <div key={sub.name} className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
            <h3 className="font-semibold text-foreground mb-1">{sub.name}</h3>
            <p className="text-2xl font-bold text-primary mb-3">{sub.price}</p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>Users: {sub.users}</p>
              <p>Storage: {sub.storage}</p>
            </div>
            <span className="text-xs font-medium text-success mt-2 inline-block">• {sub.status}</span>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="text-lg font-semibold text-foreground mb-4">Monthly Spending</h3>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={spendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0 0% 18%)" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "hsl(0 0% 55%)", fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(0 0% 55%)", fontSize: 12 }} tickFormatter={(v) => `$${v}`} />
              <Tooltip />
              <Bar dataKey="amount" fill="hsl(16 100% 55%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
