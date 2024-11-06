import React from 'react'

function Services() {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Geekyness - Your Partner in Innovative Web Solutions</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n          /* Text Animation */\n          .animate-text {\n            white-space: nowrap;\n            overflow: hidden;\n            width: 0;\n            animation: animate-text 5s forwards;\n          }\n        \n          @keyframes animate-text {\n            0% {\n              width: 0;\n            }\n            100% {\n              width: 100%;\n            }\n          }\n        \n          /* Slide-left Animation */\n          .slide-left {\n            opacity: 0;\n            transform: translateX(-100px);\n            animation: slideRight 1.2s forwards;\n          }\n        \n          @keyframes slideRight {\n            to {\n              opacity: 1;\n              transform: translateX(0);\n            }\n          }\n        \n          /* Responsive Heading and Paragraph for Mobile */\n          @media (max-width: 640px) {\n            .mobile-slide-left {\n              opacity: 0;\n              transform: translateX(-30px);\n              animation: slideMobile 1.2s forwards;\n            }\n        \n            @keyframes slideMobile {\n              to {\n                opacity: 1;\n                transform: translateX(0);\n              }\n            }\n        \n            /* Font-size adjustments for mobile */\n            h1 {\n              font-size: 2.5rem; /* Smaller heading size on mobile */\n            }\n        \n            p {\n              font-size: 0.875rem; /* Smaller paragraph size */\n            }\n          }\n        \n          /* Larger screen adjustments */\n          @media (min-width: 641px) {\n            h1 {\n              font-size: 3.5rem; /* Medium heading size */\n            }\n        \n            p {\n              font-size: 1rem; /* Medium paragraph size */\n            }\n          }\n        \n          @media (min-width: 1024px) {\n            h1 {\n              font-size: 4.5rem; /* Larger heading size for desktops */\n            }\n        \n            p {\n              font-size: 1.125rem; /* Larger paragraph size */\n            }\n          }\n     "
    }}
  />
  <div className="max-w-4xl mx-auto py-16 px-4 md:px-6 lg:px-8">
    <h1 className="text-7xl questrial sans-serif mb-8 slide-left">Service</h1>
    <p className="slide-left paragraph-responsive text-xs sm:text-lg lg:text-[20px] mb-4 sm:mb-6 mobile-slide-left">
      This is the space to introduce the Services section. Briefly describe the
      <span className="slide-left text-yellow-600 slideRight animate-text">
        types of <br />
        services offered
      </span>{" "}
      and highlight any special benefits or features.
    </p>
  </div>
  <section
    id="section1"
    className="flex flex-col md:flex-row max-w-6xl mx-auto rounded-3xl bg-orange-400"
  >
    <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden">
      {/* Text Section */}
      <div className="md:w-1/2 bg-orange-400 p-8">
        <svg viewBox="0 0 24 24" className="w-12 h-12 mb-6">
          <circle
            cx={12}
            cy={12}
            r={10}
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
          />
          <path
            d="M12 2 L12 22 M2 12 L22 12"
            stroke="currentColor"
            strokeWidth={2}
          />
        </svg>
        <h2 className="text-4xl font-bold mb-6">Web Development</h2>
        <div className="mb-6">
          <h3 className="text-xl font-bold underline mb-2">
            Responsive Design
          </h3>
          <p className="text-sm">
            In today's mobile-first world, having a website that looks great and
            works well on all devices is essential. Our responsive design
            services ensure that your website adapts seamlessly to any screen
            size, providing an optimal viewing experience for your users whether
            they are on a desktop, tablet, or smartphone.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold underline mb-2">
            E-Commerce Solutions
          </h3>
          <p className="text-sm">
            We build robust and secure e-commerce platforms tailored to your
            business needs. From setting up online stores to integrating payment
            gateways, we ensure your customers have a smooth and enjoyable
            shopping experience. Our e-commerce solutions are scalable and
            designed to grow with your business.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold underline mb-2">
            Custom Web Applications
          </h3>
          <p className="text-sm">
            When off-the-shelf solutions don't meet your needs, we create custom
            web applications that do. Our development team uses the latest
            technologies to build feature-rich, scalable, and secure web
            applications that align perfectly with your business objectives.
          </p>
        </div>
      </div>
      {/* Image Section (hidden on small screens) */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="https://static.wixstatic.com/media/c837a6_200cfd06635a4e30b1183c0bbbdee565~mv2.jpg/v1/fill/w_621,h_746,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/adrian-schwarz-XS7q-baZrmE-unsplash%20(1)_edited.jpg"
          alt="City skyline at night with light trails"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
  <br />
  <br />
  <br />
  <section
    id="section2"
    className="flex flex-col md:flex-row max-w-6xl mx-auto rounded-3xl"
  >
    <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-gray-200">
      {/* Image Section (hidden on small screens) */}
      <div className="hidden md:block md:w-1/2">
        <img
          className="rounded-3xl w-full h-full object-cover"
          src="https://static.wixstatic.com/media/c837a6_2e296e7d94704a749ecec3d6d35ebb91~mv2.jpg/v1/fill/w_621,h_861,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ashkan-forouzani-_Y82jqFIBgw-unsplash%20(1)_edited.jpg"
          alt="Construction crane"
        />
      </div>
      {/* Text Section */}
      <div className="md:w-1/2 p-8">
        <svg viewBox="0 0 24 24" className="w-8 h-8 mb-4">
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="text-4xl font-bold mb-6">Mobile App Development</h2>
        <div className="mb-6">
          <h3 className="text-xl font-bold underline mb-2">iOS Apps</h3>
          <p className="text-sm">
            Our team of skilled developers creates intuitive and engaging iOS
            apps that meet Apple's high standards. Whether you need a consumer
            app or an enterprise solution, we ensure your app provides a
            seamless experience on all Apple devices, scalable, and secure web
            applications that align perfectly with your business objectives.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold underline mb-2">Android Apps</h3>
          <p className="text-sm">
            We design and develop Android apps that work flawlessly across the
            vast ecosystem of Android devices. Our focus is on creating
            user-friendly, innovative apps that stand out in the crowded Google
            Play Store ensure your app provides a seamless experience on all
            Apple devices, scalable, and secure web applications that align
            perfectly with your business objectives.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold underline mb-2">
            Cross-Platform Apps
          </h3>
          <p className="text-sm">
            To reach the widest audience, we offer cross-platform app
            development. This approach allows you to launch your app on both iOS
            and Android platforms simultaneously, saving time and resources
            while maintaining high performance and native-like user experiences.
          </p>
        </div>
      </div>
    </div>
  </section>
  <br />
  <br />
  <br />
  <section
    id="section3"
    className="flex flex-col md:flex-row max-w-6xl mx-auto rounded-3xl bg-orange-400"
  >
    <div className="md:w-1/2 p-8">
      <div className="mb-6">
        <svg
          className="w-12 h-12 text-black"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-black mb-6">
        Desktop App Development
      </h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-black mb-2">
          Windows Applications
        </h3>
        <p className="text-black">
          We develop powerful and efficient desktop applications for Windows,
          tailored to your specific business requirements. Whether you need a
          simple utility or a complex enterprise solution, our Windows apps are
          designed for performance and reliability.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-black mb-2">
          macOS Applications
        </h3>
        <p className="text-black">
          Our team creates elegant and robust macOS applications that leverage
          the full power of Apple's desktop operating system. We ensure your app
          integrates smoothly with macOS features, providing a seamless
          experience for your users.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-black mb-2">
          Linux Applications
        </h3>
        <p className="text-black">
          For businesses that rely on Linux, we offer custom desktop application
          development that caters to this versatile operating system. Our Linux
          apps are designed to be secure, scalable, and compatible with a
          variety of Linux distributions.
        </p>
      </div>
    </div>
    {/* Image section hidden on small screens */}
    <div className="hidden md:block md:w-1/2 flex rounded-3xl overflow-hidden bg-gray-200">
      <img
        src="https://static.wixstatic.com/media/c837a6_650c3d880f99434dbc32154c5c9fe2cd~mv2.jpg/v1/fill/w_621,h_832,fp_0.58_0.42,q_85,usm_0.66_1.00_0.01,enc_auto/possessed-photography-g29arbbvPjo-unsplash_edited.jpg"
        alt="Robot hand"
        className="max-w-full h-auto"
      />
    </div>
  </section>
  <br />
  <br />
  <br />
  <section
    id="section4"
    className="flex flex-col md:flex-row max-w-6xl mx-auto rounded-3xl bg-gray-200"
  >
    {/* Image section hidden on small screens */}
    <div className="hidden md:block md:w-1/2">
      <img
        className="rounded-3xl w-full h-full object-cover"
        src="https://static.wixstatic.com/media/c837a6_2e296e7d94704a749ecec3d6d35ebb91~mv2.jpg/v1/fill/w_621,h_708,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ashkan-forouzani-_Y82jqFIBgw-unsplash%20(1)_edited.jpg"
        alt="Construction crane"
      />
    </div>
    <div className="md:w-1/2 p-8">
      <div className="mb-6">
        <svg
          className="w-8 h-8 text-gray-800"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">AI Solutions</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 underline">
          Machine Learning
        </h3>
        <p className="text-gray-600">
          Harness the power of machine learning to gain insights and improve
          decision-making. Our machine learning solutions can help you predict
          trends, automate processes, and enhance customer experiences.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 underline">
          Data Analytics
        </h3>
        <p className="text-gray-600">
          Transform your data into actionable insights with our data analytics
          services. We use advanced analytics tools and techniques to help you
          understand your data, uncover patterns, and make informed business
          decisions.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 underline">
          AI-Powered Automation
        </h3>
        <p className="text-gray-600">
          Increase efficiency and reduce costs with AI-powered automation. From
          chatbots to robotic process automation (RPA), we develop solutions
          that automate routine tasks, freeing up your team to focus on more
          strategic activities.
        </p>
      </div>
    </div>
  </section>
  <br />
  <br />
  <br />
  <section
    id="section5"
    className="flex flex-col md:flex-row max-w-6xl mx-auto rounded-3xl bg-orange-400"
  >
    <div className="md:w-1/2 p-8">
      <div className="mb-6">
        <svg
          className="w-12 h-12 text-black"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2 className="text-4xl font-bold text-black mb-6">Digital Marketing</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-black mb-2 underline">
          Search Engine Marketing (SEM)
        </h3>
        <p className="text-black">
          Maximize your ROI with targeted SEM campaigns. Our team creates and
          manages pay-per-click (PPC) advertising campaigns on platforms like
          Google Ads to drive immediate traffic and conversions.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-black mb-2 underline">
          Social Media Marketing
        </h3>
        <p className="text-black">
          Engage with your audience and build your brand on social media. We
          create and execute social media strategies that increase your reach,
          foster engagement, and generate leads across platforms like Facebook,
          Instagram, Twitter, and LinkedIn.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-black mb-2 underline">
          Content Marketing
        </h3>
        <p className="text-black">
          Attract and retain customers with high-quality content. Our content
          marketing services include content creation, distribution, and
          strategy development to ensure your message resonates with your target
          audience.
        </p>
      </div>
    </div>
    {/* Image section hidden on small screens */}
    <div className="hidden md:flex md:w-1/2 bg-gray-200 items-center rounded-3xl justify-center">
      <img
        className="rounded-3xl"
        src="https://static.wixstatic.com/media/c837a6_650c3d880f99434dbc32154c5c9fe2cd~mv2.jpg/v1/fill/w_621,h_697,fp_0.58_0.42,q_85,usm_0.66_1.00_0.01,enc_auto/possessed-photography-g29arbbvPjo-unsplash_edited.jpg"
        alt="Robot hand"
      />
    </div>
  </section>
  <section className="bg-blacktext-black py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <h2 className="text-5xl font-medium font-bold mb-6 md:mb-0 leading-tight">
          FOMO got
          <br />
          you puzzled?
        </h2>
        <div className="w-full md:w-1/2">
          <p className="text-gray-600 mb-4">
            Subscribe to our weekly newsletter.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required=""
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Email *"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="subscribe"
                name="subscribe"
                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
              />
              <label
                htmlFor="subscribe"
                className="ml-2 block text-sm text-gray-900"
              >
                Yes, subscribe me to your newsletter.
              </label>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-black text-white rounded-full hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="bg-orange-400 rounded-lg overflow-hidden">
        <div className="flex justify-center items-center py-12">
          <picture>
            <img
              loading="lazy"
              src="https://static.wixstatic.com/media/fe4a13_736aa623bfaf42aea1a898bebb96a689~mv2.png/v1/fill/w_356,h_135,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fe4a13_736aa623bfaf42aea1a898bebb96a689~mv2.png"
              alt=""
              style={{
                objectFit: "cover",
                objectPosition: "50% 50%",
                width: "100%"
              }}
              data-ssr-src-done="true"
              fetchpriority="high"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
  
</>

    </div>
  )
}

export default Services
