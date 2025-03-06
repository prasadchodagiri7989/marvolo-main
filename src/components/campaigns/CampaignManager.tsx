
import React from "react";
import { 
  CustomCard, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardFooter 
} from "../ui/custom-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  BarChart3, 
  Plus, 
  Calendar,
  Users,
  Target,
  DollarSign,
  ChevronRight,
  Clock,
  AlertCircle,
  CheckCircle2,
  Tag,
  Search,
  Filter,
  MoreHorizontal,
  TrendingUp,
  TrendingDown,
  BellRing,
  LineChart,
  Eye
} from "lucide-react";
import { BlurImage } from "../ui/blur-image";
import { cn } from "@/lib/utils";

// Sample data
const campaigns = [
  {
    id: 1,
    name: "Summer Collection Launch",
    status: "active",
    budget: "$5,000",
    spent: "$2,345",
    performance: {
      roi: 2.8,
      impressions: "45.3K",
      clicks: "3.2K",
      ctr: "4.2%",
      conversions: 128,
      trend: "up",
    },
    platforms: ["facebook", "instagram", "google"],
    startDate: "2023-10-10",
    endDate: "2023-11-10",
    progress: 45,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Fall Promotion",
    status: "scheduled",
    budget: "$3,500",
    spent: "$0",
    performance: {
      roi: 0,
      impressions: "0",
      clicks: "0",
      ctr: "0%",
      conversions: 0,
      trend: "neutral",
    },
    platforms: ["google", "facebook"],
    startDate: "2023-11-05",
    endDate: "2023-12-05",
    progress: 0,
    image: "https://images.unsplash.com/photo-1598209279122-8e8cafaceb7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Black Friday Special",
    status: "draft",
    budget: "$10,000",
    spent: "$0",
    performance: {
      roi: 0,
      impressions: "0",
      clicks: "0",
      ctr: "0%",
      conversions: 0,
      trend: "neutral",
    },
    platforms: ["google", "facebook", "instagram"],
    startDate: "2023-11-20",
    endDate: "2023-11-30",
    progress: 0,
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Holiday Gift Guide",
    status: "completed",
    budget: "$7,500",
    spent: "$7,500",
    performance: {
      roi: 3.4,
      impressions: "126K",
      clicks: "8.4K",
      ctr: "5.8%",
      conversions: 342,
      trend: "up",
    },
    platforms: ["facebook", "instagram", "google"],
    startDate: "2023-09-01",
    endDate: "2023-10-01",
    progress: 100,
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
];

// Sample ads data
const ads = [
  {
    id: 1,
    name: "Summer Banner Ad",
    platform: "facebook",
    type: "Image",
    status: "Active",
    spend: "$450",
    impressions: "25.4K",
    clicks: 850,
    conversions: 32,
    image: "https://images.unsplash.com/photo-1550096141-3fec09ae2993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    ctr: "3.35%",
  },
  {
    id: 2,
    name: "Product Showcase",
    platform: "instagram",
    type: "Carousel",
    status: "Active",
    spend: "$820",
    impressions: "38.9K",
    clicks: 1245,
    conversions: 58,
    image: "https://images.unsplash.com/photo-1519608182146-4edb00eb997b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    ctr: "3.20%",
  },
  {
    id: 3,
    name: "Customer Testimonial",
    platform: "google",
    type: "Video",
    status: "Paused",
    spend: "$620",
    impressions: "18.2K",
    clicks: 540,
    conversions: 24,
    image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    ctr: "2.97%",
  },
];

const platformIcons = {
  facebook: <Facebook className="h-4 w-4" />,
  instagram: <Instagram className="h-4 w-4" />,
  twitter: <Twitter className="h-4 w-4" />,
  linkedin: <Linkedin className="h-4 w-4" />,
  google: <Search className="h-4 w-4" />,
};

export default function CampaignManager() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Campaigns</h1>
          <p className="text-muted-foreground mt-1">
            Create, manage and track your marketing campaigns
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            <span>New Campaign</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
        <div className="lg:col-span-2 xl:col-span-3">
          <CustomCard className="overflow-hidden">
            <CardHeader>
              <CardTitle>
                <Tabs defaultValue="active" className="w-full">
                  <TabsList className="w-full bg-transparent grid grid-cols-4 mb-6">
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                    <TabsTrigger value="draft">Drafts</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-5 p-1">
                {campaigns.map((campaign) => (
                  <div
                    key={campaign.id}
                    className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900 transition-all hover:border-primary/30 hover:shadow-sm"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="relative h-48 md:h-auto md:w-48 flex-shrink-0">
                        <BlurImage
                          src={campaign.image}
                          alt={campaign.name}
                          className="object-cover h-full w-full"
                        />
                        <div className="absolute top-2 left-2">
                          <span
                            className={cn(
                              "px-2 py-1 text-xs font-medium rounded-full",
                              campaign.status === "active" && "bg-green-100 text-green-700",
                              campaign.status === "scheduled" && "bg-blue-100 text-blue-700",
                              campaign.status === "draft" && "bg-gray-100 text-gray-700",
                              campaign.status === "completed" && "bg-purple-100 text-purple-700"
                            )}
                          >
                            {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 flex-grow">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{campaign.name}</h3>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Edit Campaign</DropdownMenuItem>
                              <DropdownMenuItem>Duplicate</DropdownMenuItem>
                              <DropdownMenuItem>View Analytics</DropdownMenuItem>
                              <DropdownMenuItem>Archive</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        
                        <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          {campaign.startDate} - {campaign.endDate}
                        </div>
                        
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {campaign.platforms.map((platform) => (
                            <div
                              key={platform}
                              className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 py-1 px-2 rounded text-xs"
                            >
                              {platformIcons[platform as keyof typeof platformIcons]}
                              <span>
                                {platform.charAt(0).toUpperCase() + platform.slice(1)}
                              </span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                          <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Budget</div>
                            <div className="font-medium">{campaign.budget}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Spent</div>
                            <div className="font-medium">{campaign.spent}</div>
                          </div>
                          {campaign.status !== "draft" && campaign.status !== "scheduled" && (
                            <>
                              <div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">ROI</div>
                                <div className="font-medium flex items-center">
                                  {campaign.performance.roi}x
                                  {campaign.performance.trend === "up" ? (
                                    <TrendingUp className="h-3.5 w-3.5 ml-1 text-green-500" />
                                  ) : campaign.performance.trend === "down" ? (
                                    <TrendingDown className="h-3.5 w-3.5 ml-1 text-red-500" />
                                  ) : null}
                                </div>
                              </div>
                              <div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Conversions</div>
                                <div className="font-medium">
                                  {campaign.performance.conversions}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                        
                        <div className="mt-4">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              Progress
                            </span>
                            <span className="text-xs font-medium">
                              {campaign.progress}%
                            </span>
                          </div>
                          <Progress value={campaign.progress} className="h-1.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </CustomCard>
        </div>

        <div className="space-y-6">
          <CustomCard>
            <CardHeader>
              <CardTitle className="text-lg font-medium flex items-center">
                <BellRing className="h-4 w-4 mr-2 text-marketing-amber" />
                Campaign Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <div className="space-y-1">
                <div className="flex items-start gap-2 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <div className="h-2 w-2 mt-1.5 rounded-full bg-marketing-amber"></div>
                  <div>
                    <p className="text-sm">
                      "Summer Collection" has used 75% of its budget
                    </p>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      2 hours ago
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <div className="h-2 w-2 mt-1.5 rounded-full bg-marketing-green"></div>
                  <div>
                    <p className="text-sm">
                      "Fall Promotion" campaign is scheduled to start in 5 days
                    </p>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      1 day ago
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <div className="h-2 w-2 mt-1.5 rounded-full bg-marketing-blue"></div>
                  <div>
                    <p className="text-sm">
                      "Product Launch" campaign performance exceeds targets
                    </p>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      3 days ago
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </CustomCard>

          <CustomCard>
            <CardHeader>
              <CardTitle className="text-lg font-medium flex items-center">
                <LineChart className="h-4 w-4 mr-2 text-marketing-green" />
                Campaign Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Total Reach</div>
                  <div className="font-medium">245.8K</div>
                </div>
                <Progress value={75} className="h-1.5" />
              </div>
              <div className="space-y-2 mt-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Average Engagement</div>
                  <div className="font-medium">4.8%</div>
                </div>
                <Progress value={48} className="h-1.5" />
              </div>
              <div className="space-y-2 mt-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Conversion Rate</div>
                  <div className="font-medium">3.2%</div>
                </div>
                <Progress value={32} className="h-1.5" />
              </div>
              <div className="space-y-2 mt-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Average ROI</div>
                  <div className="font-medium">2.9x</div>
                </div>
                <Progress value={72} className="h-1.5" />
              </div>
            </CardContent>
          </CustomCard>
        </div>
      </div>

      <div className="mt-4">
        <CustomCard>
          <CardHeader>
            <CardTitle className="text-lg font-medium flex items-center">
              <Eye className="h-4 w-4 mr-2 text-marketing-blue" />
              Active Ads
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ads.map((ad) => (
                <div
                  key={ad.id}
                  className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden group transition-all hover:border-primary/30 hover:shadow-sm"
                >
                  <div className="relative h-40 overflow-hidden">
                    <BlurImage
                      src={ad.image}
                      alt={ad.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2">
                      <span
                        className={cn(
                          "px-2 py-1 text-xs font-medium rounded-full",
                          ad.status === "Active" ?
                            "bg-green-100 text-green-700" :
                            "bg-amber-100 text-amber-700"
                        )}
                      >
                        {ad.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium truncate">{ad.name}</h3>
                      <div
                        className="flex items-center gap-1 text-xs"
                      >
                        {platformIcons[ad.platform as keyof typeof platformIcons]}
                        <span>
                          {ad.platform.charAt(0).toUpperCase() + ad.platform.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-gray-100 dark:bg-gray-800 text-xs px-2 py-0.5 rounded">
                        {ad.type}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Spend: {ad.spend}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded p-2">
                        <div className="text-xs text-gray-500 dark:text-gray-400">Impressions</div>
                        <div className="font-medium text-sm">{ad.impressions}</div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded p-2">
                        <div className="text-xs text-gray-500 dark:text-gray-400">CTR</div>
                        <div className="font-medium text-sm">{ad.ctr}</div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded p-2">
                        <div className="text-xs text-gray-500 dark:text-gray-400">Conversions</div>
                        <div className="font-medium text-sm">{ad.conversions}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="justify-center border-t pt-3">
            <Button variant="ghost" className="text-sm gap-1">
              View all ads
              <ChevronRight className="h-3.5 w-3.5" />
            </Button>
          </CardFooter>
        </CustomCard>
      </div>
    </div>
  );
}
