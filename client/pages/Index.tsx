import { useState, useRef, useEffect } from "react";
import { HOTELS, Location } from "@shared/hotels";
import Navigation from "@/components/Navigation";
import HotelCard from "@/components/HotelCard";
import { MapPin, Search } from "lucide-react";

const LOCATIONS: Location[] = ["Chemperi", "Thalassery", "Kannur", "Kochi"];

export default function Index() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const listingsRef = useRef<HTMLDivElement>(null);

  // Filter hotels based on search and location
  const filteredHotels = HOTELS.filter((hotel) => {
    const matchesLocation = !selectedLocation || hotel.location === selectedLocation;
    const matchesSearch =
      !searchQuery ||
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hotel.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLocation && matchesSearch;
  });

  // Auto-scroll to listings when location is selected
  useEffect(() => {
    if (selectedLocation) {
      setTimeout(() => {
        listingsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [selectedLocation]);

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(selectedLocation === location ? null : location);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="w-full h-[500px] sm:h-[600px] relative mt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1566073/pexels-photo-1566073.jpeg?w=1600&h=900&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Discover Your Perfect Stay
            </h1>
            <p className="text-lg sm:text-xl text-white opacity-90 mb-12 drop-shadow-md">
              Find beautiful hotels, villas, and resorts across Kerala's most stunning locations
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-2xl p-2 sm:p-3 max-w-2xl mx-auto">
              <div className="flex items-center gap-2 sm:gap-3">
                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground flex-shrink-0 ml-2 sm:ml-3" />
                <input
                  type="text"
                  placeholder="Search by name, type, or location..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground text-sm sm:text-base py-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Filter Section */}
      <div className="bg-white border-b border-border sticky top-16 z-40 shadow-sm" data-section="location-filter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-accent" />
            <p className="font-semibold text-foreground">Filter by Location</p>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {LOCATIONS.map((location) => (
              <button
                key={location}
                onClick={() => handleLocationSelect(location)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
                  selectedLocation === location
                    ? "bg-accent text-white shadow-md scale-105"
                    : "bg-muted text-foreground hover:bg-opacity-70"
                }`}
              >
                {location}
              </button>
            ))}
            {selectedLocation && (
              <button
                onClick={() => {
                  setSelectedLocation(null);
                  setSearchQuery("");
                }}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold bg-muted text-foreground hover:bg-opacity-70 transition-all text-sm sm:text-base"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Hotels Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div ref={listingsRef}>
          {filteredHotels.length > 0 ? (
            <>
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {selectedLocation || searchQuery ? "Available Listings" : "Featured Stays"}
                  </h2>
                  <p className="text-muted-foreground">
                    {filteredHotels.length} properties found
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredHotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                No properties found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or location filters
              </p>
              <button
                onClick={() => {
                  setSelectedLocation(null);
                  setSearchQuery("");
                }}
                className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                View All Properties
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-3">About StayHub</h3>
              <p className="opacity-90 text-sm">
                Your trusted partner for finding the perfect accommodation across Kerala.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Locations</h3>
              <ul className="space-y-2 text-sm opacity-90">
                {LOCATIONS.map((location) => (
                  <li key={location}>
                    <button
                      onClick={() => setSelectedLocation(location)}
                      className="hover:opacity-100 transition-opacity"
                    >
                      {location}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Contact</h3>
              <p className="text-sm opacity-90 mb-2">Email: info@stayhub.com</p>
              <p className="text-sm opacity-90">Phone: +91 1234567890</p>
            </div>
          </div>

          <div className="border-t border-white border-opacity-20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 StayHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
