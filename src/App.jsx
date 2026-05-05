import HeroImg from "./assets/hero.png";
import Navbar from "./components/Navbar";
import Hero_word from "./components/Hero_word";
import Feature from "./components/Feature";
import useReveal from "./hooks/Reveal";
const App = () => {
  useReveal();
  return (
    <>
      <div className="bg-[#020018] flex justify-center">
        <div className="min-h-screen w-4/5 relative">
          <Navbar></Navbar>
          <div className="flex items-center justify-between mt-15 ml-10">
            <Hero_word></Hero_word>

            <div>
              <img src={HeroImg} className="relative w-115 h-115 z-5" />
              <div className="absolute z-0 w-[40%] h-[35%] top-0 right-20 pink__gradient rounded-full"></div>
            </div>
          </div>
          <Feature></Feature>
        </div>
      </div>
    </>
  );
};

export default App;
