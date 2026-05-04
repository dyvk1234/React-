const ThingToWinSecond = () => {
  return (
    <div className="mt-12 h-30 group relative p-8 rounded-2xl bg-[#0f172a]/50 border backdrop-blur-sm border-blue-500/50 shadow-xl">
      <div className="grid grid-cols-4 gap-6 ">
        <div
          data-title="div-1"
          className="relative flex gap-4 items-center justify-between mb-2"
        >
          <div className="ml-10 flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mt-3 text-blue-400 lucide lucide-user-round-icon lucide-user-round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>

            <div>
              <div className="text-2xl text-blue-400 font-jetbrains">10K+</div>
              <div className="leading-loose text-sm text-gray-400">
                Active Users
              </div>
            </div>
          </div>
          <div className="absolute right-0 h-12 border-r border-r-[#1d1150]"></div>
        </div>
        <div
          data-title="div-2"
          className="relative flex gap-4 items-center justify-between mb-2"
        >
          <div className="ml-10 flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-blue-400 lucide lucide-gamepad2-icon lucide-gamepad-2"
            >
              <line x1="6" x2="10" y1="11" y2="11" />
              <line x1="8" x2="8" y1="9" y2="13" />
              <line x1="15" x2="15.01" y1="12" y2="12" />
              <line x1="18" x2="18.01" y1="10" y2="10" />
              <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
            </svg>
            <div>
              <div className="text-2xl text-blue-400 font-jetbrains">2.5K+</div>
              <div className="leading-loose text-sm text-gray-400">
                Games built
              </div>
            </div>
          </div>
          <div className="absolute right-0 h-12 border-r border-r-[#1d1150]"></div>
        </div>
        <div
          data-title="div-3"
          className="relative flex gap-4 items-center justify-between mb-2"
        >
          <div className="ml-10 flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-blue-400 lucide lucide-trophy-icon lucide-trophy"
            >
              <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
              <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
              <path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
              <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
            </svg>
            <div>
              <div className="text-2xl text-blue-400 font-jetbrains">99.9%</div>
              <div className="leading-loose text-sm text-gray-400">Uptime</div>
            </div>
          </div>
          <div className="absolute right-0 h-12 border-r border-r-[#1d1150]"></div>
        </div>
        <div
          data-title="div-4"
          className="relative flex gap-4 items-center justify-between mb-2"
        >
          <div className="ml-10 flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-blue-400 lucide lucide-globe-icon lucide-globe"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>

            <div>
              <div className="text-2xl text-blue-400 font-jetbrains">150+</div>
              <div className="leading-loose text-sm text-gray-400">
                Countries
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThingToWinSecond;
