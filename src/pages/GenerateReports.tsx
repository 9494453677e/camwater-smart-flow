
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Download, FileText, Users, Droplets, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const GenerateReports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");
  const [selectedType, setSelectedType] = useState("consumption");

  const reportTypes = [
    { id: "consumption", name: "Water Consumption", icon: Droplets, color: "blue" },
    { id: "incidents", name: "Incident Reports", icon: AlertTriangle, color: "red" },
    { id: "performance", name: "System Performance", icon: FileText, color: "green" },
    { id: "users", name: "User Activity", icon: Users, color: "purple" }
  ];

  const timePeriods = [
    { id: "weekly", name: "Weekly" },
    { id: "monthly", name: "Monthly" },
    { id: "quarterly", name: "Quarterly" },
    { id: "yearly", name: "Yearly" }
  ];

  const handleGenerateReport = () => {
    // Simulate report generation
    const blob = new Blob([`${selectedType.toUpperCase()} REPORT - ${selectedPeriod.toUpperCase()}\n\nGenerated on: ${new Date().toLocaleString()}\n\nReport data would be here...`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedType}-${selectedPeriod}-report.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Generate Reports</h1>
        <p className="text-slate-600 mt-1">Create comprehensive reports for water distribution analytics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Report Type
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {reportTypes.map((type) => (
              <div 
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedType === type.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <type.icon className={`w-6 h-6 text-${type.color}-600`} />
                  <span className="font-medium">{type.name}</span>
                  {selectedType === type.id && (
                    <Badge className="ml-auto bg-blue-100 text-blue-800">Selected</Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Time Period
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {timePeriods.map((period) => (
              <div 
                key={period.id}
                onClick={() => setSelectedPeriod(period.id)}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedPeriod === period.id 
                    ? 'border-teal-500 bg-teal-50' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{period.name}</span>
                  {selectedPeriod === period.id && (
                    <Badge className="bg-teal-100 text-teal-800">Selected</Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Report Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              {reportTypes.find(t => t.id === selectedType)?.name} - {timePeriods.find(p => p.id === selectedPeriod)?.name}
            </h3>
            <p className="text-slate-600 mb-4">
              This report will include detailed analytics and insights for the selected period and data type.
            </p>
            <div className="flex gap-4">
              <Button onClick={handleGenerateReport} className="bg-blue-600 hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Generate & Download Report
              </Button>
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Preview Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenerateReports;
