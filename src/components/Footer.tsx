
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

          {/* Logo or Brand */}
          <div className="text-xl font-semibold">Cafeed</div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-gray-400 transition">About</a>
            <a href="#services" className="hover:text-gray-400 transition">Services</a>
            <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
            <a href="#privacy" className="hover:text-gray-400 transition">Privacy</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400 transition" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.02H7.9v-2.91h2.54V9.41c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.25 0-1.64.78-1.64 1.57v1.89h2.79l-.45 2.91h-2.34v7.02C18.34 21.2 22 17.06 22 12.07z" />
              </svg>
            </a>
            {/* Add more icons as needed */}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </footer>

  )
}

export default Footer
