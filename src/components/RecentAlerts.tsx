
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RecentAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: "leak",
      severity: "high",
      zone: "Douala Central",
      time: "2 hours ago",
      message: "Pressure drop detected in Zone Z001"
    },
    {
      id: 2,
      type: "maintenance",
      severity: "medium",
      zone: "Yaoundé Center",
      time: "5 hours ago",
      message: "Scheduled maintenance in progress"
    },
    {
      id: 3,
      type: "sensor",
      severity: "low",
      zone: "Bamenda West",
      time: "1 day ago",
      message: "Sensor S047 requires calibration"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="p-3 border rounded-lg hover:bg-slate-50 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <Badge className={getSeverityColor(alert.severity)}>
                  {alert.severity}
                </Badge>
                <span className="text-xs text-slate-500">{alert.time}</span>
              </div>
              <div className="text-sm font-medium text-slate-800 mb-1">{alert.zone}</div>
              <div className="text-sm text-slate-600">{alert.message}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentAlerts;
