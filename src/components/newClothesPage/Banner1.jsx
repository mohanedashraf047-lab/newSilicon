
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import china from "../../assets/newClothesImages/china-stars3.jpeg";

const Banner1 = () => {
  const { t } = useTranslation(["newClothes"]);

  return (
    <section
      className="relative min-h-75 lg:min-h-75 flex items-center justify-center bg-cover bg-center bg-no-repeat   "
      style={{
        backgroundImage: `url(${china})`,
      }}
    >
      {/* Background Overlay - Using Tailwind 4 opacity and blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-75"></div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 z-10">
        {/* Main Heading */}
        <div className="text-start mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight leading-tight uppercase drop-shadow-lg">
            {t("banner.title")}
            <span className="relative inline-block ms-3">
              <span className="text-[#D4AF37]">{t("banner.titleHighlight")}</span>
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#D4AF37] rounded-full"></span>
            </span>
          </h1>

          {/* Decorative Divider */}
          <div className="flex items-center justify-start gap-3 mt-4">
            <div className="w-16 h-1.5 bg-white/80 rounded-full"></div>
            <div className="w-4 h-4 border-2 border-[#D4AF37] rotate-45"></div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm md:text-base font-medium">
          <Link
            to="/"
            className="text-[#D4AF37] hover:text-[#FFD700] transition-colors duration-300 uppercase"
          >
            {t("banner.breadcrumbHome")}
          </Link>

          <span className="text-white/50">/</span>

          <span className="text-white/80 uppercase">{t("banner.breadcrumbCurrent")}</span>
        </nav>
      </div>
    </section>
  );
};

export default Banner1;
