
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Bot, 
  ChevronRight, 
  Info, 
  Mic, 
  MicOff, 
  RefreshCw, 
  Send, 
  User
} from "lucide-react";

type MessageType = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

interface AIFeedbackChatProps {
  onComplete?: (conversation: MessageType[]) => void;
}

export function AIFeedbackChat({ onComplete }: AIFeedbackChatProps) {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi there! I'm your investor AI assistant. I'll ask you questions about your startup to help you refine your pitch and prepare for investor conversations. Let's start - could you tell me briefly about your startup idea?",
      timestamp: new Date(),
    },
  ]);
  
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage = {
      id: Date.now().toString(),
      role: "user" as const,
      content: input,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      let aiResponse;
      
      // Different responses based on conversation state
      if (messages.length === 1) {
        aiResponse = {
          id: Date.now().toString(),
          role: "assistant" as const,
          content: "Thanks for sharing! What problem are you solving with this startup? Who experiences this problem most acutely?",
          timestamp: new Date(),
        };
      } else if (messages.length === 3) {
        aiResponse = {
          id: Date.now().toString(),
          role: "assistant" as const,
          content: "Great problem statement. Now tell me about your solution - how does it work and what makes it different from existing alternatives?",
          timestamp: new Date(),
        };
      } else if (messages.length === 5) {
        aiResponse = {
          id: Date.now().toString(),
          role: "assistant" as const,
          content: "Interesting solution! What's your target market size, and how do you plan to monetize this solution?",
          timestamp: new Date(),
        };
      } else if (messages.length === 7) {
        aiResponse = {
          id: Date.now().toString(),
          role: "assistant" as const,
          content: "Tell me about your team. What relevant experience do you have that makes you uniquely qualified to execute on this idea?",
          timestamp: new Date(),
        };
      } else if (messages.length === 9) {
        aiResponse = {
          id: Date.now().toString(),
          role: "assistant" as const,
          content: "Last question - what are your key milestones for the next 12-18 months, and how much capital are you raising?",
          timestamp: new Date(),
        };
      } else if (messages.length === 11) {
        aiResponse = {
          id: Date.now().toString(),
          role: "assistant" as const,
          content: "Thanks for sharing all this information! I've analyzed your responses and have some feedback on your pitch. Would you like to see my assessment?",
          timestamp: new Date(),
        };
      } else if (messages.length === 13) {
        aiResponse = {
          id: Date.now().toString(),
          role: "assistant" as const,
          content: "Here's my analysis:\n\n**Strengths**\n• Clear problem identification\n• Innovative solution approach\n• Strong team background\n\n**Areas for Improvement**\n• Market size could be more precisely defined\n• Competitive differentiation needs more emphasis\n• Monetization strategy should be more detailed\n\n**Investor Ready Score: 78/100**\n\nI've saved this conversation and generated your founder profile. VCs can now view this assessment along with your startup details.",
          timestamp: new Date(),
        };
        
        // Notify parent that conversation is complete
        if (onComplete) {
          setTimeout(() => {
            onComplete([...messages, userMessage, aiResponse]);
          }, 1000);
        }
      } else {
        aiResponse = {
          id: Date.now().toString(),
          role: "assistant" as const,
          content: "Thanks for the additional information. This helps paint a clearer picture of your startup. Do you have any questions for me?",
          timestamp: new Date(),
        };
      }
      
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    
    // Simulate speech recognition
    if (!isRecording) {
      setTimeout(() => {
        setInput("Our startup is developing an AI-powered financial advisor for millennials...");
        setIsRecording(false);
      }, 3000);
    }
  };
  
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b bg-white flex items-center justify-between">
        <div className="flex items-center">
          <Avatar className="h-9 w-9 mr-2 bg-brand-100">
            <AvatarFallback className="bg-brand-100 text-brand-700">
              <Bot className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">Investor AI Assistant</h3>
            <p className="text-xs text-gray-500">Powered by FounderMatch</p>
          </div>
        </div>
        <div className="flex items-center">
          <Badge variant="outline" className="mr-2 bg-green-50 text-green-700 border-green-200">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-1 animate-pulse"></div>
            <span className="text-xs">Live</span>
          </Badge>
          <Button variant="outline" size="sm" className="text-xs">
            <Info className="h-3 w-3 mr-1" />
            Help
          </Button>
        </div>
      </div>
      
      <ScrollArea className="flex-1 p-6 bg-gray-50">
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 shadow-sm ${
                  message.role === "user"
                    ? "bg-brand-700 text-white"
                    : "bg-white"
                }`}
              >
                <div className="flex items-start">
                  {message.role === "assistant" && (
                    <Avatar className="h-8 w-8 mr-3 flex-shrink-0">
                      <AvatarFallback className="bg-brand-100 text-brand-700">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div className="flex-1">
                    <div
                      className={`text-sm ${
                        message.role === "user" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {message.content.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < message.content.split("\n").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                    <div
                      className={`text-xs mt-2 ${
                        message.role === "user" ? "text-brand-100" : "text-gray-500"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                  {message.role === "user" && (
                    <Avatar className="h-8 w-8 ml-3 flex-shrink-0">
                      <AvatarFallback className="bg-gray-200 text-gray-700">
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white shadow-sm rounded-lg p-4 max-w-[80%]">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-3">
                    <AvatarFallback className="bg-brand-100 text-brand-700">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-300 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-400 animate-bounce" style={{ animationDelay: "200ms" }}></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: "400ms" }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t bg-white">
        <div className="flex items-center">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 min-h-[80px] resize-none bg-gray-50 rounded-lg border-gray-200 focus:border-brand-400 focus:ring focus:ring-brand-100"
            disabled={isLoading}
          />
          <div className="ml-3 flex flex-col space-y-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleRecording}
              className={`rounded-full h-10 w-10 ${isRecording ? "bg-red-50 text-red-500 border-red-200" : "bg-gray-50"}`}
              disabled={isLoading}
            >
              {isRecording ? (
                <MicOff className="h-5 w-5" />
              ) : (
                <Mic className="h-5 w-5" />
              )}
            </Button>
            <Button
              onClick={handleSendMessage}
              disabled={!input.trim() || isLoading}
              className="bg-brand-700 hover:bg-brand-800 rounded-full h-10 w-10"
              size="icon"
            >
              {isLoading ? (
                <RefreshCw className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
        
        {messages.length <= 12 && (
          <div className="mt-4">
            <p className="text-xs text-gray-500 mb-2">Suggested responses:</p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="text-xs bg-gray-50 hover:bg-gray-100"
                onClick={() => {
                  if (messages.length === 1) {
                    setInput("We're building an AI-driven platform that matches VC investors with promising startups more efficiently through data-driven analysis.");
                  } else if (messages.length === 3) {
                    setInput("Our platform uses AI to analyze startup pitches and provide real-time feedback, while generating detailed profiles for investors to review.");
                  }
                }}
              >
                <ChevronRight className="h-3 w-3 mr-1" />
                {messages.length === 1 
                  ? "We're building an AI platform..." 
                  : messages.length === 3 
                  ? "Our solution uses AI to..." 
                  : "Add suggested response"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs bg-gray-50 hover:bg-gray-100"
                onClick={() => {
                  if (messages.length === 1) {
                    setInput("Our startup helps early-stage founders prepare better pitches by simulating investor conversations and providing feedback.");
                  } else if (messages.length === 3) {
                    setInput("We've developed a conversational AI that asks founders questions just like real VCs would, helping them refine their pitch.");
                  }
                }}
              >
                <ChevronRight className="h-3 w-3 mr-1" />
                {messages.length === 1 
                  ? "Our startup helps founders..." 
                  : messages.length === 3 
                  ? "We've developed a system..." 
                  : "Add another response"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
