import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog, CommandEmpty, CommandGroup, CommandInput,
  CommandItem, CommandList, CommandSeparator,
} from "@/components/ui/command";
import {
  LayoutDashboard, BarChart3, Users, CreditCard, Settings,
  Plus, FileText, LogOut, Sun, Moon,
} from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onOpenChange]);

  const go = (path: string) => { onOpenChange(false); navigate(path); };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search pages, customers, settings…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          <CommandItem onSelect={() => go("/")}><LayoutDashboard className="mr-2 h-4 w-4" />Overview</CommandItem>
          <CommandItem onSelect={() => go("/analytics")}><BarChart3 className="mr-2 h-4 w-4" />Analytics</CommandItem>
          <CommandItem onSelect={() => go("/customers")}><Users className="mr-2 h-4 w-4" />Customers</CommandItem>
          <CommandItem onSelect={() => go("/billing")}><CreditCard className="mr-2 h-4 w-4" />Billing</CommandItem>
          <CommandItem onSelect={() => go("/settings")}><Settings className="mr-2 h-4 w-4" />Settings</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem><Plus className="mr-2 h-4 w-4" />Create new project</CommandItem>
          <CommandItem><FileText className="mr-2 h-4 w-4" />Generate report</CommandItem>
          <CommandItem onSelect={() => document.documentElement.classList.toggle("dark")}>
            <Sun className="mr-2 h-4 w-4" />Toggle theme
          </CommandItem>
          <CommandItem className="text-destructive"><LogOut className="mr-2 h-4 w-4" />Sign out</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
