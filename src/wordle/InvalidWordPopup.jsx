import React from "react";

const InvalidWordPopup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
        <h2 className="text-xl font-semibold text-red-600 mb-4">
          Invalid Word
        </h2>
        <p className="text-gray-700 mb-6">
          Please enter a valid word to continue!
        </p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default InvalidWordPopup;
