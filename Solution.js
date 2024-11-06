import React from 'react'

function Solution() {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Geekyness - Your Partner in Innovative Web Solutions</title>
  <link href="./output.css" rel="stylesheet" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    .dropdown-content {\n      display: none;\n    }\n\n    .dropdown-content.active {\n      display: block;\n    }\n\n    .no-scroll {\n      overflow: hidden;\n    }\n  "
    }}
  />
  
  <section className="bg-gray-100">
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-2">
      <h2 className="animate-text text-3xl sm:text-4xl md:text-[50px] font-bold mb-4">
        Our Solutions
      </h2>
      <p className="animate-text text-xl sm:text-2xl md:text-3xl font-dark mb-6">
        Helping you make the right decision.
      </p>
      <p className="animate-text text-base sm:text-lg md:text-xl max-w-2xl">
        This is the space to introduce the Services
        <br className="block sm:hidden" /> section. Briefly describe the
        <br />
        types of services offered and highlight any
        <br className="block sm:hidden" /> special benefits or features.
      </p>
    </div>
  </section>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n          .animate-text {\n            white-space: nowrap;\n            overflow: hidden;\n            width: 0;\n            animation: animate-text 5s forwards;\n          }\n\n          @keyframes animate-text {\n            0% {\n              width: 0;\n            }\n\n            100% {\n              width: 100%;\n            }\n          }\n        "
    }}
  />
  <section className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <div className="m-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-orange-400 rounded-lg p-6 text-center shadow-md">
          <h3 className="text-2xl font-semibold">Web Development</h3>
        </div>
        <div className="bg-orange-400 rounded-lg p-6 text-center shadow-md">
          <h3 className="text-2xl font-semibold">Mobile App Development</h3>
        </div>
        <div className="bg-orange-400 rounded-lg p-6 text-center shadow-md">
          <h3 className="text-2xl font-semibold">Desktop App Development</h3>
        </div>
        <div className="bg-orange-400 rounded-lg p-6 text-center shadow-md">
          <h3 className="text-2xl font-semibold">AI Solutions</h3>
        </div>
        <div className="bg-orange-400 rounded-lg p-6 text-center shadow-md md:col-span-2">
          <h3 className="text-2xl font-semibold">Digital Marketing</h3>
        </div>
      </div>
    </div>
  </section>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            .zoom {\n              padding: 50px;\n              background-color: green;\n              transition: transform .2s;\n              /* Animation */\n              width: 200px;\n              height: 200px;\n              margin: 0 auto;\n            }\n\n            .zoom:hover {\n              transform: scale(1.5);\n              /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */\n            }\n          "
    }}
  />
  <br />
  <section
    id="section6"
    className="bg-gray-200 p-8 rounded-3xl max-w-3xl mx-auto text-gray-800"
  >
    <div className="mb-6">
      <svg
        className="w-12 h-12 mx-auto mb-2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L14.5 9.5H22L16 14.5L18.5 22L12 17L5.5 22L8 14.5L2 9.5H9.5L12 2Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h2 className="text-3xl font-bold text-center mb-2">Web Development</h2>
    </div>
    <p className="text-center mb-6">
      Transform your online presence with our custom web development services.
    </p>
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-xl">Services</h3>
        <p>Responsive websites, e-commerce platforms, web applications</p>
      </div>
      <div>
        <h3 className="font-semibold text-xl">Technology Stack</h3>
        <p>React, Node.js, Python, PHP, .NET</p>
      </div>
      <div>
        <h3 className="font-semibold text-xl">Process</h3>
        <p>Discovery, Design, Development, Testing, Deployment, Maintenance</p>
      </div>
      <div>
        <h3 className="font-semibold text-xl">Pricing</h3>
        <ul className="list-disc pl-5">
          <li>Basic Website: $5,000 - $10,000</li>
          <li>E-commerce Site: $10,000 - $25,000</li>
          <li>Custom Web Application: Starting at $25,000</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-xl">Case Study</h3>
        <p>
          E-commerce platform for Fashion Retailer XYZ - 200% increase in online
          sales
        </p>
      </div>
    </div>
  </section>
  <br />
  <section
    id="section7"
    className="bg-orange-400 p-8 rounded-3xl max-w-3xl mx-auto text-gray-800"
  >
    <div className="mb-6">
      <svg
        className="w-12 h-12 mx-auto mb-2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L14.5 9.5H22L16 14.5L18.5 22L12 17L5.5 22L8 14.5L2 9.5H9.5L12 2Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h2 className="text-3xl font-bold text-center mb-2">
        Mobile App Development
      </h2>
    </div>
    <p className="text-center mb-6">
      Create powerful, user-friendly mobile experiences for your audience.
    </p>
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-xl">Platforms</h3>
        <p>iOS, Android, Cross-platform (React Native, Flutter)</p>
      </div>
      <div>
        <h3 className="font-semibold text-xl">Features</h3>
        <p>
          User authentication, push notifications, offline functionality, AR
          integration
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-xl">Process</h3>
        <p>
          Ideation, UI/UX Design, Development, Testing, App Store Submission
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-xl">Pricing</h3>
        <ul className="list-disc pl-5">
          <li>Basic App: $15,000 - $30,000</li>
          <li>Complex App: $30,000 - $100,000+</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-xl">Case Study</h3>
        <p>Fitness Tracking App - 1 million downloads in first year</p>
      </div>
    </div>
  </section>
  <br />
  <section
    id="section8"
    className=" rounded-3xl bg-gray-200 p-8 max-w-3xl mx-auto"
  >
    <div className="text-center mb-8">
      <svg
        className="w-16 h-16 mx-auto mb-4"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L14.5 9.5H22L16 14.5L18.5 22L12 17L5.5 22L8 14.5L2 9.5H9.5L12 2Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h1 className="text-3xl font-bold mb-2">Desktop App Development</h1>
      <p className="text-gray-600">
        Boost productivity with tailored desktop software solutions.
      </p>
    </div>
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Platforms</h2>
      <p>Windows, macOS, Linux</p>
    </div>
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Technologies</h2>
      <p>Electron, .NET, Java, Python</p>
    </div>
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Pricing:</h2>
      <ul className="list-disc list-inside">
        <li>Basic Desktop App: Starting at $10,000</li>
        <li>Enterprise Solution: $50,000+</li>
      </ul>
    </div>
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Support</h2>
      <p>Ongoing maintenance, updates, and technical support</p>
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-2">Case Study</h2>
      <p>
        Inventory Management System - 40% increase in operational efficiency
      </p>
    </div>
  </section>
  <br />
  <section
    id="section9"
    className="bg-orange-400 p-8 rounded-3xl max-w-3xl mx-auto text-gray-800"
  >
    <div className="text-center mb-8">
      <svg
        className="w-16 h-16 mx-auto mb-4"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L14 7L19 7L15 11L17 16L12 13L7 16L9 11L5 7L10 7L12 2Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h1 className="text-4xl font-bold mb-2">AI Solutions</h1>
      <p className="text-xl">
        Harness the power of AI to drive innovation and efficiency.
      </p>
    </div>
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Use Cases</h2>
      <p>
        Predictive analytics, natural language processing, computer vision,
        process automation
      </p>
    </div>
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
      <p>TensorFlow, PyTorch, scikit-learn, OpenCV</p>
    </div>
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Services</h2>
      <ul className="list-disc list-inside">
        <li>Custom AI model development</li>
        <li>AI integration with existing systems</li>
        <li>Machine learning consulting</li>
      </ul>
    </div>
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
      <p>Custom quotes based on project complexity</p>
    </div>
    <div>
      <h2 className="text-2xl font-semibold mb-2">Success Story</h2>
      <p>
        Fraud Detection System for Financial Institution - 95% accuracy in
        identifying fraudulent transactions
      </p>
    </div>
  </section>
  <br />
  <section
    id="section10"
    className="bg-gray-200 rounded-3xl p-8 max-w-3xl mx-auto text-gray-800"
  >
    <div className="text-center b-8">
      <svg
        className="w-16 h-16 mb-4 mx-auto"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L14 7L19 7L15 11L17 16L12 13L7 16L9 11L5 7L10 7L12 2Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h1 className="text-3xl font-bold mb-2">Digital Marketing Services</h1>
      <p className="text-lg">
        Amplify your online presence and reach your target audience effectively.
      </p>
    </div>
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Services</h2>
      <p>
        SEO, SEM, Social Media Marketing, Content Marketing, Email Campaigns
      </p>
    </div>
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Strategies</h2>
      <ul className="list-disc list-inside">
        <li>Audience targeting and segmentation</li>
        <li>Data-driven campaign optimization</li>
        <li>Multi-channel marketing approach</li>
      </ul>
    </div>
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Packages and Pricing</h2>
      <ul className="list-disc list-inside">
        <li>
          Starter: $2,000/month (Basic SEO, Google Ads, 2 social platforms)
        </li>
        <li>Growth: $5,000/month (Comprehensive digital marketing strategy)</li>
        <li>Enterprise: $10,000+/month (Full-scale marketing solutions)</li>
      </ul>
    </div>
    <div>
      <h2 className="text-2xl font-semibold mb-2">Case Study</h2>
      <p>B2B Lead Generation Campaign - 300% increase in qualified leads</p>
    </div>
  </section>
  <br />
  <section className=" rounded-3xl bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <h2 className="text-5xl font-light mb-6 md:mb-0 leading-tight">
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
            className="size-1/3"
            src="https://static.wixstatic.com/media/fe4a13_736aa623bfaf42aea1a898bebb96a689~mv2.png/v1/fill/w_602,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fe4a13_736aa623bfaf42aea1a898bebb96a689~mv2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

</>

    </div>
  )
}

export default Solution
