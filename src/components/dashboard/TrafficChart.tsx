import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { trafficSources } from "@/lib/mock-data";

export function TrafficChart() {
  const total = trafficSources.reduce((s, x) => s + x.value, 0);
  return (
    <Card className="transition-base hover:shadow-elegant">
      <CardHeader>
        <CardTitle className="text-base">Traffic sources</CardTitle>
        <CardDescription>Where your visitors come from</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={trafficSources} dataKey="value" nameKey="name"
                cx="50%" cy="50%" innerRadius={62} outerRadius={88}
                paddingAngle={3} strokeWidth={0} animationDuration={800}
              >
                {trafficSources.map((e) => <Cell key={e.name} fill={e.color} />)}
              </Pie>
              <Tooltip contentStyle={{
                backgroundColor: "hsl(var(--popover))", border: "1px solid hsl(var(--border))",
                borderRadius: "0.5rem", fontSize: "12px", boxShadow: "var(--shadow-lg)",
              }}/>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-bold">{(total / 1000).toFixed(1)}k</span>
            <span className="text-xs text-muted-foreground">Total visits</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {trafficSources.map((s) => (
            <div key={s.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                <span className="text-muted-foreground">{s.name}</span>
              </div>
              <span className="font-medium tabular-nums">{((s.value / total) * 100).toFixed(0)}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
