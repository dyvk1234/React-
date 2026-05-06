const Hero_word = () => {
  return (
    <div className="reveal-left delay-150">
      <div className="m-4 text-white ">
        <h1 className="font-bold text-6xl">Build.Connect.</h1>
        <h1 className="font-bold text-6xl text-blue-500  leading-loose">
          Conquer.
        </h1>
        <div className="text-gray-400">
          <p>Nexora is the all-in-one platform for gamers and </p>
          <p>developers to build , connect and grow together.</p>
        </div>
        <div className="flex gap-4 mt-8">
          <button
            className="px-6 py-3 rounded-xl bg-blue-600
      shadow-lg shadow-blue-500/40 hover:scale-105 transition"
          >
            Get Started
          </button>

          <button
            className="px-6 py-3 rounded-xl border border-gray-600
      hover:bg-gray-800 transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero_word;
