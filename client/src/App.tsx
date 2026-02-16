import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import ProgramFLiC from "@/pages/ProgramFLiC";
import ProgramAI from "@/pages/ProgramAI";
import Gallery from "@/pages/Gallery";
import Blog from "@/pages/Blog";
import GetInvolved from "@/pages/GetInvolved";
import Donate from "@/pages/Donate";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

// Placeholder components for other pages to ensure routing works
const Placeholder = ({ title }: { title: string }) => (
  <div className="pt-32 pb-20 text-center container-custom">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-gray-600">This page is under construction.</p>
  </div>
);

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/programs/flic" component={ProgramFLiC} />
          <Route path="/programs/hubs">
            <Placeholder title="HUBs Initiative" />
          </Route>
          <Route path="/programs/ai" component={ProgramAI} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/blog" component={Blog} />
          <Route path="/get-involved" component={GetInvolved} />
          <Route path="/donate" component={Donate} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
