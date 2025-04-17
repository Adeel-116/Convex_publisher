import React from 'react';

function HeaderButton({ btnText, onClick, extraClases = "", bgColor = "" }) {
  const hasBackground = !!bgColor; // true if bgColor is provided

  return (
    <button
      onClick={onClick}
      className={`
        py-1 px-3.5 
        text-center 
        text-[14px] 
        text-[#007bff]
        transition-all duration-300 ease-in-out
        cursor-pointer 
        border-2 rounded-[5px]
        ${extraClases}
      `}
      style={{
        backgroundColor: hasBackground ? bgColor : 'transparent',
        borderColor: bgColor || "#007bff",
        color: hasBackground ? '#fff' : (bgColor || "#007bff"),
      }}
      onMouseEnter={(e) => {
        if (hasBackground) {
          // Remove background on hover
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = bgColor;
        } else {
          // Add background and make text white
          e.currentTarget.style.backgroundColor = bgColor || "#007bff";
          e.currentTarget.style.color = '#fff';
        }
      }}
      onMouseLeave={(e) => {
        if (hasBackground) {
          // Reapply background after hover
          e.currentTarget.style.backgroundColor = bgColor;
          e.currentTarget.style.color = '#fff';
        } else {
          // Remove background and restore original color
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = bgColor || "#007bff";
        }
      }}
    >
      {btnText}
    </button>
  );
}

export default HeaderButton;
