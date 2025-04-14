import React from "react";

function PopUp({ message, type, onClose }) {
  const popupStyle = type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  const buttonStyle = type === "success" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600";

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className={`bg-white rounded-xl shadow-2xl p-6 w-96 ${popupStyle}`}>
        <h3 className="text-xl font-semibold text-center">Notification</h3>
        <p className="text-center mt-4">{message}</p>
        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className={`px-4 py-2 text-white rounded-lg transition ${buttonStyle}`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
