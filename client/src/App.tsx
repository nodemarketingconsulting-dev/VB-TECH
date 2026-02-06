import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ClientArea from "@/pages/ClientArea";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { CookieConsent } from "@/components/layout/CookieConsent";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cliente" component={ClientArea} />
      <Route path="/politica-privacidade" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <CookieConsent />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
