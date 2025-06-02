
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Sensors = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const [sensors, setSensors] = useState([
    { id: "S001", type: "Flow Meter", location: "Douala Central - Main Line", status: "active", lastReading: "856 L/min", battery: "98%" },
    { id: "S002", type: "Pressure Sensor", location: "Douala Central - Junction A", status: "active", lastReading: "4.1 bar", battery: "87%" },
    { id: "S003", type: "Leak Detector", location: "Yaoundé North - Sector 3", status: "warning", lastReading: "Anomaly", battery: "76%" },
    { id: "S004", type: "Flow Meter", location: "Bamenda West - Distribution Hub", status: "active", lastReading: "445 L/min", battery: "92%" },
    { id: "S005", type: "Pressure Sensor", location: "Yaoundé Center - Main Valve", status: "offline", lastReading: "N/A", battery: "12%" },
  ]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      // Update sensor readings with new simulated values
      setSensors(prev => prev.map(sensor => ({
        ...sensor,
        lastReading: sensor.status === "offline" ? "N/A" : 
          sensor.type === "Flow Meter" ? `${Math.floor(Math.random() * 500) + 400} L/min` :
          sensor.type === "Pressure Sensor" ? `${(Math.random() * 2 + 3).toFixed(1)} bar` :
          sensor.status === "warning" ? "Anomaly" : "Normal",
        battery: sensor.status === "offline" ? sensor.battery : `${Math.floor(Math.random() * 30) + 70}%`
      })));
      setIsRefreshing(false);
      toast({
        title: "Data Refreshed",
        description: "Sensor data has been updated successfully.",
      });
    }, 1500);
  };

  const filteredSensors = sensors.filter(sensor =>
    sensor.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sensor.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sensor.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 border-green-200";
      case "warning": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "offline": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Sensor Network</h1>
          <p className="text-slate-600 mt-1">Real-time IoT sensor monitoring and management</p>
        </div>
        <Button 
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
          {isRefreshing ? 'Refreshing...' : 'Refresh Data'}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Active Sensors ({filteredSensors.length})</CardTitle>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <Input 
                  placeholder="Search sensors..." 
                  className="pl-10 w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Sensor ID</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Location</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Last Reading</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Battery</th>
                </tr>
              </thead>
              <tbody>
                {filteredSensors.map((sensor) => (
                  <tr key={sensor.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-sm">{sensor.id}</td>
                    <td className="py-4 px-4">{sensor.type}</td>
                    <td className="py-4 px-4 text-sm">{sensor.location}</td>
                    <td className="py-4 px-4">
                      <Badge className={getStatusColor(sensor.status)}>
                        {sensor.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 font-mono text-sm">{sensor.lastReading}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-green-500 rounded-full transition-all"
                            style={{ width: sensor.battery }}
                          />
                        </div>
                        <span className="text-sm text-slate-600">{sensor.battery}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredSensors.length === 0 && (
            <div className="text-center py-8 text-slate-500">
              No sensors found matching your search criteria.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Sensors;
