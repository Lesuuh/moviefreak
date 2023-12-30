import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  let navigate = useNavigate();

  const handleSearchSubmit = () => {
    // if (searchTerm.trim() !== "") {
      navigate(`/search/${searchTerm}`);
    // }
  };

  return (
    <div className="relative hidden sm:block">
      <input
        type="text"
        placeholder="Search our movies"
        className="rounded-xl px-5 py-1 w-[500px]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button>
        <RiSearch2Line
          onClick={handleSearchSubmit}
          className="text-red text-xl absolute top-[50%] cursor-pointer translate-y-[-50%] mr-2 right-0"
        />
      </button>
    </div>
  );
};
