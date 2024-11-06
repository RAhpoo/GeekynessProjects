import React from 'react'

function Home1() {
  return (
     <>
     <meta charSet="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>Web Development</title>
     <style
       dangerouslySetInnerHTML={{
         __html:
           "\n    .dropdown-content {\n      display: none;\n    }\n\n    .dropdown-content.active {\n      display: block;\n    }\n\n    .no-scroll {\n      overflow: hidden;\n    }\n  "
       }}
     />
     
     <div className="container mx-auto p-8">
       <h1 className="text-4xl md:text-6xl font-bold text-start mb-12">
         Web Development
       </h1>
       <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
         <div className="bg-gray-200 p-8 rounded-3xl w-full md:w-1/3">
           <h2 className="text-xl md:text-2xl font-bold mb-4">
             Responsive Design
           </h2>
           <p className="text-gray-700">
             In today's mobile-first world, having a website that looks great and
             works well on all devices is essential. Our responsive design services
             ensure that your website adapts seamlessly to any screen size,
             providing an optimal viewing experience for your users whether they
             are on a desktop, tablet, or smartphone.
           </p>
         </div>
         <div className="flex items-end justify-center md:justify-start">
           <div className="bg-black w-48 h-48 rounded-3xl flex items-center justify-center">
             <svg
               className="animate-bounce w-12 h-12 md:w-16 md:h-16 text-white"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 strokelinecap="round"
                 strokelinejoin="round"
                 strokewidth="{2}"
                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
               />
             </svg>
           </div>
         </div>
         <div className="bg-gray-200 p-8 rounded-3xl w-full md:w-1/3">
           <h2 className="text-xl md:text-2xl font-bold mb-4">
             E-Commerce Solutions
           </h2>
           <p className="text-gray-700">
             We build robust and secure e-commerce platforms tailored to your
             business needs. From setting up online stores to integrating payment
             gateways, we ensure your customers have a smooth and enjoyable
             shopping experience. Our e-commerce solutions are scalable and
             designed to grow with your business.
           </p>
         </div>
       </div>
     </div>
     <section className="container mx-auto flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 w-full">
       <div className="w-full md:w-1/3 rounded-ee-3xl rounded-se-3xl overflow-hidden">
         <img
           src="https://static.wixstatic.com/media/c837a6_5e19bd47c2dc45398993d8c780db299a~mv2.jpg/v1/fill/w_389,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_5e19bd47c2dc45398993d8c780db299a~mv2.jpg"
           alt="People in an office"
           className="w-full h-full object-cover filter grayscale"
         />
       </div>
       <div className="w-full md:w-1/2 h-120 bg-orange-400 rounded-3xl p-4 md:p-8 text-black">
         <h2 className="text-2xl md:text-4xl font-bold mb-2">
           Custom Web Applications
         </h2>
         <p className="mb-6 text-sm md:text-base">
           When off-the-shelf solutions don't meet your needs, we create custom web
           applications that do. Our development team uses the latest technologies
           to build feature-rich, scalable, and secure web applications that align
           perfectly with your business objectives.
         </p>
         <a href="/solution">
           <button className="border border-black rounded-full px-4 md:px-6 py-2 hover:bg-black hover:text-orange-400 transition duration-300">
             Check Our Solutions
           </button>
         </a>
       </div>
       <div data-testid="responsive-container-content" className="w-full md:w-1/4">
         <div
           id="comp-lkkt1mpk"
           className="pl-14 comp-lkkt1mpk wixui-vector-image"
           data-motion-enter="done"
         >
           <svg
             preserveAspectRatio="none"
             data-bbox="20 20 160 160"
             viewBox="20 20 160 160"
             height={200}
             width={200}
             xmlns="http://www.w3.org/2000/svg"
             data-type="shape"
             role="presentation"
             aria-hidden="true"
             aria-label=""
           >
             <g>
               <path d="M98.322 180v-60.16c0-4.101-3.345-6.551-6.58-6.551-1.714 0-3.341.684-4.584 1.927l-42.54 42.54-2.374-2.374 42.54-42.54c1.906-1.906 2.449-4.637 1.417-7.127s-3.346-4.037-6.042-4.037H20v-3.356h60.16c2.695 0 5.01-1.547 6.042-4.037 1.031-2.49.489-5.221-1.417-7.127l-42.54-42.54 2.374-2.374 42.54 42.54c1.242 1.243 2.87 1.927 4.584 1.927 3.234 0 6.58-2.451 6.58-6.551V20h3.356v60.16c0 1.841.724 3.531 2.039 4.758a6.72 6.72 0 0 0 4.542 1.793c1.714 0 3.341-.684 4.584-1.927l42.54-42.54 2.374 2.374-42.54 42.54c-1.906 1.906-2.449 4.637-1.417 7.127 1.031 2.49 3.346 4.037 6.042 4.037H180v3.356h-60.16c-2.695 0-5.01 1.547-6.042 4.037s-.489 5.221 1.417 7.127l42.54 42.54-2.374 2.374-42.54-42.54c-1.242-1.243-2.87-1.927-4.584-1.927-3.234 0-6.58 2.451-6.58 6.551V180h-3.355zm-12.937-40.315-2.878-1.182-14.335 34.909 2.878 1.182 14.335-34.909zm46.443-113.097-2.878-1.182-14.335 34.909 2.878 1.182 14.335-34.909zM61.497 82.507 26.588 68.171l-1.182 2.878 34.909 14.335 1.182-2.877zm113.098 46.443-34.909-14.335-1.182 2.878 34.909 14.335 1.182-2.878zM61.604 117.728l-1.2-2.871-34.82 14.548 1.2 2.871 34.82-14.548zm112.813-47.132-1.2-2.871-34.821 14.548 1.2 2.871 34.821-14.548zM85.144 60.404 70.596 25.583l-2.871 1.2 14.548 34.821 2.871-1.2zm47.131 112.813-14.548-34.821-2.871 1.2 14.548 34.821 2.871-1.2z"></path>
             </g>
           </svg>
         </div>
       </div>
     </section>
     <style
       dangerouslySetInnerHTML={{
         __html:
           "\n    .animate-hide-to-show {\n      opacity: 0;\n      transition: opacity 5s ease-out;\n    }\n\n    .show {\n      opacity: 1;\n    }\n\n    @keyframes hide-to-show {\n      0% {\n        opacity: 0;\n      }\n\n      100% {\n        opacity: 1;\n      }\n    }\n  "
       }}
     />
     <section className="animate-hide-to-show container mx-auto px-4 py-16 w-full bg-gray-100">
       <h2 className="text-4xl font-bold mb-12">Introduction</h2>
       <div className="space-y-8">
         <p className="container text-3xl font-light leading-tight">
           At Geekyness, we specialize in crafting cutting-edge web solutions that
           elevate your
           <br /> online presence and drive business growth. Our team of expert
           developers combines
           <br /> technical prowess with creative vision to deliver responsive,
           user-friendly websites and
           <br /> web applications tailored to your unique needs.
         </p>
       </div>
     </section>
     <div className="bg-white">
       <div className="flex flex-wrap justify-center p-4">
         <div className="w-full md:w-1/2 lg:w-1/3 p-2 md:p-4">
           <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
             <div className="flex items-center mb-4">
               <i className="fas fa-sun text-2xl" />
             </div>
             <h2 className="text-xl md:text-2xl font-bold mb-4">Front-end</h2>
             <ul className="list-disc list-inside space-y-2">
               <li>React, Angular, Vue.js</li>
               <li>Next.js, Gatsby, Nuxt.js</li>
               <li>HTML5, CSS3, Sass, Less</li>
               <li>JavaScript, TypeScript</li>
               <li>Redux, MobX, RxJS</li>
               <li>Bootstrap, Material-UI, Ant Design</li>
               <li>WebAssembly, WebGL</li>
             </ul>
           </div>
         </div>
         <div className="w-full md:w-1/2 lg:w-1/3 p-2 md:p-4">
           <div className="bg-orange-400 p-6 rounded-lg shadow-lg">
             <div className="flex items-center mb-4">
               <i className="fas fa-sun text-2xl" />
             </div>
             <h2 className="text-xl md:text-2xl font-bold mb-4">Back-end</h2>
             <ul className="list-disc list-inside space-y-2">
               <li>Node.js, Express.js</li>
               <li>Python, Django, Flask</li>
               <li>Ruby on Rails</li>
               <li>PHP, Laravel</li>
               <li>.NET, ASP.NET Core</li>
               <li>Java, Spring</li>
               <li>Go, Gin</li>
             </ul>
           </div>
         </div>
         <div className="w-full md:w-1/2 lg:w-1/3 p-2 md:p-4">
           <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
             <div className="flex items-center mb-4">
               <i className="fas fa-sun text-2xl" />
             </div>
             <h2 className="text-xl md:text-2xl font-bold mb-4">Databases</h2>
             <ul className="list-disc list-inside space-y-2">
               <li>MongoDB, Mongoose</li>
               <li>MySQL, PostgreSQL</li>
               <li>SQL Server, Oracle</li>
               <li>Redis, Memcached</li>
               <li>Neo4j, ArangoDB</li>
               <li>Firebase Realtime Database, Firestore</li>
             </ul>
           </div>
         </div>
         <div className="w-full md:w-1/2 lg:w-1/3 p-2 md:p-4">
           <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
             <div className="flex items-center mb-4">
               <i className="fas fa-sun text-2xl" />
             </div>
             <h2 className="text-xl md:text-2xl font-bold mb-4">Cloud</h2>
             <ul className="list-disc list-inside space-y-2">
               <li>AWS (EC2, S3, RDS, Lambda)</li>
               <li>Azure (App Service, Cosmos DB, Functions)</li>
               <li>
                 Google Cloud Platform (Compute Engine, Cloud Storage, Cloud SQL)
               </li>
               <li>DigitalOcean, Linode</li>
             </ul>
           </div>
         </div>
         <div className="w-full md:w-1/2 lg:w-1/3 p-2 md:p-4">
           <div className="bg-orange-400 p-6 rounded-lg shadow-lg">
             <div className="flex items-center mb-4">
               <i className="fas fa-sun text-2xl" />
             </div>
             <h2 className="text-xl md:text-2xl font-bold mb-4">DevOps</h2>
             <ul className="list-disc list-inside space-y-2">
               <li>Git, GitHub, GitLab, Bitbucket</li>
               <li>Docker, Kubernetes</li>
               <li>Jenkins, CircleCI, Travis CI</li>
               <li>Ansible, Terraform, Pulumi</li>
               <li>Prometheus, Grafana</li>
               <li>Sentry, Datadog</li>
             </ul>
           </div>
         </div>
       </div>
     </div>
     <div className="bg-gray-100">
       <div className="container mx-auto p-4 md:p-8">
         <h1 className="text-xl md:text-2xl font-semibold mb-4">Pricing</h1>
         <ul className="list-disc pl-5 mb-8">
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
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
           <div className="transition duration-150 ease-out hover:ease-in bg-orange-400 hover:bg-orange-300 p-6 md:p-8 relative">
             <div className="absolute top-4 left-4">
               <div className="h-1 w-8 bg-black mb-2" />
               <div className="h-1 w-4 bg-black" />
             </div>
             <h2 className="text-lg md:text-xl font-semibold mb-2">Sketches</h2>
             <p className="text-sm mb-4">
               Price will vary for every project based on the content and
               background of the work. Additional details may change if more
               material and work needs to get done.
             </p>
             <div className="absolute bottom-4 right-4 text-6xl font-bold">1</div>
           </div>
           <div className="bg-orange-400 hover:bg-orange-300 p-6 md:p-8 relative">
             <div className="absolute top-4 left-4">
               <div className="h-1 w-8 bg-black mb-2" />
               <div className="h-1 w-4 bg-black" />
             </div>
             <h2 className="text-lg md:text-xl font-semibold mb-2">
               Illustrations
             </h2>
             <p className="text-sm mb-4">
               Price will vary for every project based on the content and
               background of the work. Additional details may change if more
               material and work needs to get done.
             </p>
             <div className="absolute bottom-4 right-4 text-6xl font-bold">2</div>
           </div>
           <div className="bg-orange-400 hover:bg-orange-300 p-6 md:p-8 relative">
             <div className="absolute top-4 left-4">
               <div className="h-1 w-8 bg-black mb-2" />
               <div className="h-1 w-4 bg-black" />
             </div>
             <h2 className="text-lg md:text-xl font-semibold mb-2">Renders</h2>
             <p className="text-sm mb-4">
               Price will vary for every project based on the content and
               background of the work. Additional details may change if more
               material and work needs to get done.
             </p>
             <div className="absolute bottom-4 right-4 text-6xl font-bold">3</div>
           </div>
           <div className="bg-orange-400 hover:bg-orange-300 p-6 md:p-8 relative">
             <div className="absolute top-4 left-4">
               <div className="h-1 w-8 bg-black mb-2" />
               <div className="h-1 w-4 bg-black" />
             </div>
             <h2 className="text-lg md:text-xl font-semibold mb-2">3D Art</h2>
             <p className="text-sm mb-4">
               Price will vary for every project based on the content and
               background of the work. Additional details may change if more
               material and work needs to get done.
             </p>
             <div className="absolute bottom-4 right-4 text-6xl font-bold">4</div>
           </div>
         </div>
       </div>
     </div>
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
   
  )
}

export default Home1
