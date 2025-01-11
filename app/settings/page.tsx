import { Separator } from "@/components/ui/separator";
import NotificationPreferences from "../components/notification-preferences";
import PrivacySettings from "../components/privacy-settings";
import NotificationList from "../components/notification-list";

export default function Settings() {
  return (
    <div className="space-y-6 p-10 pb-16 block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set preferences.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/4">
          <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
            <a
              href="#notifications"
              className="text-sm font-medium text-primary"
            >
              Notifications
            </a>
            <a
              href="#privacy"
              className="text-sm font-medium text-muted-foreground"
            >
              Privacy
            </a>
          </nav>
        </aside>
        <div className="flex-1 lg:max-w-2xl">
          <NotificationPreferences />
          <Separator className="my-6" />
          <PrivacySettings />
          <Separator className="my-6" />
          <NotificationList />
        </div>
      </div>
    </div>
  );
}
