import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="z-10 relative h-15 flex items-center justify-between px-10 py-4 text-white">
      <div className="flex font-jetbrains">
        <img src={logo} className="rounded-lg h-8 w-8" />
        <p className="mt-1">&nbsp;Nexora</p>
      </div>
      <ul className="flex gap-10 font-jetbrains">
        <li className="group relative">
          <div className="transition group-hover:text-blue-500">Home</div>
          <span
            className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 
              transition-all duration-300 group-hover:w-full"
          ></span>
        </li>

        <li className="group relative">
          <div className="transition group-hover:text-blue-500">Work space</div>
          <span
            className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 
              transition-all duration-300 group-hover:w-full"
          ></span>
        </li>
        <li className="group relative">
          <div className="transition group-hover:text-blue-500">Result</div>
          <span
            className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 
              transition-all duration-300 group-hover:w-full"
          ></span>
        </li>
        <li className="group relative">
          <div className="transition group-hover:text-blue-500">Free</div>
          <span
            className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 
              transition-all duration-300 group-hover:w-full"
          ></span>
        </li>
      </ul>

      <div>
        <button className="relative px-6 py-3 rounded-2xl border border-solid border-blue-700 transition-colors hover:bg-blue-500">
          Get Started
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
