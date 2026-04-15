import { useState } from "react";
import { Search, Plus, FileText, Download, MoreHorizontal } from "lucide-react";

const invoices = [
  { id: "INV_000076", client: "Acme Corp", amount: "$25,500", date: "17 Apr, 2026", due: "17 May, 2026", status: "Paid" },
  { id: "INV_000075", client: "TechStart Inc", amount: "$12,800", date: "15 Apr, 2026", due: "15 May, 2026", status: "Pending" },
  { id: "INV_000074", client: "Global Media", amount: "$8,200", date: "12 Apr, 2026", due: "12 May, 2026", status: "Paid" },
  { id: "INV_000073", client: "DataFlow LLC", amount: "$4,500", date: "10 Apr, 2026", due: "10 May, 2026", status: "Overdue" },
  { id: "INV_000072", client: "CloudNine SaaS", amount: "$15,000", date: "08 Apr, 2026", due: "08 May, 2026", status: "Paid" },
  { id: "INV_000071", client: "StartUp Hub", amount: "$6,750", date: "05 Apr, 2026", due: "05 May, 2026", status: "Pending" },
];

export default function Invoices() {
  const [search, setSearch] = useState("");
  const filtered = invoices.filter((inv) => inv.client.toLowerCase().includes(search.toLowerCase()) || inv.id.toLowerCase().includes(search.toLowerCase()));

  const statusColor = (s: string) => {
    if (s === "Paid") return "text-success";
    if (s === "Pending") return "text-yellow-500";
    return "text-destructive";
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Invoices</h1>
          <p className="text-sm text-muted-foreground">Manage and track all invoices</p>
        </div>
        <button className="flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg transition-colors w-fit">
          <Plus className="w-4 h-4" /> New Invoice
        </button>
      </div>

      <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2 max-w-xs">
        <Search className="w-4 h-4 text-muted-foreground" />
        <input type="text" placeholder="Search invoices..." value={search} onChange={(e) => setSearch(e.target.value)} className="bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm w-full" />
      </div>

      <div className="space-y-2">
        {filtered.map((inv) => (
          <div key={inv.id} className="bg-card border border-border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-secondary/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <FileText className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{inv.client}</p>
                <p className="text-xs text-muted-foreground">{inv.id} · Due {inv.due}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm font-bold text-foreground">{inv.amount}</p>
              <span className={`text-xs font-medium ${statusColor(inv.status)}`}>• {inv.status}</span>
              <button className="text-muted-foreground hover:text-foreground"><Download className="w-4 h-4" /></button>
              <button className="text-muted-foreground hover:text-foreground"><MoreHorizontal className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
