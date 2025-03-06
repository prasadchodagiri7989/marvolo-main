
import React from "react";
import { CustomCard, CardTitle, CardHeader, CardContent } from "../ui/custom-card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, TooltipProps } from "recharts";
import { cn } from "@/lib/utils";

interface ChartData {
  name: string;
  [key: string]: string | number;
}

interface PerformanceChartProps {
  title: string;
  data: ChartData[];
  lines: {
    dataKey: string;
    color: string;
    label?: string;
  }[];
  height?: number;
  className?: string;
}

export default function PerformanceChart({
  title,
  data,
  lines,
  height = 300,
  className,
}: PerformanceChartProps) {
  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
          <p className="font-medium text-sm text-gray-600 dark:text-gray-300 mb-1">{label}</p>
          {payload.map((entry, index) => (
            <div key={`tooltip-${index}`} className="flex items-center justify-between text-sm">
              <span className="flex items-center mr-4">
                <span 
                  className="w-3 h-3 rounded-full mr-1.5" 
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-gray-600 dark:text-gray-400">
                  {entry.name}:
                </span>
              </span>
              <span className="font-medium">{entry.value}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <CustomCard className={cn("overflow-hidden", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }} 
                tickLine={false}
                axisLine={{ stroke: "#eee" }}
              />
              <YAxis 
                tick={{ fontSize: 12 }} 
                tickLine={false}
                axisLine={{ stroke: "#eee" }}
                width={40}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="top" 
                height={36} 
                iconType="circle" 
                iconSize={8}
                wrapperStyle={{ paddingTop: "10px" }}
              />
              {lines.map((line, index) => (
                <Line
                  key={`line-${index}`}
                  type="monotone"
                  dataKey={line.dataKey}
                  name={line.label || line.dataKey}
                  stroke={line.color}
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5, strokeWidth: 0 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </CustomCard>
  );
}
