import React, { useState } from "react";
import "../App.css";

function WeatherDetails() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="Header">
      <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
        <div className="text-gray-700 bg-black dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">
              <a
                href="#"
                className="text-lg font-semibold tracking-widest text-white uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >
                Forecast Fusion
              </a>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <nav
              className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${
                isOpen ? "flex" : "hidden"
              }`}
            >
              <a className="text-white" href="#">
                <p>
                  <strong>
                    {" "}
                    Forecast Fusion Delivers Accurate Forecasts Wherever You Are{" "}
                  </strong>
                </p>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
