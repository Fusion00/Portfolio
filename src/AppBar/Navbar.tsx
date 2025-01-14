
import { useNavigate } from "react-router-dom";

const Navbar: React.FC  = () => {
  const navigate = useNavigate()
    return (
      <div>
        <div className="flex justify-center bg-[#032425] sm:gap-x-72 gap-x-36  py-9 font-rounded text-[#00BEB9]">
        <div className="hover:underline hover:underline-offset-[20px] hover:cursor-pointer"
        onClick={() => navigate("/Projects")}>Projects</div>
          <div className="text-5xl absolute top-5 hover:cursor-pointer"
          onClick={() => navigate("/")}>D</div>
          <div className="hover:underline hover:underline-offset-[20px] hover:cursor-pointer"
          onClick={() => navigate("/Techs")}>Techs</div>
        </div>
      </div>
    ) 
  }
  
  export default Navbar
  