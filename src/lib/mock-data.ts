export const revenueData = [
  { month: "Jan", revenue: 18400, users: 1200, orders: 320 },
  { month: "Feb", revenue: 22100, users: 1480, orders: 410 },
  { month: "Mar", revenue: 19800, users: 1390, orders: 380 },
  { month: "Apr", revenue: 28500, users: 1820, orders: 520 },
  { month: "May", revenue: 31200, users: 2050, orders: 610 },
  { month: "Jun", revenue: 35800, users: 2310, orders: 680 },
  { month: "Jul", revenue: 42100, users: 2680, orders: 790 },
  { month: "Aug", revenue: 39400, users: 2540, orders: 740 },
  { month: "Sep", revenue: 47200, users: 2960, orders: 880 },
  { month: "Oct", revenue: 52800, users: 3210, orders: 950 },
  { month: "Nov", revenue: 58400, users: 3540, orders: 1080 },
  { month: "Dec", revenue: 64900, users: 3890, orders: 1210 },
];

export const trafficSources = [
  { name: "Direct", value: 4200, color: "hsl(var(--chart-1))" },
  { name: "Organic", value: 3100, color: "hsl(var(--chart-2))" },
  { name: "Referral", value: 1800, color: "hsl(var(--chart-3))" },
  { name: "Social", value: 1200, color: "hsl(var(--chart-4))" },
  { name: "Email", value: 900, color: "hsl(var(--chart-5))" },
];

export const weeklyActivity = [
  { day: "Mon", sessions: 420, signups: 32 },
  { day: "Tue", sessions: 510, signups: 41 },
  { day: "Wed", sessions: 480, signups: 38 },
  { day: "Thu", sessions: 620, signups: 52 },
  { day: "Fri", sessions: 720, signups: 64 },
  { day: "Sat", sessions: 540, signups: 45 },
  { day: "Sun", sessions: 460, signups: 36 },
];

export type Customer = {
  id: string;
  name: string;
  email: string;
  plan: "Free" | "Pro" | "Enterprise";
  status: "active" | "trial" | "churned";
  spent: number;
  joined: string;
  initials: string;
};

export const customers: Customer[] = [
  { id: "u_01", name: "Sarah Chen", email: "sarah@acme.io", plan: "Enterprise", status: "active", spent: 12480, joined: "2024-03-12", initials: "SC" },
  { id: "u_02", name: "Marcus Johnson", email: "marcus@northwind.com", plan: "Pro", status: "active", spent: 4820, joined: "2024-05-22", initials: "MJ" },
  { id: "u_03", name: "Aisha Patel", email: "aisha@orbit.dev", plan: "Pro", status: "trial", spent: 0, joined: "2025-04-01", initials: "AP" },
  { id: "u_04", name: "Liam O'Connor", email: "liam@vertex.co", plan: "Enterprise", status: "active", spent: 18900, joined: "2023-11-08", initials: "LO" },
  { id: "u_05", name: "Emma Müller", email: "emma@nordic.eu", plan: "Free", status: "active", spent: 0, joined: "2025-01-19", initials: "EM" },
  { id: "u_06", name: "Diego Ramirez", email: "diego@solaris.mx", plan: "Pro", status: "churned", spent: 1240, joined: "2024-07-30", initials: "DR" },
  { id: "u_07", name: "Yuki Tanaka", email: "yuki@kaizen.jp", plan: "Enterprise", status: "active", spent: 21800, joined: "2023-09-14", initials: "YT" },
  { id: "u_08", name: "Olivia Brown", email: "olivia@meridian.uk", plan: "Pro", status: "active", spent: 6420, joined: "2024-08-03", initials: "OB" },
  { id: "u_09", name: "Noah Wilson", email: "noah@beacon.io", plan: "Free", status: "trial", spent: 0, joined: "2025-04-22", initials: "NW" },
  { id: "u_10", name: "Sofia Rossi", email: "sofia@lumen.it", plan: "Pro", status: "active", spent: 3980, joined: "2024-10-11", initials: "SR" },
];

export const recentActivity = [
  { id: 1, who: "Sarah Chen", action: "upgraded to Enterprise", time: "2 minutes ago", initials: "SC", type: "upgrade" as const },
  { id: 2, who: "Marcus Johnson", action: "paid invoice #INV-2849", time: "14 minutes ago", initials: "MJ", type: "payment" as const },
  { id: 3, who: "Aisha Patel", action: "started a free trial", time: "1 hour ago", initials: "AP", type: "signup" as const },
  { id: 4, who: "Liam O'Connor", action: "added 5 team members", time: "3 hours ago", initials: "LO", type: "team" as const },
  { id: 5, who: "Emma Müller", action: "submitted feedback", time: "5 hours ago", initials: "EM", type: "feedback" as const },
  { id: 6, who: "Diego Ramirez", action: "cancelled subscription", time: "yesterday", initials: "DR", type: "cancel" as const },
];

export const invoices = [
  { id: "INV-2849", customer: "Acme Inc.", amount: 1240, status: "paid", date: "2025-04-28" },
  { id: "INV-2848", customer: "Northwind Co.", amount: 480, status: "paid", date: "2025-04-26" },
  { id: "INV-2847", customer: "Orbit Labs", amount: 980, status: "pending", date: "2025-04-22" },
  { id: "INV-2846", customer: "Vertex Studio", amount: 2400, status: "paid", date: "2025-04-18" },
  { id: "INV-2845", customer: "Solaris Group", amount: 320, status: "failed", date: "2025-04-15" },
];
