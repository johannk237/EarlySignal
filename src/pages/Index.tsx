import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useTheme } from "@/components/theme/ThemeProvider";
import {
  CheckCircle,
  ChevronRight,
  BarChart2,
  Users,
  Bot,
  Star,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background shadow-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img 
                src={theme === "dark" ? "/logo_white.png" : "/logo_black.png"} 
                alt="Logo" 
                className="h-10 w-50 mr-2" 
              />
            </div>

            <nav className="hidden md:flex items-center space-x-4">
              <a href="#features" className="text-foreground hover:text-brand-700 px-3 py-2 rounded-md text-sm font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-foreground hover:text-brand-700 px-3 py-2 rounded-md text-sm font-medium">
                How it Works
              </a>
              <a href="#testimonials" className="text-foreground hover:text-brand-700 px-3 py-2 rounded-md text-sm font-medium">
                Testimonials
              </a>
            </nav>

            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <Link to="/login">
                <Button variant="outline">Sign in</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-brand-700 hover:bg-brand-800">Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Connecting <span className="text-brand-700">VCs</span> and <span className="text-brand-700">Founders</span> through AI
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-driven platform streamlines the venture capital deal-sourcing process, helping founders refine their pitches and VCs discover high-potential startups.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-brand-700 hover:bg-brand-800 w-full sm:w-auto dark:text-white">
                  Join as Investor
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Join as Founder
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Key Features</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines AI-driven insights with a streamlined matching process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-secondary p-8 rounded-xl">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-5">
                <Bot className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">AI-Powered Feedback</h3>
              <p className="text-muted-foreground">
                Founders receive real-time, actionable feedback on their pitches from our AI, simulating real investor interactions.
              </p>
            </div>

            <div className="bg-secondary p-8 rounded-xl">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-5">
                <BarChart2 className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Enhanced Profiles</h3>
              <p className="text-muted-foreground">
                AI-generated startup profiles with detailed analyses, risk assessments, and potential growth trajectories.
              </p>
            </div>

            <div className="bg-secondary p-8 rounded-xl">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-5">
                <Users className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Smart Matching</h3>
              <p className="text-muted-foreground">
                VCs discover startups that align perfectly with their investment thesis and portfolio strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section id="how-it-works" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">How It Works</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              A simple process that creates value for both founders and investors
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-lg blur opacity-25"></div>
                    <div className="bg-card p-6 rounded-lg shadow-lg relative">
                      <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-xl font-bold text-brand-700 mb-4">
                        1
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Founders Chat with AI</h3>
                      <p className="text-muted-foreground">
                        Founders engage with our AI bot, which asks questions similar to what real investors would ask during a pitch meeting.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <ul className="space-y-4">
                    <li className="flex">
                      <CheckCircle className="h-6 w-6 text-brand-600 flex-shrink-0 mr-3" />
                      <span className="text-foreground">Receive instant feedback on pitch components</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-6 w-6 text-brand-600 flex-shrink-0 mr-3" />
                      <span className="text-foreground">Identify gaps in business model explanations</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-6 w-6 text-brand-600 flex-shrink-0 mr-3" />
                      <span className="text-foreground">Practice responding to tough investor questions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-brand-500 rounded-lg blur opacity-25"></div>
                    <div className="bg-card p-6 rounded-lg shadow-lg relative">
                      <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-xl font-bold text-brand-700 mb-4">
                        2
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">AI Generates Enhanced Profiles</h3>
                      <p className="text-muted-foreground">
                        Our system transforms founder conversations into comprehensive profiles with AI-driven insights and analysis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <ul className="space-y-4">
                    <li className="flex">
                      <CheckCircle className="h-6 w-6 text-brand-600 flex-shrink-0 mr-3" />
                      <span className="text-foreground">Standardized format for easy comparison</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-6 w-6 text-brand-600 flex-shrink-0 mr-3" />
                      <span className="text-foreground">Risk assessment and opportunity analysis</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-6 w-6 text-brand-600 flex-shrink-0 mr-3" />
                      <span className="text-foreground">Objective scoring based on investor criteria</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-lg blur opacity-25"></div>
                    <div className="bg-card p-6 rounded-lg shadow-lg relative">
                      <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-xl font-bold text-brand-700 mb-4">
                        3
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">VCs Browse Curated Startups</h3>
                      <p className="text-muted-foreground">
                        Investors access a marketplace of AI-vetted startups, with powerful filtering and sorting options.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <ul className="space-y-4">
                    <li className="flex">
                      <CheckCircle className="h-6 w-6 text-brand-600 flex-shrink-0 mr-3" />
                      <span className="text-foreground">Filter by industry, stage, location, and AI score</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-6 w-6 text-brand-600 flex-shrink-0 mr-3" />
                      <span className="text-foreground">Review AI-generated analysis with key metrics</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-6 w-6 text-brand-600 flex-shrink-0 mr-3" />
                      <span className="text-foreground">Connect directly with promising founders</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">What Users Say</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from founders and VCs who have found success with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-secondary p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600 mr-3"></div>
                <div>
                  <h4 className="font-medium text-foreground">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Founder, TechSolve</p>
                </div>
              </div>
              <div className="flex mb-4">
                <Star className="h-5 w-5 text-amber-500" />
                <Star className="h-5 w-5 text-amber-500" />
                <Star className="h-5 w-5 text-amber-500" />
                <Star className="h-5 w-5 text-amber-500" />
                <Star className="h-5 w-5 text-amber-500" />
              </div>
              <p className="text-muted-foreground">
                "The AI feedback was incredibly insightful. It helped me identify gaps in my pitch that I hadn't considered, and within weeks of updating my profile, I had meetings with three VCs."
              </p>
            </div>

            <div className="bg-secondary p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600 mr-3"></div>
                <div>
                  <h4 className="font-medium text-foreground">Michael Chen</h4>
                  <p className="text-sm text-muted-foreground">Partner, Venture Capital Firm</p>
                </div>
              </div>
              <div className="flex mb-4">
                <Star className="h-5 w-5 text-amber-500" />
                <Star className="h-5 w-5 text-amber-500" />
                <Star className="h-5 w-5 text-amber-500" />
                <Star className="h-5 w-5 text-amber-500" />
                <Star className="h-5 w-5 text-amber-500" />
              </div>
              <p className="text-muted-foreground">
                "This platform has completely transformed our deal sourcing process. The AI-enhanced profiles provide deeper insights than traditional pitch decks, and we've found two portfolio companies through the system."
              </p>
            </div>

            <div className="bg-secondary p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600 mr-3"></div>
                <div>
                  <h4 className="font-medium text-foreground">David Rodriguez</h4>
                  <p className="text-sm text-muted-foreground">Founder, GreenTech Solutions</p>
                </div>
              </div>
              <div className="flex mb-4">
                <Star className="h-5 w-5 text-amber-500" />
                <Star className="h-5 w-5 text-amber-500" />
                <Star className="h-5 w-5 text-amber-500" />
                <Star className="h-5 w-5 text-amber-500" />
                <Star className="h-5 w-5 text-amber-500" />
              </div>
              <p className="text-muted-foreground">
                "After using the AI feedback system, I completely restructured our go-to-market strategy. Not only did this improve our business model, but it also led to securing our seed round much faster than expected."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-brand-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Transform Your Fundraising Journey?</h2>
            <p className="mt-4 text-xl text-brand-100 max-w-3xl mx-auto">
              Join our platform today and experience the future of startup-investor matching
            </p>
            <div className="mt-10">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-brand-50">
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Founder<span className="text-brand-400">Match</span>
              </h3>
              <p className="mb-4">
                Transforming the way founders and investors connect through the power of AI.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="hover:text-white">Features</a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white">How It Works</a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white">Testimonials</a>
                </li>
                <li>
                  <Link to="/login" className="hover:text-white">Sign In</Link>
                </li>
                <li>
                  <Link to="/signup" className="hover:text-white">Sign Up</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@EarlySignal.com" className="hover:text-white">info@EarlySignal.com</a>
                </li>
                <li>
                  <a href="tel:+15551234567" className="hover:text-white">+1 (555) 123-4567</a>
                </li>
                <li>
                  123 Startup Street, San Francisco, CA 94103
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; 2025 EarlySignal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
