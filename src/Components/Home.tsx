import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate()
    return (
      <div>
        <div className="flex flex-wrap bg-gradient-to-b from-[#001a1a] from-10% via-[#032125] via-50% to-[#0c3b45] to-90%  justify-center py-32 gap-24 font-rounded">
        
        {/* ---image-- */}
        <div className="border-8 border-[#00BEB9] h-60 w-60 rounded-full overflow-hidden relative">
          <img
            src="Pro.jpg"
            alt="profile"
            className="rounded-full w-56 h-56 transform transition-transform duration-1000 ease-in-out hover:scale-125"
          />
        </div>
        {/* -----text----- */}
          <div className="flex justify-center items-center flex-wrap w-72">
            <div className="text-white flex gap-4 text-3xl">
             <img src="Hand.png" alt="hi" className="h-8 w-8"/>
              Hi I'm Dhruv
            </div>
            <div className="text-white mt-10 sm:-mt-20">
              <p className="text-center">
              I m a Self - made Designer And Developer 
              Obsessed with quality
              </p>
            </div>
          </div>

          {/* --buttons----- */}
          <div className="text-base sm:text-xl py-4 flex flex-wrap justify-center items-center gap-6 xl:gap-0  w-full xl:w-96">
            <button 
                className="border-4 border-[#00BEB9] text-[#00BEB9] hover:text-teal-200 rounded-full w-48 sm:w-72 h-12 sm:h-16"
                
                >
                <a
                href="https://storage.cloud.google.com/fetcher_01/Others/Resume1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                Download CV
              </a>
            </button>
            <button 
            className="bg-[#00BEB9] rounded-full w-48 sm:w-72 h-12 sm:h-16 hover:bg-teal-600 "
            onClick={() => navigate("/Connect")}>
            Lets Connect</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  