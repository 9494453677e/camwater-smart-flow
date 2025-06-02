
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Map, Layers, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NetworkMap = () => {
  const { toast } = useToast();
  const [showLayers, setShowLayers] = useState(false);
  const [liveDataEnabled, setLiveDataEnabled] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleLoadMap = () => {
    setMapLoaded(true);
    toast({
      title: "Map Loading",
      description: "Interactive network map is loading...",
    });
    // Simulate map loading
    setTimeout(() => {
      toast({
        title: "Map Loaded",
        description: "Interactive network map loaded successfully!",
      });
    }, 2000);
  };

  const toggleLayers = () => {
    setShowLayers(!showLayers);
    toast({
      title: showLayers ? "Layers Hidden" : "Layers Shown",
      description: showLayers ? "Map layers have been hidden" : "Map layers are now visible",
    });
  };

  const toggleLiveData = () => {
    setLiveDataEnabled(!liveDataEnabled);
    toast({
      title: liveDataEnabled ? "Live Data Disabled" : "Live Data Enabled",
      description: liveDataEnabled ? "Real-time data updates disabled" : "Real-time data updates enabled",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Network Map</h1>
          <p className="text-slate-600 mt-1">Interactive water distribution network visualization</p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant={showLayers ? "default" : "outline"} 
            size="sm"
            onClick={toggleLayers}
          >
            <Layers className="w-4 h-4 mr-2" />
            Layers {showLayers && "✓"}
          </Button>
          <Button 
            variant={liveDataEnabled ? "default" : "outline"} 
            size="sm"
            onClick={toggleLiveData}
          >
            <Zap className="w-4 h-4 mr-2" />
            Live Data {liveDataEnabled && "✓"}
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
                {liveDataEnabled && <Badge className="bg-green-100 text-green-800">Live</Badge>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`h-96 rounded-lg border-2 border-dashed flex items-center justify-center transition-all duration-300 ${
                mapLoaded 
                  ? 'bg-gradient-to-br from-green-100 to-blue-100 border-green-300' 
                  : 'bg-gradient-to-br from-blue-100 to-teal-100 border-blue-300'
              }`}>
                <div className="text-center">
                  <Map className={`w-16 h-16 mx-auto mb-4 ${mapLoaded ? 'text-green-500' : 'text-blue-400'}`} />
                  <h3 className="text-xl font-semibold text-slate-700 mb-2">
                    {mapLoaded ? 'Interactive Map Loaded' : 'Interactive Map'}
                  </h3>
                  <p className="text-slate-600 max-w-md mb-4">
                    {mapLoaded 
                      ? 'Network visualization with real-time sensor data, pipe status, and flow indicators.'
                      : 'Real-time visualization of water distribution network with sensor locations, pipe status, and flow direction indicators.'
                    }
                  </p>
                  {!mapLoaded && (
                    <Button 
                      onClick={handleLoadMap}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Load Map View
                    </Button>
                  )}
                  {mapLoaded && (
                    <div className="space-y-2">
                      <div className="text-sm text-green-600 font-medium">✓ Map Active</div>
                      {liveDataEnabled && <div className="text-sm text-blue-600">📡 Live Data Streaming</div>}
                      {showLayers && <div className="text-sm text-purple-600">🗂️ All Layers Visible</div>}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Map Legend
                {showLayers && <Badge className="ml-2 bg-purple-100 text-purple-800">Active</Badge>}
              </CardTitle>
            </CardHeader>
            <CardContent className={`space-y-3 transition-opacity ${showLayers ? 'opacity-100' : 'opacity-50'}`}>
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
