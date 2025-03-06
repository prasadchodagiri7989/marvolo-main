
import React from "react";
import { CustomCard, CardTitle, CardContent } from "../ui/custom-card";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MetricsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    isPositive: boolean;
  };
  helpText?: string;
  className?: string;
  valuePrefix?: string;
  valueSuffix?: string;
}

export default function MetricsCard({
  title,
  value,
  icon,
  change,
  helpText,
  className,
  valuePrefix = "",
  valueSuffix = "",
}: MetricsCardProps) {
  return (
    <CustomCard
      className={cn(
        "transition-all duration-300 group hover:border-primary/30",
        className
      )}
      elevation="sm"
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <CardTitle className="text-base text-gray-700 dark:text-gray-300 font-medium">
              {title}
            </CardTitle>
            
            {helpText && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="h-3.5 w-3.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs text-xs">
                    {helpText}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          
          <CardContent className="p-0">
            <div className="flex items-baseline space-x-1">
              {valuePrefix && (
                <span className="text-sm text-gray-500">{valuePrefix}</span>
              )}
              <span className="text-2xl font-semibold">{value}</span>
              {valueSuffix && (
                <span className="text-sm text-gray-500">{valueSuffix}</span>
              )}
            </div>
            
            {change && (
              <div className="mt-1 flex items-center">
                <div
                  className={cn(
                    "flex items-center text-xs font-medium",
                    change.isPositive
                      ? "text-marketing-green"
                      : "text-marketing-destructive"
                  )}
                >
                  {change.isPositive ? (
                    <ArrowUp className="mr-1 h-3 w-3" />
                  ) : (
                    <ArrowDown className="mr-1 h-3 w-3" />
                  )}
                  {Math.abs(change.value)}%
                </div>
                <span className="ml-1 text-xs text-gray-500">vs last period</span>
              </div>
            )}
          </CardContent>
        </div>
        
        <div className="rounded-full p-2 bg-marketing-gray-100 dark:bg-gray-800 text-primary">
          {icon}
        </div>
      </div>
    </CustomCard>
  );
}
