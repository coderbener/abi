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
    name: "surabhi PG",
    type: "guest-house",
    location: "Chemperi",
    rating: 2.8,
    price: 230,
    image: "https://content.jdmagicbox.com/comp/kannur/d3/9999px497.x497.200205203056.p8d3/catalogue/surabhi-ladies-hostel-chemperi-kannur-hostels-sfis48dc9u.jpg",
    description: "Affordable ladies PG with good food and quality water and proper basic facilities.",
    amenities: ["WiFi", "curtain", "cctv"],
    contact: {
      phone: "+91 7947107205",
      email: "surabhi@gmail.com",
      address: "Taliparamba Iritty Road, Chemperi, Kannur-670632, Kerala",
    },
  },
  {
    id: "2",
    name: "mother teresa PG hostel & guest house",
    type: "guest-house",
    location: "Chemperi",
    rating: 4.7,
    price: 230,
    image: "https://content.jdmagicbox.com/v2/comp/kannur/r7/9999px497.x497.251014233448.y4r7/catalogue/mother-teresa-pg-hostel-chemperi-kannur-hostels-9tfjpnn1fk.jpg",
    description: "Well-maintained ladies hostel providing a safe and comfortable environment with essential facilities.",
    amenities: ["WiFi", "Laundry", "24/7 Security", "Pure Water"],
    contact: {
      phone: "+91 94476 54321",
      email: "motherteresa@gmail.com",
      address: "Near Chemperi Church, Chemperi, Kannur, Kerala 670632",
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
    name: "PG hostel by JV@N GROUP",
    type: "guest-house",
    location: "Thalassery",
    rating: 4.8,
    price: 350,
    image: "",
    description: "Newly constructed paying guest facility near College of Engineering Thalassery, Kannur. (CAPE).",
    amenities: ["wifi", "laundry","transportation service"],
    contact: {
      phone: "+91 9495335132",
      email: "jvnpg@gmail.com",
      address: "Vadiyilpeedika Vadiyilpeedika, 100 metres from Vadiyilpeedika, Road, Chonadam, Thalassery, Kerala 670107",
    },
  },
  {
    id: "5",
    name: "EBENEZER PG FOR GENTS",
    type: "PG",
    location: "Thalassery",
    rating: 4.7,
    price: 350,
    image: "https://lh3.googleusercontent.com/p/AF1QipOmM__BDdeNCLLPflnFPXZ6B47pT7i7lYHuV8eO=s1360-w1360-h1020-rw",
    description: "affordable gents hostel with advanced facilities.",
    amenities: ["WiFi", "laundary service"],
    contact: {
      phone: "+91 8590345654",
      email: "ebenezer321@gmail.com",
      address: "Kazhunnadiyil house Chonadam , eranholi, post, Thalassery, Kerala 670107",
    },
  },
  {
    id: "6",
    name: "Devam ladies PG",
    type: "PG",
    location: "Thalassery",
    rating: 4.7,
    price: 400,
    image: "https://www.google.com/imgres?q=devam%20ladies%20pg&imgurl=https%3A%2F%2Fcontent3.jdmagicbox.com%2Fcomp%2Fthiruvananthapuram%2Fu4%2F0471px471.x471.220328203954.r7u4%2Fcatalogue%2Fsatheedevam-ladies-pg-kazhakuttam-thiruvananthapuram-paying-guest-accommodations-lwvydi3onr.jpg&imgrefurl=https%3A%2F%2Fwww.justdial.com%2FThiruvananthapuram%2FSatheedevam-Ladies-Pg-Kazhakuttam%2F0471PX471-X471-220328203954-R7U4_BZDET&docid=po8u8eqh2La7aM&tbnid=XCbIM2piv8pAvM&vet=12ahUKEwi3ka2x7I-TAxXVzDgGHeUeL3wQM3oECB0QAA..i&w=2000&h=1125&hcb=2&ved=2ahUKEwi3ka2x7I-TAxXVzDgGHeUeL3wQM3oECB0QAA",
    description: "affordable pg with advanced facilities providing better security.",
    amenities: ["WiFi", "laundery"],
    contact: {
      phone:"+91 9446017511",
      email: "devam132@gmail.com",
      address: "Cooperative Bank, opp. Kodiyeri, Illathaazha, Thalassery, Kodiyeri, Kerala 670103",
    },
  },

  // Kannur
  {
    id: "7",
    name: "Faraag mens hostel",
    type: "hostel",
    location: "Kannur",
    rating: 3.5,
    price: 350,
    image: "https://www.google.com/imgres?q=faraag%20men%27s%20hostel%20kannur%20reviews&imgurl=https%3A%2F%2Fcontent.jdmagicbox.com%2Fcomp%2Fkannur%2Fk2%2F9999px497.x497.191207111437.q9k2%2Fcatalogue%2Ffaraag-mens-hostel-kannur-city-kannur-hostels-427s3yecc4-250.jpg&imgrefurl=https%3A%2F%2Fwww.justdial.com%2FKannur%2FFaraag-Mens-Hostel-Near-Malabar-Gold-Diamond-Jewellery-Kannur-South%2F9999PX497-X497-191207111437-Q9K2_BZDET&docid=FQQfl5vvdBHkbM&tbnid=-Hw1LpbHXWUH8M&vet=12ahUKEwi48rzP7o-TAxUf4zgGHWAbNskQM3oECBYQAA..i&w=250&h=250&hcb=2&ved=2ahUKEwi48rzP7o-TAxUf4zgGHWAbNskQM3oECBYQAA",
    description: "well maintained and affordable pg.",
    amenities: ["WiFi", "cleaning", "laundary"],
    contact: {
      phone: "+91 9446334255",
      email: "faraag@gmail.com",
      address: "ballard road kannur, Kerala 670001",
    },
  },
  {
    id: "8",
    name: "Abhi Resort",
    type: "resort",
    location: "Kannur",
    rating: 4.6,
    price: 80000,
    image: "https://t3.ftcdn.net/jpg/07/31/40/70/240_F_731407057_CrBuyvFIZTxuqZpjCVmZa49mTePJ7ehw.jpg",
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
    image: "https://t4.ftcdn.net/jpg/01/94/89/35/240_F_194893504_Hx8dJBImTVmzaYe4wb4golwXCdtjsZKz.jpg",
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
    image: "https://t3.ftcdn.net/jpg/01/85/53/08/240_F_185530861_EMFfT3pBVMLWjIPY7qfIkisqGZHZruBw.jpg",
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
    image: "https://t4.ftcdn.net/jpg/05/31/51/17/240_F_531511778_g7VshZK86lPxkRcyNFtyxKy0jtVu5dhJ.jpg",
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
    image: "https://t3.ftcdn.net/jpg/02/66/26/92/240_F_266269223_voOEkuIoS51yrL5G2Lw01OnqQQx9qBUb.jpg",
    description: "Premium resort blending colonial charm with contemporary luxury, ideal for relaxation.",
    amenities: ["WiFi", "Pool", "Spa", "Heritage Tours", "Fine Dining", "Wine Bar"],
    contact: {
      phone: "+91 9876543221",
      email: "bookings@kochi-heritage.com",
      address: "Kochi Heritage Zone, Kerala 682001",
    },
  },
];
