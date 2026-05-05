import ThingToWinFirst from "./ThingToWinFirst";
import ThingToWinSecond from "./ThingToWinSecond";
import ThingToWinThird from "./ThingToWinThird";
import Footer from "./Footer";
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
      <ThingToWinFirst></ThingToWinFirst>
      <ThingToWinSecond></ThingToWinSecond>
      <ThingToWinThird></ThingToWinThird>
      <Footer></Footer>
    </div>
  );
};

export default Feature;
