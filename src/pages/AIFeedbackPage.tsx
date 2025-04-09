
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { AIFeedbackChat } from "@/components/founder/AIFeedbackChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, CheckCircle, ChevronRight, RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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
    <div className="min-h-screen bg-gray-50">
      <Header userType="founder" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="outline" size="sm" asChild>
            <a href="/founder-dashboard" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-md mb-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">AI Investor Feedback</CardTitle>
                <CardDescription>
                  Have a conversation with our AI to refine your pitch and generate your founder profile
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[calc(70vh-150px)]">
                  <AIFeedbackChat onComplete={handleChatComplete} />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="border-0 shadow-md mb-6">
              <CardHeader className="pb-2 border-b">
                <CardTitle className="text-lg">How This Works</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mr-3">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Chat with Our AI Investor</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Answer questions about your startup just like you would in a real investor conversation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mr-3">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">Get Real-Time Feedback</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Receive immediate insights on your pitch, with suggestions for improvement.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mr-3">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">Generate Your Profile</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Your responses are analyzed to create an enhanced profile that VCs can discover.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mr-3">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium">Connect with Investors</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Interested VCs can view your profile and reach out directly if they're interested.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`border-0 shadow-md ${isCompleted ? "bg-green-50" : ""}`}>
              <CardHeader className="pb-2 border-b">
                <CardTitle className="text-lg">Profile Status</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                {isProcessing ? (
                  <div className="text-center py-6">
                    <RefreshCw className="h-12 w-12 text-brand-600 animate-spin mx-auto mb-4" />
                    <h3 className="font-medium text-lg">Generating Your Profile</h3>
                    <p className="text-gray-600 mt-2">
                      We're analyzing your responses and creating your founder profile...
                    </p>
                  </div>
                ) : isCompleted ? (
                  <div className="text-center py-6">
                    <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-medium text-lg">Profile Generated!</h3>
                    <p className="text-gray-600 mt-2 mb-4">
                      Your founder profile has been created and is now visible to VCs in our marketplace.
                    </p>
                    <Button 
                      onClick={() => navigate("/profile")} 
                      className="bg-brand-700 hover:bg-brand-800 w-full"
                    >
                      View Your Profile
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                ) : (
                  <div className="py-6">
                    <div className="flex items-center justify-center bg-amber-100 text-amber-800 rounded-lg p-3 mb-4">
                      <Bot className="h-5 w-5 mr-2" />
                      <span>Complete the AI conversation to generate your profile</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex-shrink-0 mr-3"></div>
                        <p className="text-gray-600">Basic information collected</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex-shrink-0 mr-3"></div>
                        <p className="text-gray-600">AI feedback received</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex-shrink-0 mr-3"></div>
                        <p className="text-gray-600">Profile generated for VCs</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIFeedbackPage;
