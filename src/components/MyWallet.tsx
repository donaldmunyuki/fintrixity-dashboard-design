import { MoreVertical, Plus } from "lucide-react";

const currencies = [
  { flag: "🇺🇸", code: "USD", amount: "$24,678.00", limit: "Limit is $10k a month", status: "Active" },
  { flag: "🇪🇺", code: "EUR", amount: "€28,345.00", limit: "Limit is €10k a month", status: "Active" },
  { flag: "🇦🇺", code: "AUD", amount: "$20,517.52", limit: "Limit is $10k a month", status: "Active" },
  { flag: "🇬🇧", code: "GBP", amount: "£25,000.00", limit: "Limit is £7.5k a month", status: "Inactive" },
];

export default function MyWallet() {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-lg font-semibold text-foreground">My Wallet</h3>
        <button className="flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-lg transition-colors">
          <Plus className="w-3.5 h-3.5" /> Add New
        </button>
      </div>
      <p className="text-xs text-muted-foreground mb-4">Today 1 USD ≈ 122.20 BDT</p>

      <div className="grid grid-cols-2 gap-3">
        {currencies.map((cur) => (
          <div key={cur.code} className="bg-secondary/50 rounded-lg p-3 border border-border">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">{cur.flag}</span>
                <span className="text-sm font-medium text-foreground">{cur.code}</span>
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
            <p className="text-base font-bold text-foreground">{cur.amount}</p>
            <p className="text-[11px] text-muted-foreground mt-1">{cur.limit}</p>
            <span
              className={`text-[11px] font-medium mt-1 inline-block ${
                cur.status === "Active" ? "text-primary" : "text-destructive"
              }`}
            >
              {cur.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
