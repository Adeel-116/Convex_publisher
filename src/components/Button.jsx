import { useState } from 'react'

export default function SimpleButton({ text, onClick, extraClass = "" }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button 
      className={`
        relative 
        overflow-hidden 
        px-3 py-3
        font-medium 
        text-white 
        transition-all 
        duration-300 
        transform 
        hover:scale-[1.02]
        shadow-md 
        hover:shadow-lg
        group
        ${extraClass}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{background: "#3a45f6"}}
    >
      <div className={`
        absolute 
        inset-0 
        bg-white/10 
        opacity-0 
        group-hover:opacity-100 
        transition-opacity 
        duration-300
      `}></div>

      <div className="relative z-10 flex justify-center items-center gap-2">
        <span className="transition-transform duration-300 group-hover:translate-y-[-1px] text-[15px] text-center">
          {text}
        </span>
      </div>
    </button>
  )
}
