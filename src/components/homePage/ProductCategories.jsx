import { useInView } from "react-intersection-observer";
import { PRODUCT_CATEGORIES } from "../../constants/pageData";
import { useTranslation } from "react-i18next";

const ProductCategories = () => {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { t } = useTranslation(["home"]);

  const categoryTranslations = t("productCategories.categories", { returnObjects: true }) || [];
  const categoryNameMap = categoryTranslations.reduce((acc, cat) => {
    acc[cat.id] = cat.name;
    return acc;
  }, {});

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            {t("productCategories.title")}
          </h2>
          <div className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto space-y-4">
            <p>
              {t("productCategories.description")}
            </p>
          </div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {PRODUCT_CATEGORIES.map((product, index) => (
            <div
              key={product.id}
              className={`image-zoom card-hover bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={categoryNameMap[product.id] || product.name}
                  className="w-full h-full  hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="p-5 bg-white text-center">
                <h3 className="font-extrabold text-slate-900 text-sm lg:text-base uppercase tracking-wider">
                  {categoryNameMap[product.id] || product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
