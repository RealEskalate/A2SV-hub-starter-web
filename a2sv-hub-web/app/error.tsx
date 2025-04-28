'use client'; 

import { useEffect } from 'react';

export default function Error({ error, reset}: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleTryAgain = () => {
    reset();
    window.location.reload(); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong!</h1>
      <p className="text-gray-600 mb-6 mx-13">{error.message}</p>
      <button
        onClick={handleTryAgain}
        className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Try Again
      </button>
    </div>
  );
}
