import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  ArrowLeftRight,
  FileText,
  Repeat,
  CreditCard,
  MessageSquare,
  Search,
  Crown,
  Zap,
  Menu,
  X,
} from "lucide-react";

const mainNav = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Analytics", icon: BarChart3, path: "/analytics", badge: 20 },
  { label: "Transactions", icon: ArrowLeftRight, path: "/transactions" },
  { label: "Invoices", icon: FileText, path: "/invoices" },
];

const featureNav = [
  { label: "Recurring", icon: Repeat, path: "/recurring", badge: 16 },
  { label: "Subscriptions", icon: CreditCard, path: "/subscriptions" },
  { label: "Feedback", icon: MessageSquare, path: "/feedback" },
];

export default function AppSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const linkClass = (path: string) => {
    const active = location.pathname === path;
    return `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
      active
        ? "bg-secondary text-foreground"
        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
    }`;
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-5">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <Zap className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-lg font-bold text-foreground">Fintrixity</span>
      </div>

      {/* Search */}
      <div className="px-4 mb-4">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary text-muted-foreground text-sm">
          <Search className="w-4 h-4" />
          <span>Search</span>
          <span className="ml-auto text-xs opacity-50">⌘K</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="flex-1 px-3 space-y-1">
        {mainNav.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={linkClass(item.path)}
            onClick={() => setMobileOpen(false)}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
            {item.badge && (
              <span className="ml-auto bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}

        <div className="pt-4 pb-2 px-4">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Features
          </span>
        </div>

        {featureNav.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={linkClass(item.path)}
            onClick={() => setMobileOpen(false)}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
            {item.badge && (
              <span className="ml-auto bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Upgrade card */}
      <div className="p-4">
        <div className="bg-gradient-to-br from-secondary to-card rounded-xl p-4 border border-border">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold text-foreground">Upgrade Pro!</span>
            <Crown className="w-4 h-4 text-yellow-500" />
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Higher productivity with better organization
          </p>
          <div className="flex items-center gap-3">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-lg transition-colors flex items-center gap-1">
              <Crown className="w-3 h-3" /> Upgrade
            </button>
            <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border border-border text-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-sidebar border-r border-sidebar-border transform transition-transform lg:transform-none ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
