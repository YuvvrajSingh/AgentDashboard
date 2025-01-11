'use client'

import { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function NotificationPreferences() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsAlerts, setSmsAlerts] = useState(false)
  const [inAppNotifications, setInAppNotifications] = useState(true)

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notification Preferences</h3>
        <p className="text-sm text-muted-foreground">
          Configure how you receive notifications.
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="email-notifications" className="flex flex-col space-y-1">
            <span>Email Notifications</span>
            <span className="font-normal text-sm text-muted-foreground">Receive notifications via email.</span>
          </Label>
          <Switch
            id="email-notifications"
            checked={emailNotifications}
            onCheckedChange={setEmailNotifications}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="sms-alerts" className="flex flex-col space-y-1">
            <span>SMS Alerts</span>
            <span className="font-normal text-sm text-muted-foreground">Receive important alerts via SMS.</span>
          </Label>
          <Switch
            id="sms-alerts"
            checked={smsAlerts}
            onCheckedChange={setSmsAlerts}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="in-app-notifications" className="flex flex-col space-y-1">
            <span>In-App Notifications</span>
            <span className="font-normal text-sm text-muted-foreground">Receive notifications within the app.</span>
          </Label>
          <Switch
            id="in-app-notifications"
            checked={inAppNotifications}
            onCheckedChange={setInAppNotifications}
          />
        </div>
      </div>
    </div>
  )
}

