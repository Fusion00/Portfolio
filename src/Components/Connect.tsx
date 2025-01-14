import { useEffect } from "react";

const Connect = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top-left corner
  }, []);

  return (
    <div className="flex flex-wrap bg-gradient-to-b from-[#001a1a] from-10% via-[#032125] via-50% to-[#0c3b45] to-90%  justify-center py-32 gap-20 lg:gap-52 font-rounded">
      
      {/* ---image-- */}
      <div className="hidden md:flex md:flex-wrap md:justify-center md:items-center md:w-60 md:content-center ">
        <div className="border-8 border-[#00BEB9] h-60 w-60 rounded-full overflow-hidden relative">
            <img
                src="Pro.jpg"
                alt="profile"
                className="rounded-full w-56 h-56 transform transition-transform duration-1000 ease-in-out hover:scale-125"
            />
        </div>
        <div className="text-white flex gap-4 text-3xl mt-5">
            <img src="Hand.png" alt="hi" className="h-8 w-8"/>
            Hi I'm Dhruv
        </div>
      </div>

      {/* ------divider----- */}
      <div className="hidden md:bg-white md:h-[608px] md:w-[2px] md:block"></div>


      {/* ----contact form--------- */}
      <div>
        <div className="flex justify-center flex-wrap h-52 w-72">
            <div className="font-rounded text-white text-3xl">we can connect</div>
            <div className="flex gap-14">
            <a href="mailto:dhruvpratap69@gmail.com"><img src="gmail.png" alt="mail" className="h-8 w-9"/></a>
            <a href="https://www.linkedin.com/in/dhruv-kumar-66b45818b" target="_blank" rel="noopener noreferrer">
            <img src="LinkedIn.png" alt="mail" className="h-8 w-9"/></a>

            <a href="https://wa.me/9279580461" target="_blank" rel="noopener noreferrer">
            <img src="WhatsApp.png" alt="mail" className="h-8 w-9"/></a>
            </div>
            <div className="flex gap-8 text-white font-rounded items-center justify-center text-3xl">
                <hr className="bg-white w-[76px] h-[2px]"/>
                or
                <hr className="bg-white w-[76px] h-[2px]"/>
            </div>

        </div>

        <div >
            <form
            className="flex flex-wrap justify-center w-72 py-3 gap-6">
            <input 
            className="h-11 w-full rounded-full text-gray-700 font-sans pl-3"
            placeholder="Name"/>

            <input 
            className="h-11 w-full rounded-full text-gray-700 font-sans pl-3"
            placeholder="Contact"/>

            <textarea 
            className="h-44 w-full rounded-lg text-gray-700 font-sans pl-3 pt-2"
            placeholder="Text"/>

            <button className="bg-[#00BEB9] rounded-full w-48  h-12  hover:bg-teal-600 ">
                Submit
            </button>

            </form>
            
            
        </div>
        

      </div>
      
    </div>
  )
}

export default Connect
