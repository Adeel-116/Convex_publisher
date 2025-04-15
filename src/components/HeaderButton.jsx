import React from 'react'

function HeaderButton({ btnText, bgColor = "#007bff" }) {
  return (
    <a
      href="#"
      style={{ backgroundColor: bgColor }}
      className="block text-white no-underline py-2 px-3 rounded-[5px] text-center text-[14px]"
    >
      {btnText}
    </a>
  )
}

export default HeaderButton