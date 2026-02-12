// constants/pageData.js
// Centralized page-specific content for reusable components
// Import the images at the top
import cottonImg from "../assets/Product/Cotton-Fabric.jpeg";
import polyesterImg from "../assets/Product/Polyester-Fabric.jpeg";
import leatherShoesImg from "../assets/Product/Leather-shoes.jpeg";
import canvasShoesImg from "../assets/Product/Canvas-shoes.jpeg";
import nylonBagImg from "../assets/Product/Nylon-bag.jpeg";
import leatherBagImg from "../assets/Product/Leather-bag.jpeg";
import linenShirtImg from "../assets/Product/Linen-shirt.jpeg";
import fleeceJacketImg from "../assets/Product/Fleece-jacket-newClothes.jpeg";

export const PAGE_DATA = {
  // Data for New Clothes page
  newClothes: {
    products: [
      { id: 1, title: "Beanies", image: "Beanies.jpeg" },
      {
        id: 2,
        title: "Activewear",
        image: "Activewear (leggings, tank tops.jpeg",
      },
      { id: 3, title: "Blazers", image: "Blazers.jpeg", isPremium: true },
      { id: 4, title: "Boots", image: "Boots.jpeg" },
      { id: 5, title: "Button-down", image: "Button-down shirts.jpeg" },
      { id: 6, title: "Cardigans", image: "Cardigans.jpeg" },
      { id: 7, title: "Chinos", image: "Chinos.jpeg" },
      { id: 8, title: "Coats", image: "Coats.jpeg" },
      { id: 9, title: "Dresses", image: "Dresses.jpeg" },
      { id: 10, title: "Flip-flops", image: "Flip-flops.jpeg" },
      { id: 11, title: "Hoodies", image: "Hoodies.jpeg" },
      { id: 12, title: "Jackets", image: "Jackets.jpeg" },
      { id: 13, title: "Jeans", image: "Jeans.jpeg", isPremium: true },
      { id: 14, title: "Jumpsuits", image: "Jumpsuits.jpeg" },
      { id: 15, title: "Leggings", image: "Leggings.jpeg" },
      { id: 16, title: "Maxi Dresses", image: "Maxi dresses.jpeg" },
      { id: 17, title: "Mittens", image: "Mittens.jpeg" },
      { id: 18, title: "Overalls", image: "Overalls.jpeg" },
      { id: 19, title: "Pajamas", image: "Pajamas.jpeg" },
      { id: 20, title: "Polo shirts", image: "Polo shirts.jpeg" },
      { id: 21, title: "Rompers", image: "Rompers.jpeg" },
      { id: 22, title: "Scarves", image: "Scarves.jpeg" },
      { id: 23, title: "Shorts", image: "Shorts.jpeg" },
      { id: 24, title: "Skirts", image: "Skirts.jpeg" },
      { id: 25, title: "Sneakers", image: "Sneakers.jpeg" },
      { id: 26, title: "Sports bras", image: "Sports bras.jpeg" },
      { id: 27, title: "Suits", image: "Suits.jpeg" },
      { id: 28, title: "Sweater dresses", image: "Sweater dresses2.jpeg" },
      { id: 29, title: "Sweaters", image: "Sweaters.jpeg" },
      { id: 30, title: "Sweatshirts", image: "Sweatshirts.jpeg" },
      { id: 31, title: "T-shirts", image: "T-shirt.jpeg" },
      { id: 32, title: "Tank tops", image: "Tank tops.jpeg" },
      { id: 33, title: "Trousers", image: "Trousers.jpeg" },
      { id: 34, title: "Tunic tops", image: "Tunic tops.jpeg" },
      { id: 35, title: "Vests", image: "Vests.jpeg", isPremium: true },
    ],
  },

  // Data for Used Clothes page
  usedClothes: {
    hero: {
      title: "Second Hand Clothes",
      highlightWord: "Hand",
    },
    content: [
      'At <span class="font-bold text-blue-600">Silicon Value</span>, quality is our top priority. We understand that every product must meet strict performance standards, and we are committed to delivering products that exceed your expectations. All of our clothing undergoes rigorous quality checks to ensure they are fully functional and free from defects.',
      '<span class="font-bold text-slate-900">Quality</span> is always the most important factor in everything that we do. Used clothing is expected to be of high quality and we want to never disappoint our clients.',
      'We follow a <span class="font-bold text-slate-900">detailed set of quality standards</span> that focus on ensuring each item is not only wearable but also durable and reliable. We ensure our products are  <span class="font-bold text-slate-900">no holes, tears, stains, consistent sizing, and sourced from trusted brands</span> like Nike, Adidas, Zara, and more, as well as high-quality emerging manufacturers.',
      "As we continue to grow as a leading global supplier, Silicon Value remains dedicated to delivering superior products to our customers, ensuring their businesses are powered by the best second-hand clothing available.",
    ],
    products: [
      { id: 1, title: "Used Backpacks", image: "Used Backpacks.jpeg" },
      {
        id: 2,
        title: "Used Brand Clothes",
        image: "Used Brand Clothes.jpeg",
      },
      {
        id: 3,
        title: "Used Cargo Pants",
        image: "Used Cargo Pants.jpeg",
        isPremium: true,
      },
      {
        id: 4,
        title: "Used Cotton T-Shirts",
        image: "Used Cotton T-Shirts.jpeg",
      },
      { id: 5, title: "Used Denim Jeans", image: "Used Denim Jeans.jpeg" },
      { id: 6, title: "Used Dress Shirts", image: "Used Dress Shirts.jpeg" },
      { id: 7, title: "Used Fashion Heels", image: "Used Fashion Heels.jpeg" },
      {
        id: 8,
        title: "Used Football Shoes",
        image: "Used Football Shoes.jpeg",
      },
      { id: 9, title: "Used Handbags", image: "Used Handbags.jpeg" },
      { id: 10, title: "Used Hoodies", image: "Used Hoodies.jpeg" },
      { id: 11, title: "Used Jackets", image: "Used Jackets.jpeg" },
      { id: 12, title: "Used Kids Clothes", image: "Used Kids Clothes.jpeg" },
      {
        id: 13,
        title: "Used Kids Toys Mix",
        image: "Used Kids Toys Mix.jpeg",
        isPremium: true,
      },
      { id: 14, title: "Used Ladies Wear", image: "Used Ladies Wear.jpeg" },
      { id: 15, title: "Used Men's Wear", image: "Used Men's Wear.jpeg" },
      { id: 16, title: "Used Mixed Bags", image: "Used Mixed Bags.jpeg" },
      { id: 17, title: "Used Mixed Clothes", image: "Used Mixed Clothes.jpeg" },
      { id: 18, title: "Used Mixed Shoes", image: "Used Mixed Shoes.jpeg" },
      { id: 19, title: "Used School Bags", image: "Used School Bags.jpeg" },
      { id: 20, title: "Used Skirts", image: "Used Skirts.jpeg" },
      { id: 21, title: "Used Sneakers", image: "Used Sneakers.jpeg" },
      { id: 22, title: "Used Sportswear", image: "Used Sportswear.jpeg" },
      {
        id: 23,
        title: "Used Summer Clothes",
        image: "Used Summer Clothes.jpeg",
      },
      { id: 24, title: "Used Sweaters", image: "Used Sweaters.jpeg" },
      { id: 25, title: "Used Tropical Mix", image: "Used Tropical Mix.jpeg" },
      {
        id: 26,
        title: "Used Winter Clothes",
        image: "Used Winter Clothes.jpeg",
      },
    ],
    categories: {
      title: "Browse Our Product Categories",
      banner: {
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
        title: "Used Clothes & Used Shoes & Used Bags",
        subtitle: "Premium Grade Quality • Global Shipping",
      },
      groups: [
        {
          title: "Used Clothes",
          icon: "Heart",
          items: [
            "Used Summer Clothes",
            "Used Winter Clothes",
            "Used Ladies Clothes",
            "Used Men Clothes",
            "Used Kids Clothes",
          ],
        },
        {
          title: "Used Shoes",
          icon: "Star",
          items: [
            "Used Mix Shoes",
            "Used Branded Clothes",
            "Used Football Shoes",
            "Used Sneakers",
            "Used Fashion Lady Shoes",
          ],
        },
        {
          title: "Used Bags",
          icon: "Gift",
          items: [
            "Used Mixed Bags",
            "Used Ladies Bags",
            "Used School Bags",
            "Used Branded Bags",
            "Used Backpack",
          ],
        },
        {
          title: "Other Items",
          icon: "Plus",
          items: [
            "Used Toys",
            "Second Hand Curtain",
            "Used Bed Sheet",
            "Second Hand Blanket",
            "Second Hand Cap",
          ],
        },
      ],
    },
    banner2: {
      badge: "Trusted Industry Partner",
      heading: "The Leading Exporter of",
      headingHighlight: "Second Hand Clothes",
      paragraphs: [
        "We understand that trusting a supplier, especially for something as crucial as second-hand clothing, can be a complex process. You may have concerns about quality, reliability, or whether we can truly deliver on our promises. At Silicon Value, we're here to show you that we're a trustworthy partner who can meet your business needs, all while fitting within your budget.",
        "Here are some of the advantages you'll enjoy by choosing Silicon Value:",
      ],
      cards: [
        {
          icon: "Factory",
          title: "A Reliable Experienced Exporter",
          description:
            "Silicon Value is one of the top exporters of second-hand garments in China. With two large, fully operational factories spanning over <strong>20,000 square meters</strong>, we have the capacity to meet your needs.",
        },
        {
          icon: "CheckCircle",
          title: "Specialized Sorting Expertise",
          description:
            "We have a dedicated team specializing in sorting used clothing. Our expertise allows us to handle garments carefully, ensuring they meet <strong>high standards</strong> and your specific requirements.",
        },
      ],
    },
    feedback: {
      title: "Customer",
      highlightWord: "Feedback",
      trustText: "Joined by 500+ satisfied business partners worldwide.",
      testimonials: [
        {
          id: 1,
          name: "Ahmed Al-Farsi",
          image:
            "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=200&h=200&auto=format&fit=crop",
          text: "Silicon Value's used shoes are of very good quality. We have been working together for three years across our Dubai outlets and they have never let me down. Their consistency is unmatched.",
          role: "Gulf Retail Group",
        },
        {
          id: 2,
          name: "Fatima Mansour",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
          text: "The team at Silicon Value is very creditworthy. Just 3 days after payment, our container for Cairo was loaded and shipped. This efficiency solved our urgent inventory needs perfectly.",
          role: "North Africa Logistics",
        },
        {
          id: 3,
          name: "Yousef El-Sayed",
          image:
            "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=200&h=200&auto=format&fit=crop",
          text: "I bought from other factories before Silicon Value, but I was disappointed every time. Choosing them brought us great benefits in the Saudi market; the stable quality is something others can't achieve.",
          role: "Jeddah Trade House",
        },
      ],
    },
    whyChoose: {
      title: "Why Choose Silicon Value Used Clothes",
      highlightWord: "Silicon Value",
      subtitle: "Quality You Can Trust, Value You Can Measure.",
      features: [
        {
          id: 1,
          title: "Quality Control",
          icon: "ShieldCheck",
          description:
            "At Silicon Value, we maintain strict quality standards to ensure that every piece of used clothing we provide is not only good but also useful for the buyer. Our team inspects each item carefully, ensuring there are no holes, tears, or stains. We also make sure that the clothes are clean, in good condition, and in consistent sizes, offering a variety of brands, including both well-known international labels and quality local brands.",
        },
        {
          id: 2,
          title: "Packaging",
          icon: "Box",
          description:
            "We can pack more efficiently than most suppliers. While others may only pack 900 bags of used clothes in a 40-foot container, we can pack up to 1,050 bags. This efficiency helps us reduce shipping costs for you. Given the challenges of international shipping, we ensure our packaging is sturdy and able to withstand the journey to ensure your clothes arrive in excellent condition.",
        },
        {
          id: 3,
          title: "Transportation",
          icon: "Globe",
          description:
            "How do our used clothes reach you? We work with all major shipping companies to ensure the best transportation options at the most competitive rates. With our deep partnerships and a strong price advantage, we help you save on shipping costs. Additionally, we offer customs clearance services at several major ports, especially in Africa, saving you both time and effort.",
        },
        {
          id: 4,
          title: "After Sales Service",
          icon: "MessageSquare",
          description:
            "Our professional sales team is committed to providing full after sales support for all your used clothing orders. From production and loading to shipping and customs clearance, we make sure the entire process is seamless. For your peace of mind, we send daily quality inspection reports and videos, keeping you informed at every step of the process.",
        },
      ],
    },
  },

  // Fabric
  fabric: {
    hero: {
      title: "Fabric Quality at Silicon Value",
      highlightWord: "Quality",
    },
    content: [
      'At Silicon Value, we take great pride in the variety and quality of fabrics. We source garments made from a wide range of materials, including <span class="font-bold text-slate-900">cotton, polyester, wool, denim, and more</span>, ensuring that our clients receive clothing options that are both durable and comfortable.',
      "Each piece of clothing is carefully sorted and inspected to maintain the integrity of the fabric, ensuring there are no excessive wear or damage to the material. Whether you're looking for soft, breathable fabrics for warmer climates or heavier materials for colder conditions, we have a diverse selection to meet your market's needs.",
      'Our commitment to <span class="font-bold text-blue-600">high-quality fabric</span> ensures that your customers receive garments they can trust and wear with confidence.',
    ],
    products: [
      { id: 1, title: "Cotton Fabric", image: "Cotton Fabric.jpeg" },
      {
        id: 2,
        title: "Polyester Blend",
        image: "Polyester Blend.jpeg",
      },
      {
        id: 3,
        title: "Premium Denim",
        image: "Premium Denim.jpeg",
        isPremium: true,
      },
      {
        id: 4,
        title: "Wool Material",
        image: "Wool Material.jpeg",
      },
      { id: 5, title: "Silk Fabric", image: "Silk Fabric.jpeg" },
      { id: 6, title: "Linen Fabric", image: "Linen Fabric.jpeg" },
      { id: 7, title: "Canvas Textile", image: "Canvas Textile.jpeg" },
      {
        id: 8,
        title: "Rayon Material",
        image: "Rayon Material.jpeg",
      },
      { id: 9, title: "Spandex Fabric", image: "Used Handbags.jpeg" },
      { id: 10, title: "Velvet Textile", image: "Velvet Textile.jpeg" },
      { id: 11, title: "Chiffon Silk", image: "Chiffon Silk.jpeg" },
      { id: 12, title: "Satin Finish", image: "Satin Finish.jpeg" },
      {
        id: 13,
        title: "Tweed Material",
        image: "Tweed Material.jpeg",
        isPremium: true,
      },
      { id: 14, title: "Corduroy Fabric", image: "Corduroy Fabric.jpeg" },
      { id: 15, title: "Jersey Knit", image: "Jersey Knit.jpeg" },
      { id: 16, title: "Fleece Lining", image: "Fleece Lining.jpeg" },
      { id: 17, title: "Georgette Fabric", image: "Georgette Fabric.jpeg" },
      { id: 18, title: "Taffeta Silk", image: "Taffeta Silk.jpeg" },
      { id: 19, title: "Brocade Textile", image: "Brocade Textile.jpeg" },
      { id: 20, title: "Poplin Cotton", image: "Poplin Cotton.jpeg" },
      { id: 21, title: "Flannel Plaid", image: "Flannel Plaid.jpeg" },
      { id: 22, title: "Organza Fabric", image: "Organza Fabric.jpeg" },
      {
        id: 23,
        title: "Bamboo Fiber",
        image: "Bamboo Fiber.jpeg",
      },
      { id: 24, title: "Jacquard Weave", image: "Jacquard Weave.jpeg" },
      { id: 25, title: "Muslin Cotton", image: "Muslin Cotton.jpeg" },
      {
        id: 26,
        title: "Faux Leather",
        image: "Faux Leather.jpeg",
      },
      {
        id: 27,
        title: "Lace Trim",
        image: "Lace Trim.jpeg",
      },
      {
        id: 28,
        title: "Nylon Mesh",
        image: "Nylon Mesh.jpeg",
      },
      { id: 29, title: "Microfiber", image: "Microfiber.jpeg" },
      { id: 30, title: "Terry Cloth", image: "Terry Cloth.jpeg" },
      { id: 31, title: "Seersucker", image: "Seersucker.jpeg" },
      { id: 32, title: "Cashmere Wool", image: "Cashmere Wool.jpeg" },
    ],
    categories: {
      title: "Browse Our Fabric Collection",
      banner: {
        image:
          "https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=1200&auto=format&fit=crop",
        title: "Cotton & Silk & Linen & Polyester",
        subtitle: "Premium Fabrics • Diverse Selection",
      },
      groups: [
        {
          title: "Natural Fabrics",
          icon: "Heart",
          items: ["Cotton", "Linen", "Silk", "Wool", "Canvas"],
        },
        {
          title: "Synthetic Fabrics",
          icon: "Star",
          items: ["Polyester", "Nylon", "Rayon", "Spandex", "Fleece"],
        },
        {
          title: "Woven Fabrics",
          icon: "Gift",
          items: ["Denim", "Tweed", "Taffeta", "Brocade", "Corduroy"],
        },
        {
          title: "Specialty Fabrics",
          icon: "Plus",
          items: ["Velvet", "Chiffon", "Jersey", "Satin", "Georgette"],
        },
      ],
    },
    banner2: {
      badge: "Premium Fabric Supplier",
      heading: "Fabric Quality at",
      headingHighlight: "Silicon Value",
      paragraphs: [
        "At Silicon Value, we pride ourselves on offering a wide variety of high-quality fabrics to meet the diverse needs of our customers. We source our fabrics from trusted manufacturers and suppliers, ensuring that each material meets rigorous standards for durability, comfort, and style.",
        "Whether you're looking for natural fibers like cotton, linen, and wool, or synthetic options like polyester and nylon, we provide fabrics that are versatile, reliable, and designed to last. Our fabrics come in a range of textures, colors, and weights, catering to both fashion and functional needs. From lightweight, breathable materials ideal for summer wear to heavier fabrics perfect for colder climates, we offer options that can help bring your designs to life and meet the demands of your market.",
      ],
      cards: [
        {
          icon: "Factory",
          title: "Direct From Top Textile Mills",
          description:
            "Our fabrics are sourced directly from leading textile mills in <strong>Guangzhou, Shenzhen, and Shanghai</strong>, ensuring premium quality at competitive prices with no middlemen involved.",
        },
        {
          icon: "CheckCircle",
          title: "Rigorous Fabric Inspection",
          description:
            "Every batch undergoes thorough inspection for <strong>weave consistency, color fastness, and durability</strong>, guaranteeing that only the finest materials reach your production line.",
        },
      ],
    },
    feedback: {
      title: "Client",
      highlightWord: "Testimonials",
      trustText: "Trusted by 300+ textile businesses across 40+ countries.",
      testimonials: [
        {
          id: 1,
          name: "Hassan Ibrahim",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
          text: "The cotton fabrics from Silicon Value are exceptional. We've been sourcing from them for our garment factory in Lagos and the quality has been consistently outstanding. Our production waste dropped by 15% since switching to their materials.",
          role: "West Africa Textiles Ltd",
        },
        {
          id: 2,
          name: "Amira Khalil",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
          text: "What impressed us most was the variety. From silk to denim, Silicon Value delivered exactly what we needed for our fashion line in Amman. The color consistency across batches is something we rarely find with other suppliers.",
          role: "Middle East Fashion House",
        },
        {
          id: 3,
          name: "Omar Diallo",
          image:
            "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=200&h=200&auto=format&fit=crop",
          text: "Silicon Value's logistics team handled everything perfectly. From fabric selection to customs clearance in Dakar, the entire process was seamless. Their polyester blends are now our best-selling material in the Senegalese market.",
          role: "Dakar Import Trading Co.",
        },
      ],
    },
    whyChoose: {
      title: "Why Choose Silicon Value Fabrics",
      highlightWord: "Silicon Value",
      subtitle: "Premium Fabrics, Global Reach, Unmatched Quality.",
      features: [
        {
          id: 1,
          title: "High-Quality Raw Materials",
          icon: "Gem",
          description:
            "At Silicon Value, we source our fabrics from some of the best textile manufacturers in China. Our raw materials come from trusted suppliers in cities like Guangzhou, Shenzhen, and Shanghai, known for their advanced manufacturing capabilities and high-quality production standards. These cities are home to top-tier textile factories, ensuring that the fabrics we offer are made from premium, sustainable materials.",
        },
        {
          id: 2,
          title: "Excellent Quality Control",
          icon: "ShieldCheck",
          description:
            "Quality is the backbone of Silicon Value's operations. Our CEO places immense importance on maintaining high standards for all our fabrics. Our team of quality inspectors carefully inspects each batch of fabric. From checking the weave and texture to ensuring there are no defects such as color fading, stains, or irregularities, we ensure that only the highest quality fabrics reach our customers.",
        },
        {
          id: 3,
          title: "Experienced in Sea Freight",
          icon: "Ship",
          description:
            "Silicon Value's logistics team is experienced in sea freight, with a strong understanding of the customs clearance policies of over 60 countries. We work with the most reliable sea freight companies worldwide, enabling us to offer you competitive prices on shipping. Our team is skilled in negotiating favorable rates, ensuring that your shipping costs are minimized while maintaining fast and secure delivery times.",
        },
        {
          id: 4,
          title: "Various Fabrics and Styles",
          icon: "Palette",
          description:
            "At Silicon Value, we offer a wide selection of new fabrics to suit various industries and applications. Whether you're looking for cotton, linen, silk, polyester, wool, or synthetic blends, we provide a diverse range of fabrics to meet your specific market demands. Our fabrics come in a variety of weights, textures, and colors, giving you the flexibility to create the perfect product for your customers.",
        },
        {
          id: 5,
          title: "Professional Container Loading",
          icon: "Box",
          description:
            "Our efficient container loading teams maximize space to ensure you get the most value from every shipment. We can load up to 28.6 tons of fabric into a 40-foot container, 1.6 tons more than many other suppliers. This enables us to reduce shipping costs, offering you even greater savings without compromising on product quality.",
        },
        {
          id: 6,
          title: "After-Sales Service",
          icon: "MessageSquare",
          description:
            "To ensure a seamless experience, we provide comprehensive after-sales support. From live production updates to real-time fabric inspections and loading demonstrations, we keep you informed every step of the way. At Silicon Value, our goal is to make the entire process smooth and transparent, so you can focus on growing your business with confidence.",
        },
      ],
    },
  },
};

export const PRODUCT_CATEGORIES = [
  {
    id: "cotton",
    name: "Cotton",
    image: cottonImg, // Use the imported variable, not a string
    path: "/cotton",
  },
  {
    id: "Polyester",
    name: "Polyester",
    image: polyesterImg,
    path: "/polyester",
  },
  {
    id: "leather-shoes",
    name: "Leather Shoes",
    image: leatherShoesImg,
    path: "/leather-shoes",
  },
  {
    id: "canvas-shoes",
    name: "Canvas Shoes",
    image: canvasShoesImg,
    path: "/canvas-shoes",
  },
  {
    id: "nylon-bags",
    name: "Nylon Bags",
    image: nylonBagImg,
    path: "/nylon-bags",
  },
  {
    id: "Leather-bags",
    name: "Leather Bags",
    image: leatherBagImg,
    path: "/Leather-bags",
  },
  {
    id: "New Clothes",
    name: "Linen shirt",
    image: linenShirtImg,
    path: "/linen-clothes",
  },
  {
    id: "Fleece jacket",
    name: "Fleece jacket",
    image: fleeceJacketImg,
    path: "/fleece-jacket",
  },
];
