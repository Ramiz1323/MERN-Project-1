const sampleListings = [
  {
    title: "Luxury Penthouse with Ocean View",
    description:
      "Experience unparalleled luxury in this stunning penthouse with breathtaking ocean views and top-tier amenities.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVudGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 4500,
    location: "Miami Beach",
    country: "United States",
  },
  {
    title: "Traditional Japanese Ryokan",
    description:
      "Immerse yourself in Japanese culture at this authentic ryokan featuring tatami rooms, hot springs, and kaiseki meals.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cnlva2FufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Vineyard Estate in Napa Valley",
    description:
      "Stay amidst rolling vineyards in this elegant estate offering wine tastings and panoramic views of Napa Valley.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmluZXlhcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3200,
    location: "Napa Valley",
    country: "United States",
  },
  {
    title: "Cliffside Villa in Santorini",
    description:
      "Whitewashed walls and blue domes characterize this stunning cliffside villa with Caldera views in Oia.",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FudG9yaW5pfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Safari Tent in Kruger National Park",
    description:
      "Sleep under the stars in a luxury safari tent while listening to the sounds of the African wilderness.",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FmYXJpJTIwdGVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Kruger National Park",
    country: "South Africa",
  },
  {
    title: "Chic Parisian Apartment",
    description:
      "Live like a Parisian in this beautifully decorated apartment steps away from the Seine and Notre-Dame.",
    image: "https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFyaXNpYW4lMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1900,
    location: "Paris",
    country: "France",
  },
  {
    title: "Floating Cabin in Sweden",
    description:
      "Experience unique waterfront living in this modern floating cabin on a serene Swedish lake.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmxvYXRpbmclMjBjYWJpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Stockholm Archipelago",
    country: "Sweden",
  },
  {
    title: "Historic Windmill in Holland",
    description:
      "Stay in a converted 18th-century windmill featuring original details with modern comforts.",
    image: "https://images.unsplash.com/photo-1556910633-8b5c6b0cd9e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2luZG1pbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Ice Hotel in Lapland",
    description:
      "Sleep in a room made entirely of ice and snow at this unique Arctic hotel, complete with northern lights viewing.",
    image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aWNlJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Kiruna",
    country: "Sweden",
  },
  {
    title: "Boutique Cave Hotel",
    description:
      "Experience Cappadocia's unique landscape by staying in a beautifully carved cave room with modern luxuries.",
    image: "https://images.unsplash.com/photo-1518544866330-95b5af60e983?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F2ZSUyMGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Cappadocia",
    country: "Turkey",
  }
];

module.exports = { data: sampleListings };