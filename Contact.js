import React from 'react'

export default function Contact() {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Geekyness - Your Partner in Innovative Web Solutions</title>
  <link href="./output.css" rel="stylesheet" />
  <style
    dangerouslySetInnerjsx={{
      __html: "\n  html,body{\n    overflow-x: hidden;\n  }\n"
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html:



        "\n    .dropdown-content {\n      display: none;\n    }\n\n    .dropdown-content.active {\n      display: block;\n    }\n\n    .no-scroll {\n      overflow: hidden;\n    }\n  "
    }}
  />
  
  <section className="max-w-4xl mx-auto p-6">
    <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
    <div className="flex flex-col md:flex-row gap-8">
      {/* Contact Form */}
      <div className="flex-1 bg-orange-400 rounded-lg p-6">
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block mb-2">
                First name *
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full p-2 rounded"
                required=""
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2">
                Last name *
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full p-2 rounded"
                required=""
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded"
                required=""
              />
            </div>
            <div>
              <label htmlFor="industry" className="block mb-2">
                Industry
              </label>
              <input type="text" id="industry" className="w-full p-2 rounded" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="company" className="block mb-2">
              Company / Organization
            </label>
            <input type="text" id="company" className="w-full p-2 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 rounded"
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-black transition"
          >
            Submit
          </button>
        </form>
      </div>
      {/* Contact Information */}
      <div className="flex-1 bg-gray-200 rounded-lg p-6">
        <address className="not-italic mb-4">
          <p>Bhopal Road,</p>
          <p>Nasrullaganj, Sehore 466331</p>
          <p>Madhya Pradesh</p>
        </address>
        <p className="mb-2">
          <a
            href="mailto:info@geekyness.com"
            className="text-blue-600 hover:underline"
          >
            info@geekyness.com
          </a>
        </p>
        <p className="mb-4">
          <a href="tel:+919755-36755" className="text-blue-600 hover:underline">
            +91 9755-36755
          </a>
        </p>
        {/* <div class="w-12 h-12 bg-black rounded-full overflow-hidden"> */}
        {/* Replace with actual logo SVG or image */}
        <svg
          preserveAspectRatio="none"
          data-bbox="20 20 160 160"
          viewBox="20 20 160 160"
          height={75}
          width={75}
          xmlns="http://www.w3.org/2000/svg"
          data-type="shape"
          role="presentation"
          aria-hidden="true"
          aria-label=""
        >
          <g>
            <path d="M180 102.224C180 56.813 144.183 20 100 20s-80 36.813-80 82.224h44.811L20 110.705l1.615 9.013 56.914-10.771-47.638 32.657 4.948 7.624 48.793-33.449-31.894 48.815 7.402 5.109 30.628-46.878-10.764 55.378L88.748 180 100 122.112 111.252 180l8.744-1.795-10.764-55.378 30.628 46.878 7.402-5.109-31.894-48.815 48.793 33.449 4.948-7.624-47.638-32.657 56.914 10.771 1.615-9.013-44.811-8.481H180z" />
          </g>
        </svg>
      </div>
    </div>
  </section>
  <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
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
              className="w-full md:w-auto px-6 py-2 bg-black text-white rounded-full hover:bg-whtext-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
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
              fetchpriority="high"
              src="https://static.wixstatic.com/media/fe4a13_736aa623bfaf42aea1a898bebb96a689~mv2.png/v1/fill/w_356,h_135,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fe4a13_736aa623bfaf42aea1a898bebb96a689~mv2.png"
              alt=""
              style={{
                objectFit: "cover",
                objectPosition: "50% 50%",
                width: "100%"
              }}
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
