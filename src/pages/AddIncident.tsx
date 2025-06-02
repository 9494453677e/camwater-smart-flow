
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Camera, MapPin, Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AddIncident = () => {
  const [formData, setFormData] = useState({
    type: "leak",
    severity: "medium",
    location: "",
    description: "",
    reportedBy: "",
    zone: "Z001"
  });

  const incidentTypes = [
    { id: "leak", name: "Water Leak", color: "red" },
    { id: "pressure", name: "Pressure Drop", color: "orange" },
    { id: "contamination", name: "Water Contamination", color: "purple" },
    { id: "maintenance", name: "Maintenance Required", color: "blue" },
    { id: "outage", name: "Service Outage", color: "gray" }
  ];

  const severityLevels = [
    { id: "low", name: "Low Priority", color: "green" },
    { id: "medium", name: "Medium Priority", color: "yellow" },
    { id: "high", name: "High Priority", color: "red" },
    { id: "critical", name: "Critical", color: "red" }
  ];

  const zones = [
    { id: "Z001", name: "Douala Central" },
    { id: "Z002", name: "Yaoundé North" },
    { id: "Z003", name: "Douala Port" },
    { id: "Z004", name: "Yaoundé Center" },
    { id: "Z005", name: "Bamenda West" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Incident submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Incident report submitted successfully!");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Report New Incident</h1>
        <p className="text-slate-600 mt-1">Submit details about water distribution issues or incidents</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Incident Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Incident Type</label>
                <div className="grid grid-cols-1 gap-2">
                  {incidentTypes.map((type) => (
                    <div 
                      key={type.id}
                      onClick={() => handleInputChange('type', type.id)}
                      className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.type === type.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{type.name}</span>
                        {formData.type === type.id && (
                          <Badge className="bg-blue-100 text-blue-800">Selected</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Severity Level</label>
                <div className="grid grid-cols-2 gap-2">
                  {severityLevels.map((level) => (
                    <div 
                      key={level.id}
                      onClick={() => handleInputChange('severity', level.id)}
                      className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.severity === level.id 
                          ? 'border-orange-500 bg-orange-50' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-center">
                        <span className="font-medium">{level.name}</span>
                        {formData.severity === level.id && (
                          <Badge className="mt-1 bg-orange-100 text-orange-800 block">Selected</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Location Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Zone</label>
                <select 
                  value={formData.zone}
                  onChange={(e) => handleInputChange('zone', e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {zones.map((zone) => (
                    <option key={zone.id} value={zone.id}>{zone.id} - {zone.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Specific Location</label>
                <textarea
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="Provide detailed location information (street, landmark, coordinates)"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Reporter Name</label>
                <input
                  type="text"
                  value={formData.reportedBy}
                  onChange={(e) => handleInputChange('reportedBy', e.target.value)}
                  placeholder="Your name or ID"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Incident Description</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Provide detailed description of the incident, including any observed symptoms, duration, affected areas, etc."
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
            />

            <div className="flex gap-4">
              <Button type="button" variant="outline" className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                Upload Photos
              </Button>
              <Button type="button" variant="outline" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Add GPS Location
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button type="submit" className="bg-red-600 hover:bg-red-700">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Submit Incident Report
          </Button>
          <Button type="button" variant="outline">
            Save as Draft
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddIncident;
