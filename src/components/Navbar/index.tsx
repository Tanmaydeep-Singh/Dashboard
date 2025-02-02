import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md border-b border-gray-200">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="flex items-center space-x-4 border px-4 py-2 rounded-lg bg-white">
        <Image src="/icons/user-icon.svg" alt="User Icon" width={32} height={32} className="w-8 h-8" />
        <div>
          <p className="font-semibold">Tanmaydeep</p>
          <p className="text-sm text-gray-500">Software Developer</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
