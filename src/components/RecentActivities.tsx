import { useState } from "react";
import { Search, SlidersHorizontal, MoreHorizontal, ShieldCheck, Plane, Hotel, Package, Cloud, LucideIcon } from "lucide-react";

const activities: { activity: string; icon: LucideIcon; iconColor: string; orderId: string; date: string; time: string; price: string; status: string }[] = [
  {
    activity: "Software License",
    icon: ShieldCheck,
    iconColor: "text-destructive",
    orderId: "INV_000076",
    date: "17 Apr, 2026",
    time: "03:45 PM",
    price: "$25,500",
    status: "Completed",
  },
  {
    activity: "Flight Ticket",
    icon: Plane,
    iconColor: "text-primary",
    orderId: "INV_000075",
    date: "15 Apr, 2026",
    time: "10:20 AM",
    price: "$1,250",
    status: "Pending",
  },
  {
    activity: "Hotel Booking",
    icon: Hotel,
    iconColor: "text-accent-foreground",
    orderId: "INV_000074",
    date: "12 Apr, 2026",
    time: "02:15 PM",
    price: "$3,800",
    status: "Completed",
  },
  {
    activity: "Office Supplies",
    icon: Package,
    iconColor: "text-yellow-500",
    orderId: "INV_000073",
    date: "10 Apr, 2026",
    time: "09:30 AM",
    price: "$450",
    status: "Failed",
  },
  {
    activity: "Cloud Hosting",
    icon: Cloud,
    iconColor: "text-blue-400",
    orderId: "INV_000072",
    date: "08 Apr, 2026",
    time: "11:00 AM",
    price: "$2,100",
    status: "Completed",
  },
];

export default function RecentActivities() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = activities.filter(
    (a) =>
      a.activity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.orderId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const statusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-success";
      case "Pending":
        return "text-yellow-500";
      case "Failed":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <h3 className="text-lg font-semibold text-foreground">Recent Activities</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2 text-sm">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent outline-none text-foreground placeholder:text-muted-foreground w-28"
            />
          </div>
          <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg px-3 py-2 transition-colors">
            Filter <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-muted-foreground text-left border-b border-border">
              <th className="pb-3 font-medium">Activity</th>
              <th className="pb-3 font-medium">Order ID</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Time</th>
              <th className="pb-3 font-medium">Price</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.orderId} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <a.icon className={`w-5 h-5 ${a.iconColor}`} />
                    <span className="text-foreground font-medium">{a.activity}</span>
                  </div>
                </td>
                <td className="py-3 text-muted-foreground">{a.orderId}</td>
                <td className="py-3 text-muted-foreground">{a.date}</td>
                <td className="py-3 text-muted-foreground">{a.time}</td>
                <td className="py-3 text-foreground font-medium">{a.price}</td>
                <td className="py-3">
                  <span className={`font-medium ${statusColor(a.status)}`}>
                    • {a.status}
                  </span>
                </td>
                <td className="py-3">
                  <button className="text-muted-foreground hover:text-foreground">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {filtered.map((a) => (
          <div key={a.orderId} className="bg-secondary/30 rounded-lg p-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a.icon className={`w-4 h-4 ${a.iconColor}`} />
                <span className="text-foreground font-medium text-sm">{a.activity}</span>
              </div>
              <span className={`text-xs font-medium ${statusColor(a.status)}`}>
                • {a.status}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{a.orderId}</span>
              <span className="text-foreground font-medium">{a.price}</span>
            </div>
            <div className="text-xs text-muted-foreground">
              {a.date} · {a.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
