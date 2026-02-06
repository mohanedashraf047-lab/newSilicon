import React from "react";

const CompanyVideo = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80",
      alt: "Textile recycling facility",
      link: "/about",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
      alt: "Clothing warehouse",
      link: "/about",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
      alt: "Clothing rack display",
      link: "/about",
    },
    {
      id: 4,
      // New image focused on premium used handbags/bags
      src: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80",
      alt: "Wholesale mixed bags and handbags",
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
          Watch a 2-minute video to know why choose us
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
                className="w-full h-full object-cover"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-all duration-300">
                <button
                  className="w-20 h-20 lg:w-24 lg:h-24 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl"
                  aria-label="Play video"
                >
                  <svg
                    className="w-10 h-10 lg:w-12 lg:h-12 text-blue-600 ml-1"
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
                Silicon Value
              </h2>

              <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                <strong>
                  Silicon Value Co., Ltd is a highly regarded recycling company
                  that exports used clothes, shoes, and bags to countries in
                  Africa, Southeast Asia, and the Middle East. Our factory is
                  huge, covering an area of almost 20,000 square meters, and we
                  have 25 production lines and 400 employees. We use a
                  standardized sorting process that has earned us regular
                  customers from over 60 countries worldwide.
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
              /* 1. Added the custom animate class here */
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-left"
              style={{
                /* 2. Keep this to make them pop in one by one */
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "backwards",
              }}
            >
              <a href={image.link} className="block relative aspect-4/3">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* ... rest of your overlay code ... */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyVideo;
