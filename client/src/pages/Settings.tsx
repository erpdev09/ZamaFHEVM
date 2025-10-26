import { Key, Shield, Bell, Palette } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Settings() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-2">
            Configure your FHE Analytics preferences
          </p>
        </div>

        {/* Appearance */}
        <Card data-testid="card-appearance">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-primary/10">
                <Palette className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize the look and feel</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Theme</Label>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark mode
                </p>
              </div>
              <ThemeToggle />
            </div>
          </CardContent>
        </Card>

        {/* FHE Keys */}
        <Card data-testid="card-fhe-keys">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-primary/10">
                <Key className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>FHE Keys</CardTitle>
                <CardDescription>
                  Manage encryption keys for homomorphic operations
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Active Key Fingerprint</Label>
                <Input
                  value="sha256:a7f8b9c2d4e5f6g7h8i9j0k1l2m3n4o5"
                  readOnly
                  className="font-mono text-sm"
                  data-testid="input-key-fingerprint"
                />
              </div>
              <div className="flex gap-3">
                <Button variant="outline" data-testid="button-rotate-key">
                  Rotate Key
                </Button>
                <Button variant="outline" data-testid="button-download-public-key">
                  Download Public Key
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card data-testid="card-privacy">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>Control data handling and privacy settings</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Retain Encrypted Aggregates</Label>
                <p className="text-sm text-muted-foreground">
                  Keep encrypted ciphertext after computing aggregates
                </p>
              </div>
              <Switch defaultChecked data-testid="switch-retain-encrypted" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>On-Chain Anchoring</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically anchor daily aggregates to Sepolia
                </p>
              </div>
              <Switch defaultChecked data-testid="switch-anchoring" />
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Data Retention</Label>
              <Select defaultValue="90">
                <SelectTrigger data-testid="select-retention">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 days</SelectItem>
                  <SelectItem value="90">90 days</SelectItem>
                  <SelectItem value="180">180 days</SelectItem>
                  <SelectItem value="365">1 year</SelectItem>
                  <SelectItem value="forever">Forever</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card data-testid="card-notifications">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-primary/10">
                <Bell className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Manage notification preferences</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Daily Summary</Label>
                <p className="text-sm text-muted-foreground">
                  Receive daily analytics summary email
                </p>
              </div>
              <Switch data-testid="switch-daily-summary" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Anomaly Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified of unusual traffic patterns
                </p>
              </div>
              <Switch defaultChecked data-testid="switch-anomaly-alerts" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
