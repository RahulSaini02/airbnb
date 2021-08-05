import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <header className="sticky top-0 z-50  bg-white shadow-md p-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-3">
        {/* Left */}
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        {/* Middle */}
        <div className="flex items-center justify-between  py-2 rounded-full md:border-2 md:shadow-sm md:mr-2">
          <input
            className="flex-grow outline-none bg-transparent pl-5 placeholder-gray-500"
            type="text"
            placeholder="Start your search"
          />
          <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 hover:bg-red-500 rounded-full text-white p-2 cursor-pointer md:mx-2" />
        </div>
        {/* Right */}
        <div className="flex items-center space-x-4 justify-end text-gray-500">
          <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
          <GlobeAltIcon className="hidden md:inline-flex h-6  cursor-pointer" />
          <div className="flex items-center border-2 rounded-full space-x-2 p-2 cursor-pointer hover:shadow-md">
            <MenuIcon className="h-6 cursor-pointer" />
            <UserCircleIcon className="h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
