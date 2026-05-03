const Feature = () => {
  return (
    <div className="mb-32 mt-10 px-10">
      {" "}
      {/* Sửa mb-50 thành mb-32 để an toàn */}
      {/* Header */}
      <div className="flex flex-col gap-2 items-center mt-10 font-jetbrains">
        <div className="text-blue-500 text-sm font-semibold tracking-wider uppercase">
          Features
        </div>
        <div className="font-bold text-white text-2xl">
          Everything you need to win
        </div>
      </div>
      {/* Grid - Xóa bỏ các thẻ <></> dư thừa */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {/* Card 1: Game Tools */}
        <div className="group relative p-8 rounded-2xl bg-[#0f172a]/50 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 shadow-xl">
          <div className="w-12 h-12 mb-6 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-400"
            >
              <line x1="6" x2="10" y1="11" y2="11" />
              <line x1="8" x2="8" y1="9" y2="13" />
              <line x1="15" x2="15.01" y1="12" y2="12" />
              <line x1="18" x2="18.01" y1="10" y2="10" />
              <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-white mb-3 font-jetbrains">
            Game Tools
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Powerful tools to build, manage and scale your game projects.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors text-sm"
          >
            Learn more{" "}
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

        {/* Card 2: Community */}
        <div className="group relative p-8 rounded-2xl bg-[#0f172a]/50 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 shadow-xl">
          <div className="w-12 h-12 mb-6 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <path d="M18 21a8 8 0 0 0-16 0" />
              <circle cx="10" cy="8" r="5" />
              <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-white mb-3 font-jetbrains">
            Community
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Connect with players and developers. Share, learn and grow.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors text-sm"
          >
            Learn more{" "}
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

        {/* Card 3: Analytics */}
        <div className="group relative p-8 rounded-2xl bg-[#0f172a]/50 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 shadow-xl">
          <div className="w-12 h-12 mb-6 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-400"
            >
              <path d="M12 16v5" />
              <path d="M16 14v7" />
              <path d="M20 10v11" />
              <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
              <path d="M4 18v3" />
              <path d="M8 14v7" />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-white mb-3 font-jetbrains">
            Analytics
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Real-time analytics to track performance and make decisions.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors text-sm"
          >
            Learn more{" "}
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

        {/* Card 4: Cloud Sync */}
        <div className="group relative p-8 rounded-2xl bg-[#0f172a]/50 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 shadow-xl">
          <div className="w-12 h-12 mb-6 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-400"
            >
              <path d="M17.5 19a3.5 3.5 0 0 0 .5-6.91V11a5 5 0 0 0-10 0v1.09a3.5 3.5 0 0 0-3 3.41 3.5 3.5 0 0 0 3.5 3.5h11Z" />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-white mb-3 font-jetbrains">
            Cloud Sync
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Secure cloud save and sync across all your devices reliably.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors text-sm"
          >
            Learn more{" "}
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feature;
