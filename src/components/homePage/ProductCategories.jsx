import { useInView } from "react-intersection-observer";
import { PRODUCT_CATEGORIES } from "../../constants/pageData";

const ProductCategories = () => {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Product Categories
          </h2>
          <div className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto space-y-4">
            <p>
              At Silicon Value, we specialize in exporting a wide variety of
              high-quality fabrics and both new and used clothing to meet the
              diverse needs of your business. Whether you're looking for premium
              fabrics for production or bulk quantities of new or gently used
              apparel, we ensure that every item is carefully inspected, clean,
              and ready for distribution. Our products are sourced with
              attention to quality and sustainability, offering you reliable,
              cost-effective solutions. We are committed to providing excellent
              service, competitive pricing, and timely delivery to help your
              business thrive.
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
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="p-5 bg-white text-center">
                <h3 className="font-extrabold text-slate-900 text-sm lg:text-base uppercase tracking-wider">
                  {product.name}
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
