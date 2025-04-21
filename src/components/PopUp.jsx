import React, { useEffect, useState } from 'react';

const PopUp = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-5 rounded shadow-lg transition-opacity duration-300 z-50">
        Email has been send Successfully
    </div>
  );
};

export default PopUp;