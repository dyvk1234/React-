const Feature = () => {
  return (
    <div className="mb-50 mt-10 mr-10 ml-20">
      <div className="flex flex-col gap-2 items-center mt-10 font-jetbrains">
        <div className="text-blue-700 text-sm">Features</div>

        <div className="font-bold text-white text-xl">
          Every thing you need to win
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 h-60 mt-5">
        <div className="bg-red-500">1</div>
        <div className="bg-blue-500">2</div>
        <div className="bg-green-500">3</div>
        <div className="bg-yellow-500">4</div>
      </div>
    </div>
  );
};
export default Feature;
