import upArrow from "../images/up-arrow.png";

const ShimmerRestaurantMenu = () => {
  return (
    <div className="restaurant-menu-page mt-20 flex flex-col items-center">
      <div className="restaurant-menu-res-details">
        <div className="mb-8 w-1/5 h-6 rounded-2xl bg-zinc-300"></div>
        <div className="restaurant-menu-res-details-box bg-white font-semibold flex justify-center flex-col cursor-pointer w-[800px] h-32 border-[2px] border-solid border-[#1f2b3c] rounded-xl p-4 shadow-zinc-300 shadow-lg ">
          <div className="flex items-center ">
            <div className="w-5 h-5 bg-green-600 flex justify-center p-3 rounded-full me-1 items-center">
              <p className="text-white">&#9733;</p>
            </div>
            <div className="w-[120px] h-5 rounded-2xl bg-zinc-300"></div>
            <p className="px-3">•</p>
            <div className="w-[120px] h-5 rounded-2xl bg-zinc-300"></div>
          </div>
          <div>
            <div className="mt-5 w-[120px] h-5 rounded-2xl bg-zinc-300"></div>
            <div className="mt-5 w-[90px] h-5 rounded-2xl bg-zinc-300"></div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-container w-[800px] p-2 mt-12">
        <div className="menu-section flex flex-col mb-12">
          <div className="menu-section-heading flex justify-between items-center py-2 boreder-solid border-y-[1px] border-zinc-300 cursor-pointer select-none">
            <div className="w-[200px] h-7 bg-zinc-300 rounded-xl"></div>
            <h2 className="py-2 cursor-pointer font-semibold text-lg"></h2>
            <img className="down-arrow w-[30px] h-5" src={upArrow} alt="" />
          </div>

          <div className="menu-section-content mt-1 max-h-fit overflow-hidden flex flex-col justify-center items-center">
            <div className="menu-item-card flex justify-between items-center border-b-[1px] border-solid border-zinc-300 w-full h-[200px] p-2 cursor-pointer">
              <div className="menu-item-details w-4/5 flex flex-col">
                <div className="w-[150px] h-6 bg-zinc-300 rounded-xl"></div>
                <div className="mt-2 w-[90px] h-5 bg-zinc-300 rounded-xl"></div>
                <div className="mt-3 w-[300px] h-6 bg-zinc-300 rounded-xl"></div>
              </div>

              <div className="menu-item-img-container">
                <div
                  className="menu-item-img w-[150px] h-[130px] rounded-xl bg-zinc-200"
                />
              </div>
            </div>
            <div className="menu-item-card flex justify-between items-center border-b-[1px] border-solid border-zinc-300 w-full h-[200px] p-2 cursor-pointer">
              <div className="menu-item-details w-4/5 flex flex-col">
                <div className="w-[150px] h-6 bg-zinc-300 rounded-xl"></div>
                <div className="mt-2 w-[90px] h-5 bg-zinc-300 rounded-xl"></div>
                <div className="mt-3 w-[300px] h-6 bg-zinc-300 rounded-xl"></div>
              </div>

              <div className="menu-item-img-container">
                <div
                  className="menu-item-img w-[150px] h-[130px] rounded-xl bg-zinc-200"
                />
              </div>
            </div>
            <div className="menu-item-card flex justify-between items-center border-b-[1px] border-solid border-zinc-300 w-full h-[200px] p-2 cursor-pointer">
              <div className="menu-item-details w-4/5 flex flex-col">
                <div className="w-[150px] h-6 bg-zinc-300 rounded-xl"></div>
                <div className="mt-2 w-[90px] h-5 bg-zinc-300 rounded-xl"></div>
                <div className="mt-3 w-[300px] h-6 bg-zinc-300 rounded-xl"></div>
              </div>

              <div className="menu-item-img-container">
                <div
                  className="menu-item-img w-[150px] h-[130px] rounded-xl bg-zinc-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerRestaurantMenu;
