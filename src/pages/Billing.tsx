import { PageHeader } from "@/components/dashboard/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Download } from "lucide-react";
import { invoices } from "@/lib/mock-data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

const plans = [
  { name: "Starter", price: 19, desc: "For small teams just getting started", features: ["Up to 5 users", "Basic analytics", "Community support", "1GB storage"] },
  { name: "Pro", price: 49, desc: "For growing teams that need more power", features: ["Up to 25 users", "Advanced analytics", "Priority support", "100GB storage", "Custom integrations"], featured: true },
  { name: "Enterprise", price: 149, desc: "For organizations with advanced needs", features: ["Unlimited users", "Real-time analytics", "24/7 dedicated support", "Unlimited storage", "SSO & audit logs", "Custom contracts"] },
];

const invoiceStyles: Record<string, string> = {
  paid: "bg-success/10 text-success border-success/20",
  pending: "bg-warning/10 text-warning border-warning/20",
  failed: "bg-destructive/10 text-destructive border-destructive/20",
};

const Billing = () => {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      <PageHeader title="Billing" description="Manage your plan, payment methods and invoices" />

      <Card className="p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <Badge className="bg-primary text-primary-foreground mb-2">Current plan</Badge>
            <h3 className="text-xl font-bold">Pro Plan · $49/mo</h3>
            <p className="text-sm text-muted-foreground mt-1">Renews on May 28, 2026 · 18 / 25 users</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Cancel plan</Button>
            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">Upgrade</Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((p) => (
          <Card key={p.name} className={cn(
            "p-6 transition-base hover:shadow-elevated relative",
            p.featured && "border-primary shadow-glow"
          )}>
            {p.featured && (
              <Badge className="absolute -top-2 left-6 bg-gradient-primary text-primary-foreground border-0">Most popular</Badge>
            )}
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-xs text-muted-foreground mt-1 mb-4">{p.desc}</p>
            <div className="flex items-baseline gap-1 mb-5">
              <span className="text-3xl font-bold">${p.price}</span>
              <span className="text-sm text-muted-foreground">/month</span>
            </div>
            <Button className={cn("w-full mb-5", p.featured ? "bg-gradient-primary text-primary-foreground hover:opacity-90" : "")} variant={p.featured ? "default" : "outline"}>
              {p.featured ? "Current plan" : "Switch plan"}
            </Button>
            <ul className="space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <div className="h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="h-2.5 w-2.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Recent invoices</CardTitle>
            <CardDescription>Download invoices and view payment history</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((i) => (
                  <TableRow key={i.id} className="transition-base hover:bg-secondary/40">
                    <TableCell className="font-mono text-xs">{i.id}</TableCell>
                    <TableCell className="text-sm font-medium">{i.customer}</TableCell>
                    <TableCell className="tabular-nums font-medium">${i.amount}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={cn("capitalize text-[10px]", invoiceStyles[i.status])}>{i.status}</Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{i.date}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Download className="h-4 w-4" /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Payment method</CardTitle>
            <CardDescription>Default card on file</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl bg-gradient-to-br from-foreground to-foreground/80 p-5 text-background relative overflow-hidden">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/30 blur-2xl" />
              <CreditCard className="h-7 w-7 mb-6 opacity-90" />
              <div className="font-mono text-base tracking-widest">•••• •••• •••• 4242</div>
              <div className="flex justify-between mt-3 text-xs opacity-80">
                <span>Alex Carter</span><span>12/27</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">Update payment method</Button>
            <div className="text-xs text-muted-foreground">Next charge: <span className="font-medium text-foreground">$49.00 on May 28, 2026</span></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Billing;
