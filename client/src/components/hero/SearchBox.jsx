import { IoIosSearch } from "react-icons/io";
import { PrimaryButton } from "../../routes/AllRoutes.jsx";

const SearchBox = () => {
    return (
      <>
        <form className="">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-800 sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
              <IoIosSearch color="black" size={25} />
            </div>
            <input type="search" id="default-search" className="block shadow-md w-full p-6 ps-16 text-sm text-gray-800 rounded-full bg-gray-50 outline-none" placeholder="Search product..." />
            <PrimaryButton className="absolute end-2.5 bottom-2">Search</PrimaryButton>
          </div>
        </form>
      </>
    );
  };

  export default SearchBox