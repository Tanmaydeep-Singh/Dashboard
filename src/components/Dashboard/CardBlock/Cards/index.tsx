import Image from 'next/image';
import React from 'react';

interface CardInterface {
  title: string;
  value: string | number;
  icon: string;
}

const Card = ({ title, value, icon }: CardInterface) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-[#F5F4FF] border-[#E5CDFF] flex flex-col w-full sm:w-54 h-28 text-start ">
      <div className="flex flex-row w-full items-center justify-between">
          <h2 className="text-xl font-semibold">{value}</h2>
        <Image src={icon} alt="Card Icon" width={40} height={40} className="w-10 h-10" />
      </div>
      <h2 className="text-md text-gray-600">{title}</h2>

    </div>
  );
};

export default Card;
