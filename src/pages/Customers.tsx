import { useMemo, useState } from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Search, UserPlus, MoreHorizontal, Mail } from "lucide-react";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { customers } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  active: "bg-success/10 text-success border-success/20",
  trial: "bg-warning/10 text-warning border-warning/20",
  churned: "bg-destructive/10 text-destructive border-destructive/20",
};

const planStyles: Record<string, string> = {
  Free: "bg-secondary text-secondary-foreground",
  Pro: "bg-primary/10 text-primary",
  Enterprise: "bg-gradient-primary text-primary-foreground",
};

const Customers = () => {
  const [q, setQ] = useState("");
  const [plan, setPlan] = useState<string>("all");
  const [status, setStatus] = useState<string>("all");

  const filtered = useMemo(() => customers.filter((c) => {
    const matches = c.name.toLowerCase().includes(q.toLowerCase()) || c.email.toLowerCase().includes(q.toLowerCase());
    const planOk = plan === "all" || c.plan === plan;
    const statusOk = status === "all" || c.status === status;
    return matches && planOk && statusOk;
  }), [q, plan, status]);

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      <PageHeader title="Customers" description="Manage your users and subscriptions">
        <Button variant="outline" size="sm"><Mail className="h-4 w-4 mr-1.5" />Email all</Button>
        <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
          <UserPlus className="h-4 w-4 mr-1.5" />Invite user
        </Button>
      </PageHeader>

      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)}
              placeholder="Search customers by name or email…" className="pl-9" />
          </div>
          <Select value={plan} onValueChange={setPlan}>
            <SelectTrigger className="w-full md:w-[160px]"><SelectValue placeholder="All plans" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All plans</SelectItem>
              <SelectItem value="Free">Free</SelectItem>
              <SelectItem value="Pro">Pro</SelectItem>
              <SelectItem value="Enterprise">Enterprise</SelectItem>
            </SelectContent>
          </Select>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-full md:w-[160px]"><SelectValue placeholder="All statuses" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="trial">Trial</SelectItem>
              <SelectItem value="churned">Churned</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      <Card className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/50 hover:bg-secondary/50">
              <TableHead>Customer</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Total spent</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-12 text-muted-foreground">
                  <div className="flex flex-col items-center gap-2">
                    <Search className="h-8 w-8 opacity-50" />
                    <p className="text-sm">No customers match your filters</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : filtered.map((c) => (
              <TableRow key={c.id} className="transition-base hover:bg-secondary/40">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs">{c.initials}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate">{c.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{c.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={cn("border-0 text-[10px] font-medium", planStyles[c.plan])}>{c.plan}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={cn("text-[10px] font-medium capitalize", statusStyles[c.status])}>
                    <span className="h-1.5 w-1.5 rounded-full mr-1.5 bg-current" />
                    {c.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right tabular-nums font-medium">
                  ${c.spent.toLocaleString()}
                </TableCell>
                <TableCell className="text-sm text-muted-foreground tabular-nums">{c.joined}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View profile</DropdownMenuItem>
                      <DropdownMenuItem>Send email</DropdownMenuItem>
                      <DropdownMenuItem>Edit plan</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Customers;
