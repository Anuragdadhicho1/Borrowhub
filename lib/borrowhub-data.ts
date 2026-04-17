import {
  BookOpen,
  Camera,
  Drill,
  Gamepad2,
  Home,
  PartyPopper,
  Shirt,
  Trees,
  type LucideIcon,
} from "lucide-react";

export type Category = {
  name: string;
  count: string;
  icon: LucideIcon;
};

export const categories: Category[] = [
  { name: "Tools & Equipment", count: "1,240 items", icon: Drill },
  { name: "Electronics & Gadgets", count: "980 items", icon: Gamepad2 },
  { name: "Cameras & Photography", count: "720 items", icon: Camera },
  { name: "Sports & Outdoor", count: "860 items", icon: Trees },
  { name: "Party & Events", count: "540 items", icon: PartyPopper },
  { name: "Books & Learning", count: "430 items", icon: BookOpen },
  { name: "Fashion & Accessories", count: "670 items", icon: Shirt },
  { name: "Home & Garden", count: "1,110 items", icon: Home },
];

export const trendingItems = [
  {
    id: "canon-r6",
    title: "Canon R6 Mirrorless Camera",
    category: "Cameras",
    owner: "Aarav M.",
    distance: "2.4 km away",
    price: 899,
    rating: 4.9,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "bosch-drill",
    title: "Bosch Cordless Impact Drill",
    category: "Tools",
    owner: "Neha K.",
    distance: "3.1 km away",
    price: 249,
    rating: 4.8,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ps5-console",
    title: "PlayStation 5 Console",
    category: "Electronics",
    owner: "Rohit S.",
    distance: "4.8 km away",
    price: 599,
    rating: 4.9,
    reviews: 201,
    image:
      "https://images.unsplash.com/photo-1606813909025-f6c70f8b9c6b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "dj-speaker-kit",
    title: "Party Speaker + Lights Kit",
    category: "Party",
    owner: "Isha R.",
    distance: "1.7 km away",
    price: 749,
    rating: 4.7,
    reviews: 66,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
  },
];

export const testimonials = [
  {
    name: "Priya Verma",
    role: "Freelance Photographer",
    quote:
      "BorrowHub saved me thousands. I rent lenses only when I need them and still deliver premium shoots.",
    rating: 5,
  },
  {
    name: "Vikram Gupta",
    role: "Home DIY Enthusiast",
    quote:
      "I listed tools collecting dust at home and now they pay for themselves every month.",
    rating: 5,
  },
  {
    name: "Sana Khan",
    role: "Event Organizer",
    quote:
      "The booking and payment flow is smooth, and support is fantastic whenever we need help.",
    rating: 4,
  },
];

export const stats = [
  "10,000+ Items Listed",
  "25,000+ Happy Renters",
  "₹50L+ Earned by Owners",
  "4.9★ Average Rating",
];
