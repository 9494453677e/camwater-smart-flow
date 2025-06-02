
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SystemStatus = () => {
  const zones = [
    { id: "Z001", name: "Douala Central", status: "operational", pressure: "4.1 bar", flow: "856 L/min" },
    { id: "Z002", name: "Yaoundé North", status: "warning", pressure: "3.8 bar", flow: "742 L/min" },
    { id: "Z003", name: "Douala Port", status: "operational", pressure: "4.3 bar", flow: "623 L/min" },
    { id: "Z004", name: "Yaoundé Center", status: "maintenance", pressure: "0.0 bar", flow: "0 L/min" },
    { id: "Z005", name: "Bamenda West", status: "operational", pressure: "4.0 bar", flow: "445 L/min" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational": return "bg-green-100 text-green-800 border-green-200";
      case "warning": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "maintenance": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-red-100 text-red-800 border-red-200";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Zone Status Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {zones.map((zone) => (
            <div key={zone.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border">
              <div className="flex items-center gap-4">
                <div className="text-sm font-mono text-slate-500">{zone.id}</div>
                <div>
                  <div className="font-medium text-slate-800">{zone.name}</div>
                  <div className="text-sm text-slate-600">
                    Pressure: {zone.pressure} | Flow: {zone.flow}
                  </div>
                </div>
              </div>
              <Badge className={getStatusColor(zone.status)}>
                {zone.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemStatus;
