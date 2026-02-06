
import { useForm } from "../hooks";
import Button from "../components/ui/Button";
import { COMPANY_INFO } from "../constants/siteData";
import { getWhatsAppLink } from "../utils/helpers";

const Contact = () => {
  const { values, errors, touched, handleChange, handleBlur, validate, reset } =
    useForm(
      { name: "", email: "", whatsapp: "", company: "", message: "" },
      {
        name: { required: true, minLength: 2 },
        email: { required: true, email: true },
        whatsapp: { required: true },
        message: { required: true, minLength: 10 },
      },
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Thank you for your message! We will contact you soon.");
      reset();
    }
  };

  return (
    <div className="pt-20 lg:pt-32">
      {/* Hero */}
      <section className="py-12 sm:py-16 bg-linear-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl lg:text-2xl">
            Get in touch for wholesale inquiries
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 sm:py-3.5 text-base rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                  {touched.name && errors.name && (
                    <p className="text-red-600 text-sm mt-2">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 sm:py-3.5 text-base rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                  {touched.email && errors.email && (
                    <p className="text-red-600 text-sm mt-2">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={values.whatsapp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 sm:py-3.5 text-base rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="+1234567890"
                  />
                  {touched.whatsapp && errors.whatsapp && (
                    <p className="text-red-600 text-sm mt-2">
                      {errors.whatsapp}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={values.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-3.5 text-base rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows="5"
                    className="w-full px-4 py-3 sm:py-3.5 text-base rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
                    placeholder="Tell us about your wholesale needs..."
                  />
                  {touched.message && errors.message && (
                    <p className="text-red-600 text-sm mt-2">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full min-h-12">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">📧</span>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-primary-600 hover:underline"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-3xl mr-4">📱</span>
                    <div>
                      <h3 className="font-bold mb-2">WhatsApp</h3>
                      <div className="space-y-1">
                        {COMPANY_INFO.whatsapp
                          .slice(0, 4)
                          .map((phone, index) => (
                            <a
                              key={index}
                              href={getWhatsAppLink(
                                phone,
                                "Hello, I am interested in your products",
                              )}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-primary-600 hover:underline"
                            >
                              {phone}
                            </a>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-3xl mr-4">📍</span>
                    <div>
                      <h3 className="font-bold mb-1">Location</h3>
                      <p className="text-gray-600">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-3xl mr-4">🕐</span>
                    <div>
                      <h3 className="font-bold mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 - 18:00
                      </p>
                      <p className="text-gray-600">Saturday: 9:00 - 17:00</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Facts */}
              <div className="bg-primary-600 text-white rounded-lg shadow-lg p-6 lg:p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="mr-3">🏭</span>
                    Factory: {COMPANY_INFO.factorySize}
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">⚙️</span>
                    Production Lines: {COMPANY_INFO.productionLines}
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">👥</span>
                    Employees: {COMPANY_INFO.employees}
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">📅</span>
                    Established: {COMPANY_INFO.establishedYear}
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">🌍</span>
                    Export to 110+ Countries
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
