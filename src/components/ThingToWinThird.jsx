const ThingToWinThird = () => {
  return (
    <div className="reveal-left reveal-once w-full flex justify-center mt-10">
      <div
        className="h-45 w-full rounded-2xl border border-blue-500/30 p-8 
                      bg-gradient-to-r from-[#040924] via-[#0a1a3a] to-[#0b2a6b]
                      shadow-lg"
      >
        <div className="flex justify-between items-center">
          {/* LEFT */}
          <div className="max-w-md">
            <p className="text-blue-400 text-sm font-medium mb-2">
              READY TO LEVEL UP?
            </p>

            <h1 className="text-white text-3xl font-semibold mb-3">
              Join Nexora today
            </h1>

            <p className="text-gray-400 text-sm leading-relaxed">
              Start building, connecting and conquering with thousands of
              creators.
            </p>
          </div>

          {/* RIGHT */}
          <div className="mr-10 flex flex-col items-center gap-2">
            <button
              className="px-6 py-3 rounded-lg 
                               bg-gradient-to-r from-[#8684fc] to-[#6656c0]
                               text-white font-medium
                               hover:opacity-90 transition"
            >
              Create Your Account →
            </button>

            <p className="text-gray-400 text-xs">No credit card required</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThingToWinThird;
