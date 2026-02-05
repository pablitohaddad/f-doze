import React from 'react';

export default function Spinner() {
  return (
    <div className="my-5 flex justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
    </div>
  );
}
