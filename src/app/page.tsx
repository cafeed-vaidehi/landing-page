
export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="w-full">
        <div className="relative h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/assets/hero.jpg')" }}>
          <h1 className="relative text-4xl md:text-6xl font-bold text-center px-4 z-10">
            TO SERVE AND DEVELOP <br /> ORGANIC LIVES
          </h1>
        </div>
      </main>
      <section id="about" className="px-4 py-12">
        <h3 className="text-center font-extrabold text-black text-2xl md:text-3xl dark:text-white">
          YOUR GLOBAL PARTNER WITH INTEGRITY<br />
          SERVING THE ORGANIC INDUSTRY
        </h3>
        <div className="my-4"></div>
        <p className="text-center max-w-5xl mx-auto">
        Grand Master Animal nutrition provides transformative, innovative, sustainable solutions for the animal production industry adapting the best global nutritional policies. We strive to be the best choice in animal nutrition solutions.  Our offering includes feed ingredients, feed formulations, compound feed, premixes, feed additives and customized solutions. It’s a realization of our dream of creating an extraordinary strong moral principles and attitude in our industry activities. We always bring integrity aspects backed by strong sense of responsibility, supervision and guarantee.        </p>

        <div className="my-16 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <img
              src="./assets/daniel-quiceno-m-4MQtWCxUrYc-unsplash.jpg"
              alt="best cattle feed in india"
              className="w-full rounded-lg"
            />
          </div>

          <div className="md:col-span-8 bg-[#00a859] p-6 rounded-lg text-white">
            <h1 className="text-xl font-semibold">
              Cattle Feed Manufacturers in Kerala
            </h1>
            <p className="text-sm mt-4 text-justify">
              One of the leading names in the industry, Thaliyan Group has been instrumental in making available first-class lot of Grand Master cattle feed . With our experience of more than a decade, we are operating as a manufacturer and supplier in the domestic market. Our meticulously manufactured range of Grand Master animal feed covers all farm livestock. The offered range is inclusive of Grand Master Basic Cattle Feed, Grand Master Economy Cattle Feed, Grand Master Plus Cattle Feed, Grand Master Deluxe Cattle Feed,Grand Master Goat Feed, Grand Master Bull Feed, Grand Master Rice Bran De Oiled Cattle Feed, Grand Master , Grand Master Orid Husk Cattle Feed, Grand Master Maize Cattle Feed and Grand Master Wheat Bran Cattle Feed etc. For the ease of clients, we also provide tailored packaging solutions.

              Thaliyan Group has been an established part of Kerala Animal feed and Rice industry since 1983. The highly successful trading company was set up by a dynamic entrepreneur Mr. Paul Thaliyan . During its initial stage the prime focus was on trading of animal feeds and Rices. Gradually as the market was growing from trading concept to the modern production, the company started adapting to the changes and began production of high quality animal feeds keeping the global standards .Today, Thaliyan Group is proud to supply an impressive portfolio of internationally recognized Animal feeds and Rices; and to be one of the leading full-fledged distribution, logistics and marketing company covering each and every corner of the market.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
