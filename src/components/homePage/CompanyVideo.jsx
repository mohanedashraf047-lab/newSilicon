// 1. Import your images at the top
import factoryImg1 from "../../assets/companyVideo/img1.jpeg";
import warehouseImg2 from "../../assets/companyVideo/img2.jpeg";
import rackImg3 from "../../assets/companyVideo/img3.jpeg";
import bagsImg4 from "../../assets/companyVideo/img4.jpeg";
import { useTranslation } from "react-i18next";

const CompanyVideo = () => {
  const { t } = useTranslation(["home"]);

  const images = [
    {
      id: 1,
      src: factoryImg1, // Use the variable, not the string
      link: "/about",
    },
    {
      id: 2,
      src: warehouseImg2,
      link: "/about",
    },
    {
      id: 3,
      src: rackImg3,
      link: "/about",
    },
    {
      id: 4,
      src: bagsImg4,
      link: "/about",
    },
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-linear-to-br from-blue-400 via-purple-500 to-blue-800">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 px-4">
        {t("companyVideo.sectionTitle")}
        </h2>

        {/* Main Content Row */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          {/* Video Column */}
          <div className="lg:col-span-8">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl group">
              {/* Video Thumbnail */}
              <img
                src="https://static.kingswayvideo.com/101299836586060892225/vod/ce7e399065/cover.jpg"
                alt="Company Video"
                className="w-full h-full object-cover object-top"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-all duration-300">
                <button
                  className="w-20 h-20 lg:w-24 lg:h-24 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl"
                  aria-label="Play video"
                >
                  <svg
                    className="w-10 h-10 lg:w-12 lg:h-12 text-blue-600 ms-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Video Duration */}
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-black/70 text-white text-sm rounded-full backdrop-blur-sm">
                  02:15
                </span>
              </div>
            </div>
          </div>

          {/* Company Info Column */}
          <div className="lg:col-span-4">
            <div className="h-full flex flex-col justify-center">
              <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
                {t("companyVideo.companyName")}
              </h2>

              <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                <strong>
                  {t("companyVideo.description")}
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-left overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "backwards",
              }}
            >
              <a href={image.link} className="block relative aspect-5/6">
                <img
                  src={image.src}
                  alt=""
                  loading="lazy"
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110
            ${image.id === 3 ? "object-top" : "object-center"}`}
                  /* If it's the 3rd image, show the top. Otherwise, keep it centered like normal */
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyVideo;
