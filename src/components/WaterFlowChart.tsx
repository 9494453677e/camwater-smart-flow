
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const WaterFlowChart = () => {
  const data = [
    { time: "00:00", flow: 2100, pressure: 4.1 },
    { time: "04:00", flow: 1800, pressure: 4.2 },
    { time: "08:00", flow: 2800, pressure: 3.9 },
    { time: "12:00", flow: 3200, pressure: 3.8 },
    { time: "16:00", flow: 2900, pressure: 4.0 },
    { time: "20:00", flow: 2600, pressure: 4.1 },
    { time: "24:00", flow: 2200, pressure: 4.2 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Water Flow & Pressure Trends (24h)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "white", 
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px"
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="flow" 
                stroke="#0ea5e9" 
                strokeWidth={3}
                name="Flow (L/min)"
              />
              <Line 
                type="monotone" 
                dataKey="pressure" 
                stroke="#14b8a6" 
                strokeWidth={3}
                name="Pressure (bar)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default WaterFlowChart;
