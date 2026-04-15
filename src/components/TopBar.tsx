import { useLocation } from "react-router-dom";
import {
  HelpCircle,
  Mail,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Share2,
} from "lucide-react";

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/analytics": "Analytics",
  "/transactions": "Transactions",
  "/invoices": "Invoices",
  "/recurring": "Recurring",
  "/subscriptions": "Subscriptions",
  "/feedback": "Feedback",
};

export default function TopBar() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-border bg-card/50">
      <div className="flex items-center gap-2 text-sm">
        <button className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground transition-colors">
          <ChevronRight className="w-4 h-4" />
        </button>
        <span className="text-muted-foreground hidden sm:inline">Fintrixity</span>
        <span className="text-muted-foreground hidden sm:inline">›</span>
        <span className="text-foreground font-medium">{title}</span>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-colors">
          <HelpCircle className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-colors">
          <Mail className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-colors">
          <RefreshCw className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-xs font-bold text-primary-foreground">
          F
        </div>
        <button className="hidden sm:flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium px-4 py-2 rounded-full transition-colors">
          Share <Share2 className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
