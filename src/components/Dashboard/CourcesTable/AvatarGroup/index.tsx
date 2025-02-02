import React from "react";
import Image from "next/image";

interface UserAvatarGroupProps {
  users: string[]; 
  maxVisible?: number;
}

const UserAvatarGroup = ({ users, maxVisible = 4 } : UserAvatarGroupProps) => {
  const visibleUsers = users.slice(0, maxVisible);
  const extraCount = users.length - maxVisible;

  return (
    <div className="flex items-center -space-x-2">
      {visibleUsers.map((user, index) => (
        <Image
          key={index}
          src={user}
          width={32}
          height={32}
          alt="User Avatar"
          className="w-8 h-8 rounded-full border-2 border-white shadow-md"
        />
      ))}
      {extraCount > 0 && (
        <div className="w-8 h-8 flex items-center justify-center bg-gray-300 text-xs font-medium text-gray-700 rounded-full border-2 border-white">
          +{extraCount}
        </div>
      )}
    </div>
  );
};

export default UserAvatarGroup;
