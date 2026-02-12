// constants/siteData.js
// Centralized data management for the entire website

import {
  Shirt,
  ShieldCheck,
  Users,
  Truck,
  Globe,
  TrendingUp,
} from "lucide-react";

export const COMPANY_INFO = {
  name: "Silicon Value",
  tagline: "TOP USED Clothes supplier in china",
  description:
    "Leading the way in second-hand clothes, shoes, and bags wholesale",
  fullDescription:
    "Silicon Value Co., Ltd is a highly regarded recycling company that exports used clothes, shoes, and bags to countries in Africa, Southeast Asia, and the Middle East.",
  email: [
    "ademceo@siliconvalue.org",
    "maryceo@siliconvalue.org",
    "info@siliconvalue.org",
  ],
  whatsapp: ["+86 134 1957 9731", "+20 11 58595725"],
  address: ["Wuhan, China", "Cairo, Egypt"],
};

export const NAVIGATION = {
  main: [
    { id: "home", label: "Home", path: "/" },
    {
      id: "used-clothes",
      label: "Used Clothes",
      path: "/used-clothes",
      submenu: [
        { label: "Used Summer Clothes", path: "/used-summer-clothes" },
        { label: "Used Winter Clothes", path: "/used-winter-clothes" },
        { label: "Used Women's Clothes", path: "/used-womens-clothes" },
        { label: "Used Men's Clothes", path: "/used-mens-clothes" },
        { label: "Used Brand Clothes", path: "/used-brand-clothes" },
        { label: "Used Zara", path: "/used-zara" },
      ],
    },
    {
      id: "used-shoes",
      label: "Used Shoes",
      path: "/used-shoes",
      submenu: [
        { label: "Used Brand Shoes", path: "/used-brand-shoes" },
        { label: "Used Mixed Shoes", path: "/used-mixed-shoes" },
        { label: "Used Slipper", path: "/used-slipper" },
        { label: "Washed Shoes", path: "/washed-shoes" },
      ],
    },
    { id: "used-bags", label: "Used Bags", path: "/used-bags" },
    {
      id: "fabric",
      label: "Fabric",
      path: "/fabric",
    },
    {
      id: "about",
      label: "About US",
      path: "/about",
      submenu: [
        { label: "Company Profile", path: "/about" },
        { label: "Our Brands", path: "/our-brands" },
        { label: "Factory Photo", path: "/factory" },
        { label: "After-Sales Service", path: "/after-sales" },
        { label: "News", path: "/news" },
        { label: "Certification", path: "/certification" },
      ],
    },
    { id: "contact", label: "Contact Us", path: "/contact" },
  ],
  topBar: {
    left: "TOP USED Clothes supplier in china",
    right:
      "Wholesale Used Clothes/ Wholesale Used Shoes/ Wholesale Used Bags/ Wholesale Cotton Rags",
  },
};

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Direct Second Hand Clothes & Shoes Factory",
    subtitle: "Wholesale to 110+ Countries",
    description:
      "Silicon Value specializes in exporting used clothes, used shoes, and used bags to regions like Africa, Southeast Asia, and the Middle East.",
    features: [
      "🏭 20,000m² Factory",
      "🌍 110+ Countries",
      "📈 80% Repurchase",
      "🔍 A-Grade Standard",
    ],
    cta: "Get Latest Wholesale Price List",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80",
  },
  {
    id: 2,
    title: "Provide Over 200 Kinds of Used Clothing Items",
    subtitle: "Standard Sorting for Global Markets",
    description:
      "Standard sorting ways help us gain regular customers over 110+ countries",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80",
    cta: "View Our Products",
  },
];



export const WHYSILICONVALUE = [
  {
    id: "raw-materials",
    icon: Shirt,
    title: "Raw Materials",
    description:
      "Silicon Value upholds high standards in sourcing raw materials, ensuring quality at every step. Our materials are predominantly sourced from major first-tier cities, including Beijing, Guangzhou, Chongqing, Chengdu, and Wuhan, among others.",
  },
  {
    id: "quality-control",
    icon: ShieldCheck,
    title: "Quality Control",
    description:
      "Our trained quality inspectors perform random inspections on each batch of finished products to ensure the highest quality of both new and used clothing. This rigorous process guarantees that every item meets our strict standards.",
  },
  {
    id: "trusted-by-customers-worldwide",
    icon: Users,
    title: "Trusted by Customers Worldwide",
    description:
      "With over 60 regular customers from different countries, Silicon Value has built a reputation for reliability and excellence. Our commitment to quality and customer satisfaction has made us a preferred partner for businesses across multiple continents.",
  },
  {
    id: "fast-delivery",
    icon: Truck,
    title: "Fast Loading & Delivery",
    description:
      "Thanks to our efficient sorting systems, fully equipped production facilities, experienced team, and reliable logistics partners, we can process orders quickly and efficiently. The fastest container loading time is just 7 days after the order is placed.",
  },
  {
    id: "serving-customers-across-continents",
    icon: Globe,
    title: "Serving Customers Across Continents",
    description:
      "Our extensive distribution network spans Africa, Southeast Asia, and the Middle East. We understand the unique needs of each market and tailor our services to meet regional demands, ensuring seamless international trade partnerships.",
  },
  {
    id: "global-reach",
    icon: TrendingUp,
    title: "Global Reach and Distribution",
    description:
      "Operating from our 20,000 square meter facility with 25 production lines and 400 dedicated employees, we have the capacity to serve global markets efficiently. Our standardized sorting process and scalable operations enable us to meet growing demand worldwide.",
  },
];

export const COMPANY_STATS = [
  { number: "500+", label: "Projects Completed" },
  { number: "200+", label: "Happy Clients" },
  { number: "25", label: "Production Lines" },
  { number: "13+", label: "Years Experience" },
];

export const BRANDS = [
  {
    id: "hissen",
    name: "Hissen",
    description:
      "Famous in Southeast Asian countries such as the Philippines, Indonesia, Pakistan, Malaysia, etc.",
    logo: "https://via.placeholder.com/300x300/0066cc/ffffff?text=HISSEN",
  },
  {
    id: "zagumi",
    name: "Zagumi",
    description:
      "Famous in African countries such as Nigeria, Kenya, Uganda, Tanzania, Namibia, etc.",
    logo: "https://via.placeholder.com/300x300/00cc66/ffffff?text=ZAGUMI",
  },
  {
    id: "space",
    name: "Space",
    description:
      "Famous in African countries such as Cameroon, Côte d'Ivoire, Benin, Congo, Ghana, etc.",
    logo: "https://via.placeholder.com/300x300/cc0066/ffffff?text=SPACE",
  },
  {
    id: "indetexx",
    name: "Indetexx",
    description:
      "Well known in countries such as the Philippines, Indonesia, Thailand, Congo and Ghana.",
    logo: "https://via.placeholder.com/300x300/6600cc/ffffff?text=INDETEXX",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO, TechCorp",
    country: "Philippines",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    content:
      "Silicon Value transformed our business. Their quality standards and professional service are exceptional.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Wholesale Manager",
    country: "Nigeria",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    content:
      "Working with Hissen has been amazing. Fast delivery and excellent quality products every time.",
  },
  {
    id: 3,
    name: "Mohamed Ahmed",
    position: "Import Director",
    country: "Kenya",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    content:
      "The best used clothing supplier in China. Consistent quality and great prices.",
  },
];

export const CLIENT_PARTNERS = [
  { name: "CQS BEA", country: "Philippines" },
  { name: "TRI STAR", country: "Tanzania" },
  { name: "SKR", country: "Nigeria" },
];

export const CONTACT_METHODS = [
  {
    id: "email",
    type: "Email",
    icon: "📧",
    value: COMPANY_INFO.email,
    link: `mailto:${COMPANY_INFO.email}`,
  },
  {
    id: "whatsapp",
    type: "WhatsApp",
    icon: "📱",
    value: COMPANY_INFO.whatsapp[0],
    link: `https://wa.me/${COMPANY_INFO.whatsapp[0].replace(/[^0-9]/g, "")}`,
  },
  {
    id: "location",
    type: "Location",
    icon: "📍",
    value: COMPANY_INFO.address,
    link: null,
  },
];

export const FOOTER_LINKS = {
  getHelp: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Brands", path: "/our-brands" },
    { label: "Our Clients", path: "/clients" },
    { label: "News", path: "/news" },
  ],
  products: [
    { label: "Used Branded Clothes", path: "/used-brand-clothes" },
    { label: "Used Branded Shoes", path: "/used-brand-shoes" },
    { label: "Second Hand Nike Shoes", path: "/nike-shoes" },
    { label: "Used Slipper", path: "/used-slipper" },
    { label: "Mixed Second hand Shoes", path: "/mixed-shoes" },
    { label: "Second Hand Zara", path: "/zara" },
    { label: "Used Summer Clothes", path: "/summer-clothes" },
    { label: "Used Winter Clothes", path: "/winter-clothes" },
    { label: "Mixed Rags", path: "/rags" },
  ],
  legal: [
    { label: "Company Declaration", path: "/declaration" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
    { label: "Shipping Service", path: "/shipping" },
  ],
};
