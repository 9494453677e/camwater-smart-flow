
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import MetricCard from "@/components/MetricCard";
import SystemStatus from "@/components/SystemStatus";
import RecentAlerts from "@/components/RecentAlerts";
import WaterFlowChart from "@/components/WaterFlowChart";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Dashboard Overview</h1>
          <p className="text-slate-600 mt-1">Real-time water distribution system monitoring</p>
        </div>
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          System Operational
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Flow Rate"
          value="2,847 L/min"
          change="+5.2%"
          trend="up"
          icon="💧"
        />
        <MetricCard
          title="System Pressure"
          value="4.2 bar"
          change="-1.8%"
          trend="down"
          icon="⚡"
        />
        <MetricCard
          title="Active Sensors"
          value="156/160"
          change="97.5%"
          trend="up"
          icon="📡"
        />
        <MetricCard
          title="Detected Leaks"
          value="3"
          change="-2 from yesterday"
          trend="down"
          icon="🚨"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <WaterFlowChart />
          <SystemStatus />
        </div>
        <div className="space-y-6">
          <RecentAlerts />
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <button 
                onClick={() => navigate('/generate-reports')}
                className="w-full p-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors"
              >
                <div className="font-medium text-blue-800">Generate Report</div>
                <div className="text-sm text-blue-600">Create monthly usage summary</div>
              </button>
              <button 
                onClick={() => navigate('/add-incident')}
                className="w-full p-3 text-left bg-teal-50 hover:bg-teal-100 rounded-lg border border-teal-200 transition-colors"
              >
                <div className="font-medium text-teal-800">Add Incident</div>
                <div className="text-sm text-teal-600">Report new leak or issue</div>
              </button>
              <button 
                onClick={() => navigate('/map')}
                className="w-full p-3 text-left bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors"
              >
                <div className="font-medium text-purple-800">View Map</div>
                <div className="text-sm text-purple-600">Interactive network overview</div>
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
