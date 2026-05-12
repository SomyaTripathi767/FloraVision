function Footer() {
  return (
    <footer className="mt-28 bg-green/10 px-6 md:px-16 py-14 text-white">

      <div className="grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>

          <h1 className="text-3xl font-bold">
            FloraVision.
          </h1>

          <p className="text-gray-300 mt-5 leading-7">
            Beautiful indoor plants for your home,
            workspace and lifestyle.
          </p>

        </div>

        {/* Company */}
        <div>

          <h2 className="text-2xl font-semibold mb-5">
            Company
          </h2>

          <ul className="space-y-3 text-gray-300">

            <li className="hover:text-white cursor-pointer">
              About
            </li>

            <li className="hover:text-white cursor-pointer">
              Features
            </li>

            <li className="hover:text-white cursor-pointer">
              Works
            </li>

            <li className="hover:text-white cursor-pointer">
              Career
            </li>

          </ul>

        </div>

        {/* Help */}
        <div>

          <h2 className="text-2xl font-semibold mb-5">
            Help
          </h2>

          <ul className="space-y-3 text-gray-300">

            <li className="hover:text-white cursor-pointer">
              Customer Support
            </li>

            <li className="hover:text-white cursor-pointer">
              Delivery Details
            </li>

            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>

            <li className="hover:text-white cursor-pointer">
              Privacy Policy
            </li>

          </ul>

        </div>

        {/* Subscribe */}
        <div>

          <h2 className="text-2xl font-semibold mb-5">
            Newsletter
          </h2>

          <div className="flex flex-col gap-4">

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black/30 border border-white/20 rounded-xl px-4 py-3 outline-none"
            />

            <button className="bg-green-500 hover:bg-green-600 transition rounded-xl py-3 font-semibold">
              Subscribe
            </button>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400">

        <p>
          © 2026 FloraVision. All Rights Reserved.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">

          <span className="hover:text-white cursor-pointer">
            Facebook
          </span>

          <span className="hover:text-white cursor-pointer">
            Instagram
          </span>

          <span className="hover:text-white cursor-pointer">
            Twitter
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;