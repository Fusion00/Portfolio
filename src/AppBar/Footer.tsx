import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate()
    return (
      <div>
        <div className="relative flex justify-center font-rounded text-[#001A1A] bg-[#00BEB9] py-48 sm:text-3xl text-xl">
          <div className="absolute top-20">
            <p className="text-center">I Build fast, sleek, modern websites.</p>
          </div>
          <div className="h-2 w-20"
          onClick={() => navigate("/Backoffice")}></div>
        </div>
  
  
      </div>
    )
  }
  
  export default Footer
  