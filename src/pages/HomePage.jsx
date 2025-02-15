import React from "react";
import ChildImage from "../assets/child-8966218_1280.png";
import FoodWasteImage from "../assets/foodwaste.jpg";
import GarbageImage from "../assets/garbage-8040768_1280.jpg";
import HungerImage from "../assets/hungerDayImg.webp";

function HomePage() {
  return (
    <div className="w-full bg-purple-100 flex flex-col gap-2 items-center p-8">
      <div className="flex flex-row justify-evenly space-x-11 w-full mt-5">
        <div>
          <img
            src={ChildImage}
            alt="Child"
            className="h-auto rounded-lg shadow-lg bg-cover w-80"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={FoodWasteImage}
            alt="Food Waste"
            className="rounded-lg shadow-lg h-full w-80"
          />
        </div>
        <div >
          <img
            src={GarbageImage}
            alt="Garbage"
            className="w-80 rounded-lg shadow-lg h-full"
          />
        </div>
        <div >
          <img
            src={HungerImage}
            alt="Hunger"
            className="w-80 rounded-lg shadow-lg h-full"
          />
        </div>
      </div>
      {/* References Section */}
      <div className="flex flex-col space-y-5 w-full my-4">
        <div className=" text-neutral-700 text-wrap font-semibold"> 
          <h1>WHAT THE NUMBERS SAY</h1>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800">
            UNEP: Food Waste Report
          </h3>
          <a
            href="https://www.unep.org/resources/publication/food-waste-index-report-2024"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://www.unep.org/resources/publication/food-waste-index-report-2024
          </a>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800">
            FAO: Food Loss and Waste Report
          </h3>
          <a
            href="https://www.fao.org/food-loss-and-food-waste/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://www.fao.org/food-loss-and-food-waste/en/
          </a>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800">
            World Resources Institute: Reducing Food Waste
          </h3>
          <a
            href="https://www.wri.org/initiatives/food-loss-and-waste"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://www.wri.org/initiatives/food-loss-and-waste
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
