
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SocialMediaPage from "./pages/SocialMediaPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import CampaignsPage from "./pages/CampaignsPage";
import ContentHubPage from "./pages/ContentHubPage";
import AiAssistantPage from "./pages/AiAssistantPage";
import EmailPage from "./pages/EmailPage";
import ChatbotsPage from "./pages/ChatbotsPage";
import LeadsPage from "./pages/LeadsPage";
import SeoPage from "./pages/SeoPage";
import SettingsPage from "./pages/SettingsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/social-media" element={<SocialMediaPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/content-hub" element={<ContentHubPage />} />
          <Route path="/ai-assistant" element={<AiAssistantPage />} />
          <Route path="/email" element={<EmailPage />} />
          <Route path="/chatbots" element={<ChatbotsPage />} />
          <Route path="/leads" element={<LeadsPage />} />
          <Route path="/seo" element={<SeoPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
