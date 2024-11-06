import React from 'react'

function MobileApp() {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mobile App Development</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n         html,body\n         {\n        overflow-x: hidden;\n         }\n  section {\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n  .flip-box {\n    background-color: transparent;\n    width: 600px;\n    /* border: 1px solid #f1f1f1; */\n    height: 350px;\n    perspective: 1000px;\n  }\n\n  .flip-box-inner {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    transition: transform 0.8s;\n    transform-style: preserve-3d;\n  }\n\n  .flip-box:hover .flip-box-inner {\n    transform: rotateY(180deg);\n  }\n\n  .flip-box-front, .flip-box-back {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n  }\n\n  .flip-box-front {\n    color: black;\n  }\n\n  .flip-box-back {\n    color: black;\n    transform: rotateY(180deg);\n  }\n    "
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
        "\n    \n    /* Text Animation */\n    .animate-text {\n      white-space: nowrap;\n      overflow: hidden;\n      width: 0;\n      animation: animate-text 5s forwards;\n    }\n  \n    @keyframes animate-text {\n      0% {\n        width: 0;\n      }\n      100% {\n        width: 100%;\n      }\n    }\n  \n    /* Slide-left Animation for Heading and Paragraph */\n    .slide-left {\n      opacity: 0;\n      transform: translateX(-100px);\n      animation: slideRight 1.2s forwards;\n    }\n  \n    @keyframes slideRight {\n      to {\n        opacity: 1;\n        transform: translateX(0);\n      }\n    }\n  \n    /* Responsive Animations and Font Sizes for Mobile */\n    @media (max-width: 640px) {\n      .mobile-slide-left {\n        opacity: 0;\n        transform: translateX(-30px);\n        animation: slideLeftToRight 1.2s forwards;\n      }\n  \n      @keyframes slideLeftToRight {\n        to {\n          opacity: 1;\n          transform: translateX(0);\n        }\n      }\n  \n      /* Adjust font sizes for mobile */\n      .heading-responsive {\n        font-size: 1.5rem; /* Adjust for mobile */\n        line-height: 1.5;\n      }\n  \n      .paragraph-responsive {\n        font-size: 0.9rem; /* Adjust for mobile */\n        line-height: 1.4;\n      }\n    }\n  \n    /* Larger screen adjustments */\n    @media (min-width: 641px) {\n      .heading-responsive {\n        font-size: 2rem; /* Adjust for tablets */\n        line-height: 1.6;\n      }\n  \n      .paragraph-responsive {\n        font-size: 1.1rem; /* Adjust for tablets */\n        line-height: 1.5;\n      }\n    }\n  \n    /* Desktop adjustments */\n    @media (min-width: 1024px) {\n      .heading-responsive {\n        font-size: 3rem; /* Adjust for large screens */\n        line-height: 1.8;\n      }\n  \n      .paragraph-responsive {\n        font-size: 1.2rem; /* Adjust for large screens */\n        line-height: 1.6;\n      }\n    }\n  "
    }}
  />
  <div className="container m-4 sm:m-8 lg:m-14">
    <h1 className="text-6xl questrial sans-serif mb-8 slide-left">
      Mobile
      <br /> Application
    </h1>
    <p className="slide-left paragraph-responsive text-xs sm:text-lg lg:text-[20px] mb-4 sm:mb-6 mobile-slide-left">
      At Geekyness, we specialize in developing sea mless and intuitive mobile{" "}
      <br />
      applications across all major platforms, including iOS, Android, and Cross
      <br />
      -Platform solutions. Our team of skilled developers has in-depth expertise{" "}
      <br />
      in the latest technologies and frameworks, enabling us to create high-
      <br />
      performance, feature-rich apps tailored to your unique requirements.
      <br />
    </p>
  </div>
  <div className="flex flex-col sm:flex-row justify-center items-center py-8 sm:py-16 space-y-8 sm:space-y-0 sm:space-x-8">
    <div className="flex w-full max-w-md sm:max-w-6xl flip-box">
      <div className="bg-gray-200 p-6 sm:p-8 text-center flex-1 h-64 sm:h-96 pt-16 sm:pt-32 flip-box-inner">
        <div className="flip-box-front">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            iOS Development
          </h2>
        </div>
        <div className="flip-box-back">
          <p className="text-sm pl-6 sm:pl-12">
            Leveraging the power of Swift and Objective-C, we build robust and
            visually appealing iOS apps that adhere to Apple's stringent design
            guidelines and provide a delightful user experience.
          </p>
        </div>
      </div>
    </div>
    <div className="flex w-full max-w-md sm:max-w-6xl flip-box">
      <div className="bg-orange-400 p-6 sm:p-8 text-center flex-1 h-64 sm:h-96 pt-16 sm:pt-32 flip-box-inner">
        <div className="flip-box-front">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Android Development
          </h2>
        </div>
        <div className="flip-box-back">
          <p className="text-sm pl-6 sm:pl-12">
            Our Android developers are proficient in Java, Kotlin, and the
            Android SDK, ensuring your apps are optimized for performance,
            security, and seamless integration with the Android ecosystem.
          </p>
        </div>
      </div>
    </div>
    <div className="flex w-full max-w-md sm:max-w-6xl flip-box">
      <div className="bg-gray-200 p-6 sm:p-8 text-center flex-1 h-64 sm:h-96 pt-16 sm:pt-32 flip-box-inner">
        <div className="flip-box-front">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Cross-Platform Development
          </h2>
        </div>
        <div className="flip-box-back">
          <p className="text-sm pl-6 sm:pl-12">
            For clients seeking cost-effective solutions and faster
            time-to-market, we offer cross-platform development using
            cutting-edge frameworks, enabling us to create apps that run
            seamlessly on both iOS and Android platforms.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-gray-200">
    {/* Development Process Heading */}
    <div className="text-center mt-8 p-6 sm:p-10">
      <h1 className="text-2xl sm:text-3xl font-bold">Development Process</h1>
      <hr className="border-t-2 border-green-500 w-1/2 sm:w-1/4 mx-auto mt-2" />
    </div>
    {/* Process Steps */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12 mx-4 sm:mx-16">
      <div className="text-center process-step">
        <h2 className="text-3xl sm:text-5xl font-bold">01</h2>
        <p className="mt-4 text-base sm:text-lg">
          Ideation and
          <br />
          Requirements Gathering
        </p>
      </div>
      <div className="text-center process-step">
        <h2 className="text-3xl sm:text-5xl font-bold">02</h2>
        <p className="mt-4 text-base sm:text-lg">
          Wireframing and
          <br />
          Prototyping
        </p>
      </div>
      <div className="text-center process-step">
        <h2 className="text-3xl sm:text-5xl font-bold">03</h2>
        <p className="mt-4 text-base sm:text-lg">UI/UX Design</p>
      </div>
      <div className="text-center process-step p-8 sm:p-16">
        <h2 className="text-3xl sm:text-5xl font-bold">04</h2>
        <p className="mt-4 text-base sm:text-lg">Development and Testing</p>
      </div>
      <div className="text-center process-step p-8 sm:p-16">
        <h2 className="text-3xl sm:text-5xl font-bold">05</h2>
        <p className="mt-4 text-base sm:text-lg">Launch and Support</p>
      </div>
    </div>
  </div>
  {/* Features Heading */}
  <div className="font-semibold text-3xl sm:text-4xl ml-4 sm:ml-12 mt-4 slide-left">
    <h1>Features</h1>
  </div>
  {/* Features List */}
  <div className="max-w-full sm:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 mt-8 sm:mt-14 slide-left">
    <div className="bg-orange-400 text-center py-3 sm:py-4 rounded-full text-black hover:bg-gray-200">
      User Authentication &amp; Authorization
    </div>
    <div className="bg-orange-400 text-center py-3 sm:py-4 rounded-full text-black hover:bg-gray-200">
      Real-time Data Synchronization
    </div>
    <div className="bg-orange-400 text-center py-3 sm:py-4 rounded-full text-black hover:bg-gray-200">
      In-App Purchases and Subscriptions
    </div>
    <div className="bg-orange-400 text-center py-3 sm:py-4 rounded-full text-black hover:bg-gray-200">
      Geolocation and Mapping Integration
    </div>
    <div className="bg-orange-400 text-center py-3 sm:py-4 rounded-full text-black hover:bg-gray-200">
      Social Media Integration
    </div>
    <div className="bg-orange-400 text-center py-3 sm:py-4 rounded-full text-black hover:bg-gray-200">
      Augmented Reality (AR) &amp; Virtual Reality (VR)
    </div>
    <div className="bg-orange-400 text-center py-3 sm:py-4 rounded-full text-black hover:bg-gray-200">
      Machine Learning &amp; Artificial Intelligence
    </div>
    <div className="bg-orange-400 text-center py-3 sm:py-4 rounded-full text-black hover:bg-gray-200">
      Internet of Things (IoT) Integration
    </div>
    <div className="bg-orange-400 text-center py-3 sm:py-4 rounded-full text-black hover:bg-gray-200">
      Push Notifications
    </div>
  </div>
  {/* Success Stories Section */}
  <div className="container mx-auto px-4 py-8 mt-8 sm:ml-9">
    <h1 className="text-3xl sm:text-4xl font-bold mb-4">
      <span className="border-b-4 border-black">Success Stories</span>
    </h1>
    <p className="text-base sm:text-lg leading-relaxed mt-4 sm:mt-9">
      Our portfolio showcases a diverse range of successful mobile app
      development projects across various industries, from e-commerce and
      fintech to healthcare and entertainment. Explore our case studies and
      testimonials to see how we've helped businesses like yours achieve their
      mobile goals, drive user engagement, and unlock new revenue streams.
    </p>
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
            Price will vary for every project based on the content and
            background of the work. Additional details may change if more
            material and work needs to get done.
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
            Price will vary for every project based on the content and
            background of the work. Additional details may change if more
            material and work needs to get done.
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
            Price will vary for every project based on the content and
            background of the work. Additional details may change if more
            material and work needs to get done.
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
            Price will vary for every project based on the content and
            background of the work. Additional details may change if more
            material and work needs to get done.
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

export default MobileApp
