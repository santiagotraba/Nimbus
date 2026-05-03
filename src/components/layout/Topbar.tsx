import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Bell, Search, Moon, Sun, Plus, ChevronRight } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CommandPalette } from "@/components/dashboard/CommandPalette";
import { Badge } from "@/components/ui/badge";

const labels: Record<string, string> = {
  "": "Overview",
  analytics: "Analytics",
  customers: "Customers",
  billing: "Billing",
  settings: "Settings",
  help: "Help & Support",
};

export function Topbar() {
  const { pathname } = useLocation();
  const [dark, setDark] = useState<boolean>(() =>
    typeof window !== "undefined" && document.documentElement.classList.contains("dark")
  );
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.length === 0 ? [{ label: "Overview", path: "/" }]
    : [{ label: "Dashboard", path: "/" }, ...segments.map((s, i) => ({
        label: labels[s] ?? s, path: "/" + segments.slice(0, i + 1).join("/"),
      }))];

  return (
    <header className="sticky top-0 z-30 h-16 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="flex h-full items-center gap-3 px-4 md:px-6">
        <SidebarTrigger className="md:hidden" />

        <nav className="hidden md:flex items-center gap-1.5 text-sm">
          {crumbs.map((c, i) => (
            <div key={c.path} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />}
              <Link
                to={c.path}
                className={`transition-base hover:text-foreground ${
                  i === crumbs.length - 1 ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                {c.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="flex-1" />

        <button
          onClick={() => setPaletteOpen(true)}
          className="hidden md:inline-flex items-center gap-2 h-9 px-3 rounded-lg border border-border bg-secondary/50 hover:bg-secondary text-sm text-muted-foreground transition-base min-w-[240px]"
        >
          <Search className="h-4 w-4" />
          <span className="flex-1 text-left">Search anything…</span>
          <kbd className="hidden lg:inline-flex h-5 items-center gap-1 rounded border border-border bg-background px-1.5 text-[10px] font-medium">
            ⌘K
          </kbd>
        </button>

        <Button size="sm" className="hidden sm:inline-flex bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
          <Plus className="h-4 w-4 mr-1" /> New
        </Button>

        <Button variant="ghost" size="icon" onClick={() => setDark((d) => !d)} aria-label="Toggle theme">
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="flex items-center justify-between">
              Notifications <Badge variant="secondary" className="text-[10px]">3 new</Badge>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {[
              { t: "New customer signup", d: "Sarah Chen joined Pro plan", time: "2m ago" },
              { t: "Payment received", d: "$1,240 from Acme Inc.", time: "1h ago" },
              { t: "Weekly report ready", d: "Your analytics digest is here", time: "3h ago" },
            ].map((n) => (
              <DropdownMenuItem key={n.t} className="flex flex-col items-start gap-0.5 py-3">
                <div className="flex w-full justify-between">
                  <span className="text-sm font-medium">{n.t}</span>
                  <span className="text-[11px] text-muted-foreground">{n.time}</span>
                </div>
                <span className="text-xs text-muted-foreground">{n.d}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="rounded-full transition-base hover:opacity-80" aria-label="Account">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs">AC</AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </header>
  );
}
