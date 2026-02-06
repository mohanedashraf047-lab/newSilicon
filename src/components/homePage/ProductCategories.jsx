import { useInView } from 'react-intersection-observer'
import {PRODUCT_CATEGORIES} from '../../constants/siteData'

const ProductCategories = () => {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Product Categories</h2>
          <div className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto space-y-3">
            <p>
              At Silicon Value we offer a wide range of clothes, shoes, bags, and fabrics to meet your business needs. Our collection includes both new and used clothes, new and used shoes, bags, and premium fabrics suitable for various applications. We ensure that all items, whether new or used, are carefully selected, clean, and ready to wear or use.
            </p>
            <p>
              We also provide wholesale pricing for new and used branded shoes, washed shoes, mixed shoes, and mixed bags. For your convenience, we can provide the latest pricing and wholesale price lists to help you find the best deals.
            </p>
            <p>
              We welcome you to visit our factory and explore our diverse collection of clothes and other high-quality products!
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
              className={`image-zoom card-hover bg-white rounded-lg overflow-hidden shadow-md cursor-pointer ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}

            >
              <div className="aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="p-3 lg:p-4">
                <h3 className="font-semibold text-center text-sm lg:text-base">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories
