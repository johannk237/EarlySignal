
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, Info } from "lucide-react";

export function AIChatHeader() {
  return (
    <div className="p-4 border-b bg-card flex items-center justify-between dark:border-gray-800/60 dark:bg-gray-900/90 dark:shadow-md dark:shadow-black/10">
      <div className="flex items-center">
        <Avatar className="h-9 w-9 mr-2 bg-brand-100 dark:bg-brand-900/50">
          <AvatarFallback className="bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
            <Bot className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium text-foreground">Investor AI Assistant</h3>
          <p className="text-xs text-muted-foreground">Powered by EarlySignal</p>
        </div>
      </div>
      <div className="flex items-center">
        <Badge variant="outline" className="mr-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800/50">
          <div className="w-2 h-2 rounded-full bg-green-500 mr-1 animate-pulse"></div>
          <span className="text-xs">Live</span>
        </Badge>
        <Button variant="outline" size="sm" className="text-xs dark:bg-gray-800/80 dark:border-gray-700/60 dark:hover:bg-gray-700/70 dark:text-gray-200">
          <Info className="h-3 w-3 mr-1" />
          Help
        </Button>
      </div>
    </div>
  );
}
