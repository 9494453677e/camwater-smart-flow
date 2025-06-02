
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sensors from "./pages/Sensors";
import Reports from "./pages/Reports";
import NetworkMap from "./pages/NetworkMap";
import AlertsEnhanced from "./pages/AlertsEnhanced";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import GenerateReports from "./pages/GenerateReports";
import AddIncident from "./pages/AddIncident";
import Notifications from "./pages/Notifications";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="sensors" element={<Sensors />} />
            <Route path="reports" element={<Reports />} />
            <Route path="map" element={<NetworkMap />} />
            <Route path="alerts" element={<AlertsEnhanced />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="generate-reports" element={<GenerateReports />} />
            <Route path="add-incident" element={<AddIncident />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
