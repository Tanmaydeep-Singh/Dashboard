import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white border-b-2  border-[#EAECF0] ">
      <h1 className="text-xl font-medium">Dashboard</h1>


      <div className=" flex items-center">
        <div className=" border-[#EAECF0] border-2 rounded-lg bg-white m-2 w-8 h-8 flex justify-center items-center">
          <Image src={'/icons/notification.png'} alt="notification" width={20} height={20} className="w-5 h-5" />
        </div>

        <div className="flex items-center space-x-2  px-4 py-2 rounded-lg bg-white">
          <Image src="/icons/1.png" alt="User Icon" width={32} height={32} className="w-8 h-8" />
          <div className=" flex items-center">
            <div>
               <p className="font-medium">Tanmaydeep</p>
              <p className="text-sm text-gray-500">Software Developer</p>
            </div>

            <Image src="/icons/downArrow.png" alt="Down Arrow" width={20} height={20} className="w-5 h-5" />

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
