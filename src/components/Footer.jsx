import logo from "../assets/logo.png";
function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#020617] via-[#0a1a3a] to-[#020617] text-gray-400 py-10 px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-5 gap-8">
        {/* LEFT */}
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold">
              <img src={logo} className="rounded-lg h-8 w-8" />
            </div>
            <span className="text-white font-semibold text-lg">NEXORA</span>
          </div>

          <p className="text-sm mb-4 leading-relaxed">
            Empowering gamers and developers to build the future of gaming.
          </p>

          {/* ICONS */}
          <div className="flex gap-4 text-xl">
            <i className="ri-discord-fill"></i>
            <i className="ri-twitter-x-line"></i>
            <i className="ri-github-fill"></i>
            <i className="ri-youtube-fill"></i>
          </div>
        </div>

        {/* COLUMN */}
        <div>
          <h3 className="text-white font-medium mb-3">PRODUCT</h3>
          <ul className="space-y-2 text-sm">
            <li>Features</li>
            <li>Documentation</li>
            <li>Changelog</li>
            <li>Roadmap</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-3">RESOURCES</h3>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Community</li>
            <li>Guides</li>
            <li>API</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-3">LEGAL</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-xs mt-10 text-gray-500">
        © 2024 Nexora. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
