import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="relative">
        <div className="w-12 h-12 border-3 border-green-500 border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  )
}

export default Loading