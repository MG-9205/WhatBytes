import Image from "next/image";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
  return (
    <header className="border-b text-white flex justify-between items-center p-4">
      <div className="text-xl font-bold">
        <Image src="/whatbyte.png" alt="logo" width={150} height={120} />
      </div>

      <div className="hidden md:flex items-center justify-center border border-blue-100 px-1 rounded-md">
        <div className="w-10 h-10 flex items-center justify-center">
          <Image src="/profile.png" alt="User Photo" width={30} height={30} className="rounded-full" />
        </div>
        <span className="text-black font-bold">Manish Gupta</span>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
