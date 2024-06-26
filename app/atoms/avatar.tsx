import Image from "next/image";
import React from "react";

interface AvatarProps {
  imageUrl: string; 
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
  return (
    <div className="flex items-center">
      <Image
        src={imageUrl}
        alt="Avatar"
        className="h-10 w-10 rounded-full object-cover"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Avatar;
