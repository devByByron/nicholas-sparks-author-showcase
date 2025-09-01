import { ReactNode } from "react";
import Navigation from "./Navigation";
import ReturnToTop from "./ReturnToTop";
import Footer from "./Footer";

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
      <Footer />
      <ReturnToTop />
    </div>
  );
};

export default Layout;