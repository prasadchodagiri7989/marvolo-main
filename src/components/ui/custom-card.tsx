
import { cn } from "@/lib/utils";
import React from "react";

interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glassMorphism?: boolean;
  elevation?: "none" | "sm" | "md" | "lg";
  noPadding?: boolean;
  border?: boolean;
  animate?: boolean;
}

export function CustomCard({
  children,
  className,
  glassMorphism = false,
  elevation = "md",
  noPadding = false,
  border = true,
  animate = false,
  ...props
}: CustomCardProps) {
  const elevationClasses = {
    none: "shadow-none",
    sm: "shadow-sharp",
    md: "shadow-elevate",
    lg: "shadow-elevate-lg",
  };

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden bg-white dark:bg-gray-900",
        border && "border border-gray-200 dark:border-gray-800",
        !noPadding && "p-5",
        elevationClasses[elevation],
        glassMorphism && 
          "bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg border-white/20 dark:border-gray-800/30",
        animate && "transition-all duration-300 hover:shadow-elevate-lg hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mb-3 flex items-center justify-between gap-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-lg font-semibold leading-none tracking-tight", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-4 flex items-center", className)}
      {...props}
    >
      {children}
    </div>
  );
}
