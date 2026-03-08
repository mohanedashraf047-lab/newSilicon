// 1. Import your images at the top
import factoryImg1 from "../../assets/companyVideo/img1.jpeg";
import warehouseImg2 from "../../assets/companyVideo/img2.jpeg";
import rackImg33 from "../../assets/companyVideo/img3.3.jpeg";
import bagsImg4 from "../../assets/companyVideo/img4.jpeg";
import { useTranslation } from "react-i18next";

const CompanyVideo = () => {
  const { t } = useTranslation(["home"]);

  const images = [
    {
      id: 1,
      src: factoryImg1,
      link: "/about",
    },
    {
      id: 2,
      src: warehouseImg2,
      link: "/about",
    },
    {
      id: 3,
      src: rackImg33,
      link: "/about",
    },
    {
      id: 4,
      src: bagsImg4,
      link: "/about",
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-linear-to-br from-blue-900 via-blue-500 to-indigo-900">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t("companyVideo.sectionTitle")}
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
        </div>

        {/* Company Info Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 sm:p-10 lg:p-12 border border-white/20 shadow-2xl">
            {/* Decorative Quote Icon */}
            <div className="absolute top-6 right-6 text-white/20">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              {t("companyVideo.companyName")}
            </h3>

            <p className="text-base sm:text-lg lg:text-xl text-blue-100/90 leading-relaxed">
              <strong>{t("companyVideo.description")}</strong>
            </p>

            {/* Decorative Bottom Line */}
            <div className="mt-8 flex items-center gap-2">
              <div className="w-12 h-0.5 bg-linear-to-r from-blue-400 to-transparent"></div>
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "backwards",
              }}
            >
              <a className="block relative aspect-5/6">
                <img
                  src={image.src}
                  alt="Company Visualization"
                  loading="lazy"
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110
                    ${image.id === 3 ? "object-top" : "object-center"}`}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    
                  </span>
                </div>
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/50 transition-colors duration-300"></div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyVideo;
