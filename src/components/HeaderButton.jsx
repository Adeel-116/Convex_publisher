import React from 'react';

function HeaderButton({ btnText, onClick, extraClases = "", bgColor = "" }) {
  const hasBackground = !!bgColor; 

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
        border-2 
        ${extraClases}
      `}
      style={{
        backgroundColor: hasBackground ? bgColor : 'transparent',
        borderColor: bgColor || "#007bff",
        color: hasBackground ? '#fff' : (bgColor || "#007bff"),
      }}
      onMouseEnter={(e) => {
        if (hasBackground) {
          
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = bgColor;
        } else {
        
          e.currentTarget.style.backgroundColor = bgColor || "#007bff";
          e.currentTarget.style.color = '#fff';
        }
      }}
      onMouseLeave={(e) => {
        if (hasBackground) {
        
          e.currentTarget.style.backgroundColor = bgColor;
          e.currentTarget.style.color = '#fff';
        } else {
          
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
