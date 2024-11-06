import React from 'react'

function AISolution() {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AISolution</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      html,\n    body {\n      overflow-x: hidden;\n      font-family: 'questrial', sans-serif;\n    }\n  \n"
    }}
  />
  {/* Header */}
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
  {/* div Content */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        /* Text Animation */\n        .animate-text {\n          white-space: nowrap;\n          overflow: hidden;\n          width: 0;\n          animation: animate-text 5s forwards;\n        }\n      \n        @keyframes animate-text {\n          0% {\n            width: 0;\n          }\n          100% {\n            width: 100%;\n          }\n        }\n      \n        /* Slide-left Animation */\n        .slide-left {\n          opacity: 0;\n          transform: translateX(-100px);\n          animation: slideRight 1.2s forwards;\n        }\n      \n        @keyframes slideRight {\n          to {\n            opacity: 1;\n            transform: translateX(0);\n          }\n        }\n      \n        /* Responsive Heading and Paragraph for Mobile */\n        @media (max-width: 640px) {\n          .mobile-slide-left {\n            opacity: 0;\n            transform: translateX(-30px);\n            animation: slideMobile 1.2s forwards;\n          }\n      \n          @keyframes slideMobile {\n            to {\n              opacity: 1;\n              transform: translateX(0);\n            }\n          }\n      \n          /* Font-size adjustments for mobile */\n          h1 {\n            font-size: 2.5rem; /* Smaller heading size on mobile */\n          }\n      \n          p {\n            font-size: 0.875rem; /* Smaller paragraph size */\n          }\n        }\n      \n        /* Larger screen adjustments */\n        @media (min-width: 641px) {\n          h1 {\n            font-size: 3.5rem; /* Medium heading size */\n          }\n      \n          p {\n            font-size: 1rem; /* Medium paragraph size */\n          }\n        }\n      \n        @media (min-width: 1024px) {\n          h1 {\n            font-size: 4.5rem; /* Larger heading size for desktops */\n          }\n      \n          p {\n            font-size: 1.125rem; /* Larger paragraph size */\n          }\n        }\n      "
    }}
  />
  {/* AI Solution Section with Breaks */}
  <div className="m-8 py-4 px-8">
    <h1 className="text-7xl questrial sans-serif mb-8 slide-left">
      AI Solution
    </h1>
    <p className="text-lg text-[18px] mb-16 max-w-3xl slide-left mobile-slide-left">
      At Geekyness, we harness the transformative potential of Artificial
      <br />
      Intelligence to drive innovation and deliver unparalleled value to your
      <br />
      business. Our cutting-edge AI solutions empower organizations across
      <br />
      industries to make data-driven decisions, automate complex
      <br />
      processes, and unlock new opportunities for growth.
    </p>
  </div>
  {/*AI Capability*/}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\n    section {\n      font-family: questrial, sans-serif;\n    }\n  \n    .flip-box {\n      background-color: transparent;\n      width: 100%; /* Set to 100% for mobile */\n      max-width: 100%; /* Prevent overflow */\n      height: 300px;\n      perspective: 1000px;\n    }\n  \n    .flip-box-inner {\n      position: relative;\n      width: 100%;\n      height: 100%;\n      transition: transform 0.8s;\n      transform-style: preserve-3d;\n    }\n  \n    .flip-box:hover .flip-box-inner {\n      transform: rotateY(180deg);\n    }\n  \n    .flip-box-front, .flip-box-back {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      -webkit-backface-visibility: hidden;\n      backface-visibility: hidden;\n    }\n  \n    .flip-box-back {\n      transform: rotateY(180deg);\n    }\n  \n    @media (min-width: 640px) {\n      .flip-box {\n        height: 350px;\n      }\n    }\n  "
    }}
  />
  <div className="container mx-auto p-3">
    <h1 className="ml-9 text-2xl md:text-3xl font-semibold questrial sans-serif mb-6">
      AI Capability
    </h1>
    {/* First Row */}
    <div className="flex flex-col lg:flex-row h-auto lg:h-96 m-2 lg:m-10 pt-4 lg:pt-16">
      <section className="w-full lg:w-1/2 px-2 lg:px-20">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="bg-gray-200 flip-box-front">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 text-center m-6 lg:m-36">
                Machine
                <br />
                Learning
              </h1>
            </div>
            <ul className="bg-orange-400 flip-box-back list-disc list-inside space-y-2">
              <div className="m-4 lg:m-32">
                <li>Anomaly detection and fraud prevention</li>
                <li>Predictive analytics and forecasting</li>
                <li>Pattern recognition and clustering</li>
                <li>Recommendation systems</li>
              </div>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full lg:w-1/2 px-2 lg:px-8 mt-4 lg:mt-0">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="bg-orange-400 flip-box-front">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 text-center m-6 lg:m-36">
                Natural Language
                <br />
                Processing NLP
              </h1>
            </div>
            <ul className="bg-orange-400 flip-box-back list-disc list-inside space-y-2">
              <div className="m-4 lg:m-32">
                <li>Language translation and speech recognition</li>
                <li>Text classification and summarization</li>
                <li>Chatbots and conversational AI</li>
                <li>Sentiment analysis</li>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </div>
    {/* Second Row */}
    <div className="flex flex-col lg:flex-row h-auto lg:h-96 m-2 lg:m-10">
      <section className="w-full lg:w-1/2 px-2 lg:px-20">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="bg-gray-200 flip-box-front">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 text-center m-6 lg:m-36">
                AI-Powered
                <br />
                Automation
              </h1>
            </div>
            <ul className="flip-box-back list-disc list-inside space-y-2">
              <div className="m-4 lg:m-32">
                <li>Robotic Process Automation (RPA)</li>
                <li>Intelligent document processing</li>
                <li>Workflow optimization</li>
              </div>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full lg:w-1/2 px-2 lg:px-8 mt-4 lg:mt-0">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="bg-orange-400 flip-box-front">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 text-center m-6 lg:m-36">
                Advanced
                <br />
                AI Applications
              </h1>
            </div>
            <ul className="bg-orange-400 flip-box-back list-disc list-inside space-y-2">
              <div className="m-4 lg:m-32">
                <li>Reinforcement learning for decision-making systems</li>
                <li>Computer vision for facial recognition and OCR</li>
                <li>Generative AI for content creation</li>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
  {/*Use Cases*/}
  <div className="container mx-auto m-4 sm:m-14 pl-6 ">
    <h1 className="text-xl sm:text-2xl lg:text-3xl madefor-text font-semibold mb-4 shadow hover:shadow-lg">
      Use Cases
    </h1>
    <br />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl sm:text-[29px] questrial font-semibold mb-2">
          01 Finance
        </h2>
        <ul className="text-[16px] questrial list-disc text-black list-inside">
          <li>Credit risk assessment</li>
          <li>Algorithmic trading</li>
          <li>Fraud detection</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl sm:text-[29px] questrial font-semibold mb-2">
          02 Healthcare
        </h2>
        <ul className="text-[16px] questrial list-disc text-black list-inside">
          <li>Disease diagnosis and prediction</li>
          <li>Drug discovery and development</li>
          <li>Medical image analysis</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl sm:text-[29px] questrial font-semibold mb-2">
          03 Retail
        </h2>
        <ul className="text-[16px] questrial list-disc text-black list-inside">
          <li>Inventory management and demand forecasting</li>
          <li>Personalized product recommendations</li>
          <li>Customer behavior analysis</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl sm:text-[29px] questrial font-semibold mb-2">
          04 Manufacturing
        </h2>
        <ul className="text-[16px] questrial list-disc text-black list-inside">
          <li>Quality control and defect detection</li>
          <li>Supply chain optimization</li>
          <li>Predictive maintenance</li>
        </ul>
      </div>
    </div>
    <br />
    <br />
    <div>
      <h2 className="text-2xl sm:text-[29px] questrial font-semibold mb-2">
        05 Customer Service
      </h2>
      <ul className="text-[16px] questrial list-disc text-black list-inside">
        <li>Automated ticket routing and resolution</li>
        <li>Intelligent chatbots for 24/7 support</li>
        <li>Customer sentiment analysis</li>
      </ul>
    </div>
  </div>
  <div className="container bg-gray-300 mx-auto m-4 sm:m-14 p-6 sm:p-14">
    <h1 className="text-3xl sm:text-[30px] madefor-text-display-bold mb-6 shadow hover:shadow-lg text-center">
      Technology Stack
    </h1>
    <br />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Programming Languages</h2>
        <p>Python, R, Java, C++</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Machine Learning Frameworks</h2>
        <p>TensorFlow, PyTorch, Scikit-learn, Keras</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">NLP Libraries</h2>
        <p>NLTK, SpaCy, Hugging Face Transformers</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Computer Vision Tools</h2>
        <p>OpenCV, YOLO, TensorFlow Object Detection API</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Data Visualization Libraries</h2>
        <p>Matplotlib, Seaborn, Plotly</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Cloud Platforms</h2>
        <p>AWS, Google Cloud, Azure</p>
      </div>
    </div>
  </div>
  <div className="container m-4 sm:m-14 py-8">
    <h1 className="text-3xl font-semibold mb-6">Case Studies and Results</h1>
    <br />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 slide-left">
      <div className="bg-white p-6 sm:p-8 shadow-md">
        <h2 className="text-2xl questrial sans-serif font-semibold mb-4">
          FinTech Revolution: AI-Powered Fraud Detection
        </h2>
        <p className="font-bold">Client</p>
        <p className="mb-4">Leading hospital network</p>
        <p className="font-bold">Challenge</p>
        <p className="mb-4">
          92% reduction in fraudulent activities, saving $10M annually
        </p>
        <p className="font-bold">Solution</p>
        <p className="mb-4">
          Implemented machine learning model for real-time fraud detection
        </p>
        <p className="font-bold">Result</p>
        <p>
          30% increase in early diagnoses, potentially saving countless lives
        </p>
      </div>
      <div className="bg-white p-6 sm:p-8 shadow-md">
        <h2 className="text-2xl questrial sans-serif font-semibold mb-4">
          Healthcare Innovator: AI-Assisted Diagnosis
        </h2>
        <p className="font-bold">Client</p>
        <p className="mb-4">Leading hospital network</p>
        <p className="font-bold">Challenge</p>
        <p className="mb-4">Improving early disease detection</p>
        <p className="font-bold">Solution</p>
        <p className="mb-4">
          Developed deep learning model for medical image analysis
        </p>
        <p className="font-bold">Result</p>
        <p>
          30% increase in early diagnoses, potentially saving countless lives
        </p>
      </div>
    </div>
  </div>
  <div className="container m-4 sm:m-14 py-8 slide-left">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="bg-white p-6 sm:p-8 shadow-md">
        <h2 className="text-2xl questrial sans-serif font-semibold">
          Retail Transformation
        </h2>
        <h3 className="text-xl questrial sans-serif font-semibold">
          Personalized Shopping Experience
        </h3>
        <p className="mt-4 font-bold">Client</p>
        <p>E-commerce giant</p>
        <p className="mt-4 font-bold">Challenge</p>
        <p>Enhancing customer engagement and sales</p>
        <p className="mt-4 font-bold">Solution</p>
        <p>Implemented AI-powered recommendation engine</p>
        <p className="mt-4 font-bold">Result</p>
        <p>
          25% increase in average order value, 15% boost in customer retention
        </p>
      </div>
      <div className="bg-white p-6 sm:p-8 shadow-md">
        <h2 className="text-2xl questrial sans-serif font-semibold">
          Manufacturing Excellence
        </h2>
        <h3 className="text-xl questrial sans-serif font-semibold">
          Predictive Maintenance
        </h3>
        <p className="mt-4 font-bold">Client</p>
        <p>Automotive manufacturer</p>
        <p className="mt-4 font-bold">Challenge</p>
        <p>Reducing equipment downtime</p>
        <p className="mt-4 font-bold">Solution</p>
        <p>Implemented predictive maintenance system</p>
        <p className="mt-4 font-bold">Result</p>
        <p>
          40% reduction in unplanned downtime, saving $5M in annual maintenance
          costs
        </p>
      </div>
    </div>
  </div>
  <div className="container m-4 sm:m-14 slide-left bg-white p-8 shadow-md">
    <h2 className="text-2xl questrial sans-serif font-semibold">
      Customer Service Evolution: Intelligent Chatbot
    </h2>
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Client</h2>
        <p>Telecommunications provider</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Challenge</h2>
        <p>Improving customer support efficiency</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Solution</h2>
        <p>Developed NLP-powered chatbot for 24/7 customer assistance</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Result</h2>
        <p>
          50% reduction in support tickets, 30% increase in customer
          satisfaction scores
        </p>
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

export default AISolution
