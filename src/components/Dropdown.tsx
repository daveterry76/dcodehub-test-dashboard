import { useState, useRef } from "react";
import { GoChevronDown as DropdownIcon } from "react-icons/go";
import { IoIosClose } from "react-icons/io";
import useClickOutside from "../hooks/useClickOutside";

interface DropdownProps {
  placeholder?: string;
  options: string[];
  onSelectOption: (option: string) => void;
}

const Dropdown = ({ placeholder, options, onSelectOption }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    onSelectOption(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="border border-gray-400 rounded-md flex items-center justify-between gap-2 px-3 py-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 w-full cursor-pointer"
      >
        <p
          className={`text-sm ${
            selectedOption ? "text-black" : "text-gray-400"
          }`}
        >
          {selectedOption || placeholder || "Select an option"}
        </p>
        {selectedOption ? (
          <IoIosClose
            onClick={(e: any) => {
              e.stopPropagation();
              handleSelectOption("");
            }}
            className="h-6 w-6 cursor-pointer"
          />
        ) : (
          <DropdownIcon
            className={`h-6 w-6 cursor-pointer ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden">
          <ul className="max-h-60 overflow-y-auto py-2">
            {options.map((option) => (
              <li
                key={option}
                className="text-sm px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectOption(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
