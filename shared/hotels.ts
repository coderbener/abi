export type HotelType = "hotel" | "villa" | "resort" | "guest-house" | "PG" | "hostel";
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
    price: 350,
    image: "https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?w=800&h=600&fit=crop",
    description: "Cozy and affordable guest house with advanced facilities.",
    amenities: ["WiFi", "cleaning", "laundary"],
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
    id: "13", // ⬅️ Make sure this number is unique (use "14", "15" for next ones)
    name: "Kodiyeri hostel",
    type: "hostel",
    location: "Thalassery",
    rating: 4.7,
    price: 450, // Price per day
    image: "",
    description: "Affordable pg with godd facilities.",
    amenities: ["WiFi", "Laundry", "Food", "Security"],
    contact: {
      phone: "+91 98477368338",
      email: "kodiyerihostel@gmail.com",
      address: "Kodiyeri raju master road,thiruvangad, Thalassery,kerala 670103",
    },
  },
  {
    id: "14", // ⬅️ Make sure this number is unique (use "14", "15" for next ones)
    name: "ST.JOSEPH HOSTEL",
    type: "hostel",
    location: "Thalassery",
    rating: 3.0,
    price: 450, // Price per day
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    description: "Affordable womens hostel with advanced facilitiea.",
    amenities: ["WiFi", "Security"],
    contact: {
      phone: "+91 9495678988",
      email: "stjoseph321@gmail.com",
      address: "Pratheeksha,nayanar road,chondam,thalassery,kerala 670641",
    },
  },
  {
    id: "15", // ⬅️ Make sure this number is unique (use "14", "15" for next ones)
    name: "Hill view mens hostel",
    type: "hostel",
    location: "Thalassery",
    rating: 4.3,
    price: 450, // Price per day
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    description: "Affordable mens hostel with advanced facilities.",
    amenities: ["WiFi", "Laundry"],
    contact: {
      phone: "+91 8590657666",
      email: "hillview@gmail.com",
      address: "Eranholi,Thalassery,kerala 670107",
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
    description: "Affordable gents hostel with advanced facilities.",
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
    image: "",
    description: "Affordable pg with advanced facilities providing better security.",
    amenities: ["WiFi", "laundery"],
    contact: {
      phone:"+91 9446017511",
      email: "devam132@gmail.com",
      address: "Cooperative Bank, opp. Kodiyeri, Illathaazha, Thalassery, Kodiyeri, Kerala 670103",
    },
  },
  {
    id: "16", // ⬅️ Make sure this number is unique (use "14", "15" for next ones)
    name: "Malal men hostel",
    type: "hostel", 
    location: "Thalassery",
    rating: 4.4,
    price: 400, // Price per day
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg", 
    description: "Affordable mens hostel with good facilities.",
    amenities: ["WiFi", "Laundry", "cleaning"],
    contact: {
      phone: "+91 8590656767",
      email: "malal123@gmail.com",
      address: "Malal road kundoormala,eranholi,Thalassery,kerala 670641",
    },
  },
  {
    id: "17", // ⬅️ Make sure this number is unique (use "14", "15" for next ones)
    name: "Youth hostel",
    type: "hostel", 
    location: "Thalassery",
    rating: 3.0,
    price: 350, // Price per day
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg", 
    description: "Well maintained affordable hostel.",
    amenities: ["WiFi", "cleaning"],
    contact: {
      phone: "+91 9495678767",
      email: "youth546@gmail.com",
      address: "Pallisery, Thalassery,kerala 670101",
    },
  },
  {
    id: "19", // ⬅️ Make sure this number is unique (use "14", "15" for next ones)
    name: "Shamah residency boys hostel",
    type: "PG", 
    location: "Thalassery",
    rating: 4.2,
    price: 400, // Price per day
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg", 
    description: "Affordable boys pg with advanced facilities.",
    amenities: ["WiFi", "Security"],
    contact: {
      phone: "+91 8590765438",
      email: "shamah345@gmail.com",
      address: "Kundoormala,eranholi,Thalassery,kerala 670107",
    },
  },
  {
    id: "20", // ⬅️ Make sure this number is unique (use "14", "15" for next ones)
    name: "Vandanam boys hostel",
    type: "hostel", 
    location: "Thalassery",
    rating: 5.0,
    price: 500, // Price per day
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg", 
    description: "Cozy and well maintained boys hostel.",
    amenities: ["WiFi","cleaning"],
    contact: {
      phone: "+91 9446778909",
      email: "vandanam56@gmail.com",
      address: "Kundoormala,eranholi,Thalassery,kerala 670641",
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
    image: "",
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
    name: "sajini's PG",
    type: "PG",
    location: "Kannur",
    rating: 4.9,
    price: 500,
    image: "",
    description: "affordable pg for girls and womens.",
    amenities: ["WiFi", "cleaning", "laundary"],
    contact: {
      phone: "+91 9895442481",
      email: "sajni@gmail.com",
      address: "near rajas high school chirakkal, Kerala 670011",
    },
  },
  {
    id: "9",
    name: "Nest PG for ladies",
    type: "PG",
    location: "Kannur",
    rating: 4.7,
    price: 400,
    image: "",
    description: "Affordable ladies PG with essential amenities.",
    amenities: ["WiFi","cleaning", "laundary"],
    contact: {
      phone: "+91 9946404141",
      email: "nest123@gmail.com",
      address: "mayyil road dharmashala parassinikadavu,kannur, Kerala 670563",
    },
  },
 {
    id: "21", // ⬅️ Make sure this number is unique (use "14", "15" for next ones)
    name: "Royal star hostel",
    type: "hostel", 
    location: "Kannur",
    rating: 4.1,
    price: 450, // Price per day
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg", 
    description: "Affordable pg with advanced facilities.",
    amenities: ["WiFi", "Laundry", "Food"],
    contact: {
      phone: "+91 7907565819",
      email: "starroyal@gmail.com",
      address: "Mansuit building,near mother and child hospital Kannur,kerala 670002",
    },
  }, {
    id: "22", // ⬅️ Make sure this number is unique (use "14", "15" for next ones)
    name: "Chempakam ladies PG",
    type: "PG", 
    location: "Kannur",
    rating: 5.0,
    price: 500, // Price per day
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg", 
    description: "affordable group accommoadated well maintained pg.",
    amenities: ["WiFi", "Laundry", "Food", "Security"],
    contact: {
      phone: "+91 9495988754",
      email: "chempakam@gmail.com",
      address: "Dhanalakshmi nursing collage road,near SBI branch puzhathi Kannur,kerala 670005",
    },
  }, {
    id: "23", // ⬅️ Make sure this number is unique (use "14", "15" for next ones)
    name: "Phoenix womens PG",
    type: "PG", 
    location: "Kannur",
    rating: 3.2,
    price: 300, // Price per day
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg", 
    description: "affordable pg with good facilities .",
    amenities: ["WiFi"],
    contact: {
      phone: "+91 9591324542",
      email: "pheonix777@gmail.com",
      address: "narayan ayadath,behind edumart,mukundan road,talap,Kannur,kerala 670002 ",
    },
  },
  // Kochi
  {
    id: "10",
    name: "sweetjump PG",
    type: "PG",
    location: "Kochi",
    rating: 4.7,
    price: 350,
    image: "https://t3.ftcdn.net/jpg/01/85/53/08/240_F_185530861_EMFfT3pBVMLWjIPY7qfIkisqGZHZruBw.jpg",
    description: "affordable ladies pg with advanced facilities.",
    amenities: ["WiFi", "cleaning", "laundary"],
    contact: {
      phone: "+91 9876543219",
      email: "reservationsjumb@gmail.com",
      address: "Fort Kochi, Kerala 682001",
    },
  },
  {
    id: "11",
    name: "living live PG",
    type: "PG",
    location: "Kochi",
    rating: 4.8,
    price: 450,
    image: "https://t4.ftcdn.net/jpg/05/31/51/17/240_F_531511778_g7VshZK86lPxkRcyNFtyxKy0jtVu5dhJ.jpg",
    description: "Affordable mens pg with advanced facilities.",
    amenities: ["WiFi", "food","cleaning"],
    contact: {
      phone: "+91 9876543220",
      email: "living123@gmail.com",
      address: "near kochi metro, Kerala 682002",
    },
  },
  {
    id: "12",
    name: "Kochi Heritage PG",
    type: "PG",
    location: "Kochi",
    rating: 4.5,
    price: 400,
    image: "https://t3.ftcdn.net/jpg/02/66/26/92/240_F_266269223_voOEkuIoS51yrL5G2Lw01OnqQQx9qBUb.jpg",
    description: "affordable ladies pg with advanced security.",
    amenities: ["WiFi", "laundary", "CCTV", "security"],
    contact: {
      phone: "+91 9876543221",
      email: "heritage@gmail.com",
      address: "near kochi bus stand, Kerala 682001",
    },
  },
];
