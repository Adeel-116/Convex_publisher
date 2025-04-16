import React from 'react';

function HeaderButton({ btnText, onClick, bgColor = "#007bff" }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor }}
      className="text-white py-2 px-3 rounded-[5px] text-center text-[14px]"
    >
      {btnText}
    </button>
  );
}

export default HeaderButton;
