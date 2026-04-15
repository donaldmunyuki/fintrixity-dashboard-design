import { Repeat, MoreHorizontal, Plus } from "lucide-react";

const recurring = [
  { name: "Netflix Subscription", amount: "$15.99", frequency: "Monthly", next: "01 May, 2026", status: "Active" },
  { name: "Spotify Premium", amount: "$9.99", frequency: "Monthly", next: "05 May, 2026", status: "Active" },
  { name: "AWS Hosting", amount: "$1,250.00", frequency: "Monthly", next: "01 May, 2026", status: "Active" },
  { name: "Figma Team", amount: "$45.00", frequency: "Monthly", next: "15 May, 2026", status: "Active" },
  { name: "Domain Renewal", amount: "$14.99", frequency: "Yearly", next: "22 Sep, 2026", status: "Active" },
  { name: "Gym Membership", amount: "$49.99", frequency: "Monthly", next: "01 May, 2026", status: "Paused" },
  { name: "Adobe Creative Cloud", amount: "$54.99", frequency: "Monthly", next: "10 May, 2026", status: "Active" },
  { name: "Slack Business", amount: "$12.50", frequency: "Monthly", next: "01 May, 2026", status: "Active" },
  { name: "GitHub Team", amount: "$21.00", frequency: "Monthly", next: "18 May, 2026", status: "Active" },
  { name: "Notion Plus", amount: "$10.00", frequency: "Monthly", next: "25 May, 2026", status: "Active" },
  { name: "Zoom Pro", amount: "$13.32", frequency: "Monthly", next: "01 May, 2026", status: "Paused" },
  { name: "Google Workspace", amount: "$12.00", frequency: "Monthly", next: "01 May, 2026", status: "Active" },
  { name: "LinkedIn Premium", amount: "$29.99", frequency: "Monthly", next: "12 May, 2026", status: "Active" },
  { name: "1Password Teams", amount: "$7.99", frequency: "Monthly", next: "01 May, 2026", status: "Active" },
  { name: "Vercel Pro", amount: "$20.00", frequency: "Monthly", next: "08 May, 2026", status: "Active" },
  { name: "Grammarly", amount: "$12.00", frequency: "Monthly", next: "20 May, 2026", status: "Active" },
];

export default function Recurring() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Recurring</h1>
          <p className="text-sm text-muted-foreground">Manage your recurring payments and subscriptions</p>
        </div>
        <button className="flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg transition-colors w-fit">
          <Plus className="w-4 h-4" /> Add Recurring
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {recurring.map((item) => (
          <div key={item.name} className="bg-card border border-border rounded-xl p-4 hover:bg-secondary/30 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                  <Repeat className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.frequency}</p>
                </div>
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-foreground">{item.amount}</p>
              <span className={`text-xs font-medium ${item.status === "Active" ? "text-success" : "text-yellow-500"}`}>
                • {item.status}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Next: {item.next}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
