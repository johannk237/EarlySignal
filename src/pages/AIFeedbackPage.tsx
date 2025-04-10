
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { AIFeedbackChat } from "@/components/founder/AIFeedbackChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, CheckCircle, ChevronRight, RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

const AIFeedbackPage = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChatComplete = () => {
    setIsProcessing(true);
    
    // Simulate profile generation
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      
      toast({
        title: "Profile Generated",
        description: "Your founder profile has been successfully created and is now visible to VCs.",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header userType="founder" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="outline" size="sm" asChild className="shadow-sm hover:shadow transition-all dark:bg-gray-800/70 dark:border-gray-700/60 dark:hover:bg-gray-700/70">
            <a href="/founder-dashboard" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg rounded-xl mb-6 overflow-hidden dark:dark-card dark:shadow-black/30">
              <CardHeader className="bg-gradient-to-r from-brand-700 to-brand-800 text-white pb-4 dark:from-gray-800 dark:to-brand-900/80">
                <CardTitle className="text-xl flex items-center">
                  <Bot className="h-5 w-5 mr-2" />
                  AI Investor Feedback
                </CardTitle>
                <CardDescription className="text-white/80 dark:text-gray-300/90">
                  Have a conversation with our AI to refine your pitch and generate your founder profile
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[100vh]">
                  <AIFeedbackChat onComplete={handleChatComplete} />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <ScrollArea className="h-[100vh] pr-4 shadow-lg">
              <Card className="border-0 shadow-lg rounded-xl mb-6 dark:dark-card dark:shadow-black/30">
                <CardHeader className="pb-2 border-b dark:dark-divider bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/80 dark:to-gray-900">
                  <CardTitle className="text-lg">How This Works</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-5">
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mr-3 shadow-sm dark:bg-brand-900/30 dark:text-brand-300">
                        1
                      </div>
                      <div>
                        <h3 className="font-medium text-brand-800 dark:text-brand-300">Chat with Our AI Investor</h3>
                        <p className="text-sm text-gray-600 mt-1 dark:text-gray-400">
                          Answer questions about your startup just like you would in a real investor conversation.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mr-3 shadow-sm dark:bg-brand-900/30 dark:text-brand-300">
                        2
                      </div>
                      <div>
                        <h3 className="font-medium text-brand-800 dark:text-brand-300">Get Real-Time Feedback</h3>
                        <p className="text-sm text-gray-600 mt-1 dark:text-gray-400">
                          Receive immediate insights on your pitch, with suggestions for improvement.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mr-3 shadow-sm dark:bg-brand-900/30 dark:text-brand-300">
                        3
                      </div>
                      <div>
                        <h3 className="font-medium text-brand-800 dark:text-brand-300">Generate Your Profile</h3>
                        <p className="text-sm text-gray-600 mt-1 dark:text-gray-400">
                          Your responses are analyzed to create an enhanced profile that VCs can discover.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mr-3 shadow-sm dark:bg-brand-900/30 dark:text-brand-300">
                        4
                      </div>
                      <div>
                        <h3 className="font-medium text-brand-800 dark:text-brand-300">Connect with Investors</h3>
                        <p className="text-sm text-gray-600 mt-1 dark:text-gray-400">
                          Interested VCs can view your profile and reach out directly if they're interested.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className={`border-0 shadow-lg rounded-xl ${isCompleted ? "bg-green-50 dark:bg-green-900/20" : ""} dark:dark-card dark:shadow-black/30`}>
                <CardHeader className="pb-2 border-b dark:dark-divider bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/80 dark:to-gray-900">
                  <CardTitle className="text-lg">Profile Status</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  {isProcessing ? (
                    <div className="text-center py-6">
                      <div className="bg-brand-50 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center dark:bg-brand-900/20">
                        <RefreshCw className="h-10 w-10 text-brand-600 animate-spin dark:text-brand-400" />
                      </div>
                      <h3 className="font-medium text-lg text-brand-800 dark:text-brand-300">Generating Your Profile</h3>
                      <p className="text-gray-600 mt-2 dark:text-gray-400">
                        We're analyzing your responses and creating your founder profile...
                      </p>
                    </div>
                  ) : isCompleted ? (
                    <div className="text-center py-6">
                      <div className="bg-green-50 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center dark:bg-green-900/30">
                        <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="font-medium text-lg text-brand-800 dark:text-brand-300">Profile Generated!</h3>
                      <p className="text-gray-600 mt-2 mb-4 dark:text-gray-400">
                        Your founder profile has been created and is now visible to VCs in our marketplace.
                      </p>
                      <Button 
                        onClick={() => navigate("/profile")} 
                        className="bg-brand-700 hover:bg-brand-800 w-full shadow-md hover:shadow-lg transition-all dark:bg-brand-600 dark:hover:bg-brand-700"
                      >
                        View Your Profile
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  ) : (
                    <div className="py-6">
                      <div className="flex items-center justify-center bg-amber-50 text-amber-800 rounded-lg p-4 mb-5 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800/40">
                        <Bot className="h-5 w-5 mr-2" />
                        <span>Complete the AI conversation to generate your profile</span>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0 mr-3 dark:border-gray-600"></div>
                          <p className="text-gray-600 dark:text-gray-400">Basic information collected</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0 mr-3 dark:border-gray-600"></div>
                          <p className="text-gray-600 dark:text-gray-400">AI feedback received</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0 mr-3 dark:border-gray-600"></div>
                          <p className="text-gray-600 dark:text-gray-400">Profile generated for VCs</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </ScrollArea>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIFeedbackPage;
