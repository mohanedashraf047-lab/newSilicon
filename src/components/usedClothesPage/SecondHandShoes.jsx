import { useInView } from "react-intersection-observer";

const SecondHandShoes = () => {
  const { ref: heroRef, inView: heroVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: contentRef, inView: contentVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: ctaRef, inView: ctaVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      {/* Main Content */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#FFD700]">
        <div className="container mx-auto px-4 rounded bg-[#FFD900] py-10 sm:py-14 lg:py-20 shadow-red-500 shadow-lg border-none border-red-400 ">
          <div
            ref={heroRef}
            className={`text-center mb-10 sm:mb-14 transition-all duration-700 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-16 animate-fade-in-down">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Second <span className="text-blue-600">Hand</span> Clothes
              </h2>
              <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>
          </div>

          <div
            ref={contentRef}
            className={`max-w-4xl mx-auto space-y-5 sm:space-y-6 transition-all duration-700 delay-200 ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              At <span className="font-bold text-blue-600">Silicon Value</span>,
              quality is our top priority. We understand that every product must
              meet strict performance standards, and we are committed to
              delivering products that exceed your expectations. All of our
              clothing undergoes rigorous quality checks to ensure they are
              fully functional and free from defects.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              <span className="font-bold text-slate-900">Quality</span> is
              always the most important factor in everything that we do. Used
              clothing is expected to be of high quality and we want to never
              disappoint our clients.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              We follow a{" "}
              <span className="font-bold text-slate-900">
                detailed set of quality standards
              </span>{" "}
              that focus on ensuring each item is not only wearable but also
              durable and reliable. We ensure our products are —{" "}
              <span className="font-bold text-slate-900">
                no holes, tears, stains, consistent sizing, and sourced from
                trusted brands
              </span>{" "}
              like Nike, Adidas, Zara, and more, as well as high-quality
              emerging manufacturers.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              As we continue to grow as a leading global supplier, Silicon Value
              remains dedicated to delivering superior products to our
              customers, ensuring their businesses are powered by the best
              second-hand clothing available.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondHandShoes;
