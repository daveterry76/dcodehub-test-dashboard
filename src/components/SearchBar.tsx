import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

interface SearchBarProps {
  searchQuery: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
}

const SearchBar = ({
  searchQuery,
  handleSearch,
  onClearSearch,
}: SearchBarProps) => {
  return (
    <div className="border border-gray-400 rounded-md flex items-center gap-2 px-3 py-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 w-full">
      <input
        type="text"
        placeholder="Search by name..."
        className="w-full border-none focus:outline-none text-sm text-black placeholder:text-gray-400"
        value={searchQuery}
        onChange={handleSearch}
      />
      {searchQuery?.length > 0 ? (
        <IoIosClose
          onClick={onClearSearch}
          className="h-6 w-6 cursor-pointer"
        />
      ) : (
        <CiSearch className="h-6 w-6 cursor-pointer" />
      )}
    </div>
  );
};

export default SearchBar;
