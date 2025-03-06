
import React from "react";
import { CustomCard, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/custom-card";
import MetricsCard from "./MetricsCard";
import PerformanceChart from "./PerformanceChart";
import { BarChart3, Share2, Users, LineChart, Sparkles, Mail, TrendingUp, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurImage } from "../ui/blur-image";

// Sample data
const performanceData = [
  { name: "Jan", Engagement: 2000, Reach: 4400, Conversion: 1200 },
  { name: "Feb", Engagement: 3000, Reach: 5400, Conversion: 1300 },
  { name: "Mar", Engagement: 5000, Reach: 8800, Conversion: 2500 },
  { name: "Apr", Engagement: 4000, Reach: 7800, Conversion: 2300 },
  { name: "May", Engagement: 6000, Reach: 9200, Conversion: 2800 },
  { name: "Jun", Engagement: 7000, Reach: 11000, Conversion: 3800 },
  { name: "Jul", Engagement: 9000, Reach: 12400, Conversion: 4300 },
];

const campaigns = [
  {
    id: 1,
    name: "Summer Sale",
    type: "Instagram + Facebook",
    stats: { impressions: "12.5K", engagement: "8.2%" },
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    status: "Active",
  },
  {
    id: 2,
    name: "Product Launch",
    type: "Google Ads",
    stats: { impressions: "45.7K", engagement: "4.5%" },
    image: "https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    status: "Scheduled",
  },
];

const contentSuggestions = [
  {
    title: "Top 10 Digital Marketing Trends for 2023",
    type: "Blog Post",
    predictedEngagement: "High",
    recommendedPlatforms: ["Blog", "LinkedIn"],
  },
  {
    title: "How to Boost Your Social Media Engagement",
    type: "Video",
    predictedEngagement: "Medium",
    recommendedPlatforms: ["Instagram", "TikTok"],
  },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Your marketing performance at a glance
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2">
              <Clock className="h-4 w-4" />
              <span>Last 30 days</span>
            </Button>
            <Button className="gap-1.5">
              <TrendingUp className="h-4 w-4" />
              <span>Generate Report</span>
            </Button>
          </div>
        </div>

        {/* Metrics cards */}
        <div className="grid gap-5 mb-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <MetricsCard
            title="Social Engagement"
            value="8,521"
            icon={<Share2 className="h-5 w-5" />}
            change={{ value: 12.5, isPositive: true }}
            helpText="Total likes, comments, and shares across all social platforms"
          />
          <MetricsCard
            title="Website Traffic"
            value="36,245"
            icon={<BarChart3 className="h-5 w-5" />}
            change={{ value: 8.3, isPositive: true }}
            helpText="Total visitors to your website"
          />
          <MetricsCard
            title="Leads Generated"
            value="284"
            icon={<Users className="h-5 w-5" />}
            change={{ value: 5.2, isPositive: true }}
            helpText="New potential customers who have shown interest"
          />
          <MetricsCard
            title="Conversion Rate"
            value="3.2"
            valueSuffix="%"
            icon={<LineChart className="h-5 w-5" />}
            change={{ value: 1.8, isPositive: false }}
            helpText="Percentage of visitors who complete a desired action"
          />
        </div>

        {/* Charts section */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <PerformanceChart
              title="Marketing Performance"
              data={performanceData}
              lines={[
                { dataKey: "Engagement", color: "#2196F3", label: "Engagement" },
                { dataKey: "Reach", color: "#4CAF50", label: "Reach" },
                { dataKey: "Conversion", color: "#FFC107", label: "Conversion" },
              ]}
            />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <CustomCard>
              <CardHeader>
                <CardTitle>Active Campaigns</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-3">
                  {campaigns.map((campaign) => (
                    <div
                      key={campaign.id}
                      className="flex items-center gap-4 px-5 py-2 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
                    >
                      <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                        <BlurImage
                          src={campaign.image}
                          alt={campaign.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium truncate">
                          {campaign.name}
                        </h3>
                        <div className="flex items-center mt-0.5">
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {campaign.type}
                          </p>
                          <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                          <span
                            className={`px-1.5 py-0.5 text-xs rounded-full ${
                              campaign.status === "Active"
                                ? "bg-marketing-green-light text-marketing-green-dark"
                                : "bg-marketing-amber-light text-marketing-amber-dark"
                            }`}
                          >
                            {campaign.status}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">
                          {campaign.stats.impressions}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {campaign.stats.engagement} engagement
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="justify-center pt-2 border-t">
                <Button variant="ghost" className="text-sm gap-1">
                  View all campaigns
                  <ChevronRight className="h-3.5 w-3.5" />
                </Button>
              </CardFooter>
            </CustomCard>

            <CustomCard>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="h-4 w-4 mr-2 text-primary" />
                  AI Content Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contentSuggestions.map((suggestion, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary/40 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all cursor-pointer"
                    >
                      <h3 className="font-medium text-sm">{suggestion.title}</h3>
                      <div className="flex items-center justify-between mt-2">
                        <span className="bg-marketing-gray-100 dark:bg-gray-800 text-xs px-2 py-1 rounded">
                          {suggestion.type}
                        </span>
                        <div className="flex items-center gap-1">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              suggestion.predictedEngagement === "High"
                                ? "bg-marketing-green-light text-marketing-green-dark"
                                : "bg-marketing-amber-light text-marketing-amber-dark"
                            }`}
                          >
                            {suggestion.predictedEngagement} Engagement
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-1 mt-2">
                        {suggestion.recommendedPlatforms.map((platform, i) => (
                          <span
                            key={i}
                            className="text-xs text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded px-1.5 py-0.5"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="justify-center pt-2 border-t">
                <Button variant="ghost" className="text-sm gap-1">
                  Generate more suggestions
                  <Sparkles className="h-3.5 w-3.5" />
                </Button>
              </CardFooter>
            </CustomCard>
          </div>
        </div>
      </div>
    </div>
  );
}
