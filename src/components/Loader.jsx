import React from 'react';
export default function Loader() {
  return (
    <div>
      <div className="popup-box fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    </div>
  );
}