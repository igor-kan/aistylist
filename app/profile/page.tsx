"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { User, Bell, Palette, Shield, CreditCard, MapPin } from "lucide-react"

export default function ProfilePage() {
  const [notifications, setNotifications] = useState({
    styleUpdates: true,
    priceAlerts: true,
    weatherReminders: true,
    socialActivity: false,
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Profile & Settings</h1>
            <p className="text-slate-600 mt-2">Manage your account and personalize your experience</p>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="style">Style Preferences</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Profile Photo
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <User className="h-16 w-16 text-slate-400" />
                    </div>
                    <Button variant="outline" className="mb-2">
                      Upload Photo
                    </Button>
                    <p className="text-xs text-slate-500">JPG, PNG up to 5MB</p>
                  </CardContent>
                </Card>

                <div className="lg:col-span-2">
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" defaultValue="Sarah" />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" defaultValue="Johnson" />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="sarah.johnson@email.com" />
                        </div>

                        <div>
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea
                            id="bio"
                            placeholder="Tell us about your style..."
                            defaultValue="Fashion enthusiast with a love for minimalist aesthetics and sustainable fashion."
                            className="min-h-[80px]"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="location">Location</Label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                              <Input id="location" placeholder="New York, NY" className="pl-10" />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="timezone">Timezone</Label>
                            <Select defaultValue="est">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="est">Eastern Time</SelectItem>
                                <SelectItem value="cst">Central Time</SelectItem>
                                <SelectItem value="mst">Mountain Time</SelectItem>
                                <SelectItem value="pst">Pacific Time</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <Button>Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="style" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Palette className="h-5 w-5 mr-2" />
                      Style Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label>Body Shape</Label>
                        <Select defaultValue="hourglass">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pear">Pear</SelectItem>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="hourglass">Hourglass</SelectItem>
                            <SelectItem value="rectangle">Rectangle</SelectItem>
                            <SelectItem value="inverted-triangle">Inverted Triangle</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Skin Tone</Label>
                        <Select defaultValue="warm">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="warm">Warm</SelectItem>
                            <SelectItem value="cool">Cool</SelectItem>
                            <SelectItem value="neutral">Neutral</SelectItem>
                            <SelectItem value="olive">Olive</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Preferred Fit</Label>
                        <Select defaultValue="tailored">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="oversized">Oversized</SelectItem>
                            <SelectItem value="relaxed">Relaxed</SelectItem>
                            <SelectItem value="tailored">Tailored</SelectItem>
                            <SelectItem value="fitted">Fitted</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Style Archetypes</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {["Minimalist", "Classic", "Bohemian", "Edgy", "Romantic"].map((style) => (
                            <Badge key={style} variant="outline" className="cursor-pointer hover:bg-slate-100">
                              {style}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label>Budget Range</Label>
                        <Select defaultValue="mid">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="budget">Budget ($0-100)</SelectItem>
                            <SelectItem value="mid">Mid-range ($100-500)</SelectItem>
                            <SelectItem value="luxury">Luxury ($500+)</SelectItem>
                            <SelectItem value="mixed">Mixed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Sustainability Priority</Label>
                        <Select defaultValue="high">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Color Preferences</Label>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {[
                            { name: "Neutrals", selected: true },
                            { name: "Earth Tones", selected: true },
                            { name: "Jewel Tones", selected: false },
                            { name: "Pastels", selected: false },
                            { name: "Brights", selected: false },
                            { name: "Monochrome", selected: true },
                          ].map((color) => (
                            <div key={color.name} className="flex items-center space-x-2">
                              <Switch checked={color.selected} />
                              <span className="text-sm">{color.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button>Update Preferences</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="notifications" className="mt-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    Notification Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-slate-900">Style Updates</h4>
                        <p className="text-sm text-slate-600">New AI style suggestions and trends</p>
                      </div>
                      <Switch
                        checked={notifications.styleUpdates}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, styleUpdates: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-slate-900">Price Alerts</h4>
                        <p className="text-sm text-slate-600">Notifications about sales and price drops</p>
                      </div>
                      <Switch
                        checked={notifications.priceAlerts}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, priceAlerts: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-slate-900">Weather Reminders</h4>
                        <p className="text-sm text-slate-600">Outfit suggestions based on weather</p>
                      </div>
                      <Switch
                        checked={notifications.weatherReminders}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, weatherReminders: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-slate-900">Social Activity</h4>
                        <p className="text-sm text-slate-600">Likes, comments, and shares on your looks</p>
                      </div>
                      <Switch
                        checked={notifications.socialActivity}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, socialActivity: checked })}
                      />
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="font-medium text-slate-900 mb-3">Delivery Method</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Switch defaultChecked />
                          <span className="text-sm">Email notifications</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch />
                          <span className="text-sm">Push notifications</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch />
                          <span className="text-sm">SMS notifications</span>
                        </div>
                      </div>
                    </div>

                    <Button>Save Notification Settings</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="mt-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Privacy & Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-3">Profile Visibility</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Make profile public</span>
                          <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Show wardrobe to others</span>
                          <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Allow look sharing</span>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-slate-900 mb-3">Data & Analytics</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Share anonymous usage data</span>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Personalized recommendations</span>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Location-based features</span>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-slate-900 mb-3">Account Security</h4>
                      <div className="space-y-3">
                        <Button variant="outline">Change Password</Button>
                        <Button variant="outline">Enable Two-Factor Authentication</Button>
                        <Button variant="outline">Download My Data</Button>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <Button variant="destructive">Delete Account</Button>
                      <p className="text-xs text-slate-500 mt-2">
                        This action cannot be undone. All your data will be permanently deleted.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="billing" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Subscription
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-medium text-purple-900">StyleAI Pro</h4>
                        <p className="text-sm text-purple-700">Advanced AI styling and analytics</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-lg font-bold text-purple-900">$19.99/month</span>
                          <Badge className="bg-purple-600">Active</Badge>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-medium text-slate-900">Features Included:</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Unlimited AI style suggestions</li>
                          <li>• Advanced analytics dashboard</li>
                          <li>• Priority customer support</li>
                          <li>• Early access to new features</li>
                          <li>• Resale value tracking</li>
                        </ul>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline">Change Plan</Button>
                        <Button variant="outline">Cancel Subscription</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Billing History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { date: "Jan 15, 2024", amount: "$19.99", status: "Paid" },
                        { date: "Dec 15, 2023", amount: "$19.99", status: "Paid" },
                        { date: "Nov 15, 2023", amount: "$19.99", status: "Paid" },
                      ].map((bill, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 border border-slate-200 rounded-lg"
                        >
                          <div>
                            <p className="font-medium text-slate-900">{bill.amount}</p>
                            <p className="text-sm text-slate-600">{bill.date}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                              {bill.status}
                            </Badge>
                            <Button variant="ghost" size="sm" className="ml-2">
                              Download
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200">
                      <h5 className="font-medium text-slate-900 mb-2">Payment Method</h5>
                      <div className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg">
                        <div className="w-8 h-5 bg-slate-300 rounded"></div>
                        <span className="text-sm">•••• •••• •••• 4242</span>
                        <Button variant="ghost" size="sm">
                          Update
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
