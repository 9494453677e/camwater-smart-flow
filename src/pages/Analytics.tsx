
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, Calendar } from "lucide-react";

const Analytics = () => {
  const monthlyData = [
    { month: "Jan", consumption: 45600, pressure: 4.1, incidents: 12 },
    { month: "Feb", consumption: 43200, pressure: 4.2, incidents: 8 },
    { month: "Mar", consumption: 47800, pressure: 4.0, incidents: 15 },
    { month: "Apr", consumption: 49200, pressure: 3.9, incidents: 11 },
    { month: "May", consumption: 52100, pressure: 4.1, incidents: 9 },
    { month: "Jun", consumption: 54300, pressure: 4.0, incidents: 13 },
  ];

  const zoneData = [
    { name: "Douala Central", value: 35, color: "#3b82f6" },
    { name: "Yaoundé North", value: 25, color: "#06b6d4" },
    { name: "Douala Port", value: 20, color: "#10b981" },
    { name: "Yaoundé Center", value: 12, color: "#f59e0b" },
    { name: "Bamenda West", value: 8, color: "#8b5cf6" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Analytics & Reports</h1>
          <p className="text-slate-600 mt-1">Comprehensive water distribution analytics and insights</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">324,200</div>
              <div className="text-sm text-slate-600 mt-1">Total Consumption (L)</div>
              <div className="text-xs text-green-600 mt-2">+8.2% from last month</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">4.1</div>
              <div className="text-sm text-slate-600 mt-1">Avg Pressure (bar)</div>
              <div className="text-xs text-green-600 mt-2">Optimal range</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">97.8%</div>
              <div className="text-sm text-slate-600 mt-1">System Uptime</div>
              <div className="text-xs text-green-600 mt-2">+2.1% improvement</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">68</div>
              <div className="text-sm text-slate-600 mt-1">Incidents Resolved</div>
              <div className="text-xs text-blue-600 mt-2">This month</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Water Consumption Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "white", 
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px"
                    }} 
                  />
                  <Bar dataKey="consumption" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribution by Zone</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={zoneData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {zoneData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Performance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Month</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Consumption (L)</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Avg Pressure</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Incidents</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Efficiency</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((data) => (
                  <tr key={data.month} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4 font-medium">{data.month} 2024</td>
                    <td className="py-3 px-4">{data.consumption.toLocaleString()}</td>
                    <td className="py-3 px-4">{data.pressure} bar</td>
                    <td className="py-3 px-4">{data.incidents}</td>
                    <td className="py-3 px-4">
                      <span className="text-green-600 font-medium">
                        {(95 + Math.random() * 4).toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
