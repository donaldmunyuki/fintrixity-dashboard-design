import { Wallet, PiggyBank, TrendingUp, MoreHorizontal, ArrowRight } from "lucide-react";

const cards = [
  {
    title: "My balance",
    subtitle: "Wallet Overview & Spending",
    amount: "$28,520.30",
    change: "+1.5%",
    action: "See details",
    icon: Wallet,
    featured: true,
  },
  {
    title: "Savings account",
    subtitle: "Steady Growth Savings",
    amount: "$24,800.45",
    change: "+3.2%",
    action: "View summary",
    icon: PiggyBank,
    featured: false,
  },
  {
    title: "Investment portfolio",
    subtitle: "Track Your Wealth Growth",
    amount: "$70,120.78",
    change: "+4.7%",
    action: "Analyze performance",
    icon: TrendingUp,
    featured: false,
  },
];

export default function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`rounded-xl p-5 relative overflow-hidden ${
            card.featured
              ? "bg-gradient-to-br from-primary/90 to-primary/60 text-primary-foreground"
              : "bg-card border border-border text-card-foreground"
          }`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  card.featured ? "bg-primary-foreground/20" : "bg-secondary"
                }`}
              >
                <card.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{card.title}</h3>
                <p className={`text-xs ${card.featured ? "opacity-70" : "text-muted-foreground"}`}>
                  {card.subtitle}
                </p>
              </div>
            </div>
            <button className="opacity-60 hover:opacity-100 transition-opacity">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <p className="text-2xl font-bold">{card.amount}</p>
              <span className="text-xs font-medium text-success mt-1 inline-block">
                {card.change} ↑
              </span>
            </div>
          </div>

          <button
            className={`mt-3 flex items-center gap-1 text-sm font-medium transition-colors ${
              card.featured
                ? "text-primary-foreground/80 hover:text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {card.action} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
