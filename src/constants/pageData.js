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
  usedClothes: {
    hero: {
      title: "Second Hand Clothes",
      highlightWord: "Hand",
    },
    content: [
      'At <span class="font-bold text-blue-600">Silicon Value</span>, quality is our top priority. We understand that every product must meet strict performance standards, and we are committed to delivering products that exceed your expectations. All of our clothing undergoes rigorous quality checks to ensure they are fully functional and free from defects.',
      '<span class="font-bold text-slate-900">Quality</span> is always the most important factor in everything that we do. Used clothing is expected to be of high quality and we want to never disappoint our clients.',
      'We follow a <span class="font-bold text-slate-900">detailed set of quality standards</span> that focus on ensuring each item is not only wearable but also durable and reliable. We ensure our products are — <span class="font-bold text-slate-900">no holes, tears, stains, consistent sizing, and sourced from trusted brands</span> like Nike, Adidas, Zara, and more, as well as high-quality emerging manufacturers.',
      "As we continue to grow as a leading global supplier, Silicon Value remains dedicated to delivering superior products to our customers, ensuring their businesses are powered by the best second-hand clothing available.",
    ],
    products: [
      {
        id: 1,
        title: "Used Mixed Clothes",
        image:
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800",
      },
      {
        id: 2,
        title: "Used Men's Wear",
        image:
          "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=800",
      },
      {
        id: 3,
        title: "Used Brand Clothes",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800",
        isPremium: true,
      },
      {
        id: 4,
        title: "Used Winter Clothes",
        image:
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800",
      },
      {
        id: 5,
        title: "Used Ladies Wear",
        image:
          "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800",
      },
      {
        id: 6,
        title: "Used Kids Clothes",
        image:
          "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800",
      },
      {
        id: 7,
        title: "Used Summer Clothes",
        image:
          "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800",
      },
      {
        id: 8,
        title: "Used Mixed Shoes",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
      },
      {
        id: 9,
        title: "Used Mixed Bags",
        image:
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800",
      },
      {
        id: 10,
        title: "Used Denim Jeans",
        image:
          "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800",
      },
      {
        id: 11,
        title: "Used Cotton T-Shirts",
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",
      },
      {
        id: 12,
        title: "Used School Bags",
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800",
      },
      {
        id: 13,
        title: "Used Sneakers",
        image:
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800",
        isPremium: true,
      },
      {
        id: 14,
        title: "Used Jackets",
        image:
          "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800",
      },
      {
        id: 15,
        title: "Used Sportswear",
        image:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800",
      },
      {
        id: 16,
        title: "Used Kids Toys Mix",
        image:
          "https://images.unsplash.com/photo-1532330393533-443990a51d10?q=80&w=800",
      },
      {
        id: 17,
        title: "Used Caps & Hats",
        image:
          "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800",
      },
      {
        id: 18,
        title: "Used Hoodies",
        image:
          "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800",
      },
      {
        id: 19,
        title: "Used Tropical Mix",
        image:
          "https://images.unsplash.com/photo-1523381294911-8d3ecaa40203?q=80&w=800",
      },
      {
        id: 20,
        title: "Used Silk Scarves",
        image:
          "https://images.unsplash.com/photo-1601994435812-df1740eab393?q=80&w=800",
      },
      {
        id: 21,
        title: "Used Curtains",
        image:
          "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800",
      },
      {
        id: 22,
        title: "Used Bed Sheets",
        image:
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800",
      },
      {
        id: 23,
        title: "Used Blankets",
        image:
          "https://images.unsplash.com/photo-1580302200322-22440fa30d7b?q=80&w=800",
      },
      {
        id: 24,
        title: "Used Work Wear",
        image:
          "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800",
      },
      {
        id: 25,
        title: "Used Dress Shirts",
        image:
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800",
      },
      {
        id: 26,
        title: "Used Skirts",
        image:
          "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800",
      },
      {
        id: 27,
        title: "Used Cargo Pants",
        image:
          "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800",
      },
      {
        id: 28,
        title: "Used Sweaters",
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800",
      },
      {
        id: 29,
        title: "Used Polo Shirts",
        image:
          "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800",
      },
      {
        id: 30,
        title: "Used Belts",
        image:
          "https://images.unsplash.com/photo-1624222247344-550fbadfd08d?q=80&w=800",
      },
      {
        id: 31,
        title: "Used Handbags",
        image:
          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800",
      },
      {
        id: 32,
        title: "Used Football Shoes",
        image:
          "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=800",
      },
      {
        id: 33,
        title: "Used Fashion Heels",
        image:
          "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=800",
      },
      {
        id: 34,
        title: "Used Backpacks",
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800",
      },
      {
        id: 35,
        title: "Used Winter Coats",
        image:
          "https://images.unsplash.com/photo-1539533397341-392751fa4e7c?q=80&w=800",
        isPremium: true,
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
      {
        id: 1,
        title: "Cotton Fabric",
        image:
          "https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=800",
      },
      {
        id: 2,
        title: "Polyester Blend",
        image:
          "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?q=80&w=800",
      },
      {
        id: 3,
        title: "Premium Denim",
        image:
          "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=800",
        isPremium: true,
      },
      {
        id: 4,
        title: "Wool Material",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=800",
      },
      {
        id: 5,
        title: "Silk Fabric",
        image:
          "https://images.unsplash.com/photo-1528459105426-b9548367069b?q=80&w=800",
      },
      {
        id: 6,
        title: "Linen Fabric",
        image:
          "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800",
      },
      {
        id: 7,
        title: "Canvas Textile",
        image:
          "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?q=80&w=800",
      },
      {
        id: 8,
        title: "Rayon Material",
        image:
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800",
      },
      {
        id: 9,
        title: "Spandex Fabric",
        image:
          "https://images.unsplash.com/photo-1560010991-380d3550e566?q=80&w=800",
      },
      {
        id: 10,
        title: "Velvet Textile",
        image:
          "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=800",
        isPremium: true,
      },
      {
        id: 11,
        title: "Chiffon Silk",
        image:
          "https://images.unsplash.com/photo-1551028150-64b9f398f678?q=80&w=800",
      },
      {
        id: 12,
        title: "Satin Finish",
        image:
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800",
      },
      {
        id: 13,
        title: "Tweed Material",
        image:
          "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800",
      },
      {
        id: 14,
        title: "Corduroy Fabric",
        image:
          "https://images.unsplash.com/photo-1603566160821-2d7ec521477c?q=80&w=800",
      },
      {
        id: 15,
        title: "Jersey Knit",
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",
      },
      {
        id: 16,
        title: "Fleece Lining",
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800",
      },
      {
        id: 17,
        title: "Georgette Fabric",
        image:
          "https://images.unsplash.com/photo-1582142839970-2b9e04b60f25?q=80&w=800",
      },
      {
        id: 18,
        title: "Taffeta Silk",
        image:
          "https://images.unsplash.com/photo-1528459105426-b9548367069b?q=80&w=800",
      },
      {
        id: 19,
        title: "Brocade Textile",
        image:
          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800",
      },
      {
        id: 20,
        title: "Poplin Cotton",
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",
      },
      {
        id: 21,
        title: "Organic Hemp",
        image:
          "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?q=80&w=800",
      },
      {
        id: 22,
        title: "Gabardine Wool",
        image:
          "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800",
      },
      {
        id: 23,
        title: "Flannel Plaid",
        image:
          "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800",
      },
      {
        id: 24,
        title: "Organza Fabric",
        image:
          "https://images.unsplash.com/photo-1551028150-64b9f398f678?q=80&w=800",
      },
      {
        id: 25,
        title: "Bamboo Fiber",
        image:
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800",
      },
      {
        id: 26,
        title: "Jacquard Weave",
        image:
          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800",
      },
      {
        id: 27,
        title: "Muslin Cotton",
        image:
          "https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=800",
      },
      {
        id: 28,
        title: "Faux Leather",
        image:
          "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800",
      },
      {
        id: 29,
        title: "Lace Trim",
        image:
          "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800",
      },
      {
        id: 30,
        title: "Nylon Mesh",
        image:
          "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?q=80&w=800",
      },
      {
        id: 31,
        title: "Microfiber",
        image:
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800",
      },
      {
        id: 32,
        title: "Terry Cloth",
        image:
          "https://images.unsplash.com/photo-1580302200322-22440fa30d7b?q=80&w=800",
      },
      {
        id: 33,
        title: "Seersucker",
        image:
          "https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=800",
      },
      {
        id: 34,
        title: "Cashmere Wool",
        image:
          "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800",
        isPremium: true,
      },
      {
        id: 35,
        title: "Stretch Denim",
        image:
          "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=800",
      },
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
