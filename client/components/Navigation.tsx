import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg">
              <MapPin className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold text-primary hidden sm:inline">StayHub</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-foreground hover:text-primary font-medium transition-colors text-sm"
            >
              Explore
            </Link>
            <a
              href="#"
              className="px-6 py-2 bg-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
