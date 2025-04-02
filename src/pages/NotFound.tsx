
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center py-20">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl text-muted-foreground mb-8">
          Oops! Page not found
        </p>
        <div className="max-w-md text-center mb-10">
          <p className="text-muted-foreground">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        <Button className="flex items-center gap-2" size="lg" href="/">
          <Home size={18} />
          Return to Home
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
