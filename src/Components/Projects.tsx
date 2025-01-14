const Projects = () => {
    return (
      <div className="bg-gradient-to-b from-[#001a1a] from-10% via-[#032125] via-50% to-[#0c3b45] to-90% px-16 py-20 gap-24 font-rounded">
        
          <div className="w-full flex justify-center md:justify-start">
            <div className="bg-[#00BEB9] h-10 w-52 px-8 py-2 rounded-md">Client's Websites</div>
          </div>
          <div className="w-full flex justify-center md:justify-start px-20 gap-20">
            <div className=" w-36 flex flex-wrap justify-center py-20">
              <img src="WishlistLuxuryEscapesLogo.png" 
              alt="wishlist luxuary escape"
              className="h-28n w-28"/>

              <p 
              className="text-blue-300 text-base w-32 flex justify-center font-serif hover:cursor-pointer"
              ><a>Wishlist_Luxuary_Escape</a></p>

              <i className="ri-star-fill text-yellow-500"></i>
              <i className="ri-star-fill text-yellow-500"></i>
              <i className="ri-star-fill text-yellow-500"></i>
              <i className="ri-star-fill text-yellow-500"></i>
              <i className="ri-star-fill text-yellow-500"></i>

            </div>



            <div className=" w-36 flex flex-wrap justify-center py-20 hover:cursor-pointer">
              <img src="cosmiclogo.png" 
              alt="Cosmic Prophecies"
              className="h-28n w-28"/>

              <p 
              className="text-blue-300 text-base w-32 flex justify-center font-serif hover:cursor-pointer "
              ><a 
              href="https://fusion00.github.io/Cosmic_Prophecies/"
              target="_blank"
              rel="noopener noreferrer"
              >Cosmic_Prophecies</a></p>

              <i className="ri-star-fill text-yellow-500"></i>
              <i className="ri-star-fill text-yellow-500"></i>
              <i className="ri-star-fill text-yellow-500"></i>
              <i className="ri-star-fill text-yellow-500"></i>
              <i className="ri-star-fill text-yellow-500"></i>

            </div>
            
          </div>







          <div className="w-full flex justify-center md:justify-start">
            <div className="bg-[#00BEB9] h-10 w-52 px-8 py-2 rounded-md">Personal Websites</div>
          </div>
          <div className="w-full flex justify-center md:justify-start px-20 gap-20">
            <div className=" w-36 flex flex-wrap justify-center py-20 gap-2">
              <div className="w-28 h-12 flex justify-center bg-blue-500 text-white items-center rounded-md">PhotoEdit</div>

              <p 
              className="text-blue-300 text-base w-32 flex justify-center font-serif hover:cursor-pointer"
              ><a
              href="https://fusion00.github.io/PhotoEdit/"
              target="_blank"
              rel="noopener noreferrer">PhotoEdit</a></p>

              <div className="flex">
              <i className="ri-star-fill text-yellow-500"></i>
              <i className="ri-star-fill text-yellow-500"></i>
              <i className="ri-star-fill text-yellow-500"></i>
              <i className="ri-star-fill text-yellow-500"></i>
              <i className="ri-star-fill text-yellow-500"></i>
              </div>
              

            </div>

          </div>
          
        
      </div>
    )
  }
  
  export default Projects
  