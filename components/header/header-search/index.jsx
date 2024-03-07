import { FaSearch } from "react-icons/fa";

const HeaderSearch = () => {
  return (
    <form className="flex justify-center items-center border-2 bg-[#FAE7F3] rounded-full p-1">
      <input
        placeholder="جستجو ..."
        type="text"
        className="outline-none w-60 p-1 focus:placeholder-zinc-500 rounded-full bg-transparent"
      />
      <FaSearch className="w-5 h-5 text-[#11009E] transition-all duration-100 hover:border-2 cursor-pointer" />
    </form>
  );
};

export default HeaderSearch;
