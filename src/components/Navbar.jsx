import { useState } from "react";
import { RiMenu3Line, RiCloseFill, RiSearch2Line } from "react-icons/ri";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searched, setSearched] = useState("")

  const handleSearchSubmit = ()=> {
    
    console.log(searched)
  }

  return (
    <div style={{ backgroundColor: 'transparent' }} className="h-[70px] z-10 bg-black w-full lg:px-36 px-5 gap-5  flex flex-row items-center justify-between relative">
      <div className="logo">
        <h2 className="text-red font-bold">
          Movie<span className="text-white">Freak</span>
        </h2>
      </div>
      <div className="relative hidden sm:block">
        <input
          type="text"
          placeholder="Search our movies"
          className=" rounded-xl px-5 py-1 w-[500px]"
          value={searched}
          onChange={(e)=> setSearched(e.target.value)}
        />
        <button><RiSearch2Line onClick={()=>  handleSearchSubmit()} className="text-red text-xl absolute top-[50%] cursor-pointer translate-y-[-50%] mr-2 right-0" /></button>
        
      </div>

      {open ? (
        <RiCloseFill className="text-white text-xl lg:hidden" onClick={()=> setOpen(!open)} />
      ) : (
        <RiMenu3Line
          className="text-white text-xl lg:hidden"
          onClick={() => setOpen(!open)}
        />
      )}

      <ul className="list-none hidden lg:flex flex-row items-center justify-evenly text-white gap-5">
        <li className="hover:text-red duration-300 hover:scale-110 cursor-pointer">
          Home
        </li>
        <li className="hover:text-red duration-300 hover:scale-110 cursor-pointer">
          Movies
        </li>
        <li className="hover:text-red duration-300 hover:scale-110 cursor-pointer">
          Series
        </li>
      </ul>

      {/* mobile view */}

      <ul
        className={`absolute top-[70px] bg-lightBlack w-full ${
          open ? "right-0" : "right-[100%]"
        }  py-5 h-[100dvh] list-none flex duration-700 flex-col  items-center justify-start text-white gap-5`}
      >
        <li className="hover:text-red duration-300 hover:scale-110 cursor-pointer">
          Home
        </li>
        <li className="hover:text-red duration-300 hover:scale-110 cursor-pointer">
          Movies
        </li>
        <li className="hover:text-red duration-300 hover:scale-110 cursor-pointer">
          Series
        </li>
      </ul>
    </div>
  );
};
