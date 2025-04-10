
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useTheme } from "@/components/theme/ThemeProvider";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-gray-900 px-4 py-12">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center">
          <img 
            src={theme === "dark" ? "/logo_white.png" : "/logo_black.png"} 
            alt="Logo" 
            className="h-20 w-50 mx-auto"
          />
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
        <Card className="border border-gray-200 shadow-xl bg-card dark:bg-gray-900/90 dark:border-gray-800/50 dark:shadow-xl dark:shadow-black/30">
          <CardContent className="pt-6">
            {children}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
