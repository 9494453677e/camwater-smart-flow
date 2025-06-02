
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Settings, Check, X, AlertTriangle, Info, CheckCircle } from "lucide-react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "alert",
      title: "High Pressure Detected",
      message: "Zone Z001 showing pressure levels above normal threshold",
      time: "5 minutes ago",
      read: false,
      severity: "high"
    },
    {
      id: 2,
      type: "info",
      title: "Maintenance Scheduled",
      message: "Routine maintenance planned for Zone Z003 tomorrow at 8:00 AM",
      time: "2 hours ago",
      read: false,
      severity: "medium"
    },
    {
      id: 3,
      type: "success",
      title: "Issue Resolved",
      message: "Leak in Zone Z002 has been successfully repaired",
      time: "1 day ago",
      read: true,
      severity: "low"
    },
    {
      id: 4,
      type: "alert",
      title: "Sensor Offline",
      message: "Sensor S047 in Bamenda West has gone offline",
      time: "2 days ago",
      read: true,
      severity: "medium"
    }
  ]);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "alert": return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case "info": return <Info className="w-5 h-5 text-blue-600" />;
      case "success": return <CheckCircle className="w-5 h-5 text-green-600" />;
      default: return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Notifications</h1>
          <p className="text-slate-600 mt-1">Stay updated with system alerts and important messages</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={markAllAsRead}>
            <Check className="w-4 h-4 mr-2" />
            Mark All as Read
          </Button>
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{notifications.length}</div>
              <div className="text-sm text-slate-600 mt-1">Total Notifications</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">{unreadCount}</div>
              <div className="text-sm text-slate-600 mt-1">Unread</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">
                {notifications.filter(n => n.type === "alert").length}
              </div>
              <div className="text-sm text-slate-600 mt-1">Alerts</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {notifications.filter(n => n.type === "success").length}
              </div>
              <div className="text-sm text-slate-600 mt-1">Resolved</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Recent Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div 
                key={notification.id}
                className={`p-4 border rounded-lg transition-all hover:shadow-md ${
                  notification.read ? 'bg-white' : 'bg-blue-50 border-blue-200'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    {getNotificationIcon(notification.type)}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-slate-800">{notification.title}</h3>
                        <Badge className={getSeverityColor(notification.severity)}>
                          {notification.severity}
                        </Badge>
                        {!notification.read && (
                          <Badge className="bg-blue-100 text-blue-800">New</Badge>
                        )}
                      </div>
                      <p className="text-slate-600 text-sm mb-2">{notification.message}</p>
                      <span className="text-xs text-slate-500">{notification.time}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    {!notification.read && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => markAsRead(notification.id)}
                      >
                        <Check className="w-3 h-3" />
                      </Button>
                    )}
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => deleteNotification(notification.id)}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Notifications;
