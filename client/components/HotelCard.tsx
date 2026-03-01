import { Hotel } from "@shared/hotels";
import { Star, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      hotel: "Hotel",
      villa: "Villa",
      resort: "Resort",
      "guest-house": "Guest House",
    };
    return labels[type] || type;
  };

  return (
    <>
      <div
        className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-md">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="font-semibold text-sm text-foreground">{hotel.rating}</span>
          </div>
          <div className="absolute top-3 left-3 bg-accent text-white rounded-full px-3 py-1 text-xs font-semibold">
            {getTypeLabel(hotel.type)}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 line-clamp-2">
            {hotel.name}
          </h3>

          <div className="flex items-center gap-1 text-muted-foreground mb-3">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{hotel.location}</span>
          </div>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {hotel.description}
          </p>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2 mb-4">
            {hotel.amenities.slice(0, 3).map((amenity) => (
              <span
                key={amenity}
                className="text-xs bg-muted text-foreground px-2 py-1 rounded-full"
              >
                {amenity}
              </span>
            ))}
            {hotel.amenities.length > 3 && (
              <span className="text-xs bg-muted text-foreground px-2 py-1 rounded-full">
                +{hotel.amenities.length - 3}
              </span>
            )}
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div>
              <p className="text-muted-foreground text-xs">From</p>
              <p className="text-2xl font-bold text-primary">
                ₹{hotel.price.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground">per night</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
              className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-muted transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {hotel.name}
                  </h2>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-5 h-5" />
                    <span>{hotel.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-accent bg-opacity-10 px-4 py-2 rounded-lg">
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  <span className="font-bold text-lg text-accent">{hotel.rating}</span>
                </div>
              </div>

              <p className="text-foreground mb-6 leading-relaxed">{hotel.description}</p>

              {/* Amenities */}
              <div className="mb-6">
                <h3 className="font-bold text-lg text-foreground mb-3">Amenities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {hotel.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-2 text-foreground bg-muted p-2 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t border-border pt-6 mb-6">
                <h3 className="font-bold text-lg text-foreground mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent" />
                    <a
                      href={`tel:${hotel.contact.phone}`}
                      className="text-primary hover:underline font-medium"
                    >
                      {hotel.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent" />
                    <a
                      href={`mailto:${hotel.contact.email}`}
                      className="text-primary hover:underline font-medium"
                    >
                      {hotel.contact.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-1" />
                    <p className="text-foreground">{hotel.contact.address}</p>
                  </div>
                </div>
              </div>

              {/* Price and Booking */}
              <div className="bg-muted rounded-xl p-6 mb-6 border border-border">
                <p className="text-muted-foreground text-sm mb-3">Starting from</p>
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold text-primary">₹{hotel.price.toLocaleString()}</span>
                    <span className="text-muted-foreground text-base">/night</span>
                  </div>
                </div>
              </div>

              {/* Booking Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-accent text-white py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity mb-3"
              >
                Book Now
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-muted text-foreground py-3 rounded-lg font-semibold hover:bg-opacity-70 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
