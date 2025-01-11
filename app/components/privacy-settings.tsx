'use client'

import { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function PrivacySettings() {
  const [publicProfile, setPublicProfile] = useState(true)
  const [showOnlineStatus, setShowOnlineStatus] = useState(true)

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Privacy Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your privacy preferences.
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="public-profile" className="flex flex-col space-y-1">
            <span>Public Profile</span>
            <span className="font-normal text-sm text-muted-foreground">Allow others to view your profile.</span>
          </Label>
          <Switch
            id="public-profile"
            checked={publicProfile}
            onCheckedChange={setPublicProfile}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="show-online-status" className="flex flex-col space-y-1">
            <span>Show Online Status</span>
            <span className="font-normal text-sm text-muted-foreground">Display when you're active on the platform.</span>
          </Label>
          <Switch
            id="show-online-status"
            checked={showOnlineStatus}
            onCheckedChange={setShowOnlineStatus}
          />
        </div>
      </div>
    </div>
  )
}

