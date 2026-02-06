import React from "react";
import {
  Cpu,
  Layers,
  Ship,
  ShieldCheck,
  PackageCheck,
  Headset,
} from "lucide-react";

const advantages = [
  {
    title: "High-Quality Raw Materials",
    description:
      "At Silicon Value, we pride ourselves on sourcing only the highest-quality raw materials for our tech components. Our manufacturing facilities in China are equipped with state-of-the-art technology to ensure that we work with the finest semiconductors, metals, and advanced materials, directly sourced from trusted suppliers. This allows us to deliver stable, reliable products with superior performance and longevity. Silicon Value maintains a strong focus on quality control, ensuring that every component we produce meets the highest industry standards. With a dedicated team and rigorous testing protocols, we offer products that are not only durable but also engineered for excellence, ensuring our clients receive the best solutions for their needs",
    icon: <Cpu className="w-12 h-12" />,
  },
  {
    title: "Variety",
    description:
      "Silicon Value offers a wide range of tech components with  categories of high-quality products, including semiconductors, circuit boards, microchips, and advanced electronic materials. This extensive variety is highly favored by our clients, as it allows for customized solutions tailored to specific project needs. Our diverse product range not only provides flexibility in meeting varying demands but also enables more efficient container packing, maximizing the profitability of every shipment",
    icon: <Layers className="w-12 h-12" />,
  },
  {
    title: "Experienced in Sea Freight",
    description:
      "At Silicon Value, we have established strong partnerships with a wide range of reliable shipping companies, giving us a significant advantage when it comes to shipping costs. This competitive edge allows us to offer more cost-effective solutions compared to other suppliers. Our logistics expertise and flexible shipping options make us the go to choice for clients who need urgent deliveries. If you require fast shipping of critical tech components but are struggling to find the right supplier, Silicon Value is here to help. We will work closely with you to identify the most efficient and affordable shipping options, ensuring that your products reach their destination in the shortest time possible, all while minimizing costs.",
    icon: <Ship className="w-12 h-12" />,
  },
  {
    title: "Excellent Quality",
    description:
      "At Silicon Value, we are committed to providing the highest quality tech components, sourced from the best suppliers in the industry. This strong foundation gives us a competitive advantage over many others in the market. Additionally, we maintain a rigorous quality management system that ensures every product meets international standards.",
    icon: <ShieldCheck className="w-12 h-12" />,
  },
  {
    title: "Professional Container Loading",
    description:
      " At Silicon Value, we have extensive expertise in optimizing the loading of shipping containers, ensuring every shipment is packed efficiently and securely. Our experienced loading team can maximize container capacity, ensuring that a 40-foot container, for example, can accommodate up to 650 units of tech components 10% more than the standard capacity. This leads to significant savings on shipping costs, especially during times of high freight prices. By optimizing container loading, we help our customers reduce logistics expenses while ensuring their tech components are transported securely and cost-effectively. With Silicon Value, you can trust in our commitment to delivering high quality products at the best possible value",
    icon: <PackageCheck className="w-12 h-12" />,
  },
  {
    title: "After-Sales Service",
    description:
      "At Silicon Value, we prioritize our customers satisfaction by offering exceptional after sales support. To ensure a seamless experience, we provide real time services such as live production monitoring, live inspection, and live loading, allowing you to oversee every step of the process. This transparency ensures you’re always in control and reassured about the quality and progress of your orderIf you have any concerns or questions, our dedicated customer service team is always ready to assist you. With Silicon Value, you can rest easy knowing you’ll receive reliable, prompt, and professional service every step of the way",
    icon: <Headset className="w-12 h-12" />,
  },
];

const Advantages = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-50  overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Advantage
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Advantage Grid */}
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-[#FFD700] transition-all duration-500 hover:-translate-y-2 border border-slate-100 hover:border-blue-200 flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-xl bg-blue-50 text-blue-600 transition-colors duration-500 group-hover:bg-blue-600 group-hover:text-white">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base mb-6">
                {item.description}
              </p>

              {/* Decorative Accent */}
              <div className="mt-auto pt-4">
                <div className="w-0 group-hover:w-full h-1 bg-blue-600 transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
