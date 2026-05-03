import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { recentActivity } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const typeStyles: Record<string, string> = {
  upgrade: "bg-primary/10 text-primary",
  payment: "bg-success/10 text-success",
  signup: "bg-chart-2/10 text-chart-2",
  team: "bg-chart-4/10 text-chart-4",
  feedback: "bg-warning/10 text-warning",
  cancel: "bg-destructive/10 text-destructive",
};

export function RecentActivity() {
  return (
    <Card className="transition-base hover:shadow-elegant">
      <CardHeader>
        <CardTitle className="text-base">Recent activity</CardTitle>
        <CardDescription>Latest events across your workspace</CardDescription>
      </CardHeader>
      <CardContent className="space-y-1">
        {recentActivity.map((a) => (
          <div key={a.id} className="flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-secondary/60 transition-base">
            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs">
                {a.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-medium">{a.who}</span>{" "}
                <span className="text-muted-foreground">{a.action}</span>
              </p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className={cn("text-[10px] py-0 px-1.5 h-4 font-medium border-0", typeStyles[a.type])}>
                  {a.type}
                </Badge>
                <span className="text-[11px] text-muted-foreground">{a.time}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
