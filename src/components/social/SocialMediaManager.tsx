
import React from "react";
import { CustomCard, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/custom-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlurImage } from "../ui/blur-image";
import { 
  Calendar, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Plus, 
  Twitter, 
  MessageSquare, 
  Heart, 
  Repeat2, 
  BarChart3,
  Share,
  Clock,
  Sparkles,
  Check,
  X,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Sample data
const scheduledPosts = [
  {
    id: 1,
    content: "Excited to announce our new product launch! Stay tuned for more details. #ProductLaunch #Innovation",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    platforms: ["instagram", "facebook", "twitter"],
    scheduledFor: "2023-10-25T14:00:00Z",
  },
  {
    id: 2,
    content: "Join our webinar on 'Digital Marketing Trends 2023' and learn the latest strategies to grow your business online.",
    platforms: ["linkedin", "facebook"],
    scheduledFor: "2023-10-27T16:30:00Z",
  },
];

const recentPosts = [
  {
    id: 1,
    platform: "instagram",
    content: "Check out our new office space! We're excited to welcome our team to this inspiring environment.",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    stats: {
      likes: 243,
      comments: 36,
      shares: 12,
    },
    publishedAt: "2023-10-20T09:30:00Z",
  },
  {
    id: 2,
    platform: "linkedin",
    content: "We're hiring! Join our marketing team and help shape the future of digital advertising. Apply through the link in our bio.",
    stats: {
      likes: 87,
      comments: 14,
      shares: 23,
    },
    publishedAt: "2023-10-18T11:15:00Z",
  },
];

const platformIcons = {
  instagram: <Instagram className="h-4 w-4" />,
  facebook: <Facebook className="h-4 w-4" />,
  twitter: <Twitter className="h-4 w-4" />,
  linkedin: <Linkedin className="h-4 w-4" />,
};

const platformColors = {
  instagram: "bg-purple-100 text-purple-700 border-purple-200",
  facebook: "bg-blue-100 text-blue-700 border-blue-200",
  twitter: "bg-sky-100 text-sky-700 border-sky-200",
  linkedin: "bg-blue-100 text-blue-700 border-blue-200",
};

export default function SocialMediaManager() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Social Media</h1>
          <p className="text-muted-foreground mt-1">
            Schedule, monitor, and analyze your social media posts
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          <span>Create Post</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="scheduled" className="w-full">
            <TabsList className="w-full mb-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-1 rounded-lg shadow-sm">
              <TabsTrigger className="flex-1" value="scheduled">
                Scheduled
              </TabsTrigger>
              <TabsTrigger className="flex-1" value="published">
                Published
              </TabsTrigger>
              <TabsTrigger className="flex-1" value="drafts">
                Drafts
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="scheduled" className="mt-0">
              <CustomCard>
                <CardHeader>
                  <CardTitle className="text-lg font-medium flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-marketing-blue" />
                    Upcoming Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {scheduledPosts.map((post) => (
                      <div
                        key={post.id}
                        className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden group transition-all hover:border-primary/40 hover:shadow-sm"
                      >
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-1.5">
                              {post.platforms.map((platform) => (
                                <div
                                  key={platform}
                                  className={cn(
                                    "flex items-center gap-1 px-2 py-1 rounded-full border text-xs font-medium",
                                    platformColors[platform as keyof typeof platformColors]
                                  )}
                                >
                                  {platformIcons[platform as keyof typeof platformIcons]}
                                  <span className="hidden sm:inline">
                                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                  </span>
                                </div>
                              ))}
                            </div>
                            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                              <Clock className="h-3.5 w-3.5 mr-1" />
                              {formatDate(post.scheduledFor)}
                            </div>
                          </div>
                          
                          <p className="text-sm mb-3">{post.content}</p>
                          
                          {post.image && (
                            <div className="relative h-44 rounded-lg overflow-hidden mb-3">
                              <BlurImage
                                src={post.image}
                                alt="Post preview"
                                className="object-cover w-full h-full"
                              />
                            </div>
                          )}
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-800/50 px-4 py-2 flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm" className="h-8">
                              <Share className="h-3.5 w-3.5 mr-1.5" />
                              Post Now
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Sparkles className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-green-600">
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="justify-center border-t pt-3">
                  <Button variant="ghost" className="text-sm">
                    View all scheduled posts
                  </Button>
                </CardFooter>
              </CustomCard>
            </TabsContent>
            
            <TabsContent value="published" className="mt-0">
              <CustomCard>
                <CardHeader>
                  <CardTitle className="text-lg font-medium flex items-center">
                    <BarChart3 className="h-4 w-4 mr-2 text-marketing-green" />
                    Recent Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div
                        key={post.id}
                        className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden transition-all hover:border-primary/40 hover:shadow-sm"
                      >
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div
                              className={cn(
                                "flex items-center gap-1 px-2 py-1 rounded-full border text-xs font-medium",
                                platformColors[post.platform as keyof typeof platformColors]
                              )}
                            >
                              {platformIcons[post.platform as keyof typeof platformIcons]}
                              <span>
                                {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
                              </span>
                            </div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm">
                              {formatDate(post.publishedAt)}
                            </div>
                          </div>
                          
                          <p className="text-sm mb-3">{post.content}</p>
                          
                          {post.image && (
                            <div className="relative h-44 rounded-lg overflow-hidden mb-3">
                              <BlurImage
                                src={post.image}
                                alt="Post preview"
                                className="object-cover w-full h-full"
                              />
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between pt-2 border-t">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center text-gray-500 dark:text-gray-400">
                                <Heart className="h-4 w-4 mr-1.5" />
                                <span className="text-sm">{post.stats.likes}</span>
                              </div>
                              <div className="flex items-center text-gray-500 dark:text-gray-400">
                                <MessageSquare className="h-4 w-4 mr-1.5" />
                                <span className="text-sm">{post.stats.comments}</span>
                              </div>
                              <div className="flex items-center text-gray-500 dark:text-gray-400">
                                <Repeat2 className="h-4 w-4 mr-1.5" />
                                <span className="text-sm">{post.stats.shares}</span>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8">
                              <BarChart3 className="h-3.5 w-3.5 mr-1.5" />
                              Insights
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="justify-center border-t pt-3">
                  <Button variant="ghost" className="text-sm">
                    View all published posts
                  </Button>
                </CardFooter>
              </CustomCard>
            </TabsContent>
            
            <TabsContent value="drafts" className="mt-0">
              <CustomCard className="min-h-[200px] flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                      <FileText className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">No drafts yet</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4 max-w-md">
                    Create and save posts as drafts to work on them later
                  </p>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    <span>Create Draft</span>
                  </Button>
                </div>
              </CustomCard>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <CustomCard>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Connected Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Facebook className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Facebook</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Business Page
                      </p>
                    </div>
                  </div>
                  <div className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                    Connected
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Instagram</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Business Account
                      </p>
                    </div>
                  </div>
                  <div className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                    Connected
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <Twitter className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Twitter</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Profile
                      </p>
                    </div>
                  </div>
                  <div className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                    Connected
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">LinkedIn</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Company Page
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8">
                    Connect
                  </Button>
                </div>
              </div>
            </CardContent>
          </CustomCard>

          <CustomCard>
            <CardHeader>
              <CardTitle className="text-lg font-medium flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-primary" />
                Content Calendar
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-7 gap-1 p-4">
                {Array.from({ length: 7 }).map((_, dayIndex) => (
                  <div key={dayIndex} className="text-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"][dayIndex]}
                    </div>
                    <div 
                      className={cn(
                        "h-8 w-8 rounded-full flex items-center justify-center mx-auto text-xs",
                        dayIndex === 3 && "bg-primary text-white",
                        dayIndex === 5 && "bg-marketing-amber-light text-marketing-amber-dark",
                        dayIndex !== 3 && dayIndex !== 5 && "hover:bg-gray-100 dark:hover:bg-gray-800"
                      )}
                    >
                      {dayIndex + 22}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-800 p-4">
                <div className="text-sm font-medium mb-2">Today's Schedule</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <div className="h-2 w-2 rounded-full bg-marketing-blue"></div>
                    <span className="text-sm">10:00 AM - Product Video</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <div className="h-2 w-2 rounded-full bg-marketing-amber"></div>
                    <span className="text-sm">2:30 PM - Customer Testimonial</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-center border-t pt-3">
              <Button variant="ghost" className="text-sm">
                View full calendar
              </Button>
            </CardFooter>
          </CustomCard>
        </div>
      </div>
    </div>
  );
}
