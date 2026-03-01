export type HotelType = "hotel" | "villa" | "resort" | "guest-house";
export type Location = "Chemperi" | "Thalassery" | "Kannur" | "Kochi";

export interface Hotel {
  id: string;
  name: string;
  type: HotelType;
  location: Location;
  rating: number;
  price: number;
  image: string;
  description: string;
  amenities: string[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
}

export const HOTELS: Hotel[] = [
  // Chemperi
  {
    id: "1",
    name: "Chemperi Hills Resort",
    type: "resort",
    location: "Chemperi",
    rating: 4.8,
    price: 8500,
    image: "https://t3.ftcdn.net/jpg/02/33/59/42/240_F_233594258_81s2Un5DEpmiHYxuOPAUfnrD0T9we5fd.jpg",
    description: "Luxury resort nestled in the Chemperi hills with panoramic views and world-class amenities.",
    amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Garden", "Mountain View"],
    contact: {
      phone: "+91 9876543210",
      email: "booking@chemperi-hills.com",
      address: "Chemperi Hills, Kerala 673591",
    },
  },
  {
    id: "2",
    name: "Chemperi Valley Villa",
    type: "villa",
    location: "Chemperi",
    rating: 4.6,
    price: 12000,
    image: "https://t3.ftcdn.net/jpg/17/48/63/02/240_F_1748630267_IEet0YVIORl5tos9zZ1SlqVAI2Nc8WhV.jpg",
    description: "Private villa with stunning valley views, perfect for a romantic getaway.",
    amenities: ["WiFi", "Private Garden", "Kitchen", "Pool", "Jacuzzi", "Terrace"],
    contact: {
      phone: "+91 9876543211",
      email: "reservations@chemperi-villa.com",
      address: "Chemperi Valley, Kerala 673591",
    },
  },
  {
    id: "3",
    name: "Chemperi Guest House",
    type: "guest-house",
    location: "Chemperi",
    rating: 4.3,
    price: 3500,
    image: "https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?w=800&h=600&fit=crop",
    description: "Cozy and affordable guest house with warm hospitality and local charm.",
    amenities: ["WiFi", "Common Kitchen", "Garden", "Local Experience"],
    contact: {
      phone: "+91 9876543212",
      email: "stay@chemperi-guest.com",
      address: "Chemperi Town, Kerala 673591",
    },
  },

  // Thalassery
  {
    id: "4",
    name: "Thalassery Beach Hotel",
    type: "hotel",
    location: "Thalassery",
    rating: 4.7,
    price: 6500,
    image: "https://t3.ftcdn.net/jpg/00/65/73/00/240_F_65730021_hjLGH7LgvYg6zZNT26xPrYI3HvuAQ9Bx.jpg",
    description: "Beachfront hotel with direct access to pristine sandy beaches and coastal views.",
    amenities: ["WiFi", "Beach Access", "Restaurant", "Bar", "Sunset Lounge", "Water Sports"],
    contact: {
      phone: "+91 9876543213",
      email: "info@thalassery-beach.com",
      address: "Thalassery Beach Road, Kerala 670101",
    },
  },
  {
    id: "5",
    name: "Thalassery Heritage Resort",
    type: "resort",
    location: "Thalassery",
    rating: 4.5,
    price: 9000,
    image: "https://t4.ftcdn.net/jpg/18/63/94/07/240_F_1863940754_yI8Zeq6mt4a7muvMcHDhfXmbJZkvKNVa.jpg",
    description: "Historic resort blending heritage architecture with modern luxury and comfort.",
    amenities: ["WiFi", "Pool", "Spa", "Heritage Tours", "Restaurant", "Conference Room"],
    contact: {
      phone: "+91 9876543214",
      email: "bookings@thalassery-heritage.com",
      address: "Thalassery Heritage Lane, Kerala 670101",
    },
  },
  {
    id: "6",
    name: "Thalassery Coastal Villa",
    type: "villa",
    location: "Thalassery",
    rating: 4.9,
    price: 15000,
    image: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?w=800&h=600&fit=crop",
    description: "Exclusive beachfront villa with private pool and breathtaking ocean views.",
    amenities: ["WiFi", "Private Beach", "Pool", "Kitchen", "Infinity View", "Concierge"],
    contact: {
      phone: "+91 9876543215",
      email: "luxury@thalassery-villa.com",
      address: "Thalassery Beachfront, Kerala 670101",
    },
  },

  // Kannur
  {
    id: "7",
    name: "Kannur Fort Hotel",
    type: "hotel",
    location: "Kannur",
    rating: 4.4,
    price: 5500,
    image: "https://images.pexels.com/photos/1320712/pexels-photo-1320712.jpeg?w=800&h=600&fit=crop",
    description: "Historic hotel near Kannur Fort with traditional Kerala architecture and modern amenities.",
    amenities: ["WiFi", "Restaurant", "Fort View", "Spa", "Guided Tours", "Bar"],
    contact: {
      phone: "+91 9876543216",
      email: "stay@kannur-fort.com",
      address: "Kannur Fort Area, Kerala 670503",
    },
  },
  {
    id: "8",
    name: "Kannur Spice Garden Resort",
    type: "resort",
    location: "Kannur",
    rating: 4.6,
    price: 8000,
    image: "https://images.pexels.com/photos/1731162/pexels-photo-1731162.jpeg?w=800&h=600&fit=crop",
    description: "Immersive resort experience with spice plantations, Ayurveda, and wellness programs.",
    amenities: ["WiFi", "Spice Tours", "Ayurveda", "Pool", "Restaurant", "Yoga"],
    contact: {
      phone: "+91 9876543217",
      email: "bookings@kannur-spice.com",
      address: "Kannur Spice Gardens, Kerala 670503",
    },
  },
  {
    id: "9",
    name: "Kannur Seaside Guest House",
    type: "guest-house",
    location: "Kannur",
    rating: 4.2,
    price: 3000,
    image: "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?w=800&h=600&fit=crop",
    description: "Charming seaside guest house with local hospitality and authentic Kerala experience.",
    amenities: ["WiFi", "Sea View", "Common Kitchen", "Local Food"],
    contact: {
      phone: "+91 9876543218",
      email: "contact@kannur-seaside.com",
      address: "Kannur Seaside, Kerala 670503",
    },
  },

  // Kochi
  {
    id: "10",
    name: "Kochi Metropolitan Hotel",
    type: "hotel",
    location: "Kochi",
    rating: 4.7,
    price: 7500,
    image: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?w=800&h=600&fit=crop",
    description: "Modern luxury hotel in the heart of Kochi with convenient city access and premium service.",
    amenities: ["WiFi", "Restaurant", "Gym", "Business Center", "Rooftop Bar", "City View"],
    contact: {
      phone: "+91 9876543219",
      email: "reservations@kochi-metro.com",
      address: "Fort Kochi, Kerala 682001",
    },
  },
  {
    id: "11",
    name: "Kochi Backwater Villa",
    type: "villa",
    location: "Kochi",
    rating: 4.8,
    price: 14000,
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?w=800&h=600&fit=crop",
    description: "Elegant villa overlooking Kochi backwaters with private boat access and luxury amenities.",
    amenities: ["WiFi", "Private Boat", "Pool", "Kitchen", "Backwater View", "Concierge"],
    contact: {
      phone: "+91 9876543220",
      email: "luxury@kochi-villa.com",
      address: "Kochi Backwaters, Kerala 682002",
    },
  },
  {
    id: "12",
    name: "Kochi Heritage Resort",
    type: "resort",
    location: "Kochi",
    rating: 4.5,
    price: 9500,
    image: "https://images.pexels.com/photos/1578802/pexels-photo-1578802.jpeg?w=800&h=600&fit=crop",
    description: "Premium resort blending colonial charm with contemporary luxury, ideal for relaxation.",
    amenities: ["WiFi", "Pool", "Spa", "Heritage Tours", "Fine Dining", "Wine Bar"],
    contact: {
      phone: "+91 9876543221",
      email: "bookings@kochi-heritage.com",
      address: "Kochi Heritage Zone, Kerala 682001",
    },
  },
];
