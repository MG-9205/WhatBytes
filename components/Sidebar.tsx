import Link from "next/link";
import Image from "next/image";

const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: Function }) => {
  return (
    <aside
      className={` text-white bg-white w-56 space-y-6 py-7 px-2 inset-y-0 left-0 transform border-r ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } min-h-[100vh] transition-transform duration-200 ease-in-out md:relative md:translate-x-0 fixed top-[70px] h-[100vh] md:top-0 md:static md:h-full overflow-hidden`}
      
    >
      <div className="flex md:hidden items-center space-x-3  mb-4  border-blue-100 px-1 rounded-md">
      <div className="w-10 h-10 flex items-center justify-center">
          <Image
            src="/profile.png" 
            alt="User Photo"
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
        <span className="text-black font-bold">Manish Gupta</span>
      </div>

      <nav className="text-black font-bold text-[1.2rem] ">
        <Link href="/dashboard" className="block hover:text-blue-800 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
          Dashboard
        </Link>
        <Link href="/skilltest" className="block  hover:text-blue-800 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
          Skill Test
        </Link>
        <Link href="/internship" className="block  hover:text-blue-800 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
          Internship
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
