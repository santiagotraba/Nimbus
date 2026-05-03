import { PageHeader } from "@/components/dashboard/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const Settings = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <PageHeader title="Settings" description="Manage your account, preferences and security" />

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid grid-cols-4 w-full max-w-md">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="prefs">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Profile</CardTitle>
              <CardDescription>This information will be displayed on your public profile.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground">AC</AvatarFallback>
                </Avatar>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Upload</Button>
                  <Button variant="ghost" size="sm">Remove</Button>
                </div>
              </div>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="first">First name</Label>
                  <Input id="first" defaultValue="Alex" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="last">Last name</Label>
                  <Input id="last" defaultValue="Carter" />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="alex@nimbus.io" />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" rows={3} defaultValue="Product designer building delightful B2B tools." />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">Save changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Password</CardTitle>
              <CardDescription>Update your password regularly to keep your account secure.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5"><Label>Current password</Label><Input type="password" /></div>
              <div className="space-y-1.5"><Label>New password</Label><Input type="password" /></div>
              <div className="space-y-1.5"><Label>Confirm password</Label><Input type="password" /></div>
              <div className="flex justify-end"><Button>Update password</Button></div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Two-factor authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account.</CardDescription>
            </CardHeader>
            <CardContent>
              <SettingRow title="Authenticator app" desc="Use Google Authenticator, 1Password or similar" defaultChecked />
              <SettingRow title="SMS recovery" desc="Receive codes via SMS as a backup" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Notification preferences</CardTitle>
              <CardDescription>Choose what you'd like to be notified about.</CardDescription>
            </CardHeader>
            <CardContent>
              <SettingRow title="Product updates" desc="New features and improvements" defaultChecked />
              <SettingRow title="Weekly digest" desc="Summary of your team's activity" defaultChecked />
              <SettingRow title="Security alerts" desc="Suspicious sign-ins and account changes" defaultChecked />
              <SettingRow title="Marketing" desc="Tips, offers and case studies" />
              <SettingRow title="Billing receipts" desc="Email me a copy of every invoice" defaultChecked />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prefs" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Preferences</CardTitle>
              <CardDescription>Customize your dashboard experience.</CardDescription>
            </CardHeader>
            <CardContent>
              <SettingRow title="Compact mode" desc="Reduce spacing for denser layouts" />
              <SettingRow title="Reduced motion" desc="Minimize animations across the app" />
              <SettingRow title="Beta features" desc="Access experimental new tools" defaultChecked />
              <SettingRow title="Keyboard shortcuts" desc="Enable global shortcuts like ⌘K" defaultChecked />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

function SettingRow({ title, desc, defaultChecked }: { title: string; desc: string; defaultChecked?: boolean }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
      <div className="pr-4">
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>
      </div>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}

export default Settings;
