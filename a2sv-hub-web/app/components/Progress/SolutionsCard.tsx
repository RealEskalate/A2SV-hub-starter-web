import React from 'react'
import ProgressIcon from './ProgressIcon'

const SolutionsCard = () => {
    return (
        <div className="rounded-2xl shadow-md  w-full p-7 flex flex-col gap-2">
        <p className="text-sm"> Solutions </p>
        <div className="flex gap-2">
          <ProgressIcon />
          <p>{1.0}%</p>
        </div>
        <p className="text-2xl font-bold">{483}</p>
      </div>
      )
}

export default SolutionsCard