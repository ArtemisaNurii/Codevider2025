import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectProfile from "./components/ProjectPage.tsx/ProjectProfile";
import ProjectPage from "./components/ProjectPage.tsx/AllProject";
import NavbarVariant from "./components/Navbar";
import CulturePage from "./components/TeamPage/AllTeam";
import CodeviderLoader from "./components/Loader/Loader";
// import AllTeam from "./components/TeamPage/AllTeam";

const queryClient = new QueryClient();

// Inner component to handle route changes
const AppContent = () => {
  const location = useLocation();
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Fallback: ensure content shows after maximum time (only for initial load)
  useEffect(() => {
    if (isInitialLoading) {
      const fallbackTimer = setTimeout(() => {
        console.log("Fallback: forcing initial loader to complete");
        setIsInitialLoading(false);
      }, 3000); // 3 second fallback

      return () => clearTimeout(fallbackTimer);
    }
  }, [isInitialLoading]);

  const handleLoadingComplete = () => {
    console.log("Initial loading complete callback fired");
    setIsInitialLoading(false);
  };

  console.log("AppContent render:", { isInitialLoading, pathname: location.pathname });

  return (
    <>
      {/* Show the loader only during initial load */}
      {isInitialLoading && (
        <CodeviderLoader isLoading={isInitialLoading} onLoadingComplete={handleLoadingComplete} />
      )}

      {/* App content that shows after initial load */}
      {!isInitialLoading && <NavbarVariant />}
      
      {!isInitialLoading && (
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/:id" element={<ProjectProfile />} />
          <Route path="/team" element={<CulturePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
