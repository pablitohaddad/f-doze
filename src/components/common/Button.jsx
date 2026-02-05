import React from 'react';

export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`rounded-md bg-blue-600 px-4 py-2 font-bold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
