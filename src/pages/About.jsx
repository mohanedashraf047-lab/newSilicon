// pages/About.jsx
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import {
  COMPANY_INFO,
  WHYSILICONVALUE,
  COMPANY_STATS,
} from "../constants/siteData";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 lg:pt-32">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-linear-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            About {COMPANY_INFO.name}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl">
            {COMPANY_INFO.fullDescription}
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {COMPANY_STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Facilities</h2>
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start">
                  <span className="text-2xl sm:text-3xl mr-3 sm:mr-4 shrink-0">🏭</span>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Factory Size</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {COMPANY_INFO.factorySize} of modern production facilities
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl sm:text-3xl mr-3 sm:mr-4 shrink-0">⚙️</span>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Production Lines</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {COMPANY_INFO.productionLines} advanced production lines
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl sm:text-3xl mr-3 sm:mr-4 shrink-0">👥</span>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Expert Team</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {COMPANY_INFO.employees} skilled employees
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl sm:text-3xl mr-3 sm:mr-4 shrink-0">📅</span>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Established</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Since {COMPANY_INFO.establishedYear}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Mission</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                At Hissen Global, our mission is to provide the highest quality
                second-hand clothing, shoes, and bags to customers worldwide
                while maintaining sustainable and ethical business practices.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
                We are committed to excellence in every aspect of our
                operations, from sourcing raw materials to final delivery,
                ensuring our customers receive products that meet the highest
                standards of quality and value.
              </p>
              <Button onClick={() => navigate("/contact")}>Get in Touch</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {WHYSILICONVALUE.map((item) => (
              <div
                key={item.id}
                className="text-center p-5 sm:p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-5xl mb-4">
                  <item.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Want to Learn More?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
            Contact us today to discuss your wholesale needs
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/contact")}
            className="bg-white text-primary-600 hover:bg-gray-100"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
