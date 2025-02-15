import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import nbhImage from "../assets/nbh.jpg";
import himgiriImage from "../assets/himgiri.jpg";

function Admin_Info() {
  const navigate = useNavigate(); // React Router navigation

  // Function to navigate to the details page with specific content
  const handleClick = (hostelName, isAdding = false) => {
    navigate("/admin-details", { state: { hostelName, isAdding } });
  };

  return (
    <div className="bg-purple-100 w-full h-screen flex flex-col items-center gap-32">
      <div className="mt-12">
        <h1 className="text-3xl font-bold">Admin Info</h1>
      </div>

      {/* Info Section */}
      <div className="w-full flex flex-row justify-evenly">
        {/* Neelkanth Boys Hostel */}
        <div className="w-[20%] h-[50vh] bg-slate-100 p-4 flex flex-col items-center">
          <img src={nbhImage} alt="NBH" className="h-auto rounded-lg shadow-lg w-80" />
          <h1 className="text-xl font-bold text-center mt-5">Neelkanth Boys Hostel</h1>

          <button
            className="mt-8 bg-gray-600 text-white p-2 rounded-lg"
            onClick={() => handleClick("Neelkanth Boys Hostel")}
          >
            View Admin Info
          </button>
        </div>

        {/* Himgiri Boys Hostel */}
        <div className="w-[20%] h-[50vh] bg-slate-100 p-4 flex flex-col items-center">
          <img src={himgiriImage} alt="Himgiri" className="h-auto rounded-lg shadow-lg w-80" />
          <h1 className="text-xl font-bold text-center mt-5">Himgiri Boys Hostel</h1>

          <button
            className="mt-8 bg-gray-600 text-white p-2 rounded-lg"
            onClick={() => handleClick("Himgiri Boys Hostel")}
          >
            View Admin Info
          </button>
        </div>

        {/* Add New Hostel */}
        <div className="w-[20%] h-[50vh] bg-slate-100 p-4 flex flex-col items-center">
          <div className="w-44 h-44 rounded-full bg-slate-300"></div>
          <h1 className="text-xl font-bold text-center mt-5">Add Hostel</h1>

          <button
            className="mt-8 bg-gray-600 text-white p-2 rounded-lg"
            onClick={() => handleClick("", true)}
          >
            Add Hostel Admin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin_Info;
