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
    name: "Surabhi PG",
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
    name: "Mother teresa PG hostel & guest house",
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
  

  // Thalassery
  {
    id: "4",
    name: "PG hostel by JV@N GROUP",
    type: "guest-house",
    location: "Thalassery",
    rating: 4.8,
    price: 350,
    image: "https://lh3.googleusercontent.com/p/AF1QipNPOMIpCdQX7Eqma9bBucFhlMQQA9qD_VdFHQhZ=s680-w680-h510-rw",
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
    image: "https://lh3.googleusercontent.com/p/AF1QipNh08rzwSg_PdacF26xfcAp167NpnWz09I9LOnn=s1360-w1360-h1020-rw",
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
    image: "https://content.jdmagicbox.com/comp/thalassery/l6/9999px490.x490.171223195224.c3l6/catalogue/jv-and-n-group-chonadam-thalassery-hostels-for-men-uq0mryvuu8-250.jpg",
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
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep8XOzcs0hS_l0v5pARvXvLnVA737B5YJWA-rCgOE1CIgfHSm5cPOcYZ-mYWLSpabxJm7uOPEXbfxR86AcABjuQCgYJZ2PSkvO7aWnJMdkKqFXBoJg8n_g4xWUW0inDz80iLFIF=s1360-w1360-h1020-rw",
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
    image: "https://lh3.googleusercontent.com/p/AF1QipNj27jNT7A3j6vP7-sZ2mh7gizd7D7GCb2IUHD_=s1360-w1360-h1020-rw",
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
    image: "https://content.jdmagicbox.com/v2/comp/kannur/h8/9999px497.x497.211119155017.w3h8/catalogue/safestay-talap-kannur-hostels-0whnvbp276.jpg", 
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
    image:"https://content.jdmagicbox.com/v2/comp/mangalore/b2/0824px824.x824.181213033620.s9b2/catalogue/jamiyyatul-falah-boys-hostel-kankanady-mangalore-hostels-MxjHFWWXeX.jpg", 
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
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep7zgKK55cuR8ZtY_-Pb7UHdtwOP_XcUoQj2yyFBrEf19GXAtEjVMQqbcIV9EIsA8h8TtjjgRNhAKYjwLVtgpyX6CzUzqZnw9PN0-1xXRIadQJx4ewWLDvcv20TqE_gUUOl1R0gCg=s1360-w1360-h1020-rw", 
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
    image: "https://content.jdmagicbox.com/v2/comp/kottayam/g9/9999px481.x481.251230091732.m1g9/catalogue/royal-sanctuary-mens-hostel-kodimatha-kottayam-paying-guest-accommodations-segd78ivjv.jpg", 
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
    image: "https://lh3.googleusercontent.com/p/AF1QipO0BliIeXzeUB-OPRUgklc-l9avXWp-uZMMBlOm=s1360-w1360-h1020-rw",
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
    name: "Sajini's PG",
    type: "PG",
    location: "Kannur",
    rating: 4.9,
    price: 500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyBtbmUg8lJ_q_dWib7b3PC3EZSUkHQsa6g&s",
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
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepoMp7WO0CRPm8FBeWAxCUno_4fTPRZsX6KSMfBFEzPvrplQV_1ka9qdSs2pGNhVjFLq5bVt_pNN1yZiK0hH_ohqZTo5C1B-Emq8xftE5IzgrwdRk7rjy3DvPFg04U_lI871YXf=s1360-w1360-h1020-rw",
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
   image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerFYBYkTE5-kPkKUPY-QjuASwsF0OTTYD6HSz69o4oUfq8wmM5kLJdmVOGOWFfRxJ1B_LA2w0caUU24C6boWbhkQb-dxdh_bOIKLwyYD7wmp6KZsbLM_1wLBHfR50npAf09vtZq=s1360-w1360-h1020-rw",
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
    image: "https://lh3.googleusercontent.com/p/AF1QipNLHoCaz6Gvi9KsUDYTFD1Dq6FcOZpBctd3KioX=s1360-w1360-h1020-rw", 
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
    image: "https://lh3.googleusercontent.com/p/AF1QipMzk3XXo4dSX0qEJ4qsGIQ8NJI8qIuH_WsRSBsn=s1360-w1360-h1020-rw", 
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
    name: "Tusharam PG",
    type: "PG",
    location: "Kochi",
    rating: 4.9,
    price: 750,
    image: "https://lh3.googleusercontent.com/p/AF1QipMIKEuPpX6bKl5b0fWxCmv9zrr-iXK-oWQxe-TA=s1360-w1360-h1020-rw",
    description: "affordable ladies pg with advanced facilities.",
    amenities: ["WiFi", "cleaning", "laundary"],
    contact: {
      phone: "+91 9995552394",
      email: "tusharam@gmail.com",
      address: "Opp mary queen church,Trikkakara,Kochi, Kerala 682021",
    },
  },
  {
    id: "11",
    name: "Angels PG for ladies",
    type: "PG",
    location: "Kochi",
    rating: 5.0,
    price: 800,
    image: "https://content.jdmagicbox.com/comp/ernakulam/p1/0484px484.x484.230128050537.u6p1/catalogue/angels-pg-service-for-ladies-pachalam-ernakulam-hostels-0nntpfrb0s.jpg",
    description: "Affordable ladies pg with advanced facilities.",
    amenities: ["WiFi", "food","cleaning"],
    contact: {
      phone: "+91 987654789",
      email: "living123@gmail.com",
      address: "Radha oil mill road,Pachalam,Kochi, Kerala 682012",
    },
  },
   {
    id: "25", // ⬅️ Make sure this number is unique (use "14", "15" for next ones)
    name: "Veenas PG for ladies",
    type: "PG", 
    location: "Kochi",
    rating: 4.8,
    price: 700, // Price per day
    image: "https://lh3.googleusercontent.com/p/AF1QipOx3C0bKCKoD82TZoQoiv13uM0GPNFtf6lvark5=s1360-w1360-h1020-rw", 
    description: "Affordable ladies pg with good facilities.",
    amenities: ["WiFi", "Security"],
    contact: {
      phone: "+91 9895718282",
      email: "veena@gmail.com",
      address: "Chalikkavattom,Vytilla,Kochi,Kerala 682019",
    },
  },
   {
    id: "26", // ⬅️ Make sure this number is unique (use "14", "15" for next ones)
    name: "Aroma ladies PG",
    type: "PG", 
    location: "Kochi",
    rating: 5.0,
     price: 800, // Price per day
    image: "https://lh3.googleusercontent.com/p/AF1QipNlO6qKMVn37tsSL8sdGoGFYpUj0c84XxknNjc3=s1360-w1360-h1020-rw", 
    description: "WWell maintained PG with good facilities.",
    amenities: ["WiFi", "Laundry", "Food", "Security"],
    contact: {
      phone: "+91 6282149433",
      email: "aromaaa@gmail.com",
      address: "Pavankulangara,Thrippunithura,KOCHI,KERALA 682301",
    },
  },
  {
    id: "12",
    name: "JUWAL PG for ladies",
    type: "PG",
    location: "Kochi",
    rating: 4.9,
    price: 700,
    image: "https://lh3.googleusercontent.com/p/AF1QipO0OUMYq1Yw7GqGOvrWsRsGh5OIpRSYMaGYCB2A=s1360-w1360-h1020-rw",
    description: "affordable ladies pg with advanced security.",
    amenities: ["WiFi", "laundary", "CCTV", "security"],
    contact: {
      phone: "+91 9846504866",
      email: "juwal@gmail.com",
      address: "Metro station,AKG road,near thaikoodam,Thykoodam,Vytilla,kochi, Kerala 682019",
    },
  },
];
