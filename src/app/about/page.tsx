const about = () => {
  return (
    <>
      <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-green-800">About Us</h1>

          <p className="text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            <strong>Cafeed</strong> is a trusted family-run business that has been a cornerstone of the cattle feed industry for over 30 years. Founded by <strong>Mr. Sanjay Vijayvargiya</strong>, whose deep knowledge and commitment to quality have helped us build strong, lasting relationships with farmers across 15 states in India, Cafeed has been a symbol of reliability and excellence in livestock nutrition.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <img
              src="/assets/jakob-cotton-UQJf6y91zZs-unsplash.jpg"
              alt="Cafeed cattle feed"
              className="rounded-xl shadow-lg w-full object-cover"
            />
            <div>
              <p className="text-lg leading-relaxed mb-4">
                The journey of Cafeed would not have been possible without the unwavering support of our mother, <strong>Mrs. Neelam Vijayvargiya</strong>. Her dedication to social service and the values she instilled in us — compassion, responsibility, and integrity — guide everything we do.
              </p>
              <p className="text-lg leading-relaxed">
                Today, under our father’s continued guidance and our mother’s support, we’ve expanded Cafeed beyond India’s borders. With the next generation — <strong>Swara, Vaidehi, and Siddharth</strong> — leading the way, we now provide premium, plant-based cattle feed products to international markets.
              </p>
            </div>
          </div>

          <div className="bg-green-100 p-6 md:p-10 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Delivering Trust, Experience & Excellence
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              At Cafeed, we don’t just deliver cattle feed — we deliver trust, experience, and a legacy of excellence. We’re proud to have earned the confidence of our partners, and we’re excited to grow together, nurturing strong relationships built on a foundation of tradition and progress.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Integrity</h3>
              <p className="text-gray-700">
                We stand by honesty, ethics, and consistency in every feed bag we deliver and every handshake we offer.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Sustainability</h3>
              <p className="text-gray-700">
                We prioritize plant-based, eco-conscious solutions to nurture animals and the environment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Legacy</h3>
              <p className="text-gray-700">
                Built over generations, our brand reflects the care and commitment of a family deeply rooted in agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default about
