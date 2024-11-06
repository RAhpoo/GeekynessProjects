import React from 'react'

function Desktop() {
  return (
  <div>
  <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Desktop Application Development</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    /* text animation*/\n    html,body{\n        overflow-x: hidden;\n    }\n  \n  "
    }}
  />
  {/* <header className="bg-orange-400 text-white p-4 h-20">
    <nav className="flex justify-between items-center">
      <div className="flex space-x-4 text-black">
        <a href="home.html" className="hover:text-white">
          Home
        </a>
        <a href="about.html" className="hover:text-white">
          About
        </a>
        <div className="relative group">
          <a href="servicies.html">
            <button
              className="hover:text-white rounded-md focus:outline-none"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Services
            </button>
          </a>
          <div className="absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto z-10">
            <a href="servicies.html"></a>
            <a
              href="#section1"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black"
            >
              Web Development
            </a>
            <a
              href="#section2"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black"
            >
              Mobile App Development
            </a>
            <a
              href="#section3"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black"
            >
              Desktop App Development
            </a>
            <a
              href="#section4"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black"
            >
              AI Solution
            </a>
            <a
              href="#section5"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black"
            >
              Digital Marketing
            </a>
          </div>
        </div>
        <div className="relative group">
          <a href="solutions.html">
            <button
              className="hover:text-white rounded-md focus:outline-none"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Solution
            </button>
          </a>
          <div className="absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto z-10">
            <a href="solutions.html"></a>
            <a
              href="#section6"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black"
            >
              Web Development
            </a>
            <a
              href="#section7"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black"
            >
              Mobile App Development
            </a>
            <a
              href="#section8"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black"
            >
              Desktop App Development
            </a>
            <a
              href="#section9"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black"
            >
              AI Solution
            </a>
            <a
              href="#section10"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black"
            >
              Digital Marketing
            </a>
          </div>
        </div>
        <a href="contact.html" className="hover:text-white">
          Contact
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <img
          src="https://static.wixstatic.com/media/fe4a13_736aa623bfaf42aea1a898bebb96a689~mv2.png/v1/fill/w_135,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/geekyness%20(10).png"
          alt="Geekyness Logo"
          className="h-auto"
        />
      </div>
      <div className="flex space-x-4 text-black underline">
        <a href="#" className="hover:text-white">
          LinkedIn
        </a>
        <a href="#" className="hover:text-white">
          Instagram
        </a>
        <a href="#" className="hover:text-white">
          Facebook
        </a>
        <a href="#" className="hover:text-white">
          X
        </a>
      </div>
    </nav>
  </header> */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  /* Text Animation */\n  .animate-text {\n    white-space: nowrap;\n    overflow: hidden;\n    width: 0;\n    animation: animate-text 5s forwards;\n  }\n\n  @keyframes animate-text {\n    0% {\n      width: 0;\n    }\n    100% {\n      width: 100%;\n    }\n  }\n\n  /* Slide-left Animation for Heading and Paragraph */\n  .slide-left {\n    opacity: 0;\n    transform: translateX(-100px);\n    animation: slideRight 1.2s forwards;\n  }\n\n  @keyframes slideRight {\n    to {\n      opacity: 1;\n      transform: translateX(0);\n    }\n  }\n\n  /* Responsive Animations and Font Sizes for Mobile */\n  @media (max-width: 640px) {\n    .mobile-slide-left {\n      opacity: 0;\n      transform: translateX(-30px);\n      animation: slideLeftToRight 1.2s forwards;\n    }\n\n    @keyframes slideLeftToRight {\n      to {\n        opacity: 1;\n        transform: translateX(0);\n      }\n    }\n\n    /* Adjust font sizes for mobile */\n    .heading-responsive {\n      font-size: 1.5rem; /* Adjust for mobile */\n      line-height: 1.5;\n    }\n\n    .paragraph-responsive {\n      font-size: 0.9rem; /* Adjust for mobile */\n      line-height: 1.4;\n    }\n  }\n\n  /* Larger screen adjustments */\n  @media (min-width: 641px) {\n    .heading-responsive {\n      font-size: 2rem; /* Adjust for tablets */\n      line-height: 1.6;\n    }\n\n    .paragraph-responsive {\n      font-size: 1.1rem; /* Adjust for tablets */\n      line-height: 1.5;\n    }\n  }\n\n  /* Desktop adjustments */\n  @media (min-width: 1024px) {\n    .heading-responsive {\n      font-size: 3rem; /* Adjust for large screens */\n      line-height: 1.8;\n    }\n\n    .paragraph-responsive {\n      font-size: 1.2rem; /* Adjust for large screens */\n      line-height: 1.6;\n    }\n  }\n"
    }}
  />
  <div className="container m-4 sm:m-8 lg:m-14">
    <h1 className="text-6xl questrial sans-serif mb-8 slide-left">
      Desktop
      <br /> Application
    </h1>
    <p className="slide-left paragraph-responsive text-xs sm:text-lg lg:text-[20px] mb-4 sm:mb-6 mobile-slide-left">
      At Geekyness, we drive your online success through data-driven strategies
      <br />
      and cutting-edge techniques. Our holistic approach to digital marketing
      <br />
      ensures your brand stands out in the crowded digital landscape,
      <br />
      reaching your target audience effectively and driving measurable results.
    </p>
  </div>
  <h1 className="text-3xl ml-9 font-semibold text-black">
    Services offered
  </h1>{" "}
  <br />
  <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-gray-200 p-8 rounded-lg">
      <div className="flex items-center mb-4">
        <i className="fas fa-sun text-2xl" />
      </div>
      <h2 className="text-2xl font-bold mb-4">
        Custom Desktop Application Development
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Bespoke software solutions tailored to your unique requirements</li>
        <li>Cross-platform development for Windows, macOS, and Linux</li>
        <li>Integration with existing systems and databases</li>
        <li>User-friendly interface design and development</li>
      </ul>
    </div>
    <div className="bg-orange-400 text-white p-8 rounded-lg">
      <div className="flex items-center mb-4">
        <i className="fas fa-sun text-2xl" />
      </div>
      <h2 className="text-2xl font-bold mb-4">
        Legacy Application Modernization
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Upgrading outdated desktop applications</li>
        <li>Improving performance and adding new features</li>
        <li>Ensuring compatibility with modern operating systems</li>
        <li>Migrating to newer technologies and frameworks</li>
      </ul>
    </div>
    <div className="bg-gray-200 p-8 rounded-lg">
      <div className="flex items-center mb-4">
        <i className="fas fa-sun text-2xl" />
      </div>
      <h2 className="text-2xl font-bold mb-4">
        Desktop Application Integration
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Connecting desktop apps with cloud services</li>
        <li>Integrating with third-party APIs and services</li>
        <li>Developing plugins and extensions for existing applications</li>
        <li>Creating sync capabilities for offline and online functionality</li>
      </ul>
    </div>
  </div>
  <div className="flex justify-center py-16">
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
      <div className="bg-orange-400 text-white p-8 rounded-lg w-full md:w-96">
        <div className="flex items-center mb-4">
          <i className="fas fa-sun text-2xl" />
        </div>
        <h2 className="text-2xl font-bold mb-4">
          Desktop Application Maintenance and Support
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Regular updates and feature enhancement</li>
          <li>Bug fixes and performance optimization</li>
          <li>Technical support and troubleshooting</li>
          <li>Security patches and vulnerability management</li>
        </ul>
      </div>
      <div className="bg-orange-400 p-8 rounded-lg w-full md:w-96">
        <div className="flex items-center mb-4">
          <i className="fas fa-sun text-2xl" />
        </div>
        <h2 className="text-2xl font-bold mb-4">
          Desktop Application Testing &amp; Quality Assurance
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Comprehensive testing across multiple platforms and configurations
          </li>
          <li>Automated testing implementation for efficient QA processes</li>
          <li>User acceptance testing (UAT) coordination</li>
          <li>Performance and security testing</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="container mx-auto mt-8 px-4">
    <h1 className="text-2xl font-bold mb-4">Our Approach</h1>
    <div className="flex flex-col lg:flex-row">
      {/* Text section */}
      <div className="w-full lg:w-1/2 lg:pr-8">
        <div className="border-b border-black mb-4">
          <h2 className="text-xl font-bold m-3">Discovery and Planning</h2>
        </div>
        <p className="mb-8 m-3">
          We begin with thorough requirements gathering, stakeholder interviews,
          and workflow analysis to define clear project objectives and technical
          specifications.
        </p>
        <div className="border-b border-black mb-4">
          <h2 className="text-xl font-bold m-3">Development and Integration</h2>
        </div>
        <p className="mb-8 m-3">
          Using agile methodologies, we develop your desktop application with
          regular sprints and client check-ins, ensuring seamless integration
          with existing systems and third-party services.
        </p>
        <div className="border-b border-black mb-4">
          <h2 className="text-xl font-bold m-3">
            Deployment and Ongoing Support
          </h2>
        </div>
        <p className="mb-8 m-3">
          We manage smooth deployment with installer creation and user training,
          followed by continued support and maintenance to ensure your
          application remains up-to-date and functional.
        </p>
        <div className="border-b border-black mb-4">
          <h2 className="text-xl font-bold m-3">Design and Prototyping</h2>
        </div>
        <p className="mb-8 m-3">
          Our team creates detailed wireframes and interactive prototypes,
          allowing for early visualization and feedback before full-scale
          development begins.
        </p>
        <div className="border-b border-black mb-4">
          <h2 className="text-xl font-bold m-3">Comprehensive Testing</h2>
        </div>
        <p className="mb-8 m-3">
          We conduct rigorous testing throughout the development process,
          including unit testing, integration testing, and user acceptance
          testing to guarantee a high-performance, bug-free application.
        </p>
      </div>
      {/* Image section */}
      <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
        <img
          alt="A man and a woman smiling at each other, the woman is wearing an orange sweater and the man is wearing a purple sweater."
          className="w-full h-auto"
          src="https://storage.googleapis.com/a1aa/image/fHdXbdnOLBT9Mi1uUeeBdxabkUnULAUszbDQVxSowLdbWEGnA.jpg"
          width={800}
          height={400}
        />
      </div>
    </div>
  </div>
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12 mt-12 ml-4 sm:ml-8 slide-left">
    Technologies We Use
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 slide-left">
    <div className="bg-orange-400 text-black p-4 rounded-full text-center hover:bg-gray-200">
      Electron for cross-platform applications
    </div>
    <div className="bg-orange-400 text-black p-4 rounded-full text-center hover:bg-gray-200">
      .NET Framework and .NET Core for Windows applications
    </div>
    <div className="bg-orange-400 text-black p-4 rounded-full text-center hover:bg-gray-200">
      Qt for cross-platform development
    </div>
    <div className="bg-orange-400 text-black p-4 rounded-full text-center hover:bg-gray-200">
      Java for platform-independent applications
    </div>
    <div className="bg-orange-400 text-black p-4 rounded-full text-center hover:bg-gray-200">
      Python for rapid development &amp; data-intensive applications
    </div>
    <div className="bg-orange-400 text-black p-4 rounded-full text-center hover:bg-gray-200">
      C++ for high-performance applications
    </div>
  </div>
  <div className="container mx-auto mt-8">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-16 mb-16">
      Case Studies and Results
    </h1>
    <hr className="border-t-2 border-gray-300 my-4" />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="bg-white p-8 shadow-md">
        <h2 className="text-2xl  questrial sans-serif font-bold mb-4">
          Inventory Management System
        </h2>
        <p className="mt-4">
          <span className="font-bold">Client</span>
          <br />
          Manufacturing Company XYZ
        </p>
        <p className="mt-4">
          <span className="font-bold">Challenge</span>
          <br />
          Streamline inventory tracking across multiple warehouses
        </p>
        <p className="mt-4">
          <span className="font-bold">Solution</span>
          <br />
          Custom desktop application with real-time syncing and reporting
        </p>
        <p className="mt-4">
          <span className="font-bold">Result</span>
          <br />
          40% reduction in inventory discrepancies, 25% increase in operational
          efficiency
        </p>
      </div>
      <div className="bg-white p-8 shadow-md">
        <h2 className="text-2xl  questrial sans-serif font-bold">
          Financial Analysis Tool
        </h2>
        <p className="mt-4">
          <span className="font-bold">Client</span>
          <br />
          Investment Firm ABC
        </p>
        <p className="mt-4">
          <span className="font-bold">Challenge</span>
          <br />
          Create a high-performance application for complex financial modeling
        </p>
        <p className="mt-4">
          <span className="font-bold">Solution</span>
          <br />
          Desktop application with advanced algorithms and data visualization
        </p>
        <p className="mt-4">
          <span className="font-bold">Result</span>
          <br />
          70% faster analysis time, enabling real-time decision making
        </p>
      </div>
      <div className="bg-white p-8 shadow-md">
        <h1 className="text-2xl  questrial sans-serif font-bold mb-4">
          Patient Management System
        </h1>
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold">Client</h2>
          <p>Healthcare Provider DEF</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold">Challenge</h2>
          <p>Develop a secure, HIPAA-compliant patient records system</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold">Solution</h2>
          <p>
            Cross-platform desktop application with robust security features
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold">Result</h2>
          <p>
            99.9% uptime, 50% reduction in administrative tasks, full regulatory
            compliance
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container sm:m-10 p-4 sm:p-8">
      <h1 className="text-base sm:text-lg font-semibold mb-4">Pricing</h1>
      <ul className="text-sm sm:text-base list-disc pl-5 mb-8">
        <li>
          All illustrations are customized to every project’s needs/specs, and
          our pricing methods reflect that. We offer flexible pricing options
          tailored to your specific needs, including:
        </li>
        <li>Time-based: Pricing based on the time spent on the project.</li>
        <li>
          Project-based: Fixed price for the entire project, regardless of time
          spent.
        </li>
        <li>
          Revisions: Pricing for any additional revisions or changes beyond the
          initial project scope.
        </li>
        <li>
          Extras: Pricing for any additional services or add-ons requested
          during the project.
        </li>
        <li>
          We believe in keeping our pricing methods detailed and structured to
          reflect everything that you are getting along the way.
        </li>
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        {/* Sketches */}
        <div className="transition duration-150 ease-out hover:ease-in bg-orange-400 p-4 sm:p-8 hover:bg-orange-300 relative">
          <div className="absolute top-2 left-2">
            <div className="h-1 w-6 sm:w-8 bg-black mb-2" />
            <div className="h-1 w-3 sm:w-4 bg-black" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Sketches</h2>
          <p className="text-xs sm:text-sm mb-4">
            Pricing varies based on project specifics. Additional details may
            change if more work is required.
          </p>
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-4xl sm:text-6xl font-bold">
            1
          </div>
        </div>
        {/* Illustrations */}
        <div className="bg-orange-400 p-4 sm:p-8 hover:bg-orange-300 relative">
          <div className="absolute top-2 left-2">
            <div className="h-1 w-6 sm:w-8 bg-black mb-2" />
            <div className="h-1 w-3 sm:w-4 bg-black" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Illustrations
          </h2>
          <p className="text-xs sm:text-sm mb-4">
            Pricing varies based on project specifics. Additional details may
            change if more work is required.
          </p>
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-4xl sm:text-6xl font-bold">
            2
          </div>
        </div>
        {/* Renders */}
        <div className="bg-orange-400 p-4 sm:p-8 hover:bg-orange-300 relative">
          <div className="absolute top-2 left-2">
            <div className="h-1 w-6 sm:w-8 bg-black mb-2" />
            <div className="h-1 w-3 sm:w-4 bg-black" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Renders</h2>
          <p className="text-xs sm:text-sm mb-4">
            Pricing varies based on project specifics. Additional details may
            change if more work is required.
          </p>
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-4xl sm:text-6xl font-bold">
            3
          </div>
        </div>
        {/* 3D Art */}
        <div className="bg-orange-400 p-4 sm:p-8 hover:bg-orange-300 relative">
          <div className="absolute top-2 left-2">
            <div className="h-1 w-6 sm:w-8 bg-black mb-2" />
            <div className="h-1 w-3 sm:w-4 bg-black" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">3D Art</h2>
          <p className="text-xs sm:text-sm mb-4">
            Pricing varies based on project specifics. Additional details may
            change if more work is required.
          </p>
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-4xl sm:text-6xl font-bold">
            4
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Newsletter Section */}
  <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-5xl font-light mb-4 sm:mb-6 md:mb-0 leading-tight">
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
              className="w-full md:w-auto px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="bg-orange-400 rounded-lg overflow-hidden h-52">
        <div className="flex justify-center items-center py-12">
          <img
            className="w-1/3"
            src="https://static.wixstatic.com/media/fe4a13_736aa623bfaf42aea1a898bebb96a689~mv2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  {/* Footer Section */}
  {/* <section className="bg-white">
    <div className="p-4 sm:p-10 m-4 sm:m-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-8">
        <div className="space-y-2">
          <a href="#" className="block text-green-600 hover:underline">
            Home
          </a>
          <a href="#" className="block text-gray-600 hover:underline">
            About
          </a>
          <div className="relative">
            <a href="#" className="block text-gray-600 hover:underline">
              Services
            </a>
            <svg
              className="w-4 h-4 absolute right-0 top-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div className="relative">
            <a href="#" className="block text-gray-600 hover:underline">
              Solutions
            </a>
            <svg
              className="w-4 h-4 absolute right-0 top-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <a href="#" className="block text-gray-600 hover:underline">
            Contact
          </a>
        </div>
        <div className="space-y-2 text-gray-600">
          <p>Bhopal Road,</p>
          <p>Nasrullaganj, Sehore 466331</p>
          <p>info@geekyness.com</p>
          <p>+91 9755-36755</p>
        </div>
        <div className="space-y-2">
          <a href="#" className="block text-gray-600 hover:underline">
            LinkedIn
          </a>
          <a href="#" className="block text-gray-600 hover:underline">
            Instagram
          </a>
          <a href="#" className="block text-gray-600 hover:underline">
            Facebook
          </a>
          <a href="#" className="block text-gray-600 hover:underline">
            X
          </a>
        </div>
        <div>
          <a href="#" className="block text-gray-600 hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-200 text-right text-gray-500">
        © 2024 by GEEKYNESS
      </div>
    </div>
  </section> */}
</>

    </div>
  )
}

export default Desktop
