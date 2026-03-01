import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

export default function Navigation() {
  const handleBookNow = () => {
    // Scroll to the location filter section
    const filterSection = document.querySelector('[data-section="location-filter"]');
    if (filterSection) {
      filterSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity active:scale-95">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg">
              <MapPin className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold text-primary hidden sm:inline">StayHub</span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/"
              className="text-foreground hover:text-accent font-medium transition-colors text-sm px-3 py-2 rounded-lg hover:bg-muted active:scale-95"
            >
              Explore
            </Link>
            <button
              onClick={handleBookNow}
              className="px-4 sm:px-6 py-2 bg-accent text-white rounded-lg font-medium hover:opacity-90 transition-all active:scale-95 text-sm whitespace-nowrap"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
