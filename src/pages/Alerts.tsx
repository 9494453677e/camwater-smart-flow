
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, CheckCircle, AlertTriangle } from "lucide-react";

const Alerts = () => {
  const alerts = [
    {
      id: 1,
      type: "leak",
      severity: "high",
      title: "Pressure Drop Detected",
      description: "Significant pressure drop in Zone Z001 - Douala Central main line",
      zone: "Douala Central",
      timestamp: "2024-01-15 14:32:15",
      status: "active"
    },
    {
      id: 2,
      type: "sensor",
      severity: "medium",
      title: "Sensor Communication Lost",
      description: "Flow meter S045 in Yaoundé North has lost communication",
      zone: "Yaoundé North",
      timestamp: "2024-01-15 13:45:22",
      status: "investigating"
    },
    {
      id: 3,
      type: "maintenance",
      severity: "low",
      title: "Scheduled Maintenance Due",
      description: "Pressure sensor S023 requires quarterly calibration",
      zone: "Bamenda West",
      timestamp: "2024-01-15 09:15:30",
      status: "scheduled"
    },
    {
      id: 4,
      type: "system",
      severity: "high",
      title: "Flow Rate Anomaly",
      description: "Unusual flow pattern detected in distribution hub",
      zone: "Douala Port",
      timestamp: "2024-01-15 08:22:18",
      status: "resolved"
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-red-100 text-red-800 border-red-200";
      case "investigating": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "scheduled": return "bg-blue-100 text-blue-800 border-blue-200";
      case "resolved": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "leak": return "🚨";
      case "sensor": return "📡";
      case "maintenance": return "🔧";
      case "system": return "⚙️";
      default: return "ℹ️";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Alerts & Notifications</h1>
          <p className="text-slate-600 mt-1">Real-time system alerts and notification management</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark All Read
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Bell className="w-4 h-4 mr-2" />
            Alert Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">3</div>
                <div className="text-sm text-slate-600">Active Alerts</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Bell className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">7</div>
                <div className="text-sm text-slate-600">Under Investigation</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">24</div>
                <div className="text-sm text-slate-600">Resolved Today</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">156</div>
                <div className="text-sm text-slate-600">Total This Month</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Alert Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getTypeIcon(alert.type)}</span>
                    <div>
                      <h3 className="font-medium text-slate-800">{alert.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{alert.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge className={getSeverityColor(alert.severity)}>
                      {alert.severity}
                    </Badge>
                    <Badge className={getStatusColor(alert.status)}>
                      {alert.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500 mt-3">
                  <span className="font-medium">{alert.zone}</span>
                  <span>{alert.timestamp}</span>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="outline">View Details</Button>
                  <Button size="sm" variant="outline">Acknowledge</Button>
                  {alert.status === "active" && (
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                      Resolve
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Alerts;
