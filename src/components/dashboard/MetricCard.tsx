import { Card } from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  trend?: number[];
  description?: string;
}

export function MetricCard({ title, value, change, icon: Icon, trend, description }: MetricCardProps) {
  const positive = change >= 0;
  const max = trend ? Math.max(...trend) : 0;
  const min = trend ? Math.min(...trend) : 0;
  const range = max - min || 1;

  return (
    <Card className="relative overflow-hidden p-5 transition-base hover:shadow-elevated hover:-translate-y-0.5 group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-base" />
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div className={cn(
            "inline-flex items-center gap-0.5 text-xs font-medium px-2 py-1 rounded-md",
            positive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
          )}>
            {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
            {Math.abs(change)}%
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-1">{title}</p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold tracking-tight">{value}</h3>
        </div>
        {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}

        {trend && (
          <div className="flex items-end gap-0.5 h-10 mt-4">
            {trend.map((v, i) => {
              const h = ((v - min) / range) * 100;
              return (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-primary/30 to-primary transition-base hover:from-primary/50 hover:to-primary-glow"
                  style={{ height: `${Math.max(h, 8)}%` }}
                />
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
}
