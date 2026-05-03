import { PageHeader } from "@/components/dashboard/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { revenueData, weeklyActivity } from "@/lib/mock-data";
import { Filter, Download } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Eye, MousePointerClick, Clock, Repeat } from "lucide-react";

const tooltipStyle = {
  backgroundColor: "hsl(var(--popover))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "0.5rem", fontSize: "12px",
  boxShadow: "var(--shadow-lg)",
};

const Analytics = () => {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      <PageHeader title="Analytics" description="Deep dive into your product performance">
        <Select defaultValue="30d">
          <SelectTrigger className="w-[140px] h-9"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
            <SelectItem value="12m">Last 12 months</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="sm"><Filter className="h-4 w-4 mr-1.5" />Filters</Button>
        <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
          <Download className="h-4 w-4 mr-1.5" />Export
        </Button>
      </PageHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Page views" value="248,392" change={14.2} icon={Eye} />
        <MetricCard title="Click-through" value="6.42%" change={3.1} icon={MousePointerClick} />
        <MetricCard title="Avg. duration" value="4m 32s" change={-1.4} icon={Clock} />
        <MetricCard title="Returning users" value="58.4%" change={5.6} icon={Repeat} />
      </div>

      <Card className="transition-base hover:shadow-elegant">
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div>
            <CardTitle className="text-base">Revenue vs Users</CardTitle>
            <CardDescription>Compare growth across time</CardDescription>
          </div>
          <Tabs defaultValue="line">
            <TabsList className="h-8">
              <TabsTrigger value="line" className="text-xs h-6">Line</TabsTrigger>
              <TabsTrigger value="bar" className="text-xs h-6">Bar</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={340}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis yAxisId="l" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis yAxisId="r" orientation="right" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Line yAxisId="l" type="monotone" dataKey="revenue" stroke="hsl(var(--chart-1))" strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 5 }} animationDuration={900} />
              <Line yAxisId="r" type="monotone" dataKey="users" stroke="hsl(var(--chart-2))" strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 5 }} animationDuration={900} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="transition-base hover:shadow-elegant">
          <CardHeader>
            <CardTitle className="text-base">Weekly activity</CardTitle>
            <CardDescription>Sessions and signups by day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={weeklyActivity}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "hsl(var(--muted))" }} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Bar dataKey="sessions" fill="hsl(var(--chart-1))" radius={[6, 6, 0, 0]} animationDuration={800} />
                <Bar dataKey="signups" fill="hsl(var(--chart-3))" radius={[6, 6, 0, 0]} animationDuration={800} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="transition-base hover:shadow-elegant">
          <CardHeader>
            <CardTitle className="text-base">Top pages</CardTitle>
            <CardDescription>Most visited routes this period</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { page: "/dashboard", views: 48230, pct: 100 },
              { page: "/pricing", views: 32140, pct: 67 },
              { page: "/features", views: 28490, pct: 59 },
              { page: "/blog/launch-week", views: 21080, pct: 44 },
              { page: "/docs/getting-started", views: 17820, pct: 37 },
              { page: "/changelog", views: 12640, pct: 26 },
            ].map((p) => (
              <div key={p.page}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium truncate">{p.page}</span>
                  <span className="text-muted-foreground tabular-nums">{p.views.toLocaleString()}</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-gradient-primary rounded-full transition-all" style={{ width: `${p.pct}%` }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
