
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Map, Layers, Zap } from "lucide-react";

const NetworkMap = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Network Map</h1>
          <p className="text-slate-600 mt-1">Interactive water distribution network visualization</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Layers className="w-4 h-4 mr-2" />
            Layers
          </Button>
          <Button variant="outline" size="sm">
            <Zap className="w-4 h-4 mr-2" />
            Live Data
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="w-5 h-5" />
                Distribution Network - Cameroon Urban Centers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg border-2 border-dashed border-blue-300 flex items-center justify-center">
                <div className="text-center">
                  <Map className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-700 mb-2">Interactive Map</h3>
                  <p className="text-slate-600 max-w-md">
                    Real-time visualization of water distribution network with sensor locations, 
                    pipe status, and flow direction indicators.
                  </p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                    Load Map View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Map Legend</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-sm">Operational Zones</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">Warning Areas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="text-sm">Critical Issues</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-sm">Active Sensors</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-1 bg-slate-600"></div>
                <span className="text-sm">Main Pipelines</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Zone Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Douala Central</span>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  Operational
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Yaoundé North</span>
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                  Warning
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Douala Port</span>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  Operational
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Yaoundé Center</span>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  Maintenance
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Bamenda West</span>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  Operational
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NetworkMap;
