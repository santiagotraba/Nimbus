import { DollarSign, Users, ShoppingCart, TrendingUp, Download, Calendar } from "lucide-react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { TrafficChart } from "@/components/dashboard/TrafficChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Button } from "@/components/ui/button";

const Overview = () => {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      <PageHeader title="Overview" description="Welcome back, Alex. Here's what's happening today.">
        <Button variant="outline" size="sm"><Calendar className="h-4 w-4 mr-1.5" />Last 30 days</Button>
        <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
          <Download className="h-4 w-4 mr-1.5" />Export
        </Button>
      </PageHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Total Revenue" value="$284,392" change={12.4} icon={DollarSign}
          trend={[20, 28, 24, 35, 40, 38, 52, 48, 60, 68, 72, 84]} />
        <MetricCard title="Active Users" value="14,829" change={8.2} icon={Users}
          trend={[40, 42, 38, 50, 55, 52, 60, 65, 68, 72, 78, 82]} />
        <MetricCard title="Conversion Rate" value="3.84%" change={-2.1} icon={TrendingUp}
          trend={[60, 58, 62, 55, 50, 52, 48, 50, 46, 44, 42, 38]} />
        <MetricCard title="Total Orders" value="9,402" change={18.7} icon={ShoppingCart}
          trend={[30, 35, 32, 42, 48, 50, 58, 62, 70, 76, 82, 90]} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <RevenueChart />
        <TrafficChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6">
            <h3 className="font-semibold mb-1">Performance score</h3>
            <p className="text-xs text-muted-foreground mb-4">Based on key metrics this week</p>
            <div className="text-4xl font-bold text-gradient mb-2">92<span className="text-xl text-muted-foreground">/100</span></div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div className="h-full bg-gradient-primary rounded-full transition-all" style={{ width: "92%" }} />
            </div>
            <p className="text-xs text-muted-foreground mt-3">↑ 6 points vs last week</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold mb-3">Quick stats</h3>
            <div className="space-y-3 text-sm">
              {[
                ["Avg. session", "4m 32s"],
                ["Bounce rate", "28.4%"],
                ["MRR growth", "+14.2%"],
                ["Churn rate", "1.8%"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-medium tabular-nums">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
