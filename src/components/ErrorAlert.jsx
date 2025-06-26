import React from "react";

const ErrorAlert = ({ message = "Xatolik bo‘ldi. Qayta urinib ko‘ring." }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md flex items-center space-x-2 max-w-md mx-auto">
      <svg
        className="w-5 h-5 text-red-600"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8.707-4.293a1 1 0 00-1.414 1.414L9.586 10l-1.707 1.707a1 1 0 101.414 1.414L11 11.414l1.707 1.707a1 1 0 001.414-1.414L12.414 10l1.707-1.707a1 1 0 00-1.414-1.414L11 8.586 9.293 6.879z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default ErrorAlert;
