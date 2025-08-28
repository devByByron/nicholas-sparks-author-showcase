import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="heading-primary mb-4">404</h1>
        <p className="body-large mb-6">Oops! The page you're looking for doesn't exist.</p>
        <a 
          href="/" 
          className="text-author-brand hover:text-primary underline underline-offset-4 font-serif tracking-wide transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
