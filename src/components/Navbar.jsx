import { useState } from "react";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Search } from "../pages/Search";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const removeNavMenu = ()=> {
    setOpen(false)
  }

  return (
    <div
      style={{ backgroundColor: "transparent" }}
      className="  max-w-[1500px] mx-auto h-[70px] z-10 bg-black w-full lg:px-36 px-5 gap-5  flex flex-row items-center justify-between relative"
    >
      <div className="logo">
        <Link to="/">
          <h2 className="text-red font-bold">
            Movie<span className="text-white">Freak</span>
          </h2>
        </Link>
      </div>

      <Search />

      {open ? (
        <RiCloseFill
          className="text-white text-xl lg:hidden"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <RiMenu3Line
          className="text-white text-xl lg:hidden"
          onClick={() => setOpen(!open)}
        />
      )}

      <ul className="list-none hidden lg:flex flex-row items-center justify-evenly text-white gap-5">
        <Link to="/">
          <li className="hover:text-red duration-300 hover:scale-110 cursor-pointer">
            Home
          </li>
        </Link>
        <Link to="/trending">
          <li className="hover:text-red duration-300 hover:scale-110 cursor-pointer">
            Trending
          </li>
        </Link>

        <Link to="/discover">
          <li className="hover:text-red duration-300 hover:scale-110 cursor-pointer">
            Discover
          </li>
        </Link>
      </ul>

      {/* mobile view */}

      <ul
        className={`absolute top-[70px] bg-lightBlack w-full ${
          open ? "right-0" : "right-[100%]"
        }  py-5 h-[100dvh] list-none flex duration-700 flex-col  items-center justify-start text-white gap-5`}
      >
        <Link to="/" onClick={()=> removeNavMenu()}>
          <li className="hover:text-red duration-300 hover:scale-110 cursor-pointer">
            Home
          </li>
        </Link>
        <Link to="/trending" onClick={()=> removeNavMenu()}>
          <li className="hover:text-red duration-300 hover:scale-110 cursor-pointer">
            Trending
          </li>
        </Link>
        <Link to="/discover" onClick={()=> removeNavMenu()}>
          <li className="hover:text-red duration-300 hover:scale-110 cursor-pointer">
            Discover
          </li>
        </Link>
      </ul>
    </div>
  );
};
