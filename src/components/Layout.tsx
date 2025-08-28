import { ReactNode } from "react";
import Navigation from "./Navigation";
import ReturnToTop from "./ReturnToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="fade-in">
        {children}
      </main>
      <ReturnToTop />
    </div>
  );
};

export default Layout;