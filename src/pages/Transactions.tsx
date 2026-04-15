import { useState } from "react";
import { Search, SlidersHorizontal, ArrowUpRight, ArrowDownLeft } from "lucide-react";

const transactions = [
  { id: "TXN001", type: "credit", desc: "Salary Deposit", amount: "+$8,500.00", date: "09 Apr, 2026", category: "Income" },
  { id: "TXN002", type: "debit", desc: "AWS Cloud Services", amount: "-$1,250.00", date: "08 Apr, 2026", category: "Software" },
  { id: "TXN003", type: "credit", desc: "Freelance Payment", amount: "+$3,200.00", date: "07 Apr, 2026", category: "Income" },
  { id: "TXN004", type: "debit", desc: "Office Rent", amount: "-$4,500.00", date: "05 Apr, 2026", category: "Rent" },
  { id: "TXN005", type: "debit", desc: "Team Lunch", amount: "-$320.00", date: "04 Apr, 2026", category: "Food" },
  { id: "TXN006", type: "credit", desc: "Client Invoice #42", amount: "+$12,000.00", date: "03 Apr, 2026", category: "Income" },
  { id: "TXN007", type: "debit", desc: "Software Subscription", amount: "-$99.00", date: "02 Apr, 2026", category: "Software" },
  { id: "TXN008", type: "debit", desc: "Marketing Ads", amount: "-$2,800.00", date: "01 Apr, 2026", category: "Marketing" },
];

export default function Transactions() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "credit" | "debit">("all");

  const filtered = transactions.filter((t) => {
    const matchSearch = t.desc.toLowerCase().includes(search.toLowerCase()) || t.id.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || t.type === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Transactions</h1>
        <p className="text-sm text-muted-foreground">View and manage all your transactions</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2 flex-1 max-w-xs">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input type="text" placeholder="Search transactions..." value={search} onChange={(e) => setSearch(e.target.value)} className="bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm w-full" />
        </div>
        <div className="flex items-center gap-2">
          {(["all", "credit", "debit"] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`text-xs px-3 py-2 rounded-lg font-medium transition-colors capitalize ${filter === f ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {filtered.map((t) => (
          <div key={t.id} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:bg-secondary/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${t.type === "credit" ? "bg-success/20 text-success" : "bg-destructive/20 text-destructive"}`}>
                {t.type === "credit" ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{t.desc}</p>
                <p className="text-xs text-muted-foreground">{t.id} · {t.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`text-sm font-bold ${t.type === "credit" ? "text-success" : "text-destructive"}`}>{t.amount}</p>
              <p className="text-xs text-muted-foreground">{t.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
