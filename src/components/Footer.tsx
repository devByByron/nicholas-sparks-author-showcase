import { Mail, MapPin, Phone, Twitter, Facebook, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Books", path: "/books" },
    { name: "Contact", path: "/contact" },
  ];

   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="heading-secondary text-lg">Nicholas Sparks</h3>
            <p className="body-elegant text-muted-foreground">
              Award-winning author of romantic novels that touch the heart and soul. 
              Bringing stories of love, hope, and resilience to readers worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-author-brand transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-author-brand transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-author-brand transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="heading-secondary text-lg">Quick Links</h3>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                 onClick={scrollToTop}
                  key={item.name}
                  to={item.path}
                  className={`block body-elegant transition-colors duration-300 ${
                    isActive(item.path)
                      ? "text-author-brand font-medium"
                      : "text-muted-foreground hover:text-author-brand"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="heading-secondary text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-author-brand flex-shrink-0" />
                <a 
                  href="mailto:nicholas@nicholassparks.com" 
                  className="body-elegant text-muted-foreground hover:text-author-brand transition-colors"
                >
                  nicholas@nicholassparks.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-author-brand flex-shrink-0" />
                <span className="body-elegant text-muted-foreground">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-author-brand flex-shrink-0" />
                <span className="body-elegant text-muted-foreground">Vermont, USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center">
          <p className="body-elegant text-muted-foreground">
            © {new Date().getFullYear()} Nicholas Sparks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
