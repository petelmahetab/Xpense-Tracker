import React from "react";
import { getInitials } from "../../utils/helper";

const CharAvatar = ({ fullName, width, height, style }) => {
  return (
    <div className={`${width || 'w-15'} ${height || 'h-12'} ${style || ''} flex items-center justify-center rounded-full text-gray-900 font-medium border-2 bg-gray-500`}>👨
      {getInitials(fullName || "")}
    </div>
  );
};

export default CharAvatar;
